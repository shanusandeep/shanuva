# CLAUDE.md

Personal landing site for shanuva.com. Static HTML/CSS/JS in `site/` — no
framework, no build step. Deployed as a Caddy static-file container on the
shared shanuva server (Contabo), behind the shared edge Caddy.

## Rules

- Keep it dependency-free: hand-written HTML/CSS/JS only. Fonts come from
  Google Fonts; everything else is local.
- Design system lives in `site/styles.css` CSS variables (warm near-black +
  amber; Bricolage Grotesque + IBM Plex Mono). Stay inside it.
- Project cards in `index.html` follow one repeated structure — copy an
  existing card verbatim when adding a project, and add a matching WebP to
  `site/assets/shots/` (1200px wide, `cwebp -q 82`).
- `docker-compose.prod.yml` joins the external network `repo_dailydose-net`;
  the edge Caddyfile at `/srv/dailydose/Caddyfile` routes `shanuva.com` to
  `shanuva-web:80`. Changing container name or port means updating that file
  too (snippet: `ops/caddy-snippet.txt`).
- Deploy by running `ops/deploy.sh` on the server, never by hand-building.
