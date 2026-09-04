/* ============================================================
   BCHTOOLS.CASH — DATA
   Cypherpunk tool universe for independent Bitcoin Cash software.
   ============================================================ */

const BUILDER = {
  handle: "alberdioni8406",
  name: "alberdioni8406",
  tagline: "Independent builder · BCH tools & experiments",
  github: "https://github.com/alberdioni8406",
  siteRepo: "https://github.com/alberdioni8406/bchhub",
  x: "https://x.com/alberdioni8406_",
  telegram: "https://t.me/alberdioni8406",
  email: "alberdioni8406@proton.me",
  about: "Years of independent building for Bitcoin Cash. Tools, experiments, and infrastructure that stay free to use — kept alive by the people who care that they exist."
};

const FUNDRAISER = {
  currency: "BCH",
  address: "bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040",
  tokenAwareAddress: "bitcoincash:zz7pjvq99kylyvns6fjmyawjhxwnucgn2qwyae2ye9",
  label: "Fund Me Tools",
  note: "No deadline. The work does not expire."
};

/** Featured / highlighted — change slug to rotate */
const FEATURED_SLUG = "cauldron-radar";
const HIGHLIGHTED_SLUGS = ["cauldron-radar", "bchbooks", "cashrush"];

const FUNDING_STATUS = {
  goalLabel: "Community Fuel",
  current: null,
  target: null,
  currency: "BCH",
  note: "Ongoing support. No campaign end date.",
  priorities: [
    "Domains and renewals",
    "Hosting so tools stay reachable",
    "API and data costs when free tiers fail",
    "Bug fixes, security, dependency updates",
    "Moving finished work onto permanent domains",
    "Development time for the next experiment"
  ]
};

const SUPPORT_FUNDED = [
  {
    period: "Aug 2026",
    note: "Community support helped purchase the custom domains bchtools.cash and cauldronradar.cash."
  },
  {
    period: "Aug 2026",
    note: "bchtools.cash launched as the community showcase for independent BCH tools."
  },
  {
    period: "2026",
    note: "Cauldron Radar (cauldronradar.cash) — live DeFi analytics for the Cauldron AMM, maintained with community feedback."
  },
  {
    period: "2026",
    note: "CashCompass, Compass Pay, StableShift, BCHnostr.live — finished tools kept public and free."
  }
];

/*
  Status vocabulary:
  finished | nearly-finished | beta | in-development | experimental
  Category: main | defi | community | games
*/

