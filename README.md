# Joyous Property Solution Nig Ltd website

Static front end for Joyous Property Solution Nig Ltd (RC 8226321), Port Harcourt, built from the Website Technical Document v1.0.

## Structure
- `index.html` home, listings, detail sections, inspection form
- `404.html` custom not-found page
- `assets/styles.css`, `assets/main.js`, `assets/favicon.svg`
- `vercel.json` security headers and caching

## Run locally
    npx serve .

## Deploy
Import the repo in Vercel (framework: Other, no build command). Add a custom domain.

## Notes
- Listings are hard-coded in `index.html`. Phase 2 moves them to Supabase with an admin login.
- The inspection form opens WhatsApp with the details prefilled. Nothing is stored.
- Plot size, title details and real photos are pending from the client.
