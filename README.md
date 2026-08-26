# BCHtools.cash

A visual space to showcase **BCH tools** for the Bitcoin Cash community — part of **CashCompass**.

Live: **https://www.bchtools.cash/**

Finished products and unfinished work are both listed, classified as:

- **Wider Ecosystem** — network, payments, CashTokens, explorers, community, infrastructure  
- **BCH DeFi** — liquidity, trading, stablecoins, token markets  

## Community funding

All tools (finished or not) depend on community support. Custom domains, hosting, APIs, maintenance, and development are not free.

**BCH:** `bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040`  
**Token-aware:** `bitcoincash:zz7pjvq99kylyvns6fjmyawjhxwnucgn2qwyae2ye9`

## What's on the site

- Cost transparency ("what support covers" / "without support")
- Featured tool of the month (`FEATURED_SLUG` in `data.js`)
- Dual donation addresses + QR codes
- Per-tool: Open · Source · Details · **I use this** (localStorage) · Feedback (mailto) · Share X / Telegram
- Unfinished tools invitation block
- "What support has funded" list (edit `SUPPORT_FUNDED` in `data.js`)
- Open-source CTAs for tools and this site

## Architecture

100% static. No framework, no build step, no new dependencies beyond the existing QRCode CDN script.

```
index.html   — structure
style.css    — design system
data.js      — PROJECTS, FEATURED_SLUG, SUPPORT_FUNDED, BUILDER
app.js       — render, filters, modal, participate, QR
```

## Rotate featured tool

In `data.js` set:

```js
const FEATURED_SLUG = "cauldron-radar"; // any PROJECTS slug
```

## Add a tool

Add one object to `PROJECTS` in `data.js`.

## Maintainer

**alberdioni8406**

- X: https://x.com/alberdioni8406_
- Telegram: https://t.me/alberdioni8406
- Email: alberdioni8406@proton.me
- GitHub: https://github.com/alberdioni8406
- This site: https://github.com/alberdioni8406/bchhub

## Deploy

Static — push to the GitHub / Vercel project behind **bchtools.cash**. No env vars required for the frontend.
