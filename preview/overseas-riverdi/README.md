# DaMing overseas English preview

Static site. No build step. No shopping backend.

## Cloudflare Pages direct upload

Upload **this folder** so `index.html` is at the site root:

`preview/overseas-riverdi/`

In the Pages dashboard, create a **new** project (do not use production project `daming-touch-preview`) and direct-upload the contents of this folder. Do not bind a custom domain from this preview.

Every HTML page sends `noindex, nofollow`. `robots.txt` disallows crawling. `_headers` adds `X-Robots-Tag` for Cloudflare.

## Pages

- `index.html` — home
- `products.html` — product overview and reference figures
- `applications.html` — requirement sets
- `about.html` — company facts and certificate copies
- `notes.html` — engineering notes
- `contact.html` — inquiry
- `privacy.html` — inquiry delivery
- `404.html`

Inquiries post to the existing FormSubmit hash used by the current DaMing site (delivery to sgk@touch-displays.com). Direct mail: chloe@touch-displays.com and sgk@touch-displays.com.
