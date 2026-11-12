# Portfolio World

Juan's personal portfolio, designed as a 16-bit side-scrolling game world: modern UI components embedded in a retro game layout, fusing his two identities — building for the internet and running.

## Language

### Modes

**Browse Mode**:
The default experience: a normally scrollable, game-styled page where all content is reachable without playing.
_Avoid_: normal mode, static mode, recruiter mode

**Play Mode**:
The opt-in experience entered via Press Start, where keyboard input drives the Runner through the World instead of scrolling.
_Avoid_: game mode, interactive mode

**Press Start**:
The visible invitation on the Title Screen that switches a visitor from Browse Mode to Play Mode.

### World

**World**:
The single continuous spatial layout holding all content; scrolling in Browse Mode and running in Play Mode traverse the same World.
_Avoid_: map, page, site

**Zone**:
One themed region of the World corresponding to one content section (About, Skills, Experience, Projects, Running, Contact).
_Avoid_: section, screen, area

**Runner**:
The pixel-art avatar of Juan: in Play Mode his position in the World *is* the scroll position; in Browse Mode he runs in place on the Title Screen track. The one asset that must be unmistakably Juan.
_Avoid_: player, character, sprite (for the concept; "sprite" is fine for the image asset)

### Zones

**Title Screen**:
The hero Zone: Runner mid-stride, tagline, and Press Start.
_Avoid_: hero, landing

**Stats Screen**:
The About Zone, framed as a character/player card.
_Avoid_: bio, about section

**Inventory**:
The Skills Zone, framed as an item inventory. Items carry no self-assigned ratings: each shows its field record — the quests and levels it was used in — and the current core kit (the stack the Stats Screen bio names) is marked EQUIPPED.
_Avoid_: skills list, skill bars, percentages, levels

**Quest Log**:
The Experience Zone: past roles as completed quests, the current role as the active quest.
_Avoid_: resume, work history

**Level Select**:
The Projects Zone: each project a level card with cartridge art.
_Avoid_: project grid, gallery

**Records Screen**:
The Running Zone: PRs, mileage, and races rendered as a game records table, fed by Run Data.
_Avoid_: Strava section, fitness section

**Save Point**:
The Contact Zone: the contact form framed as saving your progress / NPC dialog.
_Avoid_: contact section, footer form

### Play Mode mechanics

**Gel**:
The World's collectible and the run's score: an energy gel drawn as a small gold pixel packet, streamed endlessly at the Runner (ground runs and jump arcs) while he runs, faster as the run goes on. The count accumulates without cap, survives Esc within a visit, and resets on Retry or page load. Play Mode only; invisible in Browse Mode. The Save Point acknowledges the score.
_Avoid_: coins, points, pickups

**Oncoming Traffic**:
Pixel cars and motorcycles that pass right-to-left through the Runner's lane while he is running — slow at first, faster as the run clock builds; jumped over or they cause a Stumble. Decorative on the Title Screen in Browse Mode; a hazard only in Play Mode, and the road empties when the Runner stands still. Vehicle colors are identities, not theme roles; headlights follow the sky (lit at Dusk). The World's scroll speed never changes: difficulty ramps the stream, Zones stay readable.
_Avoid_: enemies, obstacles (they never block World progress)

**Stumble**:
What a Traffic hit costs: one notch off the Health Bar, behind a brief invincibility flash — no knockback, no lost Gels, no lost World progress.
_Avoid_: death, damage numbers

**Health Bar**:
Three notches of HP in the Play Mode HUD. It never recovers mid-run; at zero the run ends in Game Over, where Retry starts a fresh run (full health, score zero, slow stream) and the Runner's place in the World is kept.
_Avoid_: lives, hearts, respawn

### Assets & data

**Cartridge Art**:
The pixel-art cover image representing one project on its level card.
_Avoid_: thumbnail, cover image

**Run Data**:
Juan's running stats (PRs, mileage, races) as a baked JSON snapshot (data/run-data.json), not fetched live by visitors. Refreshed by requesting the Huawei Health privacy export (his Watch GT5 Pro records runs there) and running scripts/import-huawei-data.mjs on the zip; races and official PRs are hand-kept in data/run-overrides.json. Strava was the original source but its API moved behind a paid subscription in June 2026.
_Avoid_: live stats, Strava feed

**Sunset-Runner Palette**:
The project's own 16-bit palette, deliberately not borrowed from any existing game. It has two skies: **Dusk** (the default dark theme: warm oranges and purples over dark UI chrome) and **Dawn** (the light theme: an early-morning sunrise of pale blues, rose, and amber). Palette tokens are roles named after the dusk theme (`dusk-950` = page background, `cream-100` = primary text, …) whose values live as CSS variables in index.css; `html.dawn` re-points every role.
_Avoid_: synthwave, vaporwave, dark mode/light mode (say Dusk and Dawn)
