# Edmond Ilbawi Portfolio

This portfolio is configured as a fully static Next.js export for GitHub Pages.

## Public routes

- `/`
- `/21-loaded/`
- `/stable/`

The deployed site contains no backend, API, admin dashboard, database, or required environment variables.

## Build

```bash
npm ci
npm run build
```

The static output is generated in `out/`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds the site and publishes the `out` directory through GitHub Pages. It can run on pushes to `main` or manually through `workflow_dispatch`.

The portfolio is published at `https://edmondilbawi.com/`. The static export uses root paths and includes `public/CNAME` for the custom domain.

Custom-domain updates are published through the same GitHub Pages deployment workflow.

No deployment is performed by the local build command.
