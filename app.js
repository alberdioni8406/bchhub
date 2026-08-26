(function () {
  "use strict";

  const state = { status: "all", category: "all", query: "" };

  const grid = document.getElementById("projectGrid");
  const needsSupportGrid = document.getElementById("needsSupportGrid");
  const resultCount = document.getElementById("resultCount");

  function badgeClass(status) {
    return "badge badge-" + status;
  }

  function cardHTML(p, index) {
    const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
    const supportTags = (p.supportNeeded || [])
      .map(s => `<span class="support-flag">${SUPPORT_LABELS[s]}</span>`).join("");
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
  }

  function renderNeedsSupport() {
    const list = PROJECTS.filter(p => p.status === "unfinished" || p.status === "beta");
    needsSupportGrid.innerHTML = list.map((p) => cardHTML(p, PROJECTS.indexOf(p))).join("");
    bindDetailButtons();
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

  // ---------- Filter bar wiring ----------
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

  // ---------- Nav shortcuts to pre-filtered category views ----------
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

  // ---------- Modal ----------
  const overlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  function openModal(slug) {
    const p = PROJECTS.find(x => x.slug === slug);
    if (!p) return;
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

      <div class="modal-actions">
        <a class="btn btn-primary" href="${p.liveUrl}" target="_blank" rel="noopener">Live application ↗</a>
        <a class="btn btn-ghost" href="${p.githubUrl}" target="_blank" rel="noopener">Source code</a>
        <a class="btn btn-ghost" href="#support" id="modalSupportLink">Support</a>
      </div>
    `;
    overlay.classList.add("open");
    document.getElementById("modalSupportLink").addEventListener("click", () => closeModal());
  }

  function closeModal() {
    overlay.classList.remove("open");
  }

  function bindDetailButtons() {
    document.querySelectorAll(".details-btn").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.slug));
    });
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  // ---------- Mobile nav ----------
  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
  });

  // ---------- Donation address + QR ----------
  const addressEl = document.getElementById("donationAddress");
  addressEl.textContent = BUILDER.donationAddress;

  document.getElementById("copyAddressBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(BUILDER.donationAddress).then(() => {
      const btn = document.getElementById("copyAddressBtn");
      const original = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = original), 1600);
    });
  });

  function renderQR() {
    const target = document.getElementById("qr-canvas");
    if (window.QRCode) {
      new QRCode(target, {
        text: BUILDER.donationAddress,
        width: 132,
        height: 132,
        colorDark: "#04140f",
        colorLight: "#ffffff"
      });
    } else {
      setTimeout(renderQR, 300);
    }
  }

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------- Init ----------
  renderStats();
  render();
  renderNeedsSupport();
  renderQR();
  applyCategoryFromHash();
})();
