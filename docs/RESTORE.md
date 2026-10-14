# Restore and operate Peak Male

## Recover the source and history
From the extracted recovery package:

```sh
git clone peak-male-history.bundle peak-male
cd peak-male
git log --oneline
```

Expected latest commit: `f9df50332fcba52b0a566d8e357323a93b319dac` (atlas). Previous commit: `b187adbd13d8000c88ead8681d01071f3f0887a5` (wire).

Alternatively, use the `source/` directory for a source-only recovery. The bundle does not contain credentials or the original checkout's Git configuration.

## Upload to GitHub while retaining history
Create an empty repository under your account, then inside the recovered clone:

```sh
git remote rename origin recovery-bundle
git remote add origin https://github.com/YOUR-ACCOUNT/peak-male.git
git push -u origin main
```

Copy this package's docs and archive README into the repository, preserving the original starter README under a different name if desired. Commit those as a subsequent archival documentation commit. Use your own GitHub authentication; no credentials are in this export.

## Local development
The original package declares Node >=22.13.0, pnpm 11.25.0, React 19, Vinext, Vite and Cloudflare Workers. Preserve the pinned lockfile; use a Node version supported by the declared package manager. See `source/README.md` for original starter details.

With an appropriate Node/pnpm installation:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm start
```

These restoration commands were derived from the checked-in scripts and were not freshly executed during export. The project includes its own scripts and Sites Vite build plugin. Do not copy managed-machine execution state; ordinary local development should use the portable execution profile. Check `scripts/execution-profile.mjs` if environment-specific launch behavior occurs.

## Hosting after deleting the Site
The application contains server behavior at `/api/wire`; it is not a GitHub Pages-only static site. It targets a Cloudflare Workers-compatible runtime. Provision a new deployment and configure the built Worker/assets for your hosting account. If using Sites again, register a new Site and replace the deleted project's ID in `.openai/hosting.json`. The old ID is retained solely as provenance. A GitHub repository does not itself host this server endpoint.

No production runtime variables were configured at export. No D1 or R2 bindings were configured. The API needs outbound HTTPS access to api.crossref.org; it uses a 15-second request timeout and 15-minute cache headers. The browser refreshes the homepage feed every 15 minutes while open. There is no unattended crawler.

## Browser bookmarks
The homepage saves DOI identifiers under localStorage key `peak-saved`. They remain tied to the old browser origin and are NOT included. If they matter, copy them before clearing browser data or losing access to the old origin. They will not automatically follow a new deployment URL.

## Verification
Use the inventory to compare SHA-256 hashes after extraction. `git bundle verify peak-male-history.bundle` checks the bundle; cloning it and comparing HEAD confirms the recovered source revision. Both saved Site versions correspond to commits in the bundle.
