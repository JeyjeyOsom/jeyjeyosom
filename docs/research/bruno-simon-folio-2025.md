# Bruno Simon's folio-2025: what Roam Mode can borrow

Research for Roam Mode and the Overworld (see `CONTEXT.md`, ADR 0002 and ADR 0003). It answers one question: which parts of https://bruno-simon.com can a pixel-art, on-foot, statically hosted Overworld reuse, and which should it leave alone?

One rule applies throughout. Techniques, structure and interface patterns are fair game. Bruno Simon's models, textures, sounds, text and level layout are not, and none of them are stored in this repository.

## 1. How this was studied

| Source | What it is | How it was used |
|---|---|---|
| `brunosimon/folio-2025` at commit `70764a9` (2026-11-04), MIT licence | The site's public source: 148 files, 1.1 MB of JavaScript, HTML and Stylus | Read in full by three passes (engine and rendering; movement, physics and camera; content, interface and audio). Nothing was executed. Line-level notes are in [`folio-2025-notes/`](./folio-2025-notes/). |
| The live site, captured 2026-11-19 | What a visitor's browser actually downloads and runs | Captured with REA 6.9.0 (`rea-agents`) driving headless Chromium 158: network traffic, console, accessibility tree, storage keys, WebSocket activity, script export and step-by-step screenshots. |

The live site is the public repository. Every string literal from the repository's four content data files (achievements, projects, lab, social) appears verbatim in the live 3.8 MB bundle, and the live `index.html` was last modified two minutes before the repository's final commit.

Limits of the evidence:

- The capture machine has no WebGPU and no hardware OpenGL for a headless browser, so the site ran on its WebGL2 fallback in software. Timings of what appears on screen are therefore not representative; network sizes and order are.
- The models, textures and sounds were not downloaded from the repository. Anything decided inside a model file (how many props, where zones sit) is known only from screenshots and from names in code.
- The WebSocket server is not public. Its behaviour is inferred from the client.
- A sample of the readers' claims was re-checked by hand against the source: camera lens, yaw and distance; the 2x time scale and frame clamp; the four-minute day; the 2.5-unit prompt radius; the 78,400 grass blades; the two quality tiers; the renderer import; the vehicle body; the 81 sound references; the storage keys; the start-gesture keys; the map's twelve pins. All held.

## 2. What the live site ships

### Download

Measured on a first visit, before the visitor does anything:

| What | Files | Size | Notes |
|---|---:|---:|---|
| Main script | 1 | 3.82 MB before compression | Served gzipped; three.js, the game and the debug libraries in one file. No source map. |
| WebAssembly | 3 | 2.38 MB | Rapier physics 1.57 MB, Basis texture transcoder 0.53 MB, Draco mesh decoder 0.29 MB |
| Sounds | 42 | 1.96 MB | MP3 effects. A further 35, including the music track, load only after the start gesture. |
| Models | 23 | 1.00 MB | Draco-compressed GLB. The largest, the areas, is 639 KB. |
| Textures | 36 | 0.87 MB | KTX2. The terrain map is 350 KB; the shared colour palette is 1.5 KB. |
| Fonts, styles, analytics | 9 | about 0.3 MB | One local font, two Google fonts, Google Analytics |

That is 127 requests in about nine seconds, all of them issued up front. The lesson for the Overworld is in the proportions: the whole 3D world is under 2 MB, and code plus audio are several times that.

### Loading order

1. The document, styles, fonts and the main script.
2. The two decoders and four tiny files (22.8 KB) that are enough to draw the loading scene.
3. Forty world files in parallel, counted by a ring drawn on the ground, plus the physics engine.
4. Sound effects and the first content images.
5. A start prompt. Nothing else happens until the visitor clicks the ring or presses Enter, an arrow or W.
6. After that gesture: the music, the ambience sounds and the WebSocket connection.

### Behaviour only the live site shows

