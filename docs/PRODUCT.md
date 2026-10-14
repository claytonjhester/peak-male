# Peak Male product and implementation record

## Editorial premise
A male flourishing, human performance, aesthetics and capability publication organized around integrated development: strength, endurance, mobility, coordination, health, appearance, skill, intellect, character, social competence, creativity and longevity. “Peak” is not a single maximal muscle mass, body-fat level, hormone concentration, wealth or dominance score.

## Implemented
- `/`: black/ivory/yellow research desk with Wire, Body, Performance, Health, Mind, Sex, Style, Skills, Culture, History, Longevity and Lab navigation.
- Desk-specific Crossref queries, text filtering, evidence filtering, manual refresh, DOI source links and browser-local saved article identifiers.
- Twelve-capacity matrix linking to research searches.
- Evidence vocabulary: Established, Probable, Emerging, Contested, Tradition, Experiment, Unreviewed. Automatically retrieved papers remain Unreviewed.
- Three starter dossier frameworks: Shoulders, The capable body, The ideal tested.
- `/atlas`: interactive front/back anatomical plates, 13 clickable muscle regions, Anatomy/Movement/Appearance/Research panels, region search and contributor highlighting for pull-up, push-up, squat and running.
- `/api/wire`: server-side Crossref journal metadata retrieval, desk and atlas-region query mapping, date/source/DOI normalization, error response, cache headers. Research results are automated matches rather than editorial summaries.

## Atlas regions
Neck; shoulders; chest; upper arms; forearms and grip; abdomen and waist; front thighs; shins and ankles; upper back; lats and mid-back; hips and glutes; back thighs; calves.

## Important files
- app/page.tsx: homepage, matrix, dossiers, filtering, saved IDs.
- app/atlas/page.tsx: interactive atlas interface.
- app/atlas/regions.ts: region descriptions, marker positions, research queries and movement mappings.
- app/api/wire/route.ts: Crossref API integration.
- app/globals.css: visual theme and responsive layout.
- public/atlas/front.png and back.png: bundled anatomical plates.
- vite.config.ts, build/sites-vite-plugin.ts and scripts/: runtime/build integration.
- pnpm-lock.yaml: dependency versions.

## Intended expansion, not implemented
PubMed, OpenAlex, Semantic Scholar, preprint and RSS sources; independent creators, blogs, videos, podcasts and tools; deduplication and persistent storage; background ingestion; structured population/intervention/outcome fields; reviewed confidence and novelty assessments; historical analogues; full living dossiers; What Changed, Signals, Field Reports, Old Wisdom/New Science, Peak Body Watch and Male Health Watch. No AI evidence-synthesis pipeline is present.

The atlas is 2D. Rotatable 3D, skeletal/organ/system layers, animated movement, physique adaptation comparison and simulation were discussed but are not implemented. Movement highlights are regional contributors, not force or activation measurements.

## Asset provenance
The original app credits Henry Vandyke Carter / Gray's Anatomy and whole-body collages by Mikael Häggström; Wikimedia Commons identifies the plates as public domain. Preserve credits and consult the source pages for provenance:
- https://commons.wikimedia.org/wiki/File:Muscles_anterior.png
- https://commons.wikimedia.org/wiki/File:Muscles_posterior.png

Anatomy reading links point to OpenStax. Third-party component/build license files are retained. No new blanket license is asserted over the user's project.

## Data limits
A paper's publication is not evidence of an established finding. Crossref publication dates may include forthcoming work. Queries may return tangential results. Dossiers are frameworks, not completed systematic reviews. There is no patient data or user medical profile stored by the app.
