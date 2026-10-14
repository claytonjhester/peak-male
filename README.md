# Peak Male — complete source recovery package

Exported 2026-10-14 UTC before planned Sites deletion. GitHub upload is pending; this archive is the independent recovery copy.

## Contents
- `source/`: all 110 tracked project files from source commit `f9df50332fcba52b0a566d8e357323a93b319dac`, including application code, anatomical PNGs, component library, lockfile, configuration, build plugin and scripts. See INVENTORY.json for the authoritative file count and hashes.
- `peak-male-history.bundle`: complete available Git history (two commits), verified with `git bundle verify`.
- `docs/site-metadata.json`: sanitized Site configuration and saved-version identifiers. No authentication credentials included.
- `docs/PRODUCT.md`: intended product, implemented features and unfinished work.
- `docs/RESTORE.md`: recovery and running instructions, plus hosting considerations.
- `INVENTORY.json`: SHA-256 hashes for all files in this package except the inventory itself.

The original Site has NOT been deleted or modified by this export. Source extraction and Git bundle verification passed. No new build or live-feed functionality test was performed during archival. The last recorded successful Site deployment is version 2.

## What is not included
Installed dependencies, disposable build output, server logs, hosted access control and the original Site URL's continued operation are not preserved as services. Dependencies are reproducible from the lockfile subject to registry availability. There is no configured D1 database or R2 file bucket, and the runtime environment list is empty. Browser-local bookmarks are not available to this export. The external Crossref research corpus is fetched on demand, not stored by the application. Saved deployment binaries are not included; source history for both versions is included.

Restore Git history with `git clone peak-male-history.bundle peak-male`. See docs/RESTORE.md before hosting elsewhere.