- **Renderer.** The canvas declares `three.js r187 webgpu`. Without WebGPU the console logs `WebGPU is not available, running under WebGL2 backend` and the site carries on.
- **No failure path.** When the graphics device was lost during one capture, the page stayed dark with no message and no way out.
- **Accessibility tree.** Before the start gesture it is one document containing two unnamed buttons. With the menu open, 18 of its 27 buttons have no accessible name, and the text of every menu panel is exposed at once, including the panels that are visually hidden. Projects, lab entries and career history never appear in it.
- **Storage.** `localStorage` keys `timePlayed`, `uuid` and `achievements` are written on load; six more appear in the source. Two Google Analytics cookies are set.
- **Server.** A WebSocket to a rented VPS, opened only after the start gesture, retried every two seconds while down.
- **Wasted preloads.** The four `<link rel="preload">` files are requested twice, because the code appends a cache-busting suffix the preload tags lack. Chrome warns about each one.
- **Shortcuts left in production.** `#skip` bypasses the start gesture and `#debug` opens the tuning panel.

## 3. How it is built, in one screen

Plain JavaScript with no framework. One `Game` singleton constructs about 45 subsystems in a fixed order inside a single asynchronous `init`, then a `World` builds 28 more. Every frame is one `tick` event whose listeners run in a documented priority order: time and inputs, player intent, physics, objects, player result, camera, cycles and weather, effects, areas, instancing, audio, rendering.

The renderer is three.js's `WebGPURenderer` with every material written in TSL, the node-based shader language. Physics is Rapier, used for exactly two jobs: the car and the props that can be knocked over. Everything that leads a visitor to content (entering an area, showing a prompt, crossing a race gate) is plain distance arithmetic on the ground plane.

The page itself is ordinary DOM around one canvas: a menu, three modals, a map, toasts and touch buttons. Input state, device type and mute are mirrored as classes on `<html>`, and CSS does the rest.

## 4. Catalogue of aspects

Verdicts: **Take** means the idea ports nearly as is. **Adapt** means the idea is right and the implementation changes for pixel art, a person on foot or a static host. **Skip** means it does not fit. The last column is the plan for Roam Mode: **v1** is the first version, **later** is after it, **no** is not planned.

### A. Frame, lifecycle and loading

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| One root object | A singleton owns every subsystem, built in dependency order (`Game.js`) | Adapt: type it in stages, and add the dispose and pause it lacks, because Roam Mode is entered and left | v1 |
| Ordered frame loop | One `tick` event with numeric priorities; frame time clamped to 1/30 s (`Ticker.js`) | Take. About 40 lines. Stop it when the tab is hidden or a door is open | v1 |
| 2x time scale | Physics and every tween run at twice real time | Skip. Use real seconds; copy mechanisms, never the tuned numbers | no |
| Staged loading | Four tiny files draw the first scene; forty more load behind an in-world ring (`Game.js`, `ResourcesLoader.js`) | Take. For us the first stage is the lazy code chunk itself | v1 |
| Loading indicator in the world's own style | A ring on the ground fills, with no DOM loader (`World/Intro.js`) | Adapt: add a text status for assistive technology and an error state | v1 |
| Reveal | A glowing ring opens a circular window on the world, then sweeps outward on the start gesture (`Reveal.js`) | Take. An iris is a classic 16-bit transition; a stepped CSS clip on the canvas is enough | v1 |
| One gesture, three jobs | The start gesture is consent, audio unlock and input enable at once | Take. Our entrance click already is that gesture | v1 |
| Debug panel behind a URL flag | `#debug` opens a panel with one folder per subsystem (`Debug.js`) | Take, but load the panel library only when the flag is present | v1 |

### B. Moving around

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| Named input actions | Actions such as `forward` or `interact` map to device-prefixed keys (`Keyboard.KeyW`, `Gamepad.cross`) (`Inputs/Inputs.js`) | Take. It does not know about cars, and Play Mode could share it | v1 |
| Input contexts | Six named contexts (intro, wandering, racing, cinematic, menu, modal); an action fires only if its context is active | Take, as a stack so nested layers restore correctly | v1 |
| One owner for Escape | A single class decides what Escape closes, in order (`ClosingManager.js`) | Take, as a registry so it need not import everything | v1 |
| Device-aware prompts | The last device used decides which key glyph is shown | Take when gamepad arrives | later |
| Vehicle physics | A Rapier raycast car with suspension, drift, boost and flip recovery (`Physics/PhysicsVehicle.js`) | Skip. None of it applies on foot | no |
| On-foot movement | Not present | Ours: run, sprint and jump; a circle sliding along boxes on flat ground; no engine (ADR 0003) | v1 |
| Stuck detection and respawn | A sliding window notices "input held, no distance covered"; R fades out and puts the car at the nearest spawn (`Player.js`) | Take both | v1 |
| Follow camera | Perspective lens of 25 degrees, yaw fixed at 45 degrees, fixed pitch, 15 to 30 units from a ground-level focus that trails the car with exponential smoothing (`View.js`) | Take the rig: a camera that never rotates is what lets a flat sprite work. Snap the focus to the pixel grid. Lens and yaw are look decisions | v1 |
| Zoom | Continuous, by wheel or pinch, and automatic at speed | Adapt to two or three whole-number pixel scales | later |
| Look around | Dragging slides the view; any movement key glides it home | Take, with the pan clamped to the island | v1 |
| Camera feedback | A roll kick on explosions, speed lines, slow motion | Adapt to a whole-pixel shake and sprint dust | later |
| Touch control | A ring on the ground around the car; one finger drives toward the touch (`Inputs/Nipple.js`) | Adapt to "run toward the touched point" | later |
| Contextual touch buttons | DOM buttons such as Interact appear only when relevant | Take with touch | later |

