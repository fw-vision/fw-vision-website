---
title: "Listmonk subscribe integration"
type: guide
status: active
created_date: 2026-09-27
updated_date: 2026-09-27
---

# Listmonk subscribe integration (fw.vision)

Backend service on FWVISION is available. Use these values when implementing the Signals newsletter form.

## Endpoints

| Item | Value |
| --- | --- |
| Public base | `https://fwvision-elitemini-series.tail0f7891.ts.net` |
| Subscribe | `POST /api/public/subscription` |
| List | `fw-vision-signals` |
| List UUID | `2e695404-3067-4d75-9e09-e618b0b2b39c` |

## Build env

```text
PUBLIC_LISTMONK_URL=https://fwvision-elitemini-series.tail0f7891.ts.net
PUBLIC_LISTMONK_LIST_UUID=2e695404-3067-4d75-9e09-e618b0b2b39c
```

Safe for GitHub Pages. Do not use Admin credentials in the site.

## Request body

```json
{
  "email": "reader@example.com",
  "name": "Optional Name",
  "list_uuids": ["2e695404-3067-4d75-9e09-e618b0b2b39c"]
}
```

Double opt-in: after a successful POST, tell the reader to check email to confirm. Confirmation mail depends on SMTP (for example Resend) being configured in Listmonk Admin. The public form must still accept subscriptions when mail is not yet configured; do not claim delivery if that is uncertain.

## CORS (resolved 2026-09-27)

Browser `fetch` from allowed origins works. Listmonk CORS is driven by Admin setting `security.trusted_urls` (Settings → Security → Trusted URLs).

Currently allowlisted:

- `https://fw.vision`
- `https://www.fw.vision`
- `https://canada2080.org`
- `https://www.canada2080.org`
- `https://vitalicious.living`
- `https://www.vitalicious.living`
- `http://localhost:4321`
- `http://127.0.0.1:4321`
- `http://fcwang-elitemini-series.tail0f7891.ts.net:4321` (FCWANG Linux box Astro dev)
- `http://100.71.170.90:4321` (FCWANG Tailscale IP)
- `http://fwvision-elitemini-series.tail0f7891.ts.net:4321` (FWVISION Linux box Astro dev)
- `http://100.79.11.126:4321` (FWVISION Tailscale IP)

Verified: OPTIONS preflight returns `204` with `Access-Control-Allow-Origin` matching the request origin; POST from `https://fw.vision` includes CORS headers.

To add another site origin later: Listmonk Admin → Settings → Security → Trusted URLs, or update `security.trusted_urls` and restart Listmonk. Prefer exact origins over `*`.

## Related

- Infra: `repos/Personal/fcwang-tailnet-infra/team-platform/README.md`
- Vault plan: `docs/plans/2026-09-27-listmonk-newsletter-platform.md`
