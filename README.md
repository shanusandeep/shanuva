# shanuva.com

Personal landing site for Sandeep Shanu — showcases the live projects hosted on
the shanuva server and elsewhere. Live at https://shanuva.com.

Pure static HTML/CSS/JS, no build step. The whole site is `site/`.

## Layout

- `site/` — the site itself (`index.html`, `styles.css`, `script.js`, `assets/`)
- `site/assets/shots/` — WebP screenshots of each showcased project
- `Dockerfile` — `caddy:2-alpine` serving `site/` as static files on `:80`
- `docker-compose.prod.yml` — container `shanuva-web`, joins the shared edge
  network (`repo_dailydose-net`) so the edge Caddy can reach it
- `ops/deploy.sh` — two-stage deploy script, run **on** the server
- `ops/caddy-snippet.txt` — the site block for the shared edge Caddyfile

## Local preview

Any static server works:

```
python3 -m http.server 8641 --directory site
```

## Production (shanuva/Contabo server)

- Checkout: `/srv/shanuva/repo`
- Caddy route: `shanuva.com → reverse_proxy shanuva-web:80` (see
  `ops/caddy-snippet.txt`, lives in `/srv/dailydose/Caddyfile`);
  `www.shanuva.com` redirects to the apex.
- Deploy: `BRANCH=main /srv/shanuva/repo/ops/deploy.sh`

## Refreshing project screenshots

Screenshots were captured at 1280×800 (2× DPR) with Playwright and converted
with `cwebp -q 82 -resize 1200 0`. Re-capture whenever a showcased site gets a
facelift, and drop the new `.webp` into `site/assets/shots/`.