### C. Finding and opening content

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| Interactive points | One factory makes floating markers with three states; within 2.5 units the marker unfolds a label and a key glyph; Enter, a click or a touch button activates it (`InteractivePoints.js`) | Take. This is the Landmark prompt | v1 |
| Click a marker from afar | With a mouse, hovering highlights a marker and clicking activates it without driving there | Take. It makes content reachable without steering | v1 |
| A place opens real HTML | Three areas do nothing but open a DOM panel (`World/Areas/BehindTheSceneArea.js`) | Take, as a door into the real page (ADR 0002) | v1 |
| Content drawn in the canvas | Projects and lab entries are rendered as textures on boards, with text drawn canvas-to-texture (`World/Areas/ProjectsArea.js`, `TextCanvas.js`) | Skip for content. Canvas text is right only for short labels | no |
| Content baked into images | Career history lives in six textures | Skip | no |
| Zones | Circles on the ground fire enter and leave events (`Zones.js`) | Take. About fifty lines | v1 |
| Named anchors in level data | Objects named by convention in the model become spawn points, zones and prompt positions (`References.js`) | Adapt to a typed TypeScript level file | v1 |
| Map and fast travel | One image of the island with twelve DOM pins placed by percentage; a click teleports the player; M opens it (`Map.js`) | Take. With real buttons it doubles as an accessible list of Zones | v1 |
| Cover, change, uncover | Every teleport hides behind a patterned wipe (`Overlay.js`, `Player.js`) | Take, as an iris or checker wipe, with an instant cut under reduced motion | v1 |
| Menu and modals | One overlay with named tabs; a second host for small dialogs; mutually exclusive (`Menu.js`, `Modals.js`) | Adapt to one small React dialog with real dialog semantics | v1, small |
| Options | Mute, quality, "I'm stuck", reset, and honest status badges (`Options.js`) | Adapt: mute, respawn and exit; persist every choice | v1, small |
| Controls reference | A table of keys per device, preselected for the device in use | Take, generated from the action map | v1 |
| Toasts | One at a time, queued, held on hover, with an optional click action (`Notifications.js`) | Take, inside a live region | later |
| Position along a path is time | Driving through the career area scrubs a year counter and raises one stone per job | Adapt for the Quest Log's stretch of road, with text shown as DOM | later |

### D. Look

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| One palette, one material | Most models sample a 362-byte palette image with nearest filtering through a single shared material (`Materials.js`) | Take. The Sunset-Runner Palette becomes that image | v1 |
| Two-tone lighting | A custom model blends each surface between a lit tone and a saturated coloured shadow tone (`Materials/MeshDefaultMaterial.js`) | Adapt: a hard step between palette rows, so every pixel stays on the palette | v1 |
| Shadows | One sun exists only to make a shadow map that follows the camera (`Ligthing.js`) | Adapt: blob shadows under sprites first; a small unfiltered shadow map only if needed | v1 |
| Fog is the background | Distance fades into a two-colour gradient; there is no sky and no world edge (`Fog.js`) | Adapt: banded or dithered, or a DOM gradient behind a transparent canvas | v1 |
| See-through foliage | Tree crowns between camera and car turn transparent around the car (`World/Foliage.js`) | Take, as a dither cut-out. It matters more on foot | v1 |
| Day cycle | A keyframe engine blends four presets of eleven properties over a four-minute day driven by the real clock; night is blue light, never darkness (`Cycles/`) | Take the engine. Which clock drives it is a product decision | v1 engine |
| Weather, seasons, snow, lightning | Rain, wind, snow cover and storms derived from the same clock | Skip, except screen-space rain later | later |
| Grass | 78,400 instanced blades sized to what the camera sees (`World/Grass.js`) | Adapt to a few hundred tuft sprites | v1, sparse |
| Water | Ground tinted by depth, white ripple lines, a white line where objects meet water (`Water.js`, `World/WaterSurface.js`) | Adapt to animated tiles and keep the waterline | later |
| Bloom and tilt-shift blur | Glow on emissive parts and a miniature blur (`Rendering.js`, `Passes/cheapDOF.js`) | Skip. Both leave the palette and smear pixels | no |
| Low-resolution target | Not present; it renders at up to twice device pixels | Ours: render small, scale up by a whole number with hard pixels | v1 |

