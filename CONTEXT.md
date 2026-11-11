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
The pixel-art avatar of Juan whose position in the World mirrors scroll progress; the one asset that must be unmistakably Juan.
_Avoid_: player, character, sprite (for the concept; "sprite" is fine for the image asset)

### Zones

**Title Screen**:
The hero Zone: Runner mid-stride, tagline, and Press Start.
_Avoid_: hero, landing

**Stats Screen**:
The About Zone, framed as a character/player card.
_Avoid_: bio, about section

**Inventory**:
The Skills Zone, framed as an item inventory or skill tree with leveled items.
_Avoid_: skills list

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

### Assets & data

**Cartridge Art**:
The pixel-art cover image representing one project on its level card.
_Avoid_: thumbnail, cover image

**Run Data**:
Juan's running stats (PRs, mileage, races) as a baked JSON snapshot refreshed on a schedule from Strava, not fetched live by visitors.
_Avoid_: live stats, Strava feed

**Sunset-Runner Palette**:
The project's own 16-bit palette, deliberately not borrowed from any existing game. It has two skies: **Dusk** (the default dark theme: warm oranges and purples over dark UI chrome) and **Dawn** (the light theme: an early-morning sunrise of pale blues, rose, and amber). Palette tokens are roles named after the dusk theme (`dusk-950` = page background, `cream-100` = primary text, …) whose values live as CSS variables in index.css; `html.dawn` re-points every role.
_Avoid_: synthwave, vaporwave, dark mode/light mode (say Dusk and Dawn)
