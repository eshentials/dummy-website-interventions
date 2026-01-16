# Research Deliverable (Treatment)

This document is for researchers only. It is separate from participant-facing UI.

## Page-by-page UI description

- **Home (Flash Sales)**: Sticky flash-sale banner, dense deal grid, task checklist, and direct links to subscription, privacy, and confirmation pages.
- **PLP**: High-density grid of products with badges, discount blocks, and simulated scarcity banner with warning.
- **PDP**: Product image panel with prompts, countdown timer, stock/viewing indicators, pre-selected add-on with disclosure, and review checkpoint links.
- **Cart**: Exit-intent modal with reflection pause, undo removal flow, and checkout CTA.
- **Checkout**: Progress-based pressure cue, upfront hidden-cost disclosure, reflection pause before ordering, and balanced CTA intervention block.
- **Subscription**: Subscribe CTA with confirmshaming decline option plus neutral opt-out intervention; cancellation flow with asymmetric friction and direct-cancel intervention.
- **Privacy & Data Settings**: Ambiguous privacy copy plus tooltip and clear disclosure panel; optional toggles.
- **Final Confirmation**: Final order summary with confirm and undo options.

## Product list with image prompts

- AeroPhone X1 (Smartphones) — Prompt: High-resolution studio image of a modern smartphone with a slim bezel, matte graphite finish, neutral background, realistic lighting, e-commerce product photography style, no logos
- NebulaBook 14 (Laptops) — Prompt: High-resolution studio image of a thin 14-inch laptop opened at a slight angle, silver finish, neutral background, realistic lighting, e-commerce product photography style, no logos
- SilentWave Pro (Wireless Earbuds) — Prompt: High-resolution studio image of a modern wireless earbud case and earbuds, black matte finish, minimalist background, realistic lighting, e-commerce product photography style, no logos
- PulseBand 2 (Smartwatches) — Prompt: High-resolution studio image of a sleek smartwatch with a dark band, neutral background, realistic lighting, e-commerce product photography style, no logos
- VoltCore 20K (Power Banks) — Prompt: High-resolution studio image of a rectangular power bank with subtle LED indicators, dark blue finish, neutral background, realistic lighting, e-commerce product photography style, no logos
- ArcCharge 65W (Accessories) — Prompt: High-resolution studio image of a compact wall charger with two USB-C ports, matte white finish, neutral background, realistic lighting, e-commerce product photography style, no logos
- OrbitCase Armor (Accessories) — Prompt: High-resolution studio image of a rugged smartphone case with textured edges, charcoal finish, neutral background, realistic lighting, e-commerce product photography style, no logos
- HushPods Mini (Wireless Earbuds) — Prompt: High-resolution studio image of compact wireless earbuds in a small charging case, light grey finish, neutral background, realistic lighting, e-commerce product photography style, no logos

## Interaction logic (instrumentation)

- **Decision timestamps**: Logged on purchase, subscription, cancellation, and final confirmation actions.
- **Hover duration**: Logged for product cards, PDP image panel, and primary CTAs.
- **Choice reversals**: Logged for undo actions in cart and confirmation.
- **Intervention triggers**: Logged for countdown timer pauses and exit-intent modal display.
- **IDs**: All critical buttons, timers, and modals have explicit IDs for instrumentation.

## Dark pattern → intervention mapping

- Pre-selected add-on → Explicit label + tooltip + side-by-side comparison
- Visual salience bias in CTAs → Balanced CTA block with equal weight
- Confirmshaming language → Neutral opt-out alternative
- Hidden costs revealed late → Upfront fee disclosure
- Ambiguous privacy wording → Tooltip + clear disclosure
- Countdown timer → Timer disclosure + hover pause
- False scarcity indicator → Warning label
- Exit-intent popup → Reflection pause + review cue
- Progress-based pressure cue → Review checkpoint links
- Asymmetric friction → Direct cancel intervention button

## Ground truth (tasks)

| Task | Static dark pattern | Temporal dark pattern | Intervention applied | Manipulative choice | User-beneficial choice |
| --- | --- | --- | --- | --- | --- |
| Purchase a product | Pre-selected add-on on PDP | Countdown timer on PDP | Pre-selected label + timer disclosure + pause | Keep add-on + rush purchase | Deselect add-on + review alternatives |
| Decline add-ons | Pre-selected add-on on PDP | Countdown timer on PDP | Tooltip + comparison + pause | Keep add-on | Uncheck add-on |
| Subscribe to a service | Confirmshaming decline option | None | Neutral opt-out option | Subscribe immediately | Decline subscription neutrally |
| Attempt to cancel / opt-out | Asymmetric friction cancellation flow | Reflection pause in exit-intent modal | Direct cancel intervention | Stay subscribed | Cancel directly |
| Manage privacy settings | Ambiguous privacy wording | None | Clear disclosure + tooltip | Enable analytics | Disable analytics |
| Final confirmation | Visual salience bias in checkout CTA | Progress-based pressure cue in checkout | Balanced CTA block + review checkpoint | Confirm immediately | Undo / review before confirming |
