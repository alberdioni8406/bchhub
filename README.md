# BCH Builder Compendium

A living compendium of everything built for the Bitcoin Cash ecosystem by [alberdioni8406](https://github.com/alberdioni8406).

Live: _(deploy and add URL here)_

## What it is

Not a portfolio — a BCH Builder Hub. Every project gets a status (Finished, Beta / Active Development, Unfinished / Needs Support, Archived), a category (BCH Main Ecosystem or BCH DeFi), and a set of tags. Visitors can filter, search, read a full detail panel per project, visit the live app, inspect the source, and support the work.

## Architecture

Plain HTML/CSS/vanilla JS. No framework, no build step — matches every other project in this ecosystem.

```
index.html   — page structure
style.css    — design system (dark BCH theme, Space Grotesk + Inter + JetBrains Mono)
data.js      — PROJECTS array: the single source of truth for every card/filter/detail panel
app.js       — rendering, filtering, search, modal, QR code, copy-to-clipboard
```

## Adding a new project

Add one object to the `PROJECTS` array in `data.js`. Nothing else needs to change — the grid, filters, search, and detail modal all read from this array.

```js
{
  name, slug, status, category, tags,
  description, longDescription, whyBuilt,
  features, dataSources, whatsNext,
  liveUrl, githubUrl, supportNeeded
}
```

`status` is one of `finished | beta | unfinished | archived`.
`category` is one of `main | defi`.

## Data integrity

No invented users, downloads, transactions, funding, revenue, partnerships, launch dates, or performance stats. Where information isn't verified, it's left out rather than guessed.

## Deploying

Static site — deploy as-is on Vercel (or any static host). No environment variables or serverless functions required.

## Support

`bitcoincash:qrtv37u522gz8a5lezfqk5vukly93cu7gc8tn09040`
