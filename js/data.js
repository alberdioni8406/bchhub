/* ============================================================
   BCHTOOLS.CASH — DATA
   A community-supported home for independent Bitcoin Cash tools.
   ============================================================ */

const BUILDER = {
  handle: "alberdioni8406",
  name: "alberdioni8406",
  tagline: "Independent developer · BCH tools for the ecosystem",
  github: "https://github.com/alberdioni8406",
  siteRepo: "https://github.com/alberdioni8406/bchhub",
  x: "https://x.com/alberdioni8406_",
  telegram: "https://t.me/alberdioni8406",
  email: "alberdioni8406@proton.me",
  about: "BCHtools is independently built and maintained for the Bitcoin Cash ecosystem. The tools are free to use. Keeping them online, maintained and improved requires infrastructure and development time — community support makes that possible."
};

/** Primary fundraiser — single destination for the entire BCHtools ecosystem */
const FUNDRAISER = {
  currency: "BCH",
  address: "bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040",
  tokenAwareAddress: "bitcoincash:zz7pjvq99kylyvns6fjmyawjhxwnucgn2qwyae2ye9",
  label: "Support BCHtools",
  note: "Any amount helps. Domains, hosting, APIs and development time are recurring costs."
};

/** Featured tool — change slug to rotate. Must match a PROJECTS slug. */
const FEATURED_SLUG = "cauldron-radar";

/**
 * Funding progress (optional). Leave amounts null/empty to show priorities only.
 * Never fabricate figures.
 */
const FUNDING_STATUS = {
  goalLabel: "Current funding priorities",
  // When real data exists, set e.g.:
  // current: 0.42, target: 2.0, currency: "BCH", note: "..."
  current: null,
  target: null,
  currency: "BCH",
  priorities: [
    "Custom domains and renewals",
    "Hosting so applications stay online",
    "API / data provider costs when free tiers are insufficient",
    "Maintenance, bug fixes and security updates",
    "Moving finished projects from temporary deploys to permanent domains",
    "Continued development of tools the community uses"
  ]
};

/**
 * What community support has funded — only verified entries.
 * Empty array shows an honest empty state.
 */
const SUPPORT_FUNDED = [
  {
    period: "Aug 2026",
    amount: null,
    note: "Community support helped purchase the custom domains bchtools.cash and cauldronradar.cash — keeping the tools hub and Cauldron Radar on proper domains.",
    tool: null
  },
  {
    period: "Aug 2026",
    amount: null,
    note: "bchtools.cash launched as the community showcase for independent BCH tools.",
    tool: null
  },
  {
    period: "2026",
    amount: null,
    note: "Cauldron Radar (cauldronradar.cash) — live DeFi analytics for the Cauldron AMM, maintained and improved with community feedback.",
    tool: "cauldron-radar"
  },
  {
    period: "2026",
    amount: null,
    note: "CashCompass, Compass Pay, StableShift, BCHnostr.live — finished tools kept public and free to use.",
    tool: null
  }
];

// Status vocabulary:
// "finished" | "nearly-finished" | "beta" | "in-development" | "needs-funding" | "archived"
// Category: "main" | "defi" | "community"

