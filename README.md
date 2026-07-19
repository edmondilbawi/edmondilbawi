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

The temporary site URL is `https://edmondilbawi.github.io/edmondilbawi/`. The export uses the `/edmondilbawi` base path and does not include a custom-domain `CNAME` file.

After `edmondilbawi.com` is purchased, remove the project `basePath` and `assetPrefix` configuration, remove the matching public-path prefix mapping, and restore `public/CNAME` with the custom domain.

No deployment is performed by the local build command.
