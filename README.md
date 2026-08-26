# BCHtools.cash

A visual space to showcase **BCH tools** for the Bitcoin Cash community — part of **CashCompass**.

Finished products and unfinished work are both listed, classified as:

- **Wider Ecosystem** — network, payments, CashTokens, explorers, community, infrastructure  
- **BCH DeFi** — liquidity, trading, stablecoins, token markets  

## Community funding

All tools (finished or not) depend on community support. Custom domains, hosting, APIs, maintenance, and development are not free. Donations help decide what stays online and what gets the next round of work.

**Donation address:**  
`bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040`

## Architecture

Plain HTML / CSS / vanilla JS. No framework, no build step.

```
index.html   — page structure
style.css    — design system (dark BCH theme)
data.js      — PROJECTS array (single source of truth)
app.js       — rendering, filters, search, modal, QR, copy
```

## Adding a tool

Add one object to the `PROJECTS` array in `data.js`. Nothing else needs to change.

```js
{
  name, slug, status, category, tags,
  description, longDescription, whyBuilt,
  features, dataSources, whatsNext,
  liveUrl, githubUrl, supportNeeded
}
```

- `status`: `finished` | `beta` | `unfinished` | `archived`  
- `category`: `main` (Wider Ecosystem) | `defi` (BCH DeFi)

## Maintainer

**alberdioni8406**

- X: https://x.com/alberdioni8406_  
- Telegram: https://t.me/alberdioni8406  
- Email: alberdioni8406@proton.me  
- GitHub: https://github.com/alberdioni8406  

## Deploy

Static site — deploy as-is on Vercel or any static host. No env vars required for the frontend.

Suggested domain: **bchtools.cash** (or point an existing domain at this static output).
