# 🦅 fCMO Tactical Command Center

> **Mission Control for Fractional CMOs.** A high-speed, zero-database dashboard to track marketing stacks, software allocations, and tech costs across multiple client portfolios.

Built for speed and clarity, this dashboard replaces bloated spreadsheets with a "Heads-Up Display" (HUD) featuring instant search, tactical aesthetics, and secure client-gating.

## 🚀 Core Features

- **Zero-Database Architecture:** Powered entirely by local Markdown files and Astro Content Collections.
- **Rapid Data Ingestion:** Uses a custom Python script to instantly convert a standard `.csv` file into a fully routed database.
- **Tactical HUD UI:** "Dusty Olive" and "Safety Orange" color palette with grid-mapped backgrounds, glassmorphism cards, and live-pulse status indicators.
- **Instant Filtering:** Alpine.js powers a blazing-fast, client-side search engine. (Press `/` to engage).
- **Secure Access:** Protected by Clerk middleware to ensure client tech stacks remain confidential.

## 🛠️ The Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Server-Side Rendered)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + [Flowbite](https://flowbite.com/)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/) (CDN injected)
- **Authentication:** [Clerk](https://clerk.com/)
- **Data Pipeline:** Python (via `uv`)

## 📂 Project Structure

```text
/
├── public/                 # Static assets (favicons, logos)
├── src/
│   ├── content/
│   │   ├── tools/          # AUTO-GENERATED: Markdown files for each tool
│   │   └── config.ts       # THE LAW: Defines Zod schemas and valid Buckets
│   ├── layouts/
│   │   └── DashboardLayout.astro  # The main UI shell and sidebar
│   ├── pages/
│   │   └── index.astro     # The Command Center UI and Search Logic
│   ├── styles/
│   │   └── global.css      # Tailwind directives
│   └── middleware.ts       # Clerk Auth Gatekeeper
├── tools.csv               # THE SOURCE: Your master spreadsheet
├── import_tools.py         # THE ENGINE: Python script that reads the CSV
└── tailwind.config.mjs     # Custom tactical color palette
```