### E. Feedback and delight

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| Sound registry | Each sound is an entry with a group, a minimum interval, a hook run per play and a hook run per frame (`Audio.js`) | Take the registry over the existing synthesiser; skip the files and Howler | v1 |
| Positional sound | Manual pan and linear fade from the camera | Adapt for a few sources such as traffic | later |
| Achievements | 38 entries in 33 groups, set-based "visit all" groups, one `localStorage` blob, toast and confetti on unlock, six cosmetic rewards (`Achievements.js`) | Take. Nothing needs a server. Never gate content behind one | later |
| Time trial | A four-state race with gates tested as segments against a circle, a countdown, checkpoint respawns and race-only barriers (`World/Areas/CircuitArea.js`) | Take. The best fit of all the toys for a runner; personal best in `localStorage` | later |
| Explosive crates | Touch, fuse, bang, chain reaction | Adapt with a scripted knockback | later |
| Knock-about props | Bricks, benches, fences and lanterns scatter when hit | Skip. The fun is a heavy car's momentum | no |
| Bowling, cookie stand, altar | Small repeatable gags | Adapt one at most | later |
| Tab-title animation | The browser tab becomes a tiny side-scroller (`Title.js`) | Adapt: only while Roam Mode runs, restored on exit | later |
| Konami code, console greeting | Classic easter eggs | Take if wanted | later |
| World reset | One action puts every disturbed object back | Take once anything can be disturbed | later |

### F. Server features

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| Whispers | Visitors leave short messages in the world for each other, over WebSocket and msgpack (`Server.js`, `World/Whispers.js`) | Skip. Impossible on a static host | no |
| Daily leaderboard, shared counters, world events | All server state | Skip | no |

### G. Performance and assets

| Aspect | What folio-2025 does | Verdict | Plan |
|---|---|---|---|
| Camera-footprint budget | Everything dense is sized to the ground the camera can see, computed once per resize (`View.js`) | Take the principle. With a fixed pixel camera the footprint is a rectangle | v1 |
| Instancing | One mesh per kind of prop, matrices rewritten only for props that moved (`InstancedGroup.js`) | Take in its simplest form | v1 |
| Sleeping props | Props start asleep and are put back to sleep off screen | Only relevant with a physics engine | no |
| Quality tiers | Two tiers chosen by user-agent string (`Quality.js`) | Skip the tiers; one tier at low resolution. Honour reduced motion | no |
| Asset pipeline | Blender exports, a script that Draco- and KTX2-compresses them, 0.89 MB of decoders at run time (`scripts/compress.js`) | Skip. Art is built in code (ADR 0003) | no |
| Lazy at every scale | The socket, the map, flag lists, thumbnails and optional models all load on first use | Take | v1 |

## 5. Patterns worth copying

1. **A place in the world opens real HTML.** The pattern that lets a game world and a readable document share one copy of the content.
2. **Input contexts.** One place decides whether a key does anything.
3. **One owner for Escape and Back.**
4. **Interface state on the root element.** Mode, device and mute as attributes, styled by CSS.
5. **An ordered frame loop with a clamped delta.**
6. **A camera that never rotates**, following a smoothed ground-level focus.
7. **Compute once what the camera can see** and size everything else to it.
8. **One palette and one material**, with features switched by flags.
9. **Named anchors in level data, behaviour in code.**
10. **Cover, change, uncover** for every jump in position.
11. **One gesture that starts, unlocks audio and enables input.**
12. **Lazy at every scale.**
13. **Achievements as data** with set-based groups and one stored blob.
14. **A sound registry with a per-play hook and a per-frame hook.**
15. **Hints that match the device and stop once understood.**

