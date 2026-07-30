# shanuva.com — static landing site served by Caddy.
FROM caddy:2-alpine
COPY ops/Caddyfile.internal /etc/caddy/Caddyfile
COPY site/ /srv/www/
