# BCHtools.cash

A community-supported home for independent Bitcoin Cash tools.

Live: **https://bchtools.cash**

## Positioning

These tools are free to use. Keeping them alive isn’t free.

Domains, hosting, APIs, maintenance and development time all cost something. Community support helps keep the collection online, maintained and growing.

## Architecture

100% static. No framework, no build step, no backend.

```
index.html   — structure
style.css    — design system
data.js      — PROJECTS, FUNDRAISER, SUPPORT_FUNDED, FUNDING_STATUS, BUILDER
app.js       — render, filters, modal, participate, QR, copy
vercel.json  — deployment
```

## Fundraiser

Primary BCH address (do not replace):

`bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040`

Token-aware address remains available for CashTokens.

## Tools

- **Finished** — including Ghostroom (BCH-enabled anonymous chat)
- **Nearly Finished** — BCHBooks (ready for custom domain + final polish)
- **Beta / In Development** — remaining tools in the pipeline

Status and content live in `data.js`. Rotate the featured tool via `FEATURED_SLUG`.

## Local preview

Open `index.html` in a browser, or serve the folder with any static server.