## 6. What not to copy

- Content that exists only inside the canvas or inside textures.
- No error handling, no fallback screen and no teardown anywhere in the game code.
- Icon-only buttons without names, removed focus outlines, and hidden panels left exposed to assistive technology.
- `window.open` where an anchor would do.
- Unversioned, unguarded `localStorage`. This matters doubly on GitHub Pages, where every project under one user shares an origin.
- Quality chosen by user-agent string, and no reduced-motion support.
- Debug libraries imported statically, so they ship to every visitor.
- Preload tags that do not match the requested URLs, and absolute asset paths that break under a sub-path.
- A global 2x time scale with every constant tuned inside it.
- Timers that bypass the game clock.

## 7. Decisions taken for Roam Mode

Settled on 2026-11-19. The glossary is `CONTEXT.md`; the reasons are in ADR 0002 and ADR 0003.

- Roam Mode is a third Mode beside Browse Mode and Play Mode. It is opt-in, lazily loaded, and replaces nothing.
- The Overworld holds no content. Each Zone has a Landmark; opening it is a door into the real page at that Zone, and coming back puts the Runner at the Landmark of the Zone on screen.
- Entrances: a second chip on the Title Screen, a Level Select card, and a share link. Roam Mode has its own hash address and takes part in browser history.
- The look is pixel-art 3D: three.js on WebGL2, rendered at about 320x180 and scaled up with hard pixels, a camera that never rotates, the Runner as a flat sprite with four facings.
- Art is built in code, including existing pixel sprites extruded into blocks. No model files.
- No physics engine. The Runner runs, sprints and jumps on flat ground, with a pace readout in minutes per kilometre.
- The Overworld pictures Juan's training route: a loop road around a small island, Landmarks in page order.
- No Gels in the first version.
- Desktop keyboard first. The entrances appear only where a keyboard and WebGL2 are present; failures show a message and a way back; reduced motion gets cuts in place of wipes.
- Purpose: a showcase project with about two weeks for a first version.
- The Overworld's sky follows Dusk and Dawn, and the Navbar toggle's sky cycle plays there too. Bruno's keyframe engine is ported to animate between the two.
- One lap of the road takes about 60 to 90 seconds at a run.
- The look prototype was folded into the build instead of thrown away: opening the site with `?look` adds a LOOK panel to the Roam Mode menu that switches camera angle (straight-on or 45 degrees), lens (orthographic or slightly perspective), resolution (320x180 or 480x270) and shading (two or three tones) live, and shows the frame time. The defaults are straight-on, orthographic, 320x180 and two tones until Juan picks by eye. Measured on 2026-11-19: Roam Mode's chunk, three.js included, is 156 KB gzipped and loads only on entry; the page's own bundle went from 128 KB to 133 KB gzipped.

The Plan column in section 4 is the agreed scope: "v1" is the first version.

Build order after the prototype:

1. Walking skeleton: enter from the Title Screen chip, run around a flat island, exit, with the address and the Back button working.
2. Landmarks, doors and the return.
3. Map, menu, sound and the pace readout.
4. Art pass: scenery, four facings, sky.
5. Level Select card, share link, failure paths, reduced motion.

Left for later on purpose: what each Landmark looks like (placeholders until the art pass), the wording of the entrance chip, the Roam Mode tune, and the layout of the corner readouts.

## 8. Not verified

- The three.js chunk size in this project's Vite build. It will be the dominant download and should be measured before anything else is built.
- Whether a gamepad's cross button opens and immediately closes the projects board, which the source suggests.
- How the WebSocket server validates race times or moderates messages.
- Frame rates on real hardware. All captures ran in software.
- What folio-2025 would do with neither WebGPU nor WebGL2.

## 9. Detailed notes

- [`folio-2025-notes/engine-rendering.md`](./folio-2025-notes/engine-rendering.md): 45 aspects, asset inventory tables
- [`folio-2025-notes/movement-physics-camera.md`](./folio-2025-notes/movement-physics-camera.md): 37 aspects, input binding tables, the on-foot translation
- [`folio-2025-notes/content-ui-audio.md`](./folio-2025-notes/content-ui-audio.md): 30 aspects

Those notes were written before the decisions in section 7. Where they suggest something different, such as a dialog over the canvas, the ADRs win.
