# BCHtools.cash — Cypherpunk Tool Universe

A living collection of independent Bitcoin Cash tools.

Live: **https://bchtools.cash**

## What this is

Not a generic crypto directory. A multi-page experience:

- **Home** — transmission / orientation
- **The Tools** — full filterable collection
- **Finished** — ideas that became real
- **In the Lab** — active experiments
- **Awaiting Signal** — projects that need a push
- **Highlighted** — editorial picks
- **CASHRUSH** — play first, discover the rest later
- **Fund Me Tools** — ongoing support, no deadline
- **About** — independent building

## Architecture

Static HTML + shared CSS/JS. No framework. No backend.

```
index.html, tools.html, finished.html, lab.html,
awaiting.html, highlighted.html, cashrush.html,
fundmetools.html, about.html
css/main.css
js/data.js      — PROJECTS, FUNDRAISER, SUPPORT_FUNDED, FEATURED_SLUG…
js/common.js    — cards, modal, nav, donations, QR
vercel.json
```

## Fundraiser

Primary BCH:

`bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040`

Token-aware address remains available.

Fund Me Tools has **no campaign end date**.

## Data

Edit `js/data.js` to:

- Add / update tools
- Change `FEATURED_SLUG` or `HIGHLIGHTED_SLUGS`
- Update `SUPPORT_FUNDED` notes
- Adjust `FUNDING_STATUS.priorities`

## Deploy

Push to GitHub → Vercel (static). Or open any HTML file locally.