const PROJECTS = [
  {
    name: "CashCompass",
    slug: "cashcompass",
    status: "finished",
    category: "main",
    tags: ["Explorer", "CashTokens", "Community", "Infrastructure"],
    description: "The main hub for the Bitcoin Cash ecosystem — wallets, CashTokens, DeFi, explorers, dev tools and privacy tools in one place.",
    longDescription: "CashCompass is the flagship ecosystem hub — a curated map of the Bitcoin Cash landscape covering wallets, CashTokens, DeFi, block explorers, developer tools, privacy tools and community profiles. It rotates a featured project weekly and includes an AI chatbot to help visitors navigate what BCH actually offers.",
    whyBuilt: "There was no single place that mapped the BCH ecosystem as a whole. CashCompass is that map.",
    features: [
      "Ecosystem directory across wallets, CashTokens, DeFi, explorers, dev tools, privacy tools",
      "Weekly featured-project rotation",
      "Built-in AI chatbot for ecosystem questions",
      "Spanish-language resources section"
    ],
    dataSources: "Curated/maintained directly",
    whatsNext: "Original custom domain temporarily unavailable due to a provider issue. Vercel deployment remains live.",
    liveUrl: "https://cashcompass-bch.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/cashcompass",
    needs: null,
    supportNeeded: null
  },
  {
    name: "StableShift",
    slug: "stableshift",
    status: "finished",
    category: "defi",
    tags: ["DeFi", "Stablecoins"],
    description: "A BCH-to-stablecoin hedging tool covering MUSD (via Moria) and PUSD (via ParyonUSD).",
    longDescription: "StableShift gives BCH holders a way to hedge exposure into on-chain stablecoins native to Bitcoin Cash. Pricing through General Protocols hex oracle with CoinPaprika fallback.",
    whyBuilt: "A straightforward hedging entry point without leaving the BCH ecosystem.",
    features: [
      "MUSD (Moria) and PUSD (ParyonUSD) hedging flows",
      "Oracle pricing with fallback",
      "Serverless oracle proxy"
    ],
    dataSources: "General Protocols oracle, CoinPaprika",
    whatsNext: "MUSD card may show offline due to a known upstream Moria contract issue.",
    liveUrl: "https://www.stableshift.cash/",
    githubUrl: "https://github.com/alberdioni8406/StableShift",
    needs: null,
    supportNeeded: null
  },
  {
    name: "Compass Pay",
    slug: "compasspay",
    status: "finished",
    category: "main",
    tags: ["Payments"],
    description: "A BCH payment app with live fiat conversion across seven currencies and a built-in QR flow.",
    longDescription: "Enter an amount, get a live BCH-denominated QR. Fiat conversion across USD, EUR, GBP, MZN, ZAR, NGN and BRL. Lightweight and dedicated.",
    whyBuilt: "Simple point-of-payment tooling without locking users behind heavy wallet or exchange UIs.",
    features: [
      "Live BCH/fiat conversion across 7 currencies",
      "QR panel with clipboard copy",
      "CashAddr + Base58 validation"
    ],
    dataSources: "Kraken, Coinbase, CoinPaprika, open.er-api.com",
    whatsNext: null,
    liveUrl: "https://www.compasspay.cash/",
    githubUrl: "https://github.com/alberdioni8406/compass-pay",
    needs: null,
    supportNeeded: null
  },
  {
    name: "Cauldron Radar",
    slug: "cauldron-radar",
    status: "finished",
    category: "defi",
    tags: ["DeFi", "CashTokens", "Cauldron", "Analytics"],
    description: "Live DeFi analytics for the Cauldron AMM and CashToken markets — real data, no mocks.",
    longDescription: "Built directly on the Riften Labs Cauldron indexer. Dashboard overview, searchable token explorer, liquidity pool rankings, live activity feed, and watchlist.",
    whyBuilt: "CashToken DeFi on Cauldron needed a dedicated analytics layer.",
    features: [
      "TVL, volume, pools, tokens tracked",
      "Token explorer with price history",
      "Liquidity pool rankings",
      "Live activity feed and watchlist"
    ],
    dataSources: "Riften Labs Cauldron indexer",
    whatsNext: "Planned: multi-period volume, APY leaderboard, new-pools tracker, historical TVL.",
    liveUrl: "https://www.cauldronradar.cash/#/dashboard",
    githubUrl: "https://github.com/alberdioni8406/cauldron-radar",
    needs: null,
    supportNeeded: null
  },
  {
    name: "BCHnostr.live",
    slug: "bchnostr",
    status: "finished",
    category: "main",
    tags: ["Nostr", "Community", "Analytics"],
    description: "Live monitoring for the BCHnostr relay — stats, note feed, leaderboards and charts.",
    longDescription: "Watches the BCHnostr Nostr relay in real time: live stats, note feed, community leaderboards. Shared multiplexed connection architecture.",
    whyBuilt: "Relay health and community activity needed a focused dashboard.",
    features: [
      "Live relay stats and note feed",
      "Leaderboards: Most Active, Top Reactions, Most Mentioned",
      "Sponsor banner placements"
    ],
    dataSources: "BCHnostr relay (wss://relay.bchnostr.com)",
    whatsNext: null,
    liveUrl: "https://www.bchnostr.live/",
    githubUrl: "https://github.com/alberdioni8406/BCHnostrpulse",
    needs: null,
    supportNeeded: null
  },
  {
    name: "Ghostroom",
    slug: "ghostroom",
    status: "finished",
    category: "community",
    tags: ["Chat", "Privacy", "BCH Community"],
    description: "Anonymous disposable chat with a dedicated Bitcoin Cash community room and BCH-oriented communication features.",
    longDescription: "Ghostroom is not a Bitcoin Cash-only application. It is an anonymous/disposable chat project that also provides a dedicated BCH room and BCH-oriented use cases. Included for that relationship — not as a pure protocol tool.",
    whyBuilt: "Anonymous ephemeral communication with a clear BCH community presence.",
    features: [
      "Anonymous disposable rooms",
      "Dedicated Bitcoin Cash community room",
      "BCH-oriented communication features"
    ],
    dataSources: null,
    whatsNext: null,
    liveUrl: "https://ghostroom.xyz",
    githubUrl: null,
    needs: null,
    supportNeeded: null,
    bchLabel: "BCH-enabled"
  },
  {
    name: "BCHBooks",
    slug: "bchbooks",
    status: "nearly-finished",
    category: "main",
    tags: ["Accounting", "Ledger"],
    description: "Bitcoin Cash accounting ledger that turns a BCH address into an organized accounting view. Live and usable — needs custom domain + final polish.",
    longDescription: "BCHBooks is already functional on Vercel. It turns a BCH address into an organized accounting view. What remains before a permanent production launch is a custom domain, final polish, and community support to keep it maintained.",
    whyBuilt: "Turn raw address activity into a clear accounting view for holders and builders.",
    features: [
      "Address-based accounting view",
      "Organized ledger presentation",
      "Functional core already live at bchbooks.vercel.app"
    ],
    dataSources: null,
    whatsNext: "Custom domain + final polish. Community support helps move it from temporary deploy to permanent home.",
    liveUrl: "https://bchbooks.vercel.app",
    githubUrl: null,
    needs: "Custom domain + final polish + community support",
    supportNeeded: ["funding", "feedback"]
  },
  {
    name: "CASHRUSH",
    slug: "cashrush",
    status: "nearly-finished",
    category: "games",
    tags: ["Game", "Browser", "Discoverability", "Onboarding"],
    description: "A fast browser game — already playable. Play first. Discover the rest later. Needs custom domain, polish, feedback, and community love.",
    longDescription: "CASHRUSH is live and playable at cashrush-play.vercel.app. It is a fast browser game inspired by simple games people can play instantly — no accounts, no complicated onboarding, no long instructions. Players chase scores, unlock achievements, and return to beat previous runs. Somewhere between the obstacles and progression, they may begin discovering a world connected to Bitcoin Cash. No classroom. No forced lesson. The game comes first. Curiosity comes naturally. What it still needs: a custom domain, more polish, player feedback, and community support so it can become a strong, gentle onboarding path into the ecosystem — and more.",
    whyBuilt: "Simple games become daily habits. Bitcoin Cash can live inside a world people already want to return to — without interrupting the fun to lecture. CASHRUSH aims to be that kind of onboarding tool: play first, discover later.",
    features: [
      "Already playable in the browser",
      "Instant play, no account required",
      "Score chasing and achievement system",
      "Subtle connection to Bitcoin Cash inside the world",
      "Future potential for optional BCH / CashToken integrations"
    ],
    dataSources: null,
    whatsNext: "Custom domain, polish, feedback, and community support. Gameplay is live; optional BCH integrations remain future work.",
    liveUrl: "https://cashrush-play.vercel.app",
    githubUrl: null,
    needs: "Custom domain + polish + feedback + community support",
    supportNeeded: ["funding", "feedback", "users"],
    special: "cashrush"
  },
  {
    name: "Bitcoin Cash Network Radar",
    slug: "bch-net-radar",
    status: "beta",
    category: "main",
    tags: ["Network", "Analytics"],
    description: "Multi-provider BCH network observatory — no single point of failure.",
    longDescription: "Aggregates real-time network data from multiple independent providers with automatic fallback. If a metric cannot be retrieved, the UI shows it unavailable rather than fabricating a number.",
    whyBuilt: "Existing explorers often depend on a single backend. This is built so one provider going down does not take the dashboard with it.",
    features: [
      "Block height, difficulty, hashrate, mempool",
      "Recent blocks with charts",
      "Provider health monitoring",
      "Zero required API keys for core functionality"
    ],
    dataSources: "Haskoin, Blockchair, 3xpl, Paytaca BCMR, CoinPaprika, CoinGecko",
    whatsNext: "Early public beta. Planned: mining-pool distribution, fuller CashTokens activity, longer history.",
    liveUrl: "https://bch-net-radar.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/bch-net-radar",
    needs: null,
    supportNeeded: ["users", "feedback"]
  },
  {
    name: "BCH Lab",
    slug: "bch-lab",
    status: "in-development",
    category: "main",
    tags: ["Community", "Infrastructure"],
    description: "Open-source dev lab for BCH — pipeline view of finished, in-production, and experimental ideas.",
    longDescription: "Organizing layer above individual tools: Idea → Prototype → Community Testing → Full Launch, with lightweight community voting.",
    whyBuilt: "Enough tools in flight needed a shared home that showed the whole pipeline.",
    features: [
      "Directory of finished, in-production, experimental projects",
      "Pipeline view",
      "Community voting (currently localStorage demo)"
    ],
    dataSources: "Curated",
    whatsNext: "Real voting backend and continued curation.",
    liveUrl: "https://bch-lab.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/bch-lab",
    needs: null,
    supportNeeded: ["feedback", "users"]
  },
  {
    name: "BCH Ecosystem Radar",
    slug: "bch-ecosystem-radar",
    status: "in-development",
    category: "main",
    tags: ["Infrastructure", "Analytics"],
    description: "Status-page-style monitoring across 25 BCH services in seven categories.",
    longDescription: "Live fetch probes with fallback where needed, historical charts, per-service detail.",
    whyBuilt: "BCH infrastructure had no shared uptime picture.",
    features: [
      "25 tracked services across 7 categories",
      "Live probes with simulated fallback where needed",
      "History charts and detail modals"
    ],
    dataSources: "Live probes + fallback",
    whatsNext: "Broader coverage; replace remaining simulated probes.",
    liveUrl: "https://bch-ecosystem-radar.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/BCH-ecosystem-radar",
    needs: null,
    supportNeeded: ["funding", "feedback"]
  },
  {
    name: "Compass MEM",
    slug: "compassmem",
    status: "in-development",
    category: "main",
    tags: ["Explorer", "Network"],
    description: "BCH mempool visualizer as a single HTML file on Haskoin Store API.",
    longDescription: "Live mempool and recent blocks without full explorer overhead.",
    whyBuilt: "Lightweight way to watch mempool and recent-block activity.",
    features: [
      "Live mempool view",
      "Recent block browsing",
      "Batch transaction detail"
    ],
    dataSources: "Haskoin Store API",
    whatsNext: "Maintenance as API evolves; feedback on useful views.",
    liveUrl: "https://compass-mem.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/compassmem",
    needs: null,
    supportNeeded: ["users", "feedback"]
  },
  {
    name: "Compass Whale",
    slug: "compasswhale",
    status: "in-development",
    category: "main",
    tags: ["Analytics", "Network"],
    description: "Whale-monitoring dashboard for large on-chain BCH movements.",
    longDescription: "Scans blocks for large movements. Known-address list ships empty rather than pre-filled with unverified data.",
    whyBuilt: "Large transactions are visible on-chain but hard to notice without dedicated tooling.",
    features: [
      "Block-scanning whale detection",
      "Alert UI for large movements",
      "Empty-by-default known-address list"
    ],
    dataSources: "Haskoin, CoinPaprika",
    whatsNext: "Verified known-address list and monitoring accuracy.",
    liveUrl: "https://compass-whale.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/compass-whale",
    needs: null,
    supportNeeded: ["users", "funding"]
  },
  {
    name: "CashTokens Ledger",
    slug: "cashtokens-ledger",
    status: "in-development",
    category: "main",
    tags: ["CashTokens", "Explorer"],
    description: "CashTokens directory and ledger from TokenStork and Paytaca BCMR — no backend database of its own.",
    longDescription: "Searchable, sortable directory with token detail, holders, NFT instances, leaderboards. Proxied through serverless functions for CORS.",
    whyBuilt: "CashTokens needed a UTXO-aware directory distinct from generic price trackers.",
    features: [
      "Sortable/filterable token table",
      "Token detail: holders, NFTs, history",
      "Leaderboards by holders and UTXOs"
    ],
    dataSources: "TokenStork, Paytaca BCMR",
    whatsNext: "Proxy hardening and token coverage expansion.",
    liveUrl: "https://cash-tokens-ledger.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/cash-tokens-ledger",
    needs: null,
    supportNeeded: ["feedback", "users"]
  },
  {
    name: "CashTokens",
    slug: "cashtokens-atlas",
    status: "in-development",
    category: "main",
    tags: ["CashTokens", "Explorer", "Community"],
    description: "CashTokens explorer and ecosystem atlas — real-world use cases without requiring blockchain expertise.",
    longDescription: "Educational counterpart to the Ledger: hero dashboard, token explorer, trending section, real-world use cases (loyalty, collectibles, tickets, membership). Avoids reading like a speculative trading platform.",
    whyBuilt: "CashTokens are powerful but unfamiliar outside development circles.",
    features: [
      "Hero dashboard and token explorer",
      "Real-world use-case section",
      "WalletConnect integration points"
    ],
    dataSources: "Chaingraph, mainnet.cash, Haskoin, CoinPaprika",
    whatsNext: "API route configuration fixes; curated atlas remains illustrative.",
    liveUrl: "https://cash-tokens.vercel.app/#/",
    githubUrl: "https://github.com/alberdioni8406/CashCompass-Tokens",
    needs: null,
    supportNeeded: ["funding", "feedback"]
  }
];

const STATUS_LABELS = {
  finished: "FINISHED",
  "nearly-finished": "NEARLY FINISHED",
  beta: "BETA",
  "in-development": "IN THE LAB",
  experimental: "EXPERIMENTAL"
};

const CATEGORY_LABELS = {
  main: "Wider Ecosystem",
  defi: "BCH DeFi",
  community: "BCH Community",
  games: "Games"
};

const SUPPORT_LABELS = {
  feedback: "Needs feedback",
  funding: "Needs funding",
  users: "Needs users"
};

function getFinished() {
  return PROJECTS.filter(p => p.status === "finished");
}
function getLab() {
  return PROJECTS.filter(p =>
    p.status === "beta" || p.status === "in-development" || p.status === "experimental" || p.status === "nearly-finished"
  );
}
function getInProgress() {
  return getLab();
}
function getAwaiting() {
  return PROJECTS.filter(p =>
    p.status === "nearly-finished" ||
    (p.supportNeeded && p.supportNeeded.length) ||
    p.needs
  );
}
function getBySlug(slug) {
  return PROJECTS.find(p => p.slug === slug);
}
