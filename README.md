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

The intended custom domain is `edmondilbawi.com`. The `public/CNAME` file includes that domain and is copied into the static export. DNS will be configured only after the repository and Pages deployment are ready.

No deployment is performed by the local build command.
