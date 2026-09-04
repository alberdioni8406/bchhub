/* ============================================================
   BCHTOOLS.CASH — SHARED RUNTIME
   ============================================================ */
(function () {
  "use strict";

  const USE_KEY = "bchtools_use_signals";

  window.BCH = window.BCH || {};

  BCH.getUseSignals = function () {
    try { return JSON.parse(localStorage.getItem(USE_KEY) || "{}"); }
    catch (e) { return {}; }
  };

  BCH.setUseSignal = function (slug) {
    const s = BCH.getUseSignals();
    s[slug] = (s[slug] || 0) + 1;
    localStorage.setItem(USE_KEY, JSON.stringify(s));
    return s[slug];
  };

  BCH.feedbackMailto = function (p) {
    const subject = encodeURIComponent("[BCHtools] Feedback: " + p.name);
    const body = encodeURIComponent(
      "Tool: " + p.name + "\nLive: " + (p.liveUrl || "") + "\nSource: " + (p.githubUrl || "n/a") + "\n\nWhat works / missing / bug:\n\n"
    );
    return "mailto:" + (BUILDER.email || "alberdioni8406@proton.me") + "?subject=" + subject + "&body=" + body;
  };

  BCH.shareX = function (p) {
    const t = p.name + " — BCH tool on BCHtools.cash\n" + (p.liveUrl || "https://bchtools.cash");
    return "https://x.com/intent/tweet?text=" + encodeURIComponent(t);
  };

  BCH.shareTg = function (p) {
    return "https://t.me/share/url?url=" + encodeURIComponent(p.liveUrl || "https://bchtools.cash") +
      "&text=" + encodeURIComponent(p.name + " via BCHtools.cash");
  };

  BCH.badgeClass = function (status) {
    return "badge badge-" + status;
  };

  BCH.cardHTML = function (p, index) {
    const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
    const supportTags = (p.supportNeeded || [])
      .map(s => `<span class="tag" style="color:var(--amber);border-color:rgba(255,179,0,.3)">${SUPPORT_LABELS[s] || s}</span>`).join("");
    const signals = BCH.getUseSignals();
    const useCount = signals[p.slug] || 0;
    const useLabel = useCount > 0 ? `I use this (${useCount})` : "I use this";
    const needs = p.needs ? `<div class="card-needs">Needs: ${p.needs}</div>` : "";
    const bchLabel = p.bchLabel ? `<span class="tag">${p.bchLabel}</span>` : "";
    const openBtn = p.liveUrl
      ? `<a class="btn btn-ghost btn-sm" href="${p.liveUrl}" target="_blank" rel="noopener">Open</a>` : "";
    const sourceBtn = p.githubUrl
      ? `<a class="btn btn-ghost btn-sm" href="${p.githubUrl}" target="_blank" rel="noopener">Source</a>` : "";
    const special = p.special === "cashrush"
      ? `<a class="btn btn-amber btn-sm" href="cashrush.html">CASHRUSH →</a>` : "";

    return `
      <article class="card" data-slug="${p.slug}">
        <span class="card-id">#${String(index + 1).padStart(3, "0")}</span>
        <h3>${p.name}</h3>
        <span class="${BCH.badgeClass(p.status)}">${STATUS_LABELS[p.status] || p.status}</span>
        <p>${p.description}</p>
        ${needs}
        <div class="card-tags">${tags}${bchLabel}</div>
        ${supportTags ? `<div class="card-tags">${supportTags}</div>` : ""}
        <div class="card-actions">
          ${openBtn}${sourceBtn}${special}
          <button class="btn btn-primary btn-sm details-btn" data-slug="${p.slug}">Details</button>
        </div>
        <div class="card-participate">
          <button class="btn-use" data-slug="${p.slug}">${useLabel}</button>
          <a class="btn-part" href="${BCH.feedbackMailto(p)}">Feedback</a>
          <a class="btn-part" href="${BCH.shareX(p)}" target="_blank" rel="noopener">Share X</a>
        </div>
      </article>`;
  };

  BCH.openModal = function (slug) {
    const p = PROJECTS.find(x => x.slug === slug);
    if (!p) return;
    const overlay = document.getElementById("modalOverlay");
    const content = document.getElementById("modalContent");
    if (!overlay || !content) return;

    const signals = BCH.getUseSignals();
    const useCount = signals[p.slug] || 0;
    const useLabel = useCount > 0 ? `I use this (${useCount})` : "I use this";
    const liveBtn = p.liveUrl
      ? `<a class="btn btn-primary" href="${p.liveUrl}" target="_blank" rel="noopener">Open tool ↗</a>` : "";
    const sourceBtn = p.githubUrl
      ? `<a class="btn btn-ghost" href="${p.githubUrl}" target="_blank" rel="noopener">Source</a>` : "";
    const cashrushBtn = p.special === "cashrush"
      ? `<a class="btn btn-amber" href="cashrush.html">CASHRUSH page</a>` : "";

    content.innerHTML = `
      <span class="${BCH.badgeClass(p.status)}">${STATUS_LABELS[p.status] || p.status}</span>
      <h3 style="margin-top:10px;">${p.name}</h3>
      <p style="font-family:var(--font-mono);font-size:11px;color:var(--ink-faint);">${CATEGORY_LABELS[p.category] || ""}${p.bchLabel ? " · " + p.bchLabel : ""}</p>
      <div class="modal-section"><h5>Overview</h5><p>${p.longDescription || p.description}</p></div>
      ${p.whyBuilt ? `<div class="modal-section"><h5>Why it was built</h5><p>${p.whyBuilt}</p></div>` : ""}
      ${p.features && p.features.length ? `<div class="modal-section"><h5>Features</h5><ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul></div>` : ""}
      ${p.dataSources ? `<div class="modal-section"><h5>Data sources</h5><p>${p.dataSources}</p></div>` : ""}
      ${p.needs ? `<div class="modal-section"><h5>What remains</h5><p>${p.needs}</p></div>` : ""}
      ${p.whatsNext ? `<div class="modal-section"><h5>What's next</h5><p>${p.whatsNext}</p></div>` : ""}
      <div class="modal-section">
        <h5>Participate</h5>
        <div class="card-participate" style="border:none;padding-top:4px;">
          <button class="btn-use modal-use" data-slug="${p.slug}">${useLabel}</button>
          <a class="btn-part" href="${BCH.feedbackMailto(p)}">Feedback</a>
          <a class="btn-part" href="${BCH.shareX(p)}" target="_blank" rel="noopener">Share X</a>
        </div>
      </div>
      <div class="modal-actions">
        ${liveBtn}${sourceBtn}${cashrushBtn}
        <a class="btn btn-ghost" href="fundmetools.html">Fund Me Tools</a>
      </div>`;

    overlay.classList.add("open");
    const useBtn = content.querySelector(".modal-use");
    if (useBtn) {
      useBtn.addEventListener("click", () => {
        const n = BCH.setUseSignal(p.slug);
        useBtn.textContent = `I use this (${n})`;
      });
    }
  };

  BCH.closeModal = function () {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("open");
  };

  BCH.bindCards = function (root) {
    const el = root || document;
    el.querySelectorAll(".details-btn").forEach(btn => {
      btn.addEventListener("click", () => BCH.openModal(btn.dataset.slug));
    });
    el.querySelectorAll(".btn-use").forEach(btn => {
      if (btn.classList.contains("modal-use")) return;
      btn.onclick = () => {
        const n = BCH.setUseSignal(btn.dataset.slug);
        btn.textContent = `I use this (${n})`;
      };
    });
  };

  BCH.renderGrid = function (containerId, list) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    if (!list.length) {
      grid.innerHTML = `<p style="color:var(--ink-faint);grid-column:1/-1;">No tools in this view.</p>`;
      return;
    }
    grid.innerHTML = list.map((p, i) => BCH.cardHTML(p, PROJECTS.indexOf(p))).join("");
    BCH.bindCards(grid);
  };

  BCH.initNav = function () {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => links.classList.toggle("open"));
      links.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => links.classList.remove("open"));
      });
    }
    // mark active
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(a => {
      const href = a.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  };

  BCH.initModal = function () {
    const overlay = document.getElementById("modalOverlay");
    const close = document.getElementById("modalClose");
    if (close) close.addEventListener("click", BCH.closeModal);
    if (overlay) {
      overlay.addEventListener("click", e => { if (e.target === overlay) BCH.closeModal(); });
    }
    document.addEventListener("keydown", e => { if (e.key === "Escape") BCH.closeModal(); });
  };

  BCH.initDonation = function (opts) {
    opts = opts || {};
    const addr = (typeof FUNDRAISER !== "undefined" && FUNDRAISER.address) || "";
    const tokenAddr = (typeof FUNDRAISER !== "undefined" && FUNDRAISER.tokenAwareAddress) || addr;

    // Support both data-attribute and specific ID patterns
    document.querySelectorAll("[data-donation-address], #donationAddress, #footerAddress").forEach(el => {
      el.textContent = addr;
    });
    document.querySelectorAll("[data-token-address], #tokenDonationAddress").forEach(el => {
      el.textContent = tokenAddr;
    });

    function copy(text, btn, feedback) {
      navigator.clipboard.writeText(text).then(() => {
        if (feedback) {
          feedback.textContent = "Address copied";
          setTimeout(() => { feedback.textContent = ""; }, 2000);
        }
        if (btn) {
          const o = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => { btn.textContent = o; }, 1500);
        }
      }).catch(() => {
        if (feedback) feedback.textContent = "Select and copy manually";
      });
    }

    document.querySelectorAll("[data-copy-bch]").forEach(btn => {
      btn.addEventListener("click", () => {
        const fb = document.getElementById(btn.dataset.feedback || "copyFeedback");
        copy(addr, btn, fb);
      });
    });
    document.querySelectorAll("[data-copy-token]").forEach(btn => {
      btn.addEventListener("click", () => copy(tokenAddr, btn, null));
    });

    // ID-based buttons used on Fund Me Tools page
    const copyBtn = document.getElementById("copyAddressBtn");
    const copyFeedback = document.getElementById("copyFeedback");
    if (copyBtn) copyBtn.addEventListener("click", () => copy(addr, copyBtn, copyFeedback));

    const copyTokenBtn = document.getElementById("copyTokenAddressBtn");
    if (copyTokenBtn) copyTokenBtn.addEventListener("click", () => copy(tokenAddr, copyTokenBtn, null));

    const footerCopyBtn = document.getElementById("footerCopyBtn");
    if (footerCopyBtn) footerCopyBtn.addEventListener("click", () => copy(addr, footerCopyBtn, null));

    // QR
    let qrDone = false;
    function drawQR() {
      const target = document.getElementById("qr-canvas");
      if (!target || qrDone) return;
      if (!window.QRCode) {
        setTimeout(drawQR, 250);
        return;
      }
      target.innerHTML = "";
      new QRCode(target, {
        text: addr,
        width: 140,
        height: 140,
        colorDark: "#030806",
        colorLight: "#ffffff"
      });
      qrDone = true;
    }

    const showQr = document.getElementById("showQrBtn");
    const qrPanel = document.getElementById("qrPanel");
    if (showQr && qrPanel) {
      showQr.addEventListener("click", () => {
        const hidden = qrPanel.classList.contains("hidden") || qrPanel.hasAttribute("hidden");
        if (hidden) {
          qrPanel.classList.remove("hidden");
          qrPanel.removeAttribute("hidden");
          showQr.textContent = "Hide QR";
          drawQR();
        } else {
          qrPanel.classList.add("hidden");
          qrPanel.setAttribute("hidden", "");
          showQr.textContent = "Show QR";
        }
      });
    } else if (opts.autoQR) {
      drawQR();
    }
  };

  // Alias for pages that call initDonations
  BCH.initDonations = BCH.initDonation;

  BCH.initYear = function () {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  };

  BCH.boot = function () {
    BCH.initNav();
    BCH.initModal();
    BCH.initYear();
  };
})();