const PROJECTS = [
  // ---------- FINISHED ----------
  {
    name: "CashCompass",
    slug: "cashcompass",
    status: "finished",
    category: "main",
    tags: ["Explorer", "CashTokens", "Community", "Infrastructure"],
    description: "The main hub for the Bitcoin Cash ecosystem — wallets, CashTokens, DeFi, explorers, dev tools and privacy tools in one place.",
    longDescription: "CashCompass is the flagship ecosystem hub — a curated map of the Bitcoin Cash landscape covering wallets, CashTokens, DeFi, block explorers, developer tools, privacy tools and community profiles. It rotates a featured project weekly and includes an AI chatbot (built for the ecosystem, running on Gemini 2.0 Flash through a Vercel serverless proxy) to help visitors navigate what BCH actually offers.",
    whyBuilt: "After years of writing about individual BCH tools and projects separately, it became clear there was no single place that mapped the ecosystem as a whole. CashCompass is that map.",
    features: [
      "Ecosystem directory across wallets, CashTokens, DeFi, explorers, dev tools, and privacy tools",
      "Weekly featured-project rotation with countdown",
      "Built-in AI chatbot for ecosystem questions",
      "Spanish-language resources section",
      "BCH donation QR built in"
    ],
    dataSources: "Curated/maintained directly, not API-driven",
    whatsNext: "The project's original custom domain (cashcompass.space) is currently unavailable due to a domain-provider issue outside the project's control. The Vercel deployment remains the live, maintained version, and the domain may be restored if the provider situation resolves.",
    liveUrl: "https://cashcompass-bch.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/cashcompass",
    domainNote: "Originally at cashcompass.space — that custom domain is temporarily unavailable due to a domain-provider issue. The site itself is unaffected and lives at the Vercel URL below.",
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
    longDescription: "StableShift gives BCH holders a way to hedge exposure into on-chain stablecoins native to Bitcoin Cash. It pulls pricing through a General Protocols hex oracle with a CoinPaprika fallback, so rates stay live even if one source is unavailable.",
    whyBuilt: "BCH holders who want to reduce volatility exposure without leaving the BCH ecosystem entirely needed a straightforward hedging entry point.",
    features: [
      "MUSD (Moria) and PUSD (ParyonUSD) hedging flows",
      "General Protocols hex oracle pricing with CoinPaprika fallback",
      "Serverless oracle proxy (api/oracle.js)"
    ],
    dataSources: "General Protocols oracle, CoinPaprika fallback",
    whatsNext: "The MUSD card currently shows an offline warning due to a known bug in the Moria contract, upstream of this project.",
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
    longDescription: "Compass Pay is a single-file payment tool: enter an amount, get a live BCH-denominated QR code, with fiat conversion across USD, EUR, GBP, MZN, ZAR, NGN and BRL. Pricing runs through Kraken primary / Coinbase fallback for BCH/USD, and open.er-api.com for FX cross-rates, with a hardcoded last-resort fallback so the app never fully breaks.",
    whyBuilt: "Simple point-of-payment tooling for BCH is often locked behind wallet apps or exchange interfaces. Compass Pay is a lightweight, dedicated alternative that also reflects the West/Southern African currencies (MZN, ZAR, NGN) relevant to the builder's own on-the-ground adoption work.",
    features: [
      "Live BCH/fiat conversion across 7 currencies",
      "QR panel with clipboard copy",
      "CashAddr + Base58 address validation",
      "Serverless price proxy (api/rates.js) via CoinPaprika to resolve CORS issues"
    ],
    dataSources: "Kraken (primary), Coinbase (fallback), CoinPaprika (via proxy), open.er-api.com (FX)",
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
    description: "A live DeFi analytics dashboard for the Cauldron AMM and CashToken markets on Bitcoin Cash — tracking 340+ tokens with real data, no mocks.",
    longDescription: "Cauldron Radar is built directly on the official Riften Labs Cauldron indexer (no mock or fabricated data at any point). It gives the CashToken DeFi ecosystem a dashboard: overview stats (TVL, volume, pools, tokens tracked), a searchable token explorer with price history, a liquidity pool explorer with rankings, a live activity feed, and a localStorage-backed watchlist.",
    whyBuilt: "As CashToken DeFi activity on Cauldron grew, there was no dedicated analytics layer for it — this fills that gap as a module of the wider BCH Lab DeFi Explorer.",
    features: [
      "Dashboard overview: TVL, volume, pools, tokens tracked",
      "Token explorer with search, sort, and per-token detail pages with price charts",
      "Liquidity pool explorer with rankings",
      "Live activity feed",
      "Watchlist (localStorage) and CSV export",
      "API status indicator with live refresh"
    ],
    dataSources: "Riften Labs Cauldron indexer (indexer.riften.net/cauldron)",
    whatsNext: "Planned: multi-period volume (7d/30d/monthly), an APY leaderboard, a new-pools/token-launch tracker, whale LP and liquidity-concentration indicators, historical TVL charting, and unusual-volume detection.",
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
    description: "A live monitoring dashboard for the BCHnostr relay — stats, note feed, leaderboards and charts for the BCH community on Nostr.",
    longDescription: "BCHnostr.live watches the BCHnostr Nostr relay (wss://relay.bchnostr.com) in real time: live stats, a note feed, and community leaderboards (Most Active Users, Top Reactions, Most Mentioned). It runs on a shared, multiplexed relay connection to stay efficient, and includes a sponsor-banner section to help fund its own upkeep.",
    whyBuilt: "Started as a community leaderboard pairing Nostr relay activity with on-chain donor data, then was redesigned to focus entirely on relay health and activity once that turned out to be the more useful core.",
    features: [
      "Live relay stats and real-time note feed",
      "Community leaderboards: Most Active Users, Top Reactions, Most Mentioned",
      "Shared multiplexed relay connection architecture",
      "Sponsor banner placements to help fund development",
      "A companion autonomous posting bot (nostr-tools v2, rotating content bank, daily cron)"
    ],
    dataSources: "BCHnostr relay (wss://relay.bchnostr.com), Haskoin (for donor data in an earlier iteration)",
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
    longDescription: "Ghostroom is an anonymous/disposable chat project. It is not a Bitcoin Cash-only application, but it provides a dedicated Bitcoin Cash room and BCH-oriented communication use cases for the community. It is included here because of that BCH-enabled relationship — not because the product itself is a BCH protocol tool.",
    whyBuilt: "Anonymous, ephemeral communication with a clear BCH community presence.",
    features: [
      "Anonymous disposable rooms",
      "Dedicated Bitcoin Cash community room",
      "BCH-oriented communication features"
    ],
    dataSources: null,
    whatsNext: null,
    liveUrl: "https://ghostroom.xyz",
    githubUrl: "https://github.com/alberdioni8406/ghostroom",
    needs: null,
    supportNeeded: null,
    bchLabel: "BCH-enabled"
  },

  // ---------- NEARLY FINISHED / READY FOR LAUNCH ----------
  {
    name: "BCHBooks",
    slug: "bchbooks",
    status: "nearly-finished",
    category: "main",
    tags: ["Accounting", "Ledger", "CashTokens"],
    description: "Bitcoin Cash accounting ledger that turns a BCH address into an organized accounting view.",
    longDescription: "BCHBooks is a functional Bitcoin Cash accounting ledger. It is already usable; what remains is a custom domain and final polish before a permanent production launch.",
    whyBuilt: "Turning raw BCH address activity into a clear, organized accounting view for holders and builders.",
    features: [
      "Address-based accounting view",
      "Organized ledger presentation",
      "Functional core already live"
    ],
    dataSources: null,
    whatsNext: "Custom domain + final polish. Ready for permanent launch.",
    liveUrl: "https://bchbooks.vercel.app",
    githubUrl: "https://github.com/alberdioni8406/bchbooks",
    needs: "Custom domain + final polish",
    supportNeeded: ["funding"]
  },

  // ---------- BETA / IN DEVELOPMENT ----------
  {
    name: "Bitcoin Cash Network Radar",
    slug: "bch-net-radar",
    status: "beta",
    category: "main",
    tags: ["Network", "Analytics", "CashTokens"],
    description: "A multi-provider BCH network observatory — block production, mempool, mining, difficulty/hashrate and a profitability calculator, with no single point of failure.",
    longDescription: "BCH Radar aggregates real-time network data (block height, difficulty, estimated hashrate, mempool, recent blocks and charts, market data, address lookup) from multiple independent providers with automatic fallback chains — Haskoin (original + mirror), Blockchair, 3xpl, Paytaca BCMR for CashTokens, and CoinPaprika/CoinGecko for pricing. If a metric can't be retrieved from any provider, the UI shows it as unavailable rather than fabricating a number.",
    whyBuilt: "Existing BCH explorers tend to depend on a single backend. This is built specifically so that no single provider going down takes the dashboard with it.",
    features: [
      "Network stats: block height, difficulty, estimated hashrate, mempool",
      "Recent blocks with charts (block interval, tx/block, block size)",
      "Market data with cross-source checks",
      "Read-only address lookup",
      "Provider health monitoring and cross-source consensus verification",
      "12 Vercel serverless API routes, zero required API keys for core functionality"
    ],
    dataSources: "Haskoin (original + mirror), Blockchair, 3xpl, Paytaca BCMR, CoinPaprika, CoinGecko",
    whatsNext: "Publicly documented as an early public beta. Still planned: mining-pool distribution (needs coinbase-tag parsing infrastructure), a fuller CashTokens activity feed beyond BCMR metadata, longer historical time series, and general polish.",
    liveUrl: "https://bch-net-radar.vercel.app/",
    githubUrl: "https://github.com/alberdioni8406/bch-net-radar",
    needs: null,
    supportNeeded: ["users", "feedback"]
  },
  {
    name: "CASHRUSH",
    slug: "cashrush",
    status: "beta",
    category: "main",
    tags: ["Games", "Community"],
    description: "A fast, no-account browser game built for replayable runs — with a Bitcoin Cash world woven quietly into it.",
    longDescription: "CASHRUSH is a browser game built around the same instinct as the simple games people play instantly, without accounts or onboarding: chase a score, beat your last run, come back for one more. An achievement system rewards returning, and somewhere between the obstacles and unlocks, a world connected to Bitcoin Cash starts showing up. Gameplay comes first — there's no forced lesson or interruption.",
    whyBuilt: "To let people discover Bitcoin Cash through curiosity rather than a classroom — the game has to work as a game first.",
    features: [
      "Instant start, no accounts",
      "Score-chasing runs built for replayability",
      "An achievement system that rewards coming back",
      "A Bitcoin Cash world woven into the game rather than bolted on"
    ],
    dataSources: null,
    whatsNext: "Live and playable now on a temporary Vercel domain. Still needed: a custom domain, community feedback and playtesting, and continued balancing and polish. Optional BCH and CashToken integrations are a future possibility once the core game is solid — not a current feature.",
    liveUrl: "https://cashrush-play.vercel.app",
    githubUrl: "https://github.com/alberdioni8406/cashrush-play",
    needs: "Custom domain, feedback, and continued development",
    supportNeeded: ["funding", "feedback", "users"]
  },
  {
    name: "BCH Lab",
    slug: "bch-lab",
    status: "in-development",
    category: "main",
    tags: ["Community", "Infrastructure"],
    description: "A personal open-source dev lab for BCH — a showcase of finished tools, in-production tools, and experimental ideas the community can help prioritize.",
    longDescription: "BCH Lab is the organizing layer above the individual tools: a pipeline view (Idea → Prototype → Community Testing → Full Launch) and a lightweight voting mechanism so the community can weigh in on what should get built further versus what isn't a priority.",
    whyBuilt: "Once there were enough individual BCH tools in flight, they needed a shared home that showed the whole pipeline, not just finished output.",
    features: [
      "Directory of finished, in-production, and experimental projects",
      "Idea → Prototype → Community Testing → Full Launch pipeline view",
      "Community voting (Build Further / Not Priority) — currently demo-level, using localStorage"
    ],
    dataSources: "Curated/maintained directly",
    whatsNext: "Needs a real (non-localStorage) voting backend, and continued curation as new tools launch.",
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
    description: "A status-page-style monitoring dashboard tracking uptime and health across 25 BCH services in seven categories.",
    longDescription: "BCH Ecosystem Radar treats BCH infrastructure the way a status page treats cloud services: live fetch probes (with simulated-monitoring fallback where a live probe isn't feasible), historical charts, and a detail modal per service, across seven service categories.",
    whyBuilt: "BCH infrastructure — explorers, APIs, relays, wallets — has no shared uptime picture. This is a first attempt at one.",
    features: [
      "25 tracked services across 7 categories",
      "Live fetch probes with fallback simulated monitoring where needed",
      "Chart.js history charts",
      "Per-service detail modal"
    ],
    dataSources: "Live probes against each tracked service, with fallback simulated monitoring",
    whatsNext: "Needs broader service coverage and replacing remaining simulated-monitoring fallbacks with live probes where feasible.",
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
    description: "A BCH mempool visualizer built as a single HTML file on top of the Haskoin Store API.",
    longDescription: "Compass MEM gives a live view into the BCH mempool and recent blocks, pulling transaction IDs and batch transaction detail directly from Haskoin Store.",
    whyBuilt: "A lightweight, dependency-free way to watch mempool and recent-block activity without a full block explorer's overhead.",
    features: [
      "Live mempool transaction view",
      "Recent block browsing (height-based, avoiding hash-walking)",
      "Batch transaction detail fetching"
    ],
    dataSources: "Haskoin Store API",
    whatsNext: "Needs continued maintenance as the Haskoin Store API evolves, and community feedback on which additional views would be useful.",
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
    description: "A BCH whale-monitoring dashboard tracking large on-chain movements, built on Haskoin and CoinPaprika.",
    longDescription: "Compass Whale scans blocks (via Haskoin's best-block and hash-walk endpoints, batched through the transactions endpoint) looking for large BCH movements, with a dedicated visual language for whale alerts. Its known-address watchlist ships intentionally empty rather than pre-filled with unverified data.",
    whyBuilt: "Large BCH transactions are visible on-chain but not easy to notice without dedicated tooling — this surfaces them.",
    features: [
      "Block-scanning whale detection",
      "Animated alert UI for large movements",
      "Empty-by-default known-address list (no fabricated whale data)"
    ],
    dataSources: "Haskoin (block/transaction data), CoinPaprika (pricing)",
    whatsNext: "Needs a populated, verified known-address list and continued monitoring-accuracy work.",
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
    description: "A CashTokens directory and ledger, sourced live from TokenStork and Paytaca BCMR, with no backend database of its own.",
    longDescription: "CashTokens Ledger is a searchable, sortable, filterable directory of CashTokens: header stats (tracked count, burned count, new tokens in 24h/7d, indexed block height), a token detail panel (top holders, NFT instances, history chart, explorer links), and hot/leaderboard views by holders and UTXOs. TokenStork is the source of truth for token data; Paytaca BCMR enriches it with metadata. Both are proxied through Vercel serverless functions since neither sends CORS headers for direct browser access.",
    whyBuilt: "CashTokens needed a dedicated, UTXO-aware directory that reflects how tokens actually work on Bitcoin Cash, distinct from a generic token-price tracker.",
    features: [
      "Sortable/searchable/filterable token table with pagination",
      "Token detail panel: top holders, NFT instances, history chart",
      "Recently-updated and top-by-holders/top-by-UTXOs leaderboards",
      "Aggressive client-side caching for instant cached-then-refresh loading",
      "Server-side icon proxy that blocks private/local network addresses for safety"
    ],
    dataSources: "TokenStork API, Paytaca BCMR",
    whatsNext: "Continued hardening of the CORS-proxy layer and expansion of token coverage.",
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
    description: "A CashTokens explorer and ecosystem atlas — built to explain CashTokens' real-world use cases without requiring blockchain expertise.",
    longDescription: "This is the educational counterpart to CashTokens Ledger: a hero dashboard, a token explorer, a trending-tokens section, and a real-world-use-case section, deliberately designed to avoid reading like a speculative trading or meme-coin platform. It includes a curated example token atlas (illustrative) alongside real BCH API data through Vercel serverless functions proxying Chaingraph, mainnet.cash, Haskoin, and CoinPaprika, plus BCH WalletConnect (wc2-bch-bcr) integration points for wallets like Cashonize, Paytaca and Zapit.",
    whyBuilt: "CashTokens are powerful but unfamiliar to most people outside BCH development circles — this exists to make the concept and its real-world uses approachable.",
    features: [
      "Hero dashboard with stat cards",
      "Token explorer with search/filter and a token detail page",
      "Trending tokens section",
      "Real-world use-case section: loyalty, collectibles, event tickets, membership, community rewards",
      "WalletConnect (wc2-bch-bcr) integration points"
    ],
    dataSources: "Chaingraph, mainnet.cash, Haskoin, CoinPaprika (via serverless proxy)",
    whatsNext: "API routes need configuration fixes (a prior Vercel root-directory/package.json issue affected live data), and the curated example atlas is intentionally illustrative rather than exhaustive.",
    liveUrl: "https://cash-tokens.vercel.app/#/",
    githubUrl: "https://github.com/alberdioni8406/CashCompass-Tokens",
    needs: null,
    supportNeeded: ["funding", "feedback"]
  }
];

const STATUS_LABELS = {
  finished: "Finished",
  "nearly-finished": "Nearly Finished",
  beta: "Beta",
  "in-development": "In Development",
  "needs-funding": "Needs Funding",
  archived: "Archived"
};

const CATEGORY_LABELS = {
  main: "Wider Ecosystem",
  defi: "BCH DeFi",
  community: "BCH Community"
};

const SUPPORT_LABELS = {
  feedback: "Needs feedback",
  funding: "Needs funding",
  users: "Needs users"
};
