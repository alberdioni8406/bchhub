(function () {
  "use strict";

  const state = { status: "all", category: "all", query: "" };
  const USE_KEY = "bchtools_use_signals";

  const grid = document.getElementById("projectGrid");
  const needsSupportGrid = document.getElementById("needsSupportGrid");
  const resultCount = document.getElementById("resultCount");

  function badgeClass(status) {
    return "badge badge-" + status;
  }

  function getUseSignals() {
    try {
      return JSON.parse(localStorage.getItem(USE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function setUseSignal(slug) {
    const signals = getUseSignals();
    signals[slug] = (signals[slug] || 0) + 1;
    localStorage.setItem(USE_KEY, JSON.stringify(signals));
    return signals[slug];
  }

  function feedbackMailto(p) {
    const subject = encodeURIComponent("[BCHtools] Feedback: " + p.name);
    const body = encodeURIComponent(
      "Tool: " + p.name + "\n" +
      "Live: " + p.liveUrl + "\n" +
      "Source: " + p.githubUrl + "\n\n" +
      "What works / what's missing / bug report:\n\n"
    );
    return "mailto:alberdioni8406@proton.me?subject=" + subject + "&body=" + body;
  }

  function shareText(p) {
    return p.name + " — BCH tool on BCHtools.cash\n" + p.liveUrl + "\nhttps://www.bchtools.cash/";
  }

  function shareXUrl(p) {
    return "https://x.com/intent/tweet?text=" + encodeURIComponent(shareText(p));
  }

  function shareTgUrl(p) {
    return "https://t.me/share/url?url=" + encodeURIComponent(p.liveUrl) +
      "&text=" + encodeURIComponent(p.name + " — BCH tool via BCHtools.cash");
  }

  function cardHTML(p, index) {
    const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
    const supportTags = (p.supportNeeded || [])
      .map(s => `<span class="support-flag">${SUPPORT_LABELS[s]}</span>`).join("");
    const signals = getUseSignals();
    const useCount = signals[p.slug] || 0;
    const useLabel = useCount > 0 ? `I use this (${useCount})` : "I use this";

    return `
      <article class="card" data-slug="${p.slug}">
        <span class="card-ledger-id">#${String(index + 1).padStart(3, "0")}</span>
        <div class="card-top">
          <h3>${p.name}</h3>
        </div>
        <span class="badge ${badgeClass(p.status)}" style="align-self:flex-start;">${STATUS_LABELS[p.status]}</span>
        <p>${p.description}</p>
        <div class="card-tags">${tags}</div>
        ${supportTags ? `<div class="needs-support-tags">${supportTags}</div>` : ""}
        <div class="card-actions">
          <a class="btn btn-ghost btn-sm" href="${p.liveUrl}" target="_blank" rel="noopener">Open Tool ↗</a>
          <a class="btn btn-ghost btn-sm" href="${p.githubUrl}" target="_blank" rel="noopener">View Source</a>
          <button class="btn btn-primary btn-sm details-btn" data-slug="${p.slug}">Details</button>
        </div>
        <div class="card-participate">
          <button class="btn-use btn-sm" data-slug="${p.slug}" title="Signal that you use this tool (stored locally)">${useLabel}</button>
          <a class="btn-part btn-sm" href="${feedbackMailto(p)}">Feedback</a>
          <a class="btn-part btn-sm" href="${shareXUrl(p)}" target="_blank" rel="noopener">Share X</a>
          <a class="btn-part btn-sm" href="${shareTgUrl(p)}" target="_blank" rel="noopener">Share TG</a>
        </div>
      </article>`;
  }

  function matches(p) {
    if (state.status !== "all" && p.status !== state.status) return false;
    if (state.category !== "all" && p.category !== state.category) return false;
    if (state.query) {
      const q = state.query.toLowerCase();
      const hay = (p.name + " " + p.description + " " + p.tags.join(" ")).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function render() {
    const filtered = PROJECTS.filter(matches);
    grid.innerHTML = filtered.map((p) => cardHTML(p, PROJECTS.indexOf(p))).join("") ||
      `<p style="grid-column:1/-1; color:var(--ink-faint);">No tools match those filters.</p>`;
    resultCount.textContent = `${filtered.length} of ${PROJECTS.length} tools`;
    bindDetailButtons();
    bindParticipate();
  }

  function renderNeedsSupport() {
    const list = PROJECTS.filter(p => p.status === "unfinished" || p.status === "beta");
    needsSupportGrid.innerHTML = list.map((p) => cardHTML(p, PROJECTS.indexOf(p))).join("");
    bindDetailButtons();
    bindParticipate();
  }

  function renderStats() {
    document.getElementById("statProjectCount").textContent = PROJECTS.length;
    const finished = PROJECTS.filter(p => p.status === "finished").length;
    const inProgress = PROJECTS.filter(p => p.status === "beta" || p.status === "unfinished").length;
    document.getElementById("statFinished").textContent = finished;
    document.getElementById("statInProgress").textContent = inProgress;
    document.getElementById("countMain").textContent =
      PROJECTS.filter(p => p.category === "main").length + " tools";
    document.getElementById("countDefi").textContent =
      PROJECTS.filter(p => p.category === "defi").length + " tools";
  }

  function renderFeatured() {
    const el = document.getElementById("featuredCard");
    if (!el || typeof FEATURED_SLUG === "undefined") return;
    const p = PROJECTS.find(x => x.slug === FEATURED_SLUG) || PROJECTS[0];
    if (!p) return;
    const supportTags = (p.supportNeeded || [])
      .map(s => `<span class="support-flag">${SUPPORT_LABELS[s]}</span>`).join("");
    el.innerHTML = `
      <div class="featured-inner">
        <div>
          <span class="badge ${badgeClass(p.status)}">${STATUS_LABELS[p.status]}</span>
          <h3 style="margin-top:12px;">${p.name}</h3>
          <p style="font-family:var(--mono); font-size:12px; color:var(--ink-faint); margin-bottom:10px;">${CATEGORY_LABELS[p.category]}</p>
          <p>${p.description}</p>
          ${supportTags ? `<div class="needs-support-tags" style="margin-top:10px;">${supportTags}</div>` : ""}
          <div class="card-actions" style="margin-top:16px;">
            <a class="btn btn-primary btn-sm" href="${p.liveUrl}" target="_blank" rel="noopener">Open Tool ↗</a>
            <a class="btn btn-ghost btn-sm" href="${p.githubUrl}" target="_blank" rel="noopener">View Source</a>
            <button class="btn btn-ghost btn-sm details-btn" data-slug="${p.slug}">Details</button>
          </div>
          <div class="card-participate" style="margin-top:12px; border-top:none; padding-top:0;">
            <a class="btn-part btn-sm" href="${feedbackMailto(p)}">Feedback</a>
            <a class="btn-part btn-sm" href="${shareXUrl(p)}" target="_blank" rel="noopener">Share X</a>
            <a class="btn-part btn-sm" href="${shareTgUrl(p)}" target="_blank" rel="noopener">Share TG</a>
          </div>
        </div>
        <div class="featured-why">
          <h5>Why this matters</h5>
          <p>${p.whyBuilt || p.longDescription}</p>
          <a href="#support" class="btn btn-primary" style="margin-top:16px;">Support this work →</a>
        </div>
      </div>`;
    el.querySelectorAll(".details-btn").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.slug));
    });
  }

  function renderFunded() {
    const el = document.getElementById("fundedList");
    if (!el || typeof SUPPORT_FUNDED === "undefined") return;
    el.innerHTML = SUPPORT_FUNDED.map(f =>
      `<li><span class="funded-period">${f.period}</span> ${f.note}</li>`
    ).join("");
  }

  function wireChipGroup(containerId, key) {
    const container = document.getElementById(containerId);
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      [...container.querySelectorAll(".chip")].forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      state[key] = btn.dataset.value;
      render();
    });
  }
  wireChipGroup("filterStatus", "status");
  wireChipGroup("filterCategory", "category");

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.query = e.target.value.trim();
    render();
  });

  function applyCategoryFromHash() {
    const hash = location.hash.replace("#", "");
    if (hash === "ecosystem" || hash === "defi") {
      const value = hash === "ecosystem" ? "main" : "defi";
      const container = document.getElementById("filterCategory");
      [...container.querySelectorAll(".chip")].forEach(c => c.classList.remove("active"));
      const target = container.querySelector(`[data-value="${value}"]`);
      if (target) target.classList.add("active");
      state.category = value;
      render();
      document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
    }
  }
  window.addEventListener("hashchange", applyCategoryFromHash);

  const overlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  function openModal(slug) {
    const p = PROJECTS.find(x => x.slug === slug);
    if (!p) return;
    const signals = getUseSignals();
    const useCount = signals[p.slug] || 0;
    const useLabel = useCount > 0 ? `I use this (${useCount})` : "I use this";

    modalContent.innerHTML = `
      <span class="badge ${badgeClass(p.status)}">${STATUS_LABELS[p.status]}</span>
      <h3 style="margin-top:12px;">${p.name}</h3>
      <p style="font-family:var(--mono); font-size:12px; color:var(--ink-faint);">${CATEGORY_LABELS[p.category]}</p>

      <div class="modal-section">
        <h5>Overview</h5>
        <p>${p.longDescription}</p>
      </div>

      ${p.whyBuilt ? `<div class="modal-section"><h5>Why it was built</h5><p>${p.whyBuilt}</p></div>` : ""}

      <div class="modal-section">
        <h5>Features</h5>
        <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>

      ${p.dataSources ? `<div class="modal-section"><h5>Data sources</h5><p>${p.dataSources}</p></div>` : ""}

      ${p.domainNote ? `<div class="modal-section"><h5>Domain note</h5><p>${p.domainNote}</p></div>` : ""}

      ${p.whatsNext ? `<div class="modal-section"><h5>What's next</h5><p>${p.whatsNext}</p></div>` : ""}

      ${p.supportNeeded ? `<div class="modal-section"><h5>How this tool could use help</h5>
        <div class="needs-support-tags">${p.supportNeeded.map(s => `<span class="support-flag">${SUPPORT_LABELS[s]}</span>`).join("")}</div>
      </div>` : ""}

      <div class="modal-section">
        <h5>Participate</h5>
        <div class="card-participate" style="margin-top:8px;">
          <button class="btn-use btn-sm modal-use-btn" data-slug="${p.slug}">${useLabel}</button>
          <a class="btn-part btn-sm" href="${feedbackMailto(p)}">Send feedback</a>
          <a class="btn-part btn-sm" href="${shareXUrl(p)}" target="_blank" rel="noopener">Share on X</a>
          <a class="btn-part btn-sm" href="${shareTgUrl(p)}" target="_blank" rel="noopener">Share on Telegram</a>
        </div>
        <p class="cost-note" style="margin-top:10px;">“I use this” is a local signal only (stored in your browser). It helps show demand without a backend.</p>
      </div>

      <div class="modal-actions">
        <a class="btn btn-primary" href="${p.liveUrl}" target="_blank" rel="noopener">Live application ↗</a>
        <a class="btn btn-ghost" href="${p.githubUrl}" target="_blank" rel="noopener">Source code</a>
        <a class="btn btn-ghost" href="#support" id="modalSupportLink">Support with BCH</a>
      </div>
    `;
    overlay.classList.add("open");
    document.getElementById("modalSupportLink").addEventListener("click", () => closeModal());
    const useBtn = modalContent.querySelector(".modal-use-btn");
    if (useBtn) {
      useBtn.addEventListener("click", () => {
        const n = setUseSignal(p.slug);
        useBtn.textContent = `I use this (${n})`;
        render();
        renderNeedsSupport();
      });
    }
  }

  function closeModal() {
    overlay.classList.remove("open");
  }

  function bindDetailButtons() {
    document.querySelectorAll(".details-btn").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.slug));
    });
  }

  function bindParticipate() {
    document.querySelectorAll(".btn-use").forEach(btn => {
      if (btn.classList.contains("modal-use-btn")) return;
      btn.onclick = () => {
        const n = setUseSignal(btn.dataset.slug);
        btn.textContent = `I use this (${n})`;
      };
    });
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
  });

  // Donation addresses + QR
  document.getElementById("donationAddress").textContent = BUILDER.donationAddress;
  const tokenEl = document.getElementById("tokenDonationAddress");
  if (tokenEl) tokenEl.textContent = BUILDER.tokenAwareDonationAddress || BUILDER.donationAddress;

  function copyAddress(addr, btnId) {
    navigator.clipboard.writeText(addr).then(() => {
      const btn = document.getElementById(btnId);
      const original = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = original), 1600);
    });
  }

  document.getElementById("copyAddressBtn").addEventListener("click", () => {
    copyAddress(BUILDER.donationAddress, "copyAddressBtn");
  });
  const copyTokenBtn = document.getElementById("copyTokenAddressBtn");
  if (copyTokenBtn) {
    copyTokenBtn.addEventListener("click", () => {
      copyAddress(BUILDER.tokenAwareDonationAddress || BUILDER.donationAddress, "copyTokenAddressBtn");
    });
  }

  function renderQR() {
    const target = document.getElementById("qr-canvas");
    const targetToken = document.getElementById("qr-canvas-token");
    if (!window.QRCode) {
      setTimeout(renderQR, 300);
      return;
    }
    if (target && !target.dataset.done) {
      target.innerHTML = "";
      new QRCode(target, {
        text: BUILDER.donationAddress,
        width: 120,
        height: 120,
        colorDark: "#04140f",
        colorLight: "#ffffff"
      });
      target.dataset.done = "1";
    }
    if (targetToken && !targetToken.dataset.done) {
      targetToken.innerHTML = "";
      new QRCode(targetToken, {
        text: BUILDER.tokenAwareDonationAddress || BUILDER.donationAddress,
        width: 120,
        height: 120,
        colorDark: "#04140f",
        colorLight: "#ffffff"
      });
      targetToken.dataset.done = "1";
    }
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  renderStats();
  renderFeatured();
  renderFunded();
  render();
  renderNeedsSupport();
  renderQR();
  applyCategoryFromHash();
})();
