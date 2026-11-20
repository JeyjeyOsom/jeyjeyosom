# folio-2025: engine, rendering, world systems, performance, assets

Slice A1 of a source-level study of `brunosimon/folio-2025` (MIT) at HEAD `70764a9` (2026-11-04, commit subject "Bump up dependencies (not Rapier because of sleep bug)"). The 57 files of `briefs/A1-engine.txt` were read in full. To explain them I also read parts of `sources/Game/View.js`, `Options.js`, `Objects.js`, `World/Intro.js`, `References.js`, `World/Bricks.js`, `Overlay.js`, `Audio.js` and `sources/index.html`, and grepped all of `sources/`. Nothing from the clone was installed, built or executed; the asset figures come from the git-tree listing only.

**Conventions used in these notes**

- Paths are relative to the repository root. `path:line` means I read that line.
- **Verified** means the statement is read directly from the cited code. **(inferred)** marks every statement that instead rests on three.js or browser behaviour that is not in the checkout (the `three` package source is not there), or on arithmetic over file sizes.
- "What the visitor sees" is reconstructed from the shader and scene code. I did not run the site, so these lines describe what the code draws, not what I observed.
- MB means 1,048,576 bytes and KB means 1,024 bytes.
- A "unit" is one three.js world unit. The playable world is a 192 x 192 unit square (`sources/Game/Terrain.js:13`).
- Transfer verdicts: **DIRECT** = the idea can be copied nearly as is; **ADAPT** = keep the idea, change the implementation; **SKIP** = not worth it for a small 16-bit, on-foot, statically hosted world. Only techniques are assessed. No model, texture, sound, text or level layout of the original is proposed for reuse.

**Terms I use (defined once)**

- **Subsystem**: one class under `sources/Game/` that owns one concern (for example `Fog`, `Wind`, `Grass`). The folder holds 118 JavaScript files, nearly all of them one class each.
- **Tick priority**: the integer that decides in which order subsystems run inside one frame (lower runs first).
- **Optimal area**: the author's own name (`view.optimalArea`) for the circle on the ground that encloses everything the camera can see when zoomed out as far as it goes. I also call it the **camera footprint**. It has a centre (`position`), a `radius`, and the distances from the camera to its near and far edge.
- **Reference model**: a GLB file whose nodes are used only as named placement markers (position, rotation, scale). Code reads the transforms and creates the real objects.
- **Twin**: two files in `static/` that hold the same asset, one in source form and one in compressed form (`x.glb` and `x-compressed.glb`, `x.png` and `x.ktx`, `ui/x.png` and `ui/x.webp`).
- **Feature flag (of a material)**: a boolean constructor option of `MeshDefaultMaterial` that includes or leaves out a block of shader code when the shader is built. It is not a runtime uniform.
- **Manual binding**: a debug helper that makes a value either computed automatically every frame or frozen to a value typed in the debug panel.
- **World-anchored wrap**: a way to make a finite patch of instances look infinite. Each instance keeps a fixed world position, and the shader moves it by whole multiples of the patch size so that it stays inside the patch centred on the camera footprint.
- **Shadow catcher**: the trick of intercepting the shadow-map result as a single number instead of letting the stock lighting darken the pixel.
- **TSL**: three.js Shading Language, the JavaScript node API (`three/tsl`) that three.js compiles to WGSL for WebGPU or GLSL for WebGL2.

## 1. Summary (max 10 bullets)

- **Architecture.** Plain JavaScript, no framework. One `Game` singleton acts as a service locator; 45 subsystems are constructed in a fixed order inside one `async init()` with three awaits (renderer, four tiny files, then everything else in parallel with the physics library), and `World.step()` constructs 28 more world objects. One frame is `renderer.setAnimationLoop` -> `Ticker.update` -> a single `'tick'` event whose listeners run in priority order 0 to 998. There is no teardown path and no error handling anywhere in the game code.
- **Renderer.** three.js r0.187 `WebGPURenderer` from `three/webgpu`, with every material written as TSL nodes. There is no GLSL in the repository. WebGL2 exists only as the renderer's automatic fallback, which the Options menu labels "not compatible with WebGPU resulting in performance loss". A device with neither gets no message.
- **The look is palette-driven and custom-lit.** Models are routed by material name to shared materials, chief among them one `palette` material that samples a 362-byte palette image with nearest filtering (that most meshes use it is inferred, because the models were not downloaded). `MeshDefaultMaterial` throws away the stock Lambert result and computes a two-tone colour: base colour times light colour, blended towards base colour times a saturated shadow colour. The blend factor is the maximum of a normal-based term, the shadow map, and a per-material term. One real directional light exists only to produce that shadow map.
- **Everything dense is budgeted to the camera footprint, not to the world.** Grass (78,400 blades), the visible ground mesh, the water quad, snow, rain, fallen leaves, the shadow-map frustum and the fog range are all sized to `view.optimalArea` and follow or wrap around it. Physics bodies outside it are put to sleep.
- **The environment is driven by one data texture.** A terrain texture (red = paved slabs, green = grass, blue = water depth) plus a 16-pixel colour gradient decides ground colour, where grass grows, where water effects appear, where snow sinks, and what colour "bounces" onto the underside of objects. Physics height comes from a separate GLB. Nothing samples height on the CPU.
- **Time is wall-clock driven and deterministic.** A day lasts 4 real minutes, a year 365 real days, both computed from `Date.now()`. Weather is a product of sines of the same clock. The cycles drive light colour, shadow colour, fog, temperature, rain, snow, ice and lightning, and areas can override them temporarily.
- **Only two quality tiers exist.** High on desktop and low on anything whose user agent looks mobile, with a manual toggle. Low removes the depth-of-field blur and the water refraction blur, shrinks the shadow map from 2048 to 512, and reduces bloom. Nothing adapts to measured frame rate, and the stats monitor is commented out.
- **The 3D world is small on the wire.** `Game.js` requests 44 files: 22.8 KB before the first frame and 1.45 MB behind a progress ring, 1.47 MB in total (5.24 MB without compression), plus 0.89 MB of Draco and Basis decoders. The repository is 346 MB only because of 130 MB of unreferenced WAV masters, 151 MB of authoring sources in `resources/`, and 32 MB of uncompressed twins.
- **Debug tooling is cheap and pervasive.** `#debug` in the URL creates a tweakpane panel with one folder per subsystem; `#stats`, `#inspector` and `#skip` are further URL flags; ten `VITE_*` variables switch assets, spawn point and frozen time of day at build time.
- **Transfer verdict for a 16-bit sprite world.** The organisation patterns are DIRECT: staged init, priority ticker, keyframed cycles, camera-footprint budget, one palette material with feature flags, the reveal as loading gate, manual bindings. The rendering technology is over budget or off style and should be SKIPPED or replaced: WebGPU and TSL, compute-shader leaves, KTX2 and Draco, bloom and blur, the 78k-blade grass and the snow mesh. A pixel-art world wants low-resolution nearest-neighbour rendering, PNG sprites and a WebGL2 check with the DOM site as fallback.

## 2. Aspects

### 2.1 Entry point and the `Game` singleton

- What the visitor sees: nothing by itself. The page is ordinary DOM (menus, modals, touch buttons) around one `<canvas class="js-canvas">` inside `<div class="game">`.
- How it works: `sources/index.js` imports a three.js patch first, then `Game`, and calls `new Game()`. If `VITE_GAME_PUBLIC` is set the instance is also stored in `window.game`. The constructor implements the singleton (`Game.instance`) and calls `this.init()` without awaiting it. Every subsystem starts its constructor with `this.game = Game.getInstance()` and reaches its siblings as `this.game.<name>`. This is a service-locator pattern: there is no dependency injection, so the order of the `new X()` lines in `Game.init()` is the dependency order. The only global teardown-like method is `Game.reset()`, which respawns the player and resets physics objects; the game as a whole is never destroyed.
- Evidence: `sources/index.js:1-13`, `sources/Game/Game.js:54-68` (singleton), `sources/Game/Game.js:70-216` (`init`), `sources/Game/Game.js:218-274` (`reset`), `sources/index.html:62-64` and `sources/index.html:889` (canvas and module script). Typical consumer: `sources/Game/Fog.js:8`.
- Depends on: every subsystem; `three/webgpu`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. One root object with subsystems built in dependency order is a good fit for an imperative 3D world living beside a React app, and it is far simpler than threading a renderer through React props or context. Three things must change. First, in TypeScript the root should be typed in stages (for example `core`, `intro`, `world` objects) so that using a subsystem before it exists is a compile error; in folio it is a runtime `undefined`. Second, the world needs a real `dispose()` (stop the loop, remove listeners, free GPU resources), because an opt-in world inside a single-page site will be entered and left, and folio has no such path. Third, React should talk to it through one narrow interface (`createWorld(canvas, options)` returning `{ dispose, on, ... }`), not through a global.

### 2.2 Staged initialisation and loading sequence

- What the visitor sees: first the page background, then a dark floor with a purple grid and a thin ring on the ground that fills as files arrive. When loading ends the ring shrinks away, a circular window of the real world opens around the vehicle, and a floating label (a different image for keyboard, touch, Xbox or PlayStation pad) invites the visitor to start. On click or key press the circle expands until the whole world is visible, sound starts and input is enabled.
- How it works: `Game.init()` has six stages.
  1. Synchronous core, before any GPU work: `Scene`, `Debug`, `ResourcesLoader`, `Quality`, `Server`, `Ticker`, `Time`, `DayCycles`, `YearCycles`, `Inputs` (restricted to the `intro` input category), `Audio`, `Notifications`, `RayCursor`, `Viewport`, `Modals`, `Menu`, `Rendering`. Then `await this.rendering.setRenderer()`, which creates the renderer, installs the animation loop and awaits `renderer.init()`. From here the ticker runs every frame even though nothing is drawn yet.
  2. `await this.resourcesLoader.load([...])` for four files needed by the intro: the respawn reference model, a star texture, the sound-button texture and the palette (22.8 KB in compressed mode).
  3. Synchronous "intro" group: `Options`, `Respawns`, `View`, `rendering.setPostprocessing()`, `rendering.start()` (this registers the render callback, so the first frames appear now), `Reveal`, `Noises`, `Weather`, `Wind`, `Tracks`, `Lighting`, `Fog`, `Water`, `Materials`, `Objects`, `Explosions`, `World`. The `World` constructor runs `step(0)`, which creates only the intro `Grid` and the `Intro` ring.
  4. Two promises in parallel: `import('@dimforge/rapier3d')` (a dynamic import, so the physics engine and its WASM are a separate chunk) and `resourcesLoader.load([...40 files...], progress)`. The progress callback calls `this.world.intro.updateProgress(1 - toLoad / total)`, a count of finished files, not of bytes. The ring smooths it (`smoothedProgress += (progress - smoothedProgress) * delta * 10`) and draws it with an angle test and `discard` in the fragment shader.
  5. After `await Promise.all`: `Terrain`, `Physics`, `PhysicsWireframe`, `PhysicsVehicle`, `Zones`, `Player`, `ClosingManager`, `InteractivePoints`, `KonamiCode`, `Achievements`, `Tornado`, `Map`, `Title`, then `world.step(1)`, which builds every visible world object in one synchronous burst, then `Overlay`. On the high tier with a WebGPU backend `PreRenderer.render()` compiles all shaders (see 2.9). Three frames later `reveal.updateStep(0)` runs.
  6. Driven by the visitor: reveal step 0 opens the 3.5-unit window and waits for a click or key. Step 1 starts audio (browsers require a user gesture), switches the input filter to `wandering` and expands the reveal. Step 2 creates the late `Whispers` subsystem, destroys the grid and intro, and starts the multiplayer server connection.
- Evidence: `sources/Game/Game.js:77-95` (stage 1), `:97-109` (stage 2), `:110-126` (stage 3), `:129-181` (stage 4, progress callback at `:175-178`), `:185-209` (stage 5); `sources/Game/World/World.js:47-86` (`step`); `sources/Game/Rendering.js:23-36`, `:68-71`; `sources/Game/World/Intro.js:51-73`, `:306-314`; `sources/Game/Reveal.js:46-230`.
- Depends on: `ResourcesLoader`, `Rendering`, `Reveal`, `Intro`, `Grid`, the Vite WASM plugin for the Rapier import (`vite.config.js:26`).
- Transfer to a 16-bit on-foot sprite world: **DIRECT** as a pattern. For an opt-in world the stages become: stage 0 is the existing DOM portfolio; stage 1 is a dynamic `import()` of the world chunk when the visitor opts in, plus a first-frame payload of a few kilobytes (palette and Runner sprite sheet) so something moves almost immediately; stage 2 streams the remaining sprites and map behind an in-world progress indicator; stage 3 is the user gesture that unlocks audio and input. Two improvements are worth making: report progress in bytes or at least include the code chunk in it (folio's ring ignores the physics chunk), and show an error state when a file fails (folio's promise rejects and the ring simply stops).

### 2.3 Ticker: one priority-ordered frame loop

- What the visitor sees: nothing directly; it is why physics, camera, shader uniforms and rendering always update in the same order.
- How it works: `Rendering.setRenderer()` hands the renderer's animation loop to `Ticker.update(elapsedMilliseconds)`. The ticker computes `delta = min(now - previous, maxDelta)` with `maxDelta = 1/30` s, a scaled delta (`delta * scale`, default scale 2), an accumulated scaled time, and a 30-frame average of delta. It mirrors the four time values into TSL uniforms (`elapsedUniform`, `deltaUniform`, `elapsedScaledUniform`, `deltaScaledUniform`) so that shaders and compute passes read the same clock. It then runs `wait(frames, callback)` countdowns and triggers one event, `'tick'`. Subsystems subscribe with `ticker.events.on('tick', callback, priority)`. The priorities found in code match the README table:

  | Priority | Subscribers (verified by grep over `sources/`) |
  |---:|---|
  | 0 | `Time`, `Inputs` |
  | 1 | `Player` pre-physics |
  | 2 | `PhysicsVehicle` pre-physics |
  | 3 | `Physics` step |
  | 4 | `Objects` (copy physics to visuals), `PhysicsWireframe` |
  | 5 | `PhysicsVehicle` post-physics |
  | 6 | `Player` post-physics |
  | 7 | `View` (camera) |
  | 8 | `Cycles` (day and year), `Weather`, `Zones`, `Intro`, `VisualVehicle` |
  | 9 | `Wind`, `Lighting`, `Tracks`, `Tornado`, `InteractivePoints` |
  | 10 | `Fog`, `Reveal`, `Terrain`, `Trails`, `Floor`, `Grass`, `Foliage`, `Leaves`, `Lightnings`, `RainLines`, `Snow`, `WaterSurface`, `Whispers`, `VisualTornado`, area code |
  | 13 | `InstancedGroup` (write instance matrices) |
  | 14 | `Audio`, `Map`, `Notifications`, `Title` |
  | 998 | `Rendering` |

  `Scenery` subscribes without a priority and therefore gets the default, 1. The README's priority 999 (`Monitoring`) is not registered because that class is commented out (see 2.38).
- Evidence: `sources/Game/Ticker.js:12-26` (state and uniforms), `:29-66` (`update`, clamp at `:32`, average at `:37-44`, waits at `:52-63`, trigger at `:65`), `:68-71` (`wait`); `sources/Game/Rendering.js:68`; `readme.md:22-114`; priorities at `sources/Game/Time.js:19-22`, `sources/Game/Cycles/Cycles.js:59-62`, `sources/Game/Ligthing.js:43-46`, `sources/Game/InstancedGroup.js:19-22`, `sources/Game/Rendering.js:27-30`, `sources/Game/World/Scenery.js:39-42`.
- Depends on: `Events`, the renderer's animation loop, `three/tsl` uniforms.
- Transfer to a 16-bit on-foot sprite world: **DIRECT**. It ports to about 40 lines of TypeScript. Keep the delta clamp, the split between raw and scaled time, `wait(frames)`, and a documented table of priorities (input, movement, camera, environment, instancing, render). Two additions suit pixel art: a fixed-step accumulator for character movement so the sprite advances in consistent steps regardless of frame rate (folio uses variable delta everywhere except the vehicle controller, `sources/Game/Physics/PhysicsVehicle.js:511`), and an explicit pause. If react-three-fiber were chosen instead of a hand-written loop, `useFrame(callback, priority)` is the same primitive.

### 2.4 `Events`: a small ordered emitter

- What the visitor sees: nothing.
- How it works: a 64-line class with `on(name, callback, order = 1)`, `off(name, callback?)` and `trigger(name, args[])`. Callbacks are stored as `callbacks[name][order] = [fn, ...]`. Because `callbacks[name]` is an array used sparsely and `trigger` walks it with `for...in`, orders run in ascending numeric order without sorting. There is no `once`, no wildcard and no return value. Each owner creates its own emitter instance (`ticker.events`, `viewport.events`, `quality.events`, `dayCycles.events`, ...), so event names are scoped by owner rather than being global.
- Evidence: `sources/Game/Events.js:8-22`, `:24-48`, `:50-64`; owners at `sources/Game/Ticker.js:26`, `sources/Game/Viewport.js:9`, `sources/Game/Quality.js:10`, `sources/Game/Cycles/Cycles.js:31`.
- Depends on: nothing.
- Transfer to a 16-bit on-foot sprite world: **DIRECT**, with types. Use a generic emitter typed by a map from event name to payload, and make `on` return an unsubscribe function, which fits React effects and the teardown that folio lacks. The "one emitter per owner" convention is worth keeping because it makes subscriptions easy to find.

### 2.5 Time scale, delta clamping and the hidden tab

- What the visitor sees: the world runs at the same speed on a 60 Hz and a 144 Hz screen; after returning from another tab nothing teleports; some events run in slow motion ("bullet time").
- How it works: `Time` sets a default time scale of 2 and writes it both to `ticker.scale` and to `gsap.globalTimeline.timeScale`, so shader time, simulation time and every GSAP tween share one scale. "Bullet time" eases the scale from 2 to 0.5 (ease-in speed 3, ease-out speed 0.3, default duration 1.5 s). There is no `visibilitychange` handling for the simulation. The loop is driven by the renderer's animation frame, which browsers suspend in hidden tabs (inferred), and on return the first delta is clamped to 1/30 s. Only audio reacts to focus: it mutes on window `blur` and resumes on `focus`. Systems that read `Date.now()` directly (day cycle, year cycle, lightning) jump to the current wall-clock value on return.
- Evidence: `sources/Game/Time.js:12-15`, `:19-22`, `:36-59`, `:61-79`; `sources/Game/Ticker.js:14`, `:32`; `sources/Game/Audio.js:692-703`; no match for `visibilitychange` or `document.hidden` anywhere in `sources/`.
- Depends on: `Ticker`, `gsap`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Keep the clamp. Drop the global 2x scale and the GSAP coupling unless slow motion is wanted; with framer-motion in the DOM and a ticker in the canvas there is no shared timeline to scale. Add what folio lacks: stop the loop when the tab is hidden, when the world component is unmounted, and while a DOM overlay covers the canvas. A portfolio tab is often left open, and an idle render loop costs battery.

### 2.6 Renderer and backend (WebGPU first, TSL everywhere)

- What the visitor sees: a full-window canvas. In the Options menu a "Renderer" line reads "WebGPU" with the CSS class `is-success`, or "WebGL" with the class `is-danger` and a tooltip saying the browser is not compatible with WebGPU.
- How it works: every file imports `three/webgpu` and `three/tsl`. `Rendering.setRenderer()` creates `new THREE.WebGPURenderer({ canvas, powerPreference: 'high-performance', forceWebGL: false, antialias: viewport.pixelRatio < 2 })`. Multisample antialiasing is therefore requested only when the pixel ratio is below 2. It then calls `setSize`, `setPixelRatio`, sets `sortObjects = false`, enables shadow maps, installs opaque and transparent sort functions that compare only `renderOrder`, optionally attaches the three.js `Inspector` when the URL hash contains `inspector`, hands the animation loop to the ticker and awaits `renderer.init()`. No tone mapping and no output colour space are set, so three.js defaults apply (inferred: no tone mapping, sRGB output). Capability detection is not done by the application: `forceWebGL: false` lets three.js choose WebGPU and fall back to its WebGL2 backend by itself (inferred from three.js behaviour; the application only inspects the result). The result is read in two places: `backend.isWebGLBackend` switches the Options indicator, and `backend.isWebGPUBackend` gates the shader warm-up. Nothing else changes under WebGL2; all TSL materials and the compute pass for leaves are simply compiled for the other backend (inferred). There is no `try/catch`, no "unsupported" screen and no check for `navigator.gpu` in the code. If `renderer.init()` rejected, `Game.init()` would stop with an unhandled rejection and the page would keep its empty canvas (inferred).
- Evidence: `sources/Game/Rendering.js:38-72` (constructor options at `:40-45`, sorting at `:48-60`, inspector at `:62-65`, loop at `:68`); `sources/Game/Options.js:64-78`; `sources/Game/Game.js:203`; `sources/index.html:291-294`; `package.json:36`. Greps for `try`, `catch(`, `navigator.gpu`, `toneMapping`, `outputColorSpace` in `sources/` return no game code.
- Depends on: three.js r0.187 (`three/webgpu`, `three/tsl`, `three/addons`).
- Transfer to a 16-bit on-foot sprite world: **SKIP the stack, ADAPT the lessons**. A world made of a few hundred textured quads and one sprite needs neither WebGPU nor compute shaders nor node materials. The classic `WebGLRenderer` from the core `three` entry point runs wherever WebGL2 runs and has a mature path for the single custom material required (inferred: it also yields a smaller chunk than the WebGPU build; I could not measure bundles). If TSL is still attractive for its single shader language, remember that folio treats WebGL2 as a degraded path. Whatever the choice, do what folio does not: test for WebGL2 before offering "enter the world", keep the DOM portfolio as the fallback, and catch initialisation errors.

### 2.7 Post-processing: bloom and a cheap tilt-shift blur

- What the visitor sees: lamps, lightning, the reveal ring and other "emissive" parts glow softly. On the high tier the top and bottom of the screen are slightly blurred, which gives a miniature, depth-of-field feel.
- How it works: `setPostprocessing()` builds a `THREE.RenderPipeline` from one scene pass. Two effects exist.
  - **Bloom**: `bloom(scenePassColor)` from the three.js addons with `threshold = 1`, `strength = 0.25`, `smoothWidth = 1`. The number of blur levels is set through the private field `_nMips`: 5 on the high tier, 2 on the low tier, read once at start-up. Because the threshold is 1, only colours brighter than white bloom. Emissive materials produce such colours on purpose (see 2.15). There is no separate emissive buffer: `mrt` and `emissive` are imported but unused.
  - **Cheap depth of field** (`cheapDOF`): a custom node that does not read depth. Its strength is `smoothstep(0.2, 0.5, |uv.y - 0.5|)`, so it is zero in the middle band of the screen and full at the top and bottom edges. It blurs with `hashBlur` (25 random taps, radius `strength * 0.003`) and mixes the blurred and sharp images by the same strength. It is fed `renderOutput(scenePass)` converted to a texture so it can be sampled repeatedly.
  - The output is `cheapDOF + bloom` on the high tier and `sceneColour + bloom` on the low tier. The node is swapped on the `quality` change event.
- Evidence: `sources/Game/Rendering.js:74-104` (pipeline at `:76-79`, bloom at `:81-85`, DOF at `:87`, tier switch at `:90-104`), `:171-184` (`render`); `sources/Game/Passes/cheapDOF.js:17-23`, `:28-49`, `:57`.
- Depends on: `three/addons/tsl/display/BloomNode.js`, `three/examples/jsm/tsl/display/hashBlur.js`, `Quality`, `View` (camera).
- Transfer to a 16-bit on-foot sprite world: **SKIP** both effects. Bloom and blur create colours outside any palette and smear pixel edges, which is the opposite of the target style. The pipeline shape is still useful, because the one post step a 16-bit world needs has the same form: render the scene into a small target, then draw it to the screen with nearest-neighbour sampling, optionally through a palette-quantise or ordered-dither step.

### 2.8 `Viewport`: size, pixel ratio and two resize events

- What the visitor sees: the canvas fills its container and stays sharp on high-density screens, up to a limit.
- How it works: `Viewport` measures the bounding rectangle of the `.game` element, and sets `pixelRatio = min(devicePixelRatio, 2)`. On window `resize` it re-measures and triggers `'change'` immediately, then `'throttleChange'` once, 400 ms after the last resize (it is a debounce, despite the name). Cheap consumers use `'change'` (renderer size, camera aspect). Expensive consumers use `'throttleChange'`: recomputing the optimal area, rebuilding the grass and floor geometry, resizing the shadow frustum, the water quad and the rain volume. The listener order argument sequences them: the view recomputes its optimal area at order 1, the ground, grass, rain and water resize at order 2, and the lighting at order 3. There is no render-scale option and no dynamic resolution; the only resolution lever is the cap at 2.
- Evidence: `sources/Game/Viewport.js:15-26`, `:28-47`; `sources/Game/Rendering.js:32-35`, `:165-169`; `sources/Game/View.js:73-81`; `sources/Game/World/Grass.js:32-46`; `sources/Game/World/Floor.js:96-109`; `sources/Game/Ligthing.js:48-53`.
- Depends on: `Events`, the DOM.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Keep the two-speed resize events. Replace "device pixel ratio capped at 2" with "fixed internal resolution and integer upscale": choose an internal height of roughly 180 to 270 pixels, set the drawing buffer to that size, and stretch the canvas with CSS `image-rendering: pixelated` at the largest whole-number factor that fits. That single change is both the 16-bit look and the largest performance saving available, because the number of shaded pixels drops by one to two orders of magnitude. A 16 x 20 sprite also wants an orthographic camera (or a fixed-angle one snapped to whole texels) so that one sprite texel always covers the same number of screen pixels; folio's 25-degree perspective camera (`sources/Game/View.js:394`) would not guarantee that.

### 2.9 `PreRenderer` (shader warm-up) and the three.js patch

- What the visitor sees: fewer hitches the first time a new kind of object enters the screen (high tier, WebGPU only).
- How it works: after the world is built, `PreRenderer.render()` creates a 32-pixel cube render target and a `CubeCamera` with near 1 and far 100000, temporarily sets every invisible object to visible (unless `userData.preventPreRender` is set, which debug helpers use), and renders the scene once into the six cube faces. Looking in all six directions means nothing is frustum-culled, so every material is compiled and every buffer uploaded before the visitor can move (the purpose is inferred from the name and structure; the code has no comment). It runs only when `quality.level === 0` and the backend is WebGPU. The cube camera stays in the scene and the render target is not disposed.
  Separately, `sources/threejs-override.js` replaces `Object3D.prototype.copy` with a version that is identical except that it no longer deep-copies `userData` through `JSON.parse(JSON.stringify(...))`. Cloned objects therefore start with empty `userData`. This avoids the cost of the copy and, because `Objects` stores back-references in `userData.object`, it also avoids serialising those (inferred).
- Evidence: `sources/Game/PreRenderer.js:7-34`; `sources/Game/Game.js:202-204`; `sources/Game/Ligthing.js:125`, `:135`, `:143` (opt-outs); `sources/threejs-override.js:3-48` (commented line at `:33`); `sources/Game/Objects.js:92-95`.
- Depends on: `three/src/renderers/common/CubeRenderTarget.js`, `Quality`.
- Transfer to a 16-bit on-foot sprite world: **SKIP**. With a handful of materials the compile cost is small, and prototype patches of a library are a maintenance risk. If a hitch does appear, the idea "render everything once, off-screen, before handing control to the visitor" is the fix to remember.

### 2.10 `Materials` registry and the shared palette material

- What the visitor sees: flat, clean colour areas with no visible texture detail on buildings, props and the vehicle. All of them stay in one colour family because they are painted from one tiny swatch image.
- How it works: `Materials` keeps a `Map` from material name to material instance. At start-up it registers `'palette'`, a `MeshDefaultMaterial` whose colour is `texture(paletteTexture).rgb`. The palette texture is loaded in the very first batch with nearest-neighbour minification and magnification, no mipmaps, and the sRGB colour space. In the tree `static/palette.png` is 362 bytes and `static/palette.ktx` is 1,504 bytes, so it is a very small image. It also registers five emissive gradient materials and one `redGradient`.
  The link between models and materials is the **material name in the GLB**. `materials.updateObject(object3D)` walks every mesh and replaces its material with `getFromName(material.name, material)`. If the name is already registered (for example `palette`) the shared instance is returned. Otherwise `createFromMaterial` converts the imported Lambert or Standard material into a new `MeshDefaultMaterial`, taking the colour from its `map` or its `color` and the alpha from its `alphaMap` or `opacity`, and registers it under that name so that later meshes with the same name share it. Two names (`projectsLabels`, `blackboardLabels`) get special alpha handling. A material can opt out with `userData.prevent`. `Objects.add()` calls `updateObject` by default, so every model that enters the world goes through this funnel. The README tells the artist to mute the palette texture node in Blender before export, because the texture is set in three.js.
  That each model's UV coordinates point into palette swatches is **(inferred)**: it follows from the material sampling the palette with the mesh's own UVs, from the README note and from the nearest filtering, but the GLB contents were not downloaded, so I could not look at the UVs.
- Evidence: `sources/Game/Materials.js:11`, `:21-33`, `:36-44` (palette), `:265-285` (`save`, `getFromName`), `:287-343` (`createFromMaterial`), `:356-366` (`updateObject`); `sources/Game/Game.js:107` (palette filters and colour space); `sources/Game/Objects.js:36-51`; `readme.md:118-122`; tree entries `static/palette.png` (362 bytes) and `static/palette.ktx` (1,504 bytes).
- Depends on: `MeshDefaultMaterial`, `ResourcesLoader`, the Blender naming convention.
- Transfer to a 16-bit on-foot sprite world: **DIRECT**. This is the answer to "is the look palette-driven": yes, at the level of surface colour, and it is the cheapest part of the whole engine. A 16-bit world can go further: one palette PNG with nearest filtering and no mipmaps, one shared material, and every tile, prop and sprite sampling it. The registry by name is equally useful: a named material per role (`palette`, `unlit`, `water`, `sprite`) keeps the number of shader programs tiny and gives one place to change the look. With pixel art the palette can also hold rows of shades, so that lighting picks a row instead of multiplying colours (see 2.11).

### 2.11 `MeshDefaultMaterial`: the custom lighting model

- What the visitor sees: every surface is shaded between just two tones, a lit tone and a shadow tone, and the shadow tone is a saturated purple or blue version of the surface colour rather than a darker grey. Undersides of objects near the ground pick up the colour of the ground below them. Objects standing in water show a thin white line at the water level.
- How it works: the class extends `THREE.MeshLambertNodeMaterial` but replaces its `outputNode`, so the stock Lambert result is never used. Written as pseudo-code, with the default constants:

  ```
  normal = material normal, flipped on back faces of double-sided materials
  colour = base                                              // base is the colour node, e.g. the palette sample
  if hasLightBounce:
      facingDown = smoothstep(-1, 1, dot(normal, (0,-1,0)))   // 0 facing up, 0.5 on walls, 1 facing down
      nearGround = (max(0, (1.5 - max(0, worldY)) / 1.5))^2   // 1 at ground level, 0 from 1.5 units up
      colour = mix(colour, terrainColourBelow, facingDown * nearGround)
  if hasWater and |worldY - waterLevel| <= 0.013:
      colour = base = white
  lit    = colour * lightColour * lightIntensity
  core   = smoothstep(1, -0.25, dot(normal, sunDirection))    // 0 facing the sun, 1 at about 105 degrees away
  drop   = 1 - shadowMapVisibility                            // only if hasDropShadows
  shadow = clamp(max(core, drop, shadowNode), 0, 1)           // shadowNode is a per-material extra, default 0
  out    = mix(lit, base * shadowColour, shadow)
  if hasFog:    out = mix(out, fogColour, fogFactor)
  discard if alpha < alphaTest                                // default 0.1
  if hasReveal: discard outside the reveal radius; paint the outermost 0.05 units with the reveal colour
  ```

  Three details matter. First, the **shadow catcher**: when `hasDropShadows` is on, the material sets `receivedShadowNode` to a function that multiplies a local float by the incoming shadow value and returns 1, so the engine's own shadow darkening is neutralised and the material decides what a shadow looks like (the comment in the code says exactly this; how three.js calls the hook is inferred). Second, the six **feature flags** (`hasCoreShadows`, `hasDropShadows`, `hasLightBounce`, `hasFog`, `hasWater`, `hasReveal`) are ordinary JavaScript `if` statements executed while the node graph is built, so a disabled feature costs nothing in the shader. Rain turns off drop shadows, bounce, fog and water; the wind ribbons turn off everything except the reveal; the ground turns off water and bounce. Third, the output function is evaluated lazily when the shader is first built, not when the material is constructed. That is why the palette material can be created before `Terrain` exists even though its bounce code reads `game.terrain` (inferred from construction order: `Materials` at `Game.js:123`, `Terrain` at `Game.js:185`; the intro grid, which renders earlier, disables bounce).
- Evidence: `sources/Game/Materials/MeshDefaultMaterial.js:5`, `:27-45` (parameters and flags), `:49-62` (shadow catcher), `:67-134` (output: bounce `:82-89`, water `:92-97`, light `:100`, core `:103-105`, drop `:108-110`, mix `:113-119`, fog `:122-123`, alpha `:126`, reveal `:129-130`); constants at `sources/Game/Ligthing.js:83-90`; flag usage at `sources/Game/World/RainLines.js:158-169`, `sources/Game/World/WindLines.js:19-28`, `sources/Game/World/Floor.js:70-77`, `sources/Game/World/Grid.js:43-48`.
- Depends on: `Lighting` (uniforms), `Terrain` (bounce colour), `Water`, `Fog`, `Reveal`, the shadow map.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The structure is exactly what a 16-bit renderer wants: unlit base colour, one shadow factor, a coloured shadow tone, and optional blocks switched by flags. What changes is the blend. Replace the continuous `mix` by a `step` (two tones) or two thresholds (three tones), so that the output is always a palette colour; the shadow tone can then be a lookup into a darker palette row instead of a multiplication. Keep the white waterline, which is a pixel-art-friendly effect that needs no depth buffer. Drop the bounce light, which is a subtle gradient that low resolution will not show. In `WebGLRenderer` this is one small `ShaderMaterial` (or `MeshBasicMaterial` with `onBeforeCompile`) of perhaps 40 lines of GLSL.

### 2.12 Lighting: one sun, and a shadow map that follows the camera

- What the visitor sees: one set of soft-edged cast shadows that rotate as the 4-minute day passes. The sun never sets: night is expressed by blue light and denser fog, not by darkness.
- How it works: `Lighting` creates a single `THREE.DirectionalLight(0xffffff, 5)` with `castShadow = true`. Its intensity value is irrelevant to the image, because materials ignore the lit result; the light exists so that three.js renders a shadow map. The shadow camera is orthographic with half-size equal to `view.optimalArea.radius`, near 1 and far `1 + radius * 2`. The map is 2048 x 2048 on the high tier and 512 x 512 on the low tier, with `bias = -0.001`, `normalBias = 0.1` and blur `radius` 3 (high) or 2 (low). Every frame at priority 9 the light and its target are moved so that the shadow frustum stays centred on the optimal area. Rounding the centre to whole units, which would stop shadow shimmer, is present but commented out.
  The sun direction is a point on a sphere: polar angle `phi = 0.63 + cos(-(t + 9/16) * 2pi) * 0.5 * 0.62` and azimuth `theta = 0.72 + sin(-(t + 9/16) * 2pi) * 1.25`, where `t` is the day-cycle progress. The polar angle therefore stays between 0.32 and 0.94 radians (18 to 54 degrees from straight up), so there is always a shadow-casting direction. The normalised direction, the light colour and the light intensity are published as TSL uniforms (`directionUniform`, `colorUniform`, `intensityUniform`) and the last two are copied from the day cycle each frame. A `bounceColor` uniform is declared but the material uses the terrain colour instead.
  A defect worth knowing: `updateShadow()` subscribes a new listener to the quality `change` event every time it runs, and it runs on every debounced resize, so listeners accumulate.
- Evidence: `sources/Game/Ligthing.js:11-28` (constants), `:81-91` (uniforms), `:108-116` (light), `:153-173` (shadow camera and the repeated subscription at `:168-172`), `:180-214` (per-frame update; commented rounding at `:200-202`); `sources/Game/Rendering.js:51` (shadow maps enabled).
- Depends on: `View` (optimal area), `DayCycles`, `Quality`, the renderer's shadow maps.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Keep the division of labour: a light that only produces a shadow mask fitted to the camera footprint, and a material that decides what shadow means. For pixel art there are two reasonable implementations. One is a small unfiltered shadow map (512 is plenty at 320 x 180), with the light target snapped to whole shadow texels, because at low resolution the shimmer that folio tolerates would be very visible. The other is no shadow map at all: a blob shadow under the Runner and shadows painted into the tiles, which is cheaper and closer to how 16-bit games looked. A sprite that must cast a shadow needs alpha-tested shadow casting, which folio does for foliage with `maskShadowNode` (see 2.22).

### 2.13 Fog and the background gradient

- What the visitor sees: the far part of the ground and distant objects melt into a two-colour gradient that fills the screen behind the world. There is no sky, no horizon line and no visible world edge. The gradient and the fog distance change with the time of day.
- How it works: `Fog` does not use `scene.fog`. It builds one colour node, `mix(colorA, colorB, smoothstep(0, 1, distance(viewportUV, radialCenter)))` with `radialCenter = (0, 0)`, that is a gradient across the screen diagonal from one corner. The same node is assigned to `scene.backgroundNode` and exported as `fog.color`. The fog amount is `rangeFogFactor(near, far)`. `MeshDefaultMaterial` mixes its output towards `fog.color` by that amount, so a fully fogged pixel has exactly the background colour at that screen position. Every frame `near` and `far` are set from the optimal area and the day cycle: `near = nearDistance + fogNearRatio * (farDistance - nearDistance)` and likewise for `far`. By day the ratios are 0.315 and 1.25; at night they are -0.85 and 1, so night fog starts in front of the nearest visible ground and is complete at the far edge.
- Evidence: `sources/Game/Fog.js:10-22`, `:25-28`, `:41-49`; `sources/Game/Materials/MeshDefaultMaterial.js:122-123`; presets at `sources/Game/Cycles/DayCycles.js:5-8`.
- Depends on: `View` (optimal area distances), `DayCycles`, `MeshDefaultMaterial`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The idea to keep is that fog colour and background are the same thing, so a small world needs no skybox and no edge art. For 16-bit, quantise the fog amount into three or four bands or dither it with an ordered pattern so that the result stays on the palette, and consider drawing the backdrop in the DOM (a CSS gradient or a parallax pixel-art layer behind a transparent canvas), which costs nothing in the shader and uses the stack that already exists.

### 2.14 The `Reveal` effect

- What the visitor sees: during loading only a grid floor exists. Then a glowing ring opens a circular window, 3.5 units in radius, through which the real world is visible around the vehicle. On the first click or key press the ring sweeps outwards and the world replaces the grid everywhere.
- How it works: `Reveal` owns four uniforms: a 2D centre (the default respawn position), `distance`, `thickness = 0.05` and a colour with an intensity that follow the day cycle. In every `MeshDefaultMaterial` with `hasReveal`, fragments whose horizontal distance to the centre exceeds `distance` are discarded, and fragments within `thickness` of the limit are painted with `colour * intensity` (an above-white value, so it blooms). The intro grid does the opposite and discards fragments inside the radius. `distance` starts at 0, is tweened by GSAP to 3.5 in step 0 (2 s, `back.out(1.7)`), to 30 in step 1 (2 s, `back.in(1.3)`), and is then set to 99999. Hovering the window raises the ring intensity by 22 percent. The hash flag `#skip` multiplies the speeds by 4 and skips the wait for input. Step 1 is also where audio is initialised, so the effect doubles as the user-gesture gate that browsers require for sound, and step 2 releases the intro objects and stops the reveal's own tick listener.
- Evidence: `sources/Game/Reveal.js:12-20`, `:42-43`, `:46-148` (step 0), `:149-210` (step 1), `:211-227` (step 2), `:232-236`; `sources/Game/Materials/MeshDefaultMaterial.js:7-19`; `sources/Game/World/Grid.js:50-56`; `sources/Game/Game.js:206-209`.
- Depends on: `MeshDefaultMaterial`, `Grid`, `Intro`, `gsap`, `DayCycles`, `Respawns`, `Audio`, `Inputs`, `RayCursor`.
- Transfer to a 16-bit on-foot sprite world: **DIRECT** as a concept, **ADAPT** in implementation. A circular iris opening on the player is itself a classic 16-bit transition, and the triple role (hide the world while it loads, mark the hand-over to the visitor, unlock audio) is worth copying exactly. Two implementations fit. In the shader it is one `discard` on world distance in the shared material, as here. Outside the shader it is a CSS `clip-path: circle()` on the canvas animated with framer-motion, which needs no shader work and fits the existing stack; a stepped radius (growing in whole pixels) keeps it in style.

### 2.15 Emissive and gradient materials

- What the visitor sees: lamps, lights, the vehicle's rear lights and similar parts glow in orange, purple, blue, green or white. The vehicle body has a vertical two-colour gradient.
- How it works: `createEmissiveGradient(name, colorA, colorB, intensity, normalize)` builds a `MeshBasicNodeMaterial` whose colour is a radial gradient in UV space (`mix(colorA, colorB, distance(uv, 0.5) * 2)`). When `normalize` is true the colour is divided by its own luminance and then multiplied by `intensity` (1.5 to 2.7), so that all hues have the same perceived brightness and all exceed 1.0, which is what the bloom threshold of 1 picks up. These materials ignore fog but still obey the reveal. `createGradient` builds a `MeshDefaultMaterial` whose base colour is `mix(colorA, colorB, uv.y)`; the vehicle paints use it. A third "palette" exists as a 1 x 16 canvas gradient (`#ffb646`, `#ff347e`, `#01005f`) stored in `materials.gradientTexture` and used as a lookup table by the boost trails and the whisper flames. All are registered by name, so a GLB material called `emissiveOrangeRadialGradient` resolves to the shared instance.
- Evidence: `sources/Game/Materials.js:27-33`, `:46-97` (canvas gradient), `:113-130`, `:132-178`, `:180-200`; consumers at `sources/Game/Trails.js:128`, `sources/Game/World/VisualVehicle.js:134-137`.
- Depends on: bloom (2.7), `Reveal`, the registry.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Without bloom, "emissive" in a 16-bit world simply means "unlit": a material that ignores the shadow tone and the night palette, for windows, lamps and signs. Keep it as a named entry of the registry. The 1 x 16 canvas gradient used as a lookup table is a neat way to author colour ramps in code and transfers as is (with nearest filtering it becomes a stepped ramp).

### 2.16 Colour management

- What the visitor sees: colours typed as hex strings in the code and colours painted in the palette look the same on screen.
- How it works: nothing global is configured; the renderer keeps the three.js defaults (inferred). Correctness is handled per texture. Colour textures are tagged sRGB: the palette, the star texture, the two time-machine screens, the canvas gradients and lazily loaded project and lab images. Data textures (terrain, foliage mask, slab mask, icons used as alpha) are left untagged and are therefore read as linear numbers. The compression script mirrors the split with `--assign_oetf srgb` in the default preset and `--assign_oetf linear` plus a single red channel for masks. Debug colour pickers convert through `getHex(THREE.SRGBColorSpace)`. Emissive normalisation uses the luminance coefficients of the working colour space.
- Evidence: `sources/Game/Game.js:105`, `:107`, `:172-173`; `sources/Game/Terrain.js:41`; `sources/Game/Materials.js:55`, `:100-110`, `:119`; `scripts/compress.js:80-97`; `sources/Game/Debug.js:65-69`.
- Depends on: three.js colour management, the KTX tools.
- Transfer to a 16-bit on-foot sprite world: **DIRECT** as a rule set: tag palette and sprite textures as sRGB, leave masks and maps as data, and never let a filter or a mipmap touch the palette. For a strict 16-bit look it also matters that nothing after the palette lookup changes the colour, which is one more reason to drop tone mapping, bloom and smooth fog.

### 2.17 Procedural noise textures (`Noises`)

- What the visitor sees: nothing directly. Grass height, wind gusts, water ripples, ice cracks, rain splashes, snow drifts and road glitter all look irregular without visibly repeating.
- How it works: at start-up `Noises` renders three 128 x 128 half-float textures on the GPU with a full-screen quad and keeps them as repeating textures: a Voronoi texture (red = distance to the nearest cell point, green = distance to the cell edge, blue = a random value per cell; 8 cells per repeat), a Perlin texture (6 cells per repeat, written to the red channel) and a per-pixel hash texture with nearest filtering. Every other shader then pays one texture read instead of evaluating noise mathematics per pixel or per vertex. About fifteen subsystems use them.
- Evidence: `sources/Game/Noises.js:7-134` (noise functions), `:141-147`, `:176-210` (Voronoi), `:212-250` (Perlin), `:252-292` (hash); consumers for example `sources/Game/Wind.js:34-38`, `sources/Game/World/Grass.js:154`, `sources/Game/World/WaterSurface.js:97-100`, `:141-144`.
- Depends on: `Rendering` (the renderer must exist), `THREE.QuadMesh`, render targets.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The principle "noise is a small tileable texture, not shader code" is right for any low-end target. A pixel-art world can ship one 64 x 64 tileable noise PNG, or fill a `DataTexture` on the CPU at start-up, and skip the render-target plumbing. With nearest filtering the noise also becomes blocky, which suits the style.

### 2.18 The intro grid (`MeshGridMaterial`, `Grid`)

- What the visitor sees: while loading, a dark floor with purple cross marks every unit and fine lines every 10 units, fading into the fog.
- How it works: `MeshGridMaterial` is a small generic grid shader (anti-aliased lines using screen-space derivatives, any number of line sets with colour, scale, thickness and a "cross" amount that trims lines down to marks at intersections, UV or world or triplanar projection). `Grid` puts it on a 100 x 100 plane at the respawn point, routes its colour through a `MeshDefaultMaterial` with bounce, water and reveal turned off so that it still receives light and fog, and adds the inverse reveal test. It is destroyed in reveal step 2. Only the `uv` projection is exercised; the local-space projections reference `positionLocal`, which the file does not import.
- Evidence: `sources/Game/Materials/MeshGridMaterial.js:42-68`, `:82-141` (missing import visible at `:2`, used at `:117-123`); `sources/Game/World/Grid.js:27-69`, `:91-101`; `sources/Game/Reveal.js:57`, `:216`.
- Depends on: `MeshDefaultMaterial`, `Reveal`, `Respawns`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The useful idea is a placeholder floor that costs no download and is replaced by the real world through the reveal. In a tile-based 16-bit world the natural placeholder is a blank tile grid drawn by the same ground shader, so no second material is needed.

### 2.19 `Terrain`: one data texture decides the ground

- What the visitor sees: sandy orange ground that turns teal and then dark blue where it dips under water, yellow-green where grass grows, and paved patches around built areas.
- How it works: `Terrain` has no mesh. It publishes two TSL functions that other shaders call.
  - `terrainNode(worldXZ)` converts a world position to a texture coordinate with `position / 128 / 1.5 + 0.5` (so the texture spans the 192-unit world, centred on the origin), samples `terrainTexture`, and then multiplies the green channel by one minus the red channel of the tracks render target (2.34), so wheel tracks remove grass.
  - `colorNode(terrainData)` looks up a 1 x 16 canvas gradient at `1 - blue` (stops `#ffa94e` at 0.1, `#5bc2b9` at 0.3, `#13375f` at 0.9, that is sand, shallow water, deep water) and mixes it towards the grass colour `#b8b62e` by the green channel.
  - The channel meanings are verified from their uses: **red** = paved slabs or "furniture" mask, **green** = grass amount, **blue** = water depth (0 is dry land).
  - The texture is loaded with `flipY = false` and no filter overrides; the compression preset keeps it high quality (UASTC with mipmaps, linear data). Its pixel size is not in the code. The file size of `static/terrain/terrain.ktx` (350,064 bytes) equals a 512 x 512 UASTC texture with a full mipmap chain almost to the byte, so it is very probably 512 x 512, about 0.375 units per texel **(inferred)**.
  - Consumers: the ground mesh, grass, snow, fallen leaves, the water surface, and the bounce-light block of every `MeshDefaultMaterial`.
- Evidence: `sources/Game/Terrain.js:12-13`, `:32-62` (gradient, stops at `:45-49`), `:85-91`, `:93-106`, `:108-117`, `:125-132`; `sources/Game/Game.js:145`; `scripts/compress.js:94`; channel uses at `sources/Game/World/Floor.js:55`, `:73`, `:84`, `sources/Game/World/Grass.js:124-126`, `sources/Game/World/Snow.js:90`, `:268`, `sources/Game/World/Leaves.js:234`, `:246`.
- Depends on: `Tracks`, `ResourcesLoader`, a texture painted in the authoring tool.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. "The level is one small image" is the most transferable idea of the environment code, and at 16-bit scale it becomes a tile map: for example a 64 x 64 PNG in which each pixel is one tile and colour or channel encodes ground type, water, grass and walkability. Unlike folio, read it on both sides: once on the CPU (draw it to a canvas, call `getImageData`) for collision, height and gameplay queries, and as a nearest-filtered texture on the GPU for the ground shader. folio keeps visual data in this texture and physical data in a separate model, which can drift apart; a small world should have one source of truth.

### 2.20 `Floor`: visible ground, physics ground, height and world bounds

- What the visitor sees: continuous ground under the camera wherever it goes, sloping down into lakes and the surrounding sea. Driving past the edge of the map does not make the vehicle fall forever.
- How it works:
  - **Visible ground.** A square plane whose side is `round(optimalArea.radius * 2) + 1` units, subdivided in 1.5-unit cells, with normals deleted. Its vertex shader lowers each vertex by `blue * 1.5` (so the deepest ground is at -1.5, which is `water.depthElevation`), fading the displacement out near two edges. Its colour is the terrain colour, mixed towards a paved-slab colour (`#a87762` to `#ffcf8b` through a tiling slab texture) where the red channel times a Perlin sample is high. The normal is forced to straight up, and the grass channel is passed as the material's extra shadow term, so ground under grass is drawn in the shadow tone and matches the dark base of the blades. Each frame the plane is moved to the optimal-area centre snapped to 1.5 units. It receives shadows and does not cast them.
  - **Physics ground.** The geometry of `terrainModel` is used only as a height array: the code reads every vertex, assumes a square grid (`rows = sqrt(vertexCount)`), fills a `Float32Array`, and creates one fixed Rapier `heightfield` collider scaled to 192 x 1 x 192 with friction 0.2 and restitution 0.15. The uncompressed `terrain.glb` is 730,120 bytes, which matches a 129 x 129 vertex grid with position, normal and UV plus 16-bit indices almost exactly, that is 128 x 128 cells of 1.5 units **(inferred)**; the compressed twin is 26 KB.
  - **Height sampling.** There is no CPU function that returns ground height at a point. Shaders read the blue channel (the ground uses `-1.5 * blue`, snow uses `-2 * blue`, leaves use thresholds on blue), and gameplay objects get their height from physics contact with the heightfield.
  - **Bounds.** A 12 x 1 x 12 kinematic box (the "bedrock") is enabled and moved under the player, at the sea-bed depth, whenever the player is within 6 units of the world edge or outside it.
  - Two inconsistencies: after a resize the plane is rebuilt with one cell per unit instead of one per 1.5 units, and the edge fade uses `min(uv.x, uv.y)` so only two of the four edges fade.
- Evidence: `sources/Game/World/Floor.js:20-21`, `:33-93` (size `:35-38`, colour `:46-67`, material `:70-77`, displacement `:79-87`), `:96-109` (resize), `:120-153` (heightfield), `:155-174` and `:181-208` (bedrock), `:176-179` (follow and snap); `sources/Game/Water.js:10-11`; tree entries `static/terrain/terrain.glb` (730,120 bytes) and `terrain-compressed.glb` (26,208 bytes).
- Depends on: `Terrain`, `View` (optimal area), `Noises`, `Objects` and `Physics` (Rapier), `Water`, `Player`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. A small pixel-art world does not need a camera-following displaced mesh or a physics heightfield. The ground can be one quad (or one mesh of tiles) covering the whole map, coloured by the tile map; "height at (x, z)" is an array lookup in the same map; world bounds are blocked tiles or a ring of water. The parts to keep are conceptual: the ground shader and the grass share the same colour function so they blend, and the edge of the world is handled by design (water all around) instead of by walls.

### 2.21 `Grass`

- What the visitor sees: a dense field of small triangular blades that sway in the wind, grow only where the terrain says so, are flattened by wheel tracks, and are present wherever the camera goes.
- How it works: one non-indexed mesh, one draw call, `280 * 280 = 78,400` blades, each a single triangle (235,200 vertices). The geometry stores only the blade centre as a 2-component attribute repeated three times, plus one random number per vertex. Everything else happens in the vertex shader:
  1. **World-anchored wrap**: `wrapped = mod(position - centre + half, size) - half + centre`, where `centre` is the optimal-area centre and `size` is its diameter. Blades keep their world position and jump to the opposite side of the patch only when they leave it, outside the visible ground.
  2. Blade **shape** from `vertexIndex mod 3` (tip, left, right) with width 0.1 and height 0.6. Height is scaled by the random attribute, by a low-frequency Perlin sample and by the terrain's grass amount, so grass thins out smoothly at the borders. Width and height are enlarged when the patch is larger than an "ideal" 2000 square units, to hide the lower density.
  3. **Billboarding** around the vertical axis towards the camera.
  4. **Wind**: the tip is displaced by `wind.offsetNode(position) * height * 2`.
  5. **Hiding**: where the grass amount is 0.5 or less the vertex is pushed 100 units up, out of view.
  The material is a `MeshDefaultMaterial` whose colour is the terrain colour at the blade's root, whose normal is straight up, and whose extra shadow term is `(1 - tip) * grassAmount`. Each blade therefore fades from the shadow tone at the root to the lit tone at the tip, a fake ambient occlusion, and has exactly the colour of the ground it stands on. Blades receive shadows but do not cast them. The mesh has `frustumCulled = false`. On resize the geometry is rebuilt.
  From the camera constants I derive a patch of about 62 x 62 units on a 16:9 desktop at the high tier, about 21 blades per square unit and about 10 percent of the world area (derived by hand from `View.js` constants, not measured). Two constants disagree: the size compensation factor is 0.5 at construction and 0.4 after a resize.
- Evidence: `sources/Game/World/Grass.js:12-20` (counts), `:49-90` (geometry), `:92-137` (material), `:139-182` (vertex shader: wrap `:144-151`, height `:154-158`, shape `:161-165`, billboard `:171-172`, wind `:175-176`, hide `:179`), `:198-205`, `:207-210`, `:32-46` (resize; factors at `:40-41` versus `:102-103`); camera constants at `sources/Game/View.js:213-281`, `:335-341`, `:394`.
- Depends on: `View` (optimal area), `Terrain`, `Tracks`, `Wind`, `Noises`, `MeshDefaultMaterial`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**, at a tenth of the scale. In pixel art, grass is a tuft sprite (say 8 x 8 texels) on a camera-facing quad, a few thousand instances at most, swaying in two or three discrete frames rather than continuously. Three ideas carry over unchanged: presence comes from the map's grass channel, the tuft takes the colour of the ground under it, and the root is drawn in the shadow tone. The world-anchored wrap is only needed if the world is many times larger than the screen; for a small map place every tuft once and let the GPU clip. A runner on foot could bend or part tufts near his feet with one uniform (the player position) instead of folio's track render target.

### 2.22 `Foliage` (bushes and tree canopies)

- What the visitor sees: round, leafy blobs for bushes and tree crowns, shaded from one colour on the sunny side to another on the far side, rustling in the wind. Tree crowns between the camera and the vehicle become see-through around the vehicle.
- How it works: one class serves bushes and all tree crowns.
  - **Geometry**: 80 small planes (0.8 units) scattered inside a unit sphere with a seeded random generator (biased towards the surface), merged into one geometry of 160 triangles. Each vertex normal is blended 85 percent towards the direction from the sphere centre, so the blob shades like a ball.
  - **Instances**: one instance per node of a reference model, scaled by the node's scale, each given a random roll but always oriented towards the camera's default direction. The camera's two angles are assigned once and never changed outside the debug panel (`sources/Game/View.js:335-336`), so this is a billboard with no per-frame work. Matrices live in a custom static instance attribute applied inside the position node.
  - **Material**: colour is `mix(colourA, colourB, smoothstep(0, 1, dot(normal, sunDirection)))`. Alpha comes from the red channel of a mask texture (`foliageSDF`), minus a threshold of 0.3, then alpha-tested. Wind does not move vertices; it rotates the mask's texture coordinates by `length(windOffset) * 2.2`, which makes the leaf outlines shimmer.
  - **Shadows**: the shadow pass uses `maskShadowNode` (mask above 0.5) so shadows have leaf-shaped holes, and received shadows are sampled at a position offset 1 unit towards the sun to avoid self-shadowing noise.
  - **See-through** (tree crowns only): alpha is multiplied by a factor that grows with the screen-space distance from the vehicle's screen position, between `3 / cameraRadius` and `15 / cameraRadius`, so leaves in front of the player thin out.
  - The number of bushes and trees is the number of nodes in the reference GLBs, which I could not inspect.
- Evidence: `sources/Game/World/Foliage.js:8`, `:33-86` (geometry), `:88-166` (material: alpha `:99-137`, colour `:140-144`, position `:154-159`, shadows `:162-165`), `:168-191` (instances), `:193-211`, `:213-219`; `sources/Game/World/Bushes.js:12-14`; `sources/Game/World/Trees.js:68-86`.
- Depends on: `seedrandom`, `BufferGeometryUtils.mergeGeometries`, `Wind`, `Lighting`, `View`, `VisualVehicle` (screen position), `MeshDefaultMaterial`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. A 16-bit bush or tree crown is one sprite on a camera-facing quad (or two or three crossed quads), alpha-tested, instanced from a list of positions. From folio keep: the fixed camera angle that makes billboards free; alpha-tested shadow casting if shadow maps are used; and above all the see-through rule, which matters more for a character on foot than for a car because the Runner will walk behind trees and buildings. In pixel art implement it as an ordered-dither discard in a screen-space circle around the avatar rather than as smooth alpha.

### 2.23 `Trees`

- What the visitor sees: birch, oak and cherry trees with a solid trunk and several leaf blobs each, in orange, olive and pink tones. Driving into a trunk makes a thud; the trunk does not move.
- How it works: the same class is instantiated three times with a different visual model, reference model and two leaf colours. From the visual model it takes the mesh whose name starts with `treeBody` and every mesh whose name starts with `treeLeaves`. Trunks become one `InstancedMesh` with static usage, with their material resolved by name through `materials.updateObject` (probably the shared palette material; the material name inside the GLB is not visible to me). For leaves it multiplies every tree reference by every leaf node's local matrix to obtain a flat list of transforms and hands it to one `Foliage` instance with see-through enabled. Each tree also gets a fixed cylinder collider (half-height 2.5, radius 0.15) with a collision sound.
- Evidence: `sources/Game/World/Trees.js:32-48`, `:50-66`, `:68-98`, `:100-120`; `sources/Game/World/World.js:69-71`.
- Depends on: `Foliage`, `Materials`, `Objects` and physics, two GLBs per species.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Keep "one class, several species that differ only by data" and "trunk and crown are separate so the crown can become see-through". A sprite tree needs one quad for the whole tree or one for the trunk and one for the crown, and a circle collider at the base.

### 2.24 `Flowers`

- What the visitor sees: small clusters of white petals near the ground that sway in the wind.
- How it works: each node of a reference model is a cluster centre. A seeded generator places 3 to 10 flowers per cluster within 1.5 units, with random rotation and scale 0.6 to 1.0. One flower is 8 tiny planes (0.08 units) arranged in an upward cone and merged. All flowers are drawn in one call as a `Mesh` with `count` set and a custom static instance-matrix attribute. The material is double-sided `MeshDefaultMaterial` in plain white, displaced by the wind in proportion to height, with the received-shadow lookup offset 0.25 units towards the sun. A per-instance colour index attribute is created from an undefined array and never used.
- Evidence: `sources/Game/World/Flowers.js:9`, `:47-80`, `:82-118`, `:120-150`, `:152-177` (unused attribute at `:168`).
- Depends on: `seedrandom`, `Wind`, `Lighting`, `MeshDefaultMaterial`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Decorative scatter is cheap and makes a small world feel alive: a seeded generator around hand-placed cluster centres gives variety without storing every position. In pixel art each flower is a 4 x 4 or 8 x 8 sprite quad.

### 2.25 Fallen `Leaves` (GPU compute particles)

- What the visitor sees: flat leaves lying on the ground that are kicked up and pushed aside by the vehicle, drift with gusts, float on water, and are far more numerous in autumn.
- How it works: the count is fixed at construction from the year cycle: `2 ^ round(remap(leaves, 0.25, 1, 7, 11))`, which is 64 in spring, 128 in winter and summer and 2048 at the autumn peak. Positions and velocities live in GPU storage buffers (`instancedArray`). A compute function initialises them, and a second compute function runs every frame through `renderer.computeAsync`: push away from the vehicle within 2 units, wind from the Perlin texture scaled by a per-leaf weight, explosion impulse, upward lift proportional to horizontal speed, damping (1.5 on ground, 0.75 on water), gravity, clamping to the ground or to the water level, and world-anchored wrap around the optimal area. The render material is a `MeshDefaultMaterial` on one quad per leaf, rotated in the vertex shader, casting and receiving shadows. This is the only compute shader in the repository.
- Evidence: `sources/Game/World/Leaves.js:17-18`, `:74-114` (buffers), `:150-168` (init), `:171-254` (update), `:276-285`, `:295-305`; `sources/Game/Cycles/YearCycles.js:14-19`; `sources/Game/Explosions.js:23`.
- Depends on: WebGPU compute (or its WebGL2 emulation, inferred), `YearCycles`, `Wind`, `Terrain`, `Water`, `PhysicsVehicle`, `Noises`.
- Transfer to a 16-bit on-foot sprite world: **SKIP**. It is the feature most tied to WebGPU and to a fast vehicle. If the Runner should disturb something as he passes, a few dozen CPU-simulated sprite particles (dust puffs, a handful of leaves) do the job in twenty lines.

### 2.26 Water: level, waterline, surface details and ice

- What the visitor sees: lakes and sea whose colour is the ground seen through shallow, then deep, water; white ripple lines along the shores; rain splashes when it rains; a cracked white ice sheet when it freezes; a white line where any object meets the water; and on the high tier a soft blur of whatever lies under the surface.
- How it works: there is no coloured water mesh. The blue tones are the ground itself, painted by the terrain gradient (2.19). `Water` only defines the levels (`surfaceElevation = -0.3`, `depthElevation = -1.5`, waterline thickness 0.013). On top of that:
  - **Waterline**: in every `MeshDefaultMaterial` with `hasWater`, fragments within 0.013 units of the surface height become white.
  - **Surface details**: `WaterSurface` is a single quad at the water level, scaled to the optimal-area diameter and following it. Its colour is white and its alpha is the maximum of up to four masks built from the terrain's blue channel and the noise textures: ripples (bands at constant depth that travel with wind time, limited to shallow water, disabled below about -3 degrees), ice (Voronoi cells growing from the shore as the temperature drops from 0 to -5 degrees), rain splashes (Voronoi rings, their share following `rain^2`), and the shore (blue at or below 0.17). Which masks exist is decided in JavaScript, and the material is rebuilt whenever the set changes, so unused effects cost nothing.
  - **Refraction blur** (high tier only): where the mask is below 0.5 the fragment outputs a 25-tap hash blur of the already rendered frame (`viewportSharedTexture`) instead of being transparent. On the low tier the material falls back to its plain output.
  - **Ice physics**: a large kinematic slab, one unit thick, whose top rises from the sea bed (-1.5) to the water surface (-0.3) as the ice ratio grows, with friction falling from 0.5 to 0.02.
  - The quad is inserted at the front of `scene.children` by `unshift`, bypassing `scene.add`.
- Evidence: `sources/Game/Water.js:10-14`; `sources/Game/Materials/MeshDefaultMaterial.js:92-97`; `sources/Game/World/WaterSurface.js:65-69`, `:76-112` (ripples), `:125-150` (ice), `:161-211` (splashes), `:226-231` (shore), `:242-268` (mask assembly), `:273-289` (blur), `:298-378` (material and tier switch at `:330-344`), `:380-398`, `:400-416` and `:448-466` (ice slab), `:418-446`.
- Depends on: `Terrain`, `Noises`, `Wind` (time), `Weather`, `Quality`, `View`, physics.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The decomposition is ideal for pixel art: water is ground tiles in water colours, plus white line details, plus a waterline on whatever stands in it. Implement the details as a two-to-four-frame animated tile or as palette cycling, keep the white waterline as is (it is one comparison in the shared material), and skip the refraction blur and the physics ice.

### 2.27 `Wind` and `WindLines`

- What the visitor sees: grass, flowers and foliage move in travelling gusts rather than in unison, more strongly on windy "days"; now and then a thin white curl drifts across the scene.
- How it works: `Wind` holds a fixed direction (angle `0.6 * pi`), a strength uniform, and its own clock `localTime`, which advances by `scaledDelta * 0.1 * strength`, so gusts travel faster when the wind is strong. Strength is `remapClamp(weather.wind, 0, 1, 0.1, 1)`. `offsetNode(position)` samples the Perlin texture twice, at two scales scrolling along the wind direction at two speeds, adds the samples and returns `direction * sum * strength`, a 2D offset that the grass, flowers and foliage shaders use. The fallen leaves and water ripples reuse `localTime`.
  `WindLines` keeps a pool of four ribbon meshes (a curve of 31 points built once). A `setTimeout` loop fires every 300 to 2000 ms, takes a free ribbon, places it at a random point within the optimal area, orients it along the wind, and animates a `progress` uniform with GSAP for 2 to 8 seconds depending on wind strength; the vertex shader widens the ribbon only around the travelling progress point.
- Evidence: `sources/Game/Wind.js:20-28`, `:30-43`, `:51-60`, `:72-77`; `sources/Game/World/WindLines.js:9-58`, `:74-94`, `:97-106`, `:142-191`; `sources/Game/Geometries/WindLineGeometry.js:6-26`; `sources/Game/Geometries/LineGeometry.js:5-69`.
- Depends on: `Noises`, `Weather`, `Ticker`, `gsap`, `View`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT** the wind, **DIRECT** the pooled wind lines. One global wind function sampled by every swaying thing is the right design at any scale; in pixel art quantise the result to whole texels and update it a few times per second for a hand-animated feel. The pooled "wind curl" is a very cheap way to make air visible and already looks like a 16-bit effect; it can even be a sprite animation.

### 2.28 `Weather`

- What the visitor sees: the world is sometimes dry, sometimes rainy, sometimes snowy, windy or stormy, and two visitors at the same moment see the same weather.
- How it works: seven properties, each recomputed every frame at priority 8 from a getter:

  | Property | Range | Formula (`n(x) = sin(x) * sin(1.678x) * sin(2.345x)`, `p` = absolute day-cycle progress) |
  |---|---|---|
  | temperature | -15 to 40 | year value + day value + `n(0.4p) * 7.5` |
  | humidity | 0 to 1 | year value + `n(0.36p) * 0.2` |
  | electricField | -1 to 1 | day value * `n(0.53p)` |
  | clouds | -1 to 1 | `n(0.44p)` |
  | wind | 0 to 1 | `n(p) * 0.5 + 0.5` |
  | rain | 0 to 1 | `remapClamp(humidity, 0.65, 1, 0, 1) * remapClamp(clouds, 0, 1, 0, 1)` |
  | snow | -1 to 1 | `remapClamp(rain, 0.05, 0.3, 0, 1) * remapClamp(temperature, 0, -5, 0, 1) + remapClamp(temperature, 0, 10, 0, -1)` |

  Because `p` is `Date.now() / 1000 / 240`, the weather is a pure function of wall-clock time. Each property goes through a manual binding, so the debug panel can freeze it, and through an `override` that blends towards scripted values over a duration; the tornado, the social area and the race circuit use it. The year presets also define `clouds` and `wind`, but nothing reads those two.
- Evidence: `sources/Game/Weather.js:23-126`, `:134-137`, `:139-193`, `:195-223`, `:225-229`; `sources/Game/Cycles/YearCycles.js:14-19`; override callers at `sources/Game/Tornado.js:156`, `sources/Game/World/Areas/SocialArea.js:249`, `sources/Game/World/Areas/CircuitArea.js:1418`.
- Depends on: `DayCycles`, `YearCycles`, `Debug`, `gsap`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**, or leave for a later version. The design is sound and tiny: derived properties from a deterministic clock, plus overrides. A portfolio does not need seven properties; "clear, rain, night" would already add life. The deterministic clock is only important for multiplayer, which a static site does not have, but it is also free.

### 2.29 `RainLines` (rain, and falling snow)

- What the visitor sees: slanted white streaks falling around the camera when it rains, more of them and longer in heavy rain, leaning with the wind, turning into short slow flakes when it is cold enough to snow.
- How it works: one indexed mesh of `2^11 = 2048` quads. Every line has a random position in a unit square and one random number. The vertex shader scales the square to the optimal-area diameter and applies the world-anchored wrap, then computes the fall with no CPU work: `progress = fract(localTime + random)`, height from 20 units down to the water level, clamped. A fraction of the lines is hidden by pushing them 99 units up according to `visibleRatio = rain^2`. Length (1 to 3 units), speed (0.2 to 0.4) and incline (0.1 to 0.4, from wind) come from the weather through manual bindings; as the snow value rises, length shrinks to 0.03 and speed to 0.05, which turns streaks into flakes. The whole mesh is set invisible when `visibleRatio` is below 0.00001.
- Evidence: `sources/Game/World/RainLines.js:13-14`, `:45-97`, `:100-154`, `:156-214`, `:216-223`, `:225-246`.
- Depends on: `Weather`, `View`, `MeshDefaultMaterial`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. This is the cheapest weather effect and it is already pixel-like. With a low-resolution render target it can be done in screen space instead: a few dozen 1 x 3 pixel streaks drawn over the final image, which needs no world geometry at all.

### 2.30 `Snow` cover

- What the visitor sees: when it has snowed for a while, a white blanket with soft drifts covers the ground, sparkles, sinks at lake shores, and is carved by the wheels and the chassis of the vehicle.
- How it works: the cover is a 256 x 256 grid of quads (131,072 triangles, 393,216 vertices, non-indexed) the size of the optimal area, snapped to its own cell size. Its height comes from a 257 x 257 half-float render target that is re-rendered every frame while snow is visible. The height function is: base elevation, plus the product of two Perlin samples, multiplied by one minus the track textures (wheels in red, chassis in green), plus a drop proportional to water depth. The base elevation integrates the weather: every frame it changes by `snow * max(dayProgressDelta, 0) * 10`, clamped to -1 to 0.5, so snow accumulates while it snows and melts when the snow value is negative. The vertex shader samples the height texture several times per vertex to choose each quad's diagonal and to compute a normal from two neighbours. The fragment adds glitter from the hash texture. The mesh is hidden while elevation is at or below -0.9.
- Evidence: `sources/Game/World/Snow.js:14-20`, `:43-110` (elevation function `:61-93`, accumulation `:95-109`), `:112-161` (render target), `:163-244` (geometry), `:246-379` (material: diagonal flip `:287-313`, normal `:315-331`, glitter `:356-379`), `:423-475`.
- Depends on: `Weather`, `DayCycles`, `Terrain`, `Tracks`, `Noises`, `View`, render targets.
- Transfer to a 16-bit on-foot sprite world: **SKIP**. It is the most expensive environment effect (an extra render pass and nearly 400,000 vertices with multiple texture reads each) and its charm lies in smooth relief that pixel art cannot show. A 16-bit winter is a palette swap of the ground tiles plus the flake variant of the rain effect.

### 2.31 `Lightnings`

- What the visitor sees: on stormy nights, sparks gather over a spot for a few seconds, then a jagged bolt strikes it with an explosion of particles and thunder that can throw objects and the vehicle; far thunder rumbles at other times.
- How it works: once per wall-clock second a random generator seeded with that second (`alea(currentSecond)`) is compared with `hitChances = max(0, clouds) * max(0, electricField) * humidity`. On a hit, a point within the optimal area is chosen and three short-lived meshes are created in sequence: 32 rising sprite particles for 5 seconds, then a ribbon along 15 jittered points 15 units tall for 3 seconds together with 128 expanding sprite particles for 4 seconds. Their animation is entirely in the vertex shader from a `startTime` uniform. A physics explosion and a positional sound accompany the strike, and all meshes and materials are disposed afterwards. Because the seed is the clock, every client sees the same strikes.
- Evidence: `sources/Game/World/Lightnings.js:26-45`, `:135-223`, `:225-318`, `:320-414`, `:416-464`, `:466-492`; `sources/Game/Geometries/LineGeometry.js:5-69`.
- Depends on: `Weather`, `seedrandom`, `gsap`, `Explosions`, `Audio`, `View`.
- Transfer to a 16-bit on-foot sprite world: **SKIP**. If a storm is ever wanted, a one-frame white flash and a sprite bolt are the 16-bit equivalent. The reusable idea is "time-seeded randomness makes random events reproducible".

### 2.32 Day cycle (`Cycles`, `DayCycles`)

- What the visitor sees: every four minutes the world goes through day, dusk, night and dawn: the light turns from warm white to pink to deep blue, shadows change colour and direction, the background gradient and fog change, and lamps switch on at night.
- How it works: `Cycles` is a generic keyframe engine.
  - `absoluteProgress = Date.now() / 1000 / duration` (or a fixed value from an environment variable), and `progress` is its fractional part. The day duration is `4 * 60` seconds, so the cycle is accelerated 360 times but still tied to the real clock.
  - A subclass returns keyframes `{ properties, stop }`. Properties are numbers or `THREE.Color` objects. The list is padded so interpolation wraps around. Each frame at priority 8 the two surrounding keyframes are found and every property is interpolated with a smoothstep ratio.
  - `DayCycles` defines four presets (day, dusk, night, dawn) of eleven properties: `lightColor`, `lightIntensity`, `shadowColor`, `fogColorA`, `fogColorB`, `fogNearRatio`, `fogFarRatio`, `revealColor`, `revealIntensity`, `temperature`, `electricField`. For example day is light `#ffd2c2` at 1.2 with shadow `#6d3fff`, and night is light `#3240ff` at 3.8 with shadow `#2f00db`. The stops are day at 0 and 0.15, dusk at 0.25, night at 0.35 and 0.6, dawn at 0.8, day at 0.9.
  - **Interval events**: `night` (0.25 to 0.7) and `deepNight` (0.35 to 0.6) fire once on entering and once on leaving, with a boolean. Pole lights, some areas and ambient sounds listen. An `addPunctualEvent` method exists but is never called.
  - **Override**: `override.start(values, duration)` blends chosen properties, and optionally the progress itself, towards scripted values through a GSAP-tweened strength; `override.end(duration)` releases them.
  - In debug mode the progress is a manual binding with a ring control, and every preset colour and number is editable live.
- Evidence: `sources/Game/Cycles/Cycles.js:9-64` (clock at `:23`), `:82-141`, `:143-251`, `:253-291`, `:293-311`; `sources/Game/Cycles/DayCycles.js:4-9`, `:13-17`, `:51-61`, `:64-70`; consumers at `sources/Game/Ligthing.js:183-213`, `sources/Game/Fog.js:41-49`, `sources/Game/Reveal.js:232-236`, `sources/Game/World/PoleLights.js:139`.
- Depends on: `Events`, `Debug`, `gsap`, `Ticker`.
- Transfer to a 16-bit on-foot sprite world: **DIRECT**. `Cycles.js` is about 300 lines with no rendering dependency and ports to TypeScript almost unchanged. It is also the natural home of the 16-bit technique of time-of-day palettes: make the presets palette rows (or a light tint and a shadow tint) and step between them instead of interpolating smoothly if strict palette colours are wanted. For a portfolio the clock source is a product decision: accelerated like here, or the visitor's real local time.

### 2.33 Year cycle (`YearCycles`)

- What the visitor sees: the same world looks and behaves differently by season: many fallen leaves in autumn, more snow and ice in winter, drier weather in summer.
- How it works: the same engine with `duration = 60 * 60 * 24 * 365` seconds, so one cycle is one real year. Four presets (winter, spring, summer, fall) at stops 0.125, 0.375, 0.625 and 0.875 define `leaves`, `temperature`, `humidity`, `clouds` and `wind`. Only three are consumed: `leaves` sets the fallen-leaf count once at construction, and `temperature` and `humidity` feed the weather. Because the clock counts 365-day years from 1970, progress 0 falls about two weeks before 1 January in 2026 (computed: 2026-11-04, the date of the studied commit, gives 0.88, the autumn keyframe). The seasons are therefore the real northern-hemisphere seasons.
- Evidence: `sources/Game/Cycles/YearCycles.js:6-10`, `:12-28`; `sources/Game/World/Leaves.js:17-18`; `sources/Game/Weather.js:30`, `:48`.
- Depends on: `Cycles`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**, optional. A seasonal palette chosen from the real date is a pleasant touch for returning visitors and costs one more instance of the same class. It should not be in a first version.

### 2.34 `Tracks`: a render target that remembers where the wheels went

- What the visitor sees: the vehicle leaves flattened paths in the grass and furrows in the snow that fade out behind it.
- How it works: `Tracks` owns a private scene, an orthographic camera looking straight down over a 40 x 40 unit window, and a 512 x 512 render target. Each `Track` is a ribbon whose vertices are positioned in the vertex shader from a 128 x 1 float data texture holding the last 128 sampled positions of one tracked point (plus a "touching the ground" flag). On the CPU the history is shifted by one texel when the point has moved more than 0.2 units and more than 1/30 s has passed. The ribbon is drawn additively in one colour channel, red for each wheel (width 0.5) and green for the chassis (width 1.5), with alpha fading along its length and towards the window edges. The window follows the player. Consumers read the texture with a world-to-window transform: `Terrain.terrainNode` removes grass under the red channel, and the snow height function carves by red and green.
- Evidence: `sources/Game/Tracks.js:11-34`, `:64-90`, `:96-130`, `:132-200`, `:212-249`; `sources/Game/Terrain.js:98-103`; `sources/Game/World/Snow.js:78-87`; `sources/Game/World/VisualVehicle.js:251`, `:287`; `sources/Game/Player.js:619`.
- Depends on: render targets, float data textures, `Terrain`, `Snow`, `Player`.
- Transfer to a 16-bit on-foot sprite world: **SKIP** in a first version. A persistent ground mask is elegant, but its payoff comes from a wide vehicle crossing dense grass or snow. If footprints are wanted later, the 16-bit version is a short ring buffer of footprint decals.

### 2.35 `Trails`

- What the visitor sees: glowing ribbons that stream behind the vehicle when it boosts and fade out.
- How it works: each trail is a 4-sided open cylinder with 32 segments whose rings are placed along the last 32 stored positions from a float data texture, shifted when the source has moved 0.4 units. The stored alpha decays at 0.2 per scaled second. Colour comes from the shared 1 x 16 gradient texture, multiplied by 5 so that it blooms, with a small view-angle term.
- Evidence: `sources/Game/Trails.js:38-44`, `:61-69`, `:71-140`, `:142-183`; `sources/Game/World/VisualVehicle.js:376`.
- Depends on: `Materials` (gradient texture), bloom, float data textures.
- Transfer to a 16-bit on-foot sprite world: **SKIP**. A runner's equivalent is a few dust sprites at the feet or two or three afterimage copies of the sprite when sprinting.

### 2.36 `Scenery` and the road

- What the visitor sees: the static large-scale dressing of the world and a dark road with tiny sparkles that twinkle as the camera moves.
- How it works: `Scenery` iterates the top-level nodes of one model. Each node (unless `userData.prevent` is set) is registered through `objects.addFromModel`, which derives its physics from naming conventions, and is parsed by `References`, which collects nodes named `ref...` or `reference...` into a map by name. The node referenced as `road` receives a custom `MeshDefaultMaterial`: base colour `#383039` plus a glitter term (hash texture raised to the power 100, times 0.3, times a Perlin sample, times a profile across the road) whose phase advances with time and with camera movement.
- Evidence: `sources/Game/World/Scenery.js:12-35`, `:45-94`, `:115-118`; `sources/Game/References.js:11-31`.
- Depends on: `Objects`, `References`, `Noises`, `MeshDefaultMaterial`, one GLB.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The convention "the scene file marks special objects by name and code attaches behaviour or a special material to them" is useful with any authoring tool, including a JSON level file or a Tiled map with named object layers.

### 2.37 `Quality` tiers

- What the visitor sees: in the Options menu a "Quality" button reading "High" or "Low" with the tooltip "Toggles some effects". Phones start on Low, everything else on High.
- How it works: `Quality` holds one integer, `level` (0 = high, 1 = low), and an emitter. The initial value is decided once by a user-agent test: `/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)` gives low, anything else gives high. `changeLevel(level)` stores the value and triggers `'change'`. The Options button and two debug buttons call it. Nothing measures frame time to change the tier; `ticker.deltaAverage` exists but only the vehicle controller reads it. There is no check of `prefers-reduced-motion`, device memory or core count. What the tiers change:

  | What | High (0) | Low (1) | Follows a runtime toggle? | Evidence |
  |---|---|---|---|---|
  | Tilt-shift blur pass | on | off | yes | `sources/Game/Rendering.js:90-104` |
  | Bloom blur levels | 5 | 2 | no, read once | `sources/Game/Rendering.js:82` |
  | Shadow map size | 2048 | 512 | yes | `sources/Game/Ligthing.js:23`, `:168-172` |
  | Shadow blur radius | 3 | 2 | no | `sources/Game/Ligthing.js:28` |
  | Water refraction blur | on | off | yes (material swapped) | `sources/Game/World/WaterSurface.js:330-344` |
  | Camera polar angle | 0.31 pi | 0.27 pi (steeper) | no | `sources/Game/View.js:335` |
  | Zoom-out with speed, and a 1.4 times larger optimal area to allow for it | on | off | zoom yes, area only at the next resize | `sources/Game/View.js:220-223`, `:699` |
  | Shader warm-up | on (WebGPU only) | off | not applicable | `sources/Game/Game.js:203` |
  | Vehicle controller time step | `min(1/60, average delta)` | fixed `1/60` | yes | `sources/Game/Physics/PhysicsVehicle.js:511` |
  | Intro label position | one layout | another | no | `sources/Game/World/Intro.js:29-45` |

  Not tiered at all: the grass blade count (78,400), the snow grid, the rain count, the fallen-leaf count, the pixel-ratio cap of 2 and the antialiasing rule. The low tier still becomes much cheaper indirectly, because its steeper camera and missing zoom-out shrink the optimal area (see the table in 2.40), and the shadow, ground, water and snow coverage shrink with it.
- Evidence: `sources/Game/Quality.js:12-13`, `:23-36`, `:40-48`; `sources/Game/Options.js:25-40`; `sources/index.html:258-261`; rows above.
- Depends on: `Events`, `Debug`, `Options`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. A world rendered at 320 x 180 with a few hundred quads probably needs one tier. Keep the mechanism (a tiny object with a level and a change event that subsystems subscribe to) for an "effects on or off" switch, and use it to honour `prefers-reduced-motion`, which folio ignores. Decide the default by measuring the first second of frames rather than by reading the user agent, which misclassifies tablets and weak laptops.

### 2.38 Monitoring and statistics

- What the visitor sees: nothing. A developer can see draw-call and triangle counts in the debug panel.
- How it works: three tools exist, one of them disabled.
  - `Monitoring` wraps `stats-gl` (GPU, refresh-rate and compute timings) and is meant to update at priority 999, but its import and its construction in `Game.js` are commented out, and so is its own tick subscription. `Rendering.render()` still contains the code that would feed it (`resolveTimestampsAsync` and `stats.update()`) if `game.monitoring` existed.
  - `#stats` in the URL makes `Rendering` copy `renderer.info` (draw calls, triangles, geometries, textures) into an object every frame and show it as read-only fields. The fields live in the debug panel, so `#debug` must be present as well.
  - `#inspector` attaches the three.js `Inspector` add-on to the renderer.
- Evidence: `sources/Game/Monitoring.js:10-37`; `sources/Game/Game.js:15`, `:198`; `sources/Game/Rendering.js:62-65`, `:133-163`, `:176-183`; `readme.md:112-114`.
- Depends on: `stats-gl`, `three/addons/inspector`, `Debug`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Keep a development-only overlay with frame time and draw calls, loaded by dynamic import so that it never reaches visitors. In folio the tweakpane and Inspector imports are static and therefore ship to everyone.

### 2.39 `InstancedGroup` and the four instancing strategies

- What the visitor sees: dozens of identical props (bricks, benches, fences, lanterns, crates, bowling pins) that can each be knocked around independently, with no slowdown from their number.
- How it works: the code uses four distinct ways to draw many copies.
  1. **`InstancedGroup`, for props moved by physics.** It takes a list of reference objects and a prototype model. For every mesh inside the prototype it creates one `THREE.InstancedMesh` with `count = references.length`, copying the shadow and culling settings. At tick priority 13, after physics and after all game logic, it rewrites only the matrices of references whose `needsUpdate` flag is set (or all of them if the group flag is set), as `meshLocalMatrix * referenceWorldMatrix`, and marks the GPU buffer dirty only if something changed. The static helper `getBaseAndReferencesFromInstances(children)` turns a model that contains N placed copies into "first child as prototype, all children as references". In `Bricks` each reference also becomes a sleeping dynamic physics body, and a small loop raises `needsUpdate` for bodies that are awake.
  2. **Static `InstancedMesh`** with `StaticDrawUsage`, matrices written once (tree trunks).
  3. **A custom instance-matrix attribute** applied inside the material's position node, on a mesh with `count` set (foliage and flowers), which leaves room for extra per-instance attributes.
  4. **One large buffer with the "instance" logic in the vertex shader** (grass, rain, snow), and storage buffers written by compute (leaves, particles).
- Evidence: `sources/Game/InstancedGroup.js:6-26`, `:28-53`, `:55-84`, `:86-90`, `:92-119`; `sources/Game/World/Bricks.js:11-63`; `sources/Game/World/Trees.js:50-66`; `sources/Game/World/Foliage.js:154-159`, `:193-211`; `sources/Game/World/Flowers.js:152-177`; `sources/Game/World/Grass.js:49-90`.
- Depends on: `Ticker` (priority 13), `Objects` and physics, `Materials`.
- Transfer to a 16-bit on-foot sprite world: **DIRECT** for the idea, in its simplest form. A static pixel-art world needs strategy 2: one `InstancedMesh` per kind of sprite (tree, bush, rock, sign), matrices written once from the level data, one draw call each. If some props can be pushed by the Runner, the dirty-flag update of strategy 1 is the right pattern and is only 30 lines. With a sprite atlas, a per-instance attribute holding the atlas cell lets every prop share one mesh and one material.

### 2.40 The optimal area: a camera-footprint budget

- What the visitor sees: detail everywhere on screen and nothing beyond it. The visitor cannot tell that grass, ground mesh, shadows and rain exist only around the camera.
- How it works: `View.setOptimalArea()` computes, at start and on every debounced resize, the part of the ground plane that the camera can see at its maximum zoom-out. It temporarily places the default camera at the maximum radius (`30 + ratioOverflow * 9`, times 1.4 on the high tier) with the fixed viewing angles, looking at the origin, casts rays through the four screen corners onto the plane `y = 0`, takes the midpoint of the two diagonals' midpoints as the centre and the distance from the centre to the far-right corner as the `radius`, and measures the camera's distance to the nearest and farthest ground points on the vertical centre line as `nearDistance` and `farDistance`. Every frame the area's `position` is that centre offset by the smoothed camera target. `ratioOverflow` is how much narrower the window is than 16:9, so portrait phones get a longer maximum radius.
  Consumers (verified by grep): grass, ground mesh, water quad, snow grid, rain, fallen leaves (all sized to the diameter), lightning and wind-line placement, the shadow camera and the light position, the fog range, the distance beyond which physics bodies are put to sleep, and the maximum pointer-ray distance.
  Sizes I derived by re-implementing the algorithm by hand from the constants (helper `briefs/a1_optimal_area_estimate.py`; these are not measurements of a running build):

  | Window and tier | Max camera radius | Optimal radius | Patch side | Share of the 192 x 192 world | Grass blades per square unit |
  |---|---:|---:|---:|---:|---:|
  | 16:9, high | 42.0 | 30.8 | 61.6 | 10.3% | 20.7 |
  | 16:9, low | 30.0 | 19.1 | 38.2 | 4.0% | 53.7 |
  | 21:9, high | 42.0 | 37.2 | 74.4 | 15.0% | 14.2 |
  | 4:3, low | 33.0 | 17.6 | 35.2 | 3.4% | 63.4 |
  | 9:19.5 portrait, low | 55.7 | 21.3 | 42.6 | 4.9% | 43.1 |

- Evidence: `sources/Game/View.js:22-30`, `:172-281` (algorithm `:213-281`, tier factor `:220-223`), `:335-341`, `:394`, `:755-760`; consumers at `sources/Game/World/Grass.js:13`, `sources/Game/World/Floor.js:35`, `sources/Game/World/WaterSurface.js:384-385`, `sources/Game/World/Snow.js:14`, `sources/Game/World/RainLines.js:174`, `sources/Game/World/Leaves.js:148`, `sources/Game/Ligthing.js:17-25`, `sources/Game/Fog.js:20-21`, `sources/Game/Objects.js:352-360`, `sources/Game/RayCursor.js:85`.
- Depends on: `View`, `Viewport`, `Quality`.
- Transfer to a 16-bit on-foot sprite world: **DIRECT**. "Compute once what the camera can ever see, and size every dense effect to that" is the single most valuable performance idea in this slice, and with an orthographic pixel camera the footprint is a plain rectangle that takes four lines to compute. In a world only a few screens wide it matters less for static props, but it still applies to anything per-frame: shadow coverage, rain, animated grass, and deciding which animated sprites need updating.

### 2.41 Culling and frame-budget tricks (catalogue)

- What the visitor sees: a dense scene that stays responsive.
- How it works: none of these is exotic; the discipline is in applying all of them. Each line lists the trick, where it is, and whether it transfers.
  1. Size dense effects to the camera footprint (2.40). **DIRECT**.
  2. World-anchored wrap in the vertex shader, so a fixed pool of blades, drops and leaves follows the camera with zero CPU work per instance: `sources/Game/World/Grass.js:144-151`, `sources/Game/World/RainLines.js:187-193`, `sources/Game/World/Leaves.js:249-252`. **ADAPT** (only for worlds much larger than the view).
  3. Camera-following meshes set `frustumCulled = false`, because their bounds are meaningless, and are switched off as a whole when their weather value is zero: `sources/Game/World/RainLines.js:233`, `sources/Game/World/Snow.js:427-474`. **DIRECT**.
  4. Material feature flags produce lean shaders, and the water material is rebuilt only when its set of active effects changes: `sources/Game/Materials/MeshDefaultMaterial.js:34-39`, `sources/Game/World/WaterSurface.js:431-446`. **DIRECT**.
  5. Materials are shared by name through the registry, so the number of GPU pipelines stays small (2.10). **DIRECT**.
  6. Noise is read from three small textures instead of being computed (2.17). **ADAPT**.
  7. Per-frame sorting of objects is turned off (`renderer.sortObjects = false`, `sources/Game/Rendering.js:48`), and draw order is managed by hand in a few places (`sources/Game/World/WaterSurface.js:391`). **SKIP**: sprites with transparency need back-to-front order, or alpha testing with depth writes, which is the better choice for pixel art because sprite edges are hard.
  8. Antialiasing is disabled at pixel ratio 2 and the ratio is capped at 2: `sources/Game/Rendering.js:44`, `sources/Game/Viewport.js:24-25`. **ADAPT** (pixel art wants no antialiasing and a fixed low resolution).
  9. Expensive rebuilds wait for a 400 ms pause in resizing: `sources/Game/Viewport.js:30-46`. **DIRECT**.
  10. Physics bodies start asleep and are put back to sleep when farther than the optimal radius from the camera target; the distance test runs only when the rounded target position changes: `sources/Game/Objects.js:307-320`, `:352-360`, `sources/Game/World/Bricks.js:39`. **SKIP** unless a physics engine is used.
  11. Instance matrices are rewritten only for instances flagged dirty: `sources/Game/InstancedGroup.js:92-119`. **DIRECT** if props move.
  12. Buffers that never change are declared static: `sources/Game/World/Trees.js:54`, `sources/Game/World/Foliage.js:203`, `sources/Game/World/Flowers.js:163`. **DIRECT**.
  13. History textures are written only after a minimum time and distance: `sources/Game/Tracks.js:102`, `:113`, `:216-224`; `sources/Game/Trails.js:40`, `:152`. **SKIP** with the features.
  14. Animation is computed in the vertex shader from a time uniform (rain fall, lightning, wind sway), so thousands of elements cost no JavaScript: `sources/Game/World/RainLines.js:199-203`, `sources/Game/World/Lightnings.js:170-190`. **DIRECT**.
  15. Transient objects are pooled or disposed: four wind ribbons are reused (`sources/Game/World/WindLines.js:79-84`), lightning meshes and materials are disposed (`sources/Game/World/Lightnings.js:455-462`), the intro and grid free their GPU resources (`sources/Game/World/Intro.js:316-342`, `sources/Game/World/Grid.js:96-101`). **DIRECT**.
  16. Only one shadow map exists, fitted to the footprint, and the largest meshes (ground, grass, snow) do not cast into it: `sources/Game/World/Floor.js:91-92`, `sources/Game/World/Grass.js:202`, `sources/Game/World/Snow.js:416-417`. **ADAPT**.
  17. Content images are fetched when their item is first shown, not at start: `sources/Game/World/Areas/ProjectsArea.js:482`, `sources/Game/World/Areas/LabArea.js:468`, `sources/Game/World/Intro.js:147-169`. **DIRECT**.
  18. Shaders are compiled before the visitor gains control (2.9). **SKIP**.

  What is absent is also informative: there are no levels of detail, no occlusion culling, no spatial partition for rendering (ordinary scenery relies on three.js per-object frustum culling), no dynamic resolution and no frame-time-driven quality.
- Evidence: listed per item above.
- Depends on: all of the above subsystems.
- Transfer to a 16-bit on-foot sprite world: mixed, as marked per item. The items marked DIRECT cost almost nothing to adopt from the first day.

### 2.42 `ResourcesLoader`

- What the visitor sees: the progress ring of the intro, and no further loading pauses during play except for images that appear when a project or lab item is opened.
- How it works: a 123-line class with two responsibilities.
  - **Loaders by type**, created on first use and kept: `texture` (`THREE.TextureLoader`), `textureKtx` (`KTX2Loader` with the transcoder at `./basis/` and `detectSupport(renderer)`; the first load is indeed issued only after the renderer has been initialised, and I infer that this call is the reason), `draco` (`DRACOLoader` with the decoder at `./draco/`, preloaded) and `gltf` (`GLTFLoader` wired to the Draco and KTX2 loaders).
  - **`load(files, progress)`**, which returns a promise of `{ name: resource }`. Each file is a tuple `[name, path, type, modifier]`. All requests start in the same loop, so the browser parallelises them. The optional `modifier` runs once on the loaded resource; `Game.js` uses it to set filters, wrapping, mipmaps and colour space next to each path, which keeps texture settings in one readable table. Loaded resources are cached by path. Progress is "files remaining out of total". On any error it logs and rejects the whole promise with the path; nobody catches it and there is no retry.
  - **Compressed versus uncompressed** is a build-time switch: `VITE_COMPRESSED` selects the `-compressed` suffix for models and the `textureKtx` type with the `.ktx` extension for textures; otherwise the plain `.glb` and `.png` twins are loaded. The `.ktx` files are KTX2 containers despite the extension (they are written with `--t2` and read by `KTX2Loader`). The live site uses the compressed set: its HTML preloads `-compressed.glb` and `.ktx` files.
  - **Upfront versus lazy**: 44 files are requested upfront in two batches (2.2). Lazy loads bypass `load()` or call it later: the intro label per input device (always `.ktx`, whatever the switch says), one image per project or lab item, flag images with `loading="lazy"`, and an alternative vehicle model for the Konami code (an uncompressed GLB).
  - **Paths and caching**: all assets are in Vite's `publicDir` (`static/`), so they are copied as they are, with no content hash. Cache invalidation is a hand-edited `?cb=1` query string (missing on one entry). Paths are relative and the Vite `base` is `./`, so the build works from any sub-directory. The four `<link rel="preload">` tags in `index.html` name the same files without `?cb=1`, so they do not match the URLs the loader requests and are probably wasted downloads (inferred from how browsers match preloads).
- Evidence: `sources/Game/ResourcesLoader.js:12-13`, `:16-53`, `:55-123` (cache `:99-105`, error `:89-93`, progress `:63-72`, modifier `:75-86`); `sources/Game/Game.js:97-109`, `:132-179` (missing cache-buster at `:147`); `sources/Game/World/Intro.js:151-153`; `sources/Game/KonamiCode.js:52-60`; `sources/Game/InputFlag.js:85-89`; `vite.config.js:8-11`; `sources/index.html:39-42`; `scripts/compress.js:80` (`--t2`).
- Depends on: three.js loaders, the Draco and Basis decoder files in `static/`, `Rendering`.
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. Keep the manifest idea: one typed list of `{ key, url, kind, setup }` where `setup` applies nearest filtering and colour space, loaded with `Promise.all`, with count-based progress (fine for a dozen files) and, unlike folio, an error state. Change the plumbing: import asset URLs through Vite (`import paletteUrl from './palette.png'`), so that file names are content-hashed and the GitHub Pages sub-path is applied automatically, which removes both the manual cache-buster and any base-path arithmetic. Only `TextureLoader` is needed for sprites; add `GLTFLoader` only if real 3D models are used.

### 2.43 The compression script (`scripts/compress.js`)

- What the visitor sees: nothing; it is the reason the world downloads in about a megabyte and a half.
- How it works: `npm run compress` runs `node scripts/compress.js static/`, which has three blocks.
  1. **Models.** Every `static/**/*.glb` whose name does not already end in `-draco`, `-ktx` or `-compressed` is processed by the `gltf-transform` command line in two steps: `etc1s <in> <out> --quality 255` (embedded textures to KTX2) and then, on the same output file, `draco --method edgebreaker --quantization-volume mesh --quantize-position 12 --quantize-normal 6 --quantize-texcoord 6 --quantize-color 2 --quantize-generic 2`. Originals are kept; the result is `x-compressed.glb`.
  2. **Textures.** Every `static/**/*.{png,jpg}` outside `ui`, `favicons` and `social` is converted with the external `toktx` tool to `x.ktx`. The default preset is ETC1S, maximum quality level, sRGB, three channels. A list of path patterns overrides it: masks (glyphs, the foliage mask, slabs, icons, intro labels) become a single linear red channel; the palette becomes UASTC with mipmaps in sRGB; the terrain becomes UASTC with mipmaps in linear space; the career textures become two-channel UASTC. The first matching pattern wins, so the second `whisperFlame` entry is dead.
  3. **UI images.** Every `static/ui/**/*.{png,jpg}` is converted to WebP at quality 80 with `sharp`.
  The script spawns all jobs at once with no concurrency limit and ignores exit codes. Results measured from the tree: models 4.95 MB to 1.04 MB, textures 20.60 MB to 3.10 MB, UI images 6.59 MB to 0.60 MB (table in section 4). Compression does not always shrink the file: `terrain.ktx` (342 KB) is larger than `terrain.png` (326 KB), the career `.ktx` files are about four times their PNGs, and `palette.ktx` is 1,504 bytes against 362. Those files use UASTC for fidelity, so their benefit is GPU memory and upload time, not download size. The 6-bit texture-coordinate quantisation is coarse (64 steps across each mesh's UV range), which is harmless if most UVs only need to land inside a palette swatch (inferred, and consistent with 2.10).
- Evidence: `scripts/compress.js:10-65`, `:70-126` (default preset `:80`, overrides `:81-97`), `:131-146`; `package.json:10`, `:17-20`, `:33`; `readme.md:124-151`.
- Depends on: `@gltf-transform/cli`, the KTX-Software `toktx` binary (not an npm package), `sharp`, `glob`.
- Transfer to a 16-bit on-foot sprite world: **SKIP**. Pixel-art PNGs are already a few kilobytes, block-based lossy texture compression would damage them, and the decoders needed at run time (0.89 MB of JavaScript and WASM in this project) would outweigh every asset in a small pixel world. What is worth keeping is the workflow, should it ever be needed: originals stay untouched, compressed twins are generated beside them, and a build flag chooses which set the loader requests. WebP for ordinary DOM images remains a sensible default for the existing site.

### 2.44 Asset authoring conventions

- What the visitor sees: nothing.
- How it works: the code and the tree show a consistent contract between the authoring tool and the engine.
  - **One file per role.** Meshes, colliders and placements are separate models: `playgroundVisual` and `playgroundPhysical`; `birchTreesVisual` and `birchTreesReferences`; reference-only files for bushes, flowers, respawns and the tornado path.
  - **Names carry behaviour.** Material names select registry materials (2.10). Node names starting with `ref` or `reference` are collected by `References`. `treeBody` and `treeLeaves` prefixes split a tree. In `Objects.getFromModel`, a node name containing `physical` makes the node a physics object, `dynamic` or `kinematicPositionBased` sets the body type (default fixed), and child nodes named `trimesh`, `hull`, `cuboid`, `tube` or `ball` become colliders of that shape and are removed from the visual. glTF custom properties (`mass`, `friction`, `restitution`, `category`, `prevent`) arrive as `userData`.
  - **Copies are instances.** A model containing N placed copies of a prop is read as one prototype plus N transforms (2.39).
  - **Sources are kept out of the served folder.** `resources/` (151 MB: Blender files, layered images, reference boards, renders, sound masters) is never loaded; `static/` holds the exports.
- Evidence: `sources/Game/Objects.js:116-221`; `sources/Game/References.js:11-31`; `sources/Game/World/Trees.js:38-47`; `sources/Game/InstancedGroup.js:72-84`; `sources/Game/Game.js:134-159`; `readme.md:116-122`; tree listing of `resources/`.
- Depends on: Blender and its glTF exporter (per the README).
- Transfer to a 16-bit on-foot sprite world: **ADAPT**. The same separation works without Blender: a sprite atlas (visuals), a tile or JSON map (collision and ground types), and a typed list of placements (what stands where). Name-driven behaviour becomes object types in a Tiled map or a discriminated union in TypeScript. Keeping authoring sources outside the deployed folder is essential on GitHub Pages, where everything in the published directory is public and counts against the site size.

### 2.45 Debug panel, URL flags and environment flags

- What the visitor sees: nothing, unless the URL ends in `#debug`, which opens a control panel with one folder per subsystem. Pressing `H` hides it.
- How it works:
  - **Activation.** `Debug.active = location.hash.match(/debug/i)`. When active it creates a tweakpane `Pane` with the Essentials and Camerakit plugins. The flag is read once at start.
  - **Folder per subsystem.** Almost every constructor contains `if (this.game.debug.active) { this.debugPanel = this.game.debug.panel.addFolder({ title, expanded: false }) }` and then binds its tunables. Because most tunables are TSL uniforms, binding `uniform.value` edits the running shader without recompiling. Helpers: `addThreeColorBinding` for `THREE.Color` values and `addButtons` for a row of buttons.
  - **Manual bindings.** `addManualBinding(panel, object, property, settings, update)` returns an object whose `update()` sets `object[property]` to `update()` normally, or to the value typed in the panel after the developer touched it, with "manual" and "auto" buttons to switch. It is called whether or not debug is active, so it is the normal code path for derived values: cycle progress, every weather property, wind strength, rain, snow, ice and ripple ratios, lightning chance.
  - **URL flags** (regular expressions on the whole hash, so they combine, for example `#debug-stats-skip`): `debug` (panel, 4 times faster intro, a "debug" achievement), `stats` (renderer counters in the panel), `inspector` (three.js Inspector), `skip` (4 times faster reveal and no wait for the first click).
  - **Environment flags** (Vite, read at build time):

    | Variable | Read at | Effect |
    |---|---|---|
    | `VITE_COMPRESSED` | `sources/Game/Game.js:97` | non-empty: load `-compressed.glb` and `.ktx` twins |
    | `VITE_PLAYER_SPAWN` | `sources/Game/Game.js:111` | name of the respawn point to start at (default `landing`) |
    | `VITE_DAY_CYCLE_PROGRESS` | `sources/Game/Cycles/DayCycles.js:15` | freeze the time of day at a value from 0 to 1 |
    | `VITE_YEAR_CYCLE_PROGRESS` | `sources/Game/Cycles/YearCycles.js:8` | freeze the season |
    | `VITE_GAME_PUBLIC` | `sources/index.js:10` | expose the instance as `window.game` |
    | `VITE_LOG` | `sources/index.js:5` | print a console banner |
    | `VITE_MUSIC` | `sources/Game/Audio.js:251` | start the music playlist (other slice) |
    | `VITE_WHISPERS_COUNT` | `sources/Game/World/Whispers.js:16` | number of visitor messages shown (other slice) |
    | `VITE_SERVER_URL` | `sources/Game/Server.js:28`, `:44` | WebSocket server; empty disables multiplayer features (other slice) |
    | `VITE_ANALYTICS_TAG` | `sources/index.html:51` | analytics identifier substituted into the HTML |

  - Cost: tweakpane, its plugins and the Inspector are imported statically, so they are part of the production bundle even though almost no visitor uses them (inferred from the static `import` statements; bundle contents were not inspected).
- Evidence: `sources/Game/Debug.js:11-24`, `:27-63`, `:65-69`, `:71-90`; `sources/Game/Rendering.js:6`, `:62-65`, `:133-163`; `sources/Game/Reveal.js:48`, `:100`; `sources/Game/World/Intro.js:91`; `sources/Game/Game.js:211-215`; `.env.example:1-10`; example subsystem usage `sources/Game/Wind.js:12-18`, `:51-69`.
- Depends on: `tweakpane`, `@tweakpane/plugin-essentials`, `@tweakpane/plugin-camerakit`.
- Transfer to a 16-bit on-foot sprite world: **DIRECT** as a pattern, with one change. Look-and-feel work on a stylised world is mostly tuning numbers and colours, and a panel with a folder per subsystem plus the automatic-or-manual override makes that fast; frozen time of day and a chosen spawn point through environment or URL flags are equally useful. The change: load the panel library with a dynamic `import()` only when the flag is present, so visitors never download it.

## 3. Cross-cutting patterns worth copying (code organisation, tick ordering, event patterns)

### 3.1 Code organisation

1. **One class per concern, one file per class, one root object.** Engine services sit directly in `sources/Game/`; things that are drawn in the world sit in `sources/Game/World/`. Every class has the same skeleton: the constructor fetches the root, reads constants, calls a few `setSomething()` builders, registers exactly one `update()` with an explicit tick priority, and optionally adds a debug folder. The uniformity is what makes 118 files navigable. Evidence: `sources/Game/Wind.js:8-70`, `sources/Game/Fog.js:6-39`, `sources/Game/World/Grass.js:8-47`.
2. **Staged construction with a visible order.** The order of the `new` lines in `Game.init()` is the dependency graph, and the awaits mark the stages (2.2). `World.step(0 | 1 | 2)` does the same for world objects. For TypeScript, turn the stages into typed objects so that the order is checked by the compiler.
3. **A "uniform bus" of named shared shader values.** Subsystems publish values that any material may read: `lighting.directionUniform`, `lighting.colorUniform`, `lighting.shadowColor`, `fog.color`, `fog.strength`, `wind.offsetNode`, `terrain.terrainNode`, `terrain.colorNode`, `water.surfaceElevationUniform`, `reveal.distance`, `ticker.elapsedScaledUniform`. One assignment per frame updates every material. With `WebGLRenderer` the equivalent is a shared uniforms object (the same `{ value }` reference placed in every `ShaderMaterial`). Evidence: `sources/Game/Ligthing.js:19-21`, `:83-90`; `sources/Game/Fog.js:17-22`; `sources/Game/Wind.js:30-43`; `sources/Game/Ticker.js:21-24`.
4. **One material class with feature flags, plus a registry by name** (2.10, 2.11). New looks are made by composing colour, normal, alpha and shadow inputs into the same lighting model, not by writing new shaders. `Grass`, `Foliage`, `Flowers`, `Leaves`, `RainLines`, `Snow`, `WaterSurface`, `WindLines`, the ground and the road all use it.
5. **Variation by data, not by code.** `Cycles` is subclassed twice with only preset tables (`DayCycles`, `YearCycles`). `Foliage` serves bushes and three tree species. `Trees` is instantiated three times with different models and colours (`sources/Game/World/World.js:69-71`).
6. **Seeded randomness for procedural detail.** `alea('foliage')`, `alea('flowers')`, `alea('lightning')`, and `alea(currentSecond)` make scatter, shapes and even random events reproducible between reloads and between visitors. Evidence: `sources/Game/World/Foliage.js:8`, `sources/Game/World/Flowers.js:9`, `sources/Game/World/Lightnings.js:9`, `:476`.
7. **Derived values go through a binding that can be frozen** (the manual binding of 2.45). The production path and the debug path are the same code, which keeps debug controls from rotting.
8. **Scripted moments use overrides, not special cases.** Cycles and weather expose `override.start(values, duration)` and `override.end(duration)`, so an area can force night or a storm and then hand control back smoothly. Evidence: `sources/Game/Cycles/Cycles.js:253-291`, `sources/Game/Weather.js:195-223`.

### 3.2 Tick ordering

The order used by folio, generalised:

| Phase | folio priority | Rule |
|---|---:|---|
| Clock and raw input | 0 | Nothing else may read time or input before this. |
| Intent (what the player wants) | 1-2 | Reads input only. |
| Simulation step | 3 | Reads intent. |
| Copy simulation to visuals | 4-6 | Reads simulation results. |
| Camera | 7 | Reads the player's final position. |
| World clocks and state (cycles, weather, zones) | 8 | Independent of the camera. |
| Derived environment (wind, light, ground masks) | 9 | Reads clocks and weather. |
| Effects that need camera and environment (fog, grass, rain, water) | 10 | Reads everything above. |
| Flush instance matrices | 13 | After every system that can move an instance. |
| Audio and DOM-side UI | 14 | After the world is final for the frame. |
| Render | 998 | Last. |

The README states the rule implicitly by listing, after each subsystem, the subsystems it reads; a subsystem's priority is one more than the highest priority among them. Writing that table down, as folio does, is the pattern to copy. For an on-foot world the list is shorter: input, movement and collision, camera, cycles, environment uniforms, sprite animation and instancing, render.

### 3.3 Event patterns

1. **Owner-scoped emitters.** Each service has its own `events` object, so `quality.events.on('change')` and `viewport.events.on('change')` cannot collide and are easy to grep.
2. **State-change events for anything a visitor or a developer can toggle.** Quality (`change`), viewport (`change`, `throttleChange`), cycles (`night`, `deepNight` with a boolean payload), input mode. Subscribers update themselves; the toggling code knows nothing about them.
3. **Two-speed resize.** Immediate for cheap work, debounced for reallocation (2.8).
4. **Listener order as a light dependency mechanism.** The third argument of `on` sequences resize handlers (view first, then its dependants) exactly as it sequences ticks.
5. **Frame-delayed callbacks.** `ticker.wait(frames, callback)` replaces ad-hoc `setTimeout(..., 0)` calls and stays in step with the render loop. Evidence: `sources/Game/Ticker.js:52-71`, `sources/Game/Game.js:206-209`, `sources/Game/Cycles/Cycles.js:158-162`.
6. **Events fired on the first frame are deferred by one tick**, so that subscribers constructed later in the same stage still receive the initial state (`sources/Game/Cycles/Cycles.js:156-165`, `:173-194`).

### 3.4 Things not to copy (verified weaknesses)

1. **No error handling and no fallback screen.** A failed download rejects a promise that nobody catches; an unsupported GPU gets no message. `sources/Game/ResourcesLoader.js:89-93`, `sources/Game/Game.js:95`, `:103`, `:181`.
2. **No teardown.** Global listeners are added and never removed (`sources/Game/Viewport.js:32`, `sources/Game/Debug.js:19`), and there is no dispose path for the renderer or the scene. An opt-in world inside a single-page site needs one from the start.
3. **A listener leak**: `Lighting.updateShadow()` subscribes to the quality event every time it is called (`sources/Game/Ligthing.js:168-172`).
4. **Settings read once although the tier can change at run time**: bloom levels, shadow blur radius, camera angle (2.37). Toggling quality in the menu therefore gives a mixed state.
5. **Duplicated constants that drifted**: grass size compensation 0.5 versus 0.4 (`sources/Game/World/Grass.js:102-103`, `:40-41`); ground cell size after a resize (`sources/Game/World/Floor.js:38`, `:100`).
6. **Tier chosen by user-agent string** (`sources/Game/Quality.js:12`), and no `prefers-reduced-motion` support.
7. **Debug libraries imported statically**, so they ship to every visitor (`sources/Game/Debug.js:2-4`, `sources/Game/Rendering.js:6`).
8. **Manual cache-busting and preload tags that do not match the requested URLs** (2.42).
9. **A hard-coded `.ktx` path that ignores the compressed switch** (`sources/Game/World/Intro.js:153`), so even "uncompressed" development needs the Basis transcoder.
10. **Implicit ordering between shader construction and subsystem construction**: the shared material reads `game.terrain`, which is created later; this works only because shaders are built lazily (2.11).
11. **Fragile draw order**: object sorting is disabled, custom sort functions and `renderOrder` values are still set, and one mesh is pushed to the front of `scene.children` by hand (`sources/Game/Rendering.js:48-60`, `sources/Game/World/WaterSurface.js:391`, `:428`).
12. **Timers outside the game clock**: wind lines are scheduled with `setTimeout` and several systems read `Date.now()`, so they ignore the time scale and jump after a pause (`sources/Game/World/WindLines.js:86-94`, `sources/Game/World/Lightnings.js:468`, `sources/Game/Time.js:49-63`). This is harmless for ambience and wrong for anything gameplay-critical.
13. **Arrays used as dictionaries** (`this.properties = []` then `this.properties[key] = ...` in `sources/Game/Cycles/Cycles.js:28`, `:116`). It works in JavaScript; in TypeScript it should be a typed record.

## 4. Asset inventory tables

All figures come from the GitHub git-tree listing of the repository at that commit (1,226 blobs, not truncated). No asset was downloaded. MB = 1,048,576 bytes. The helper scripts are `briefs/a1_tree_summary.py`, `briefs/a1_first_visit.py` and `briefs/a1_tables_md.py`.

### 4.1 Repository by top-level entry

| Top-level entry | Files | MB |
|---|---:|---:|
| `static` | 958 | 193.25 |
| `resources` | 112 | 151.39 |
| `sources` | 148 | 1.07 |
| `package-lock.json` | 1 | 0.21 |
| `scripts` | 1 | 0.01 |
| (other root files) | 6 | 0.01 |
| **Total** | **1226** | **345.93** |

`resources/` holds authoring sources and is never served; `static/` is Vite's `publicDir` and is copied into the build as it is.

### 4.2 `static/` by top-level folder

| `static/` folder | Files | MB | Breakdown (count x type = MB) |
|---|---:|---:|---|
| `sounds` | 92 | 150.80 | 3 x wav = 129.63, 88 x mp3 = 21.17, 1 x md = 0.01 |
| `projects` | 62 | 14.32 | 31 x png = 12.72, 31 x ktx = 1.60 |
| `lab` | 56 | 8.23 | 28 x png = 7.27, 28 x ktx = 0.96 |
| `ui` | 590 | 7.21 | 283 x png = 6.59, 283 x webp = 0.60, 24 x svg = 0.02 |
| `areas` | 4 | 3.75 | 1 x glb = 3.13, 1 x glb-compressed = 0.61, 1 x png = 0.01, 1 x ktx = 0.00 |
| `draco` | 9 | 3.54 | 6 x js = 3.08, 2 x wasm = 0.46, 1 x md = 0.00 |
| `terrain` | 4 | 1.37 | 1 x glb = 0.70, 1 x ktx = 0.33, 1 x png = 0.32, 1 x glb-compressed = 0.02 |
| `fonts` | 16 | 0.73 | 4 x eot = 0.27, 4 x ttf = 0.27, 4 x woff = 0.11, 4 x woff2 = 0.09 |
| `social` | 1 | 0.67 | 1 x png = 0.67 |
| `vehicle` | 6 | 0.56 | 3 x glb = 0.47, 3 x glb-compressed = 0.09 |
| `basis` | 3 | 0.56 | 1 x wasm = 0.50, 1 x js = 0.05, 1 x md = 0.00 |
| `scenery` | 2 | 0.30 | 1 x glb = 0.25, 1 x glb-compressed = 0.05 |
| `career` | 12 | 0.14 | 6 x ktx = 0.12, 6 x png = 0.03 |
| `playground` | 4 | 0.13 | 2 x glb = 0.10, 2 x glb-compressed = 0.03 |
| `behindTheScene` | 2 | 0.12 | 1 x png = 0.11, 1 x ktx = 0.02 |
| `poleLights` | 2 | 0.08 | 1 x glb = 0.04, 1 x glb-compressed = 0.04 |
| `timeMachine` | 4 | 0.06 | 2 x png = 0.05, 2 x ktx = 0.01 |
| `floor` | 2 | 0.06 | 1 x png = 0.04, 1 x ktx = 0.01 |
| `christmas` | 8 | 0.05 | 4 x glb = 0.03, 4 x glb-compressed = 0.02 |
| `birchTrees` | 4 | 0.05 | 2 x glb-compressed = 0.03, 2 x glb = 0.02 |
| `bushes` | 2 | 0.05 | 1 x glb = 0.02, 1 x glb-compressed = 0.02 |
| `oakTrees` | 4 | 0.05 | 2 x glb-compressed = 0.03, 2 x glb = 0.02 |
| `cherryTrees` | 4 | 0.04 | 2 x glb-compressed = 0.02, 2 x glb = 0.02 |
| `favicons` | 7 | 0.04 | 4 x png = 0.02, 1 x ico = 0.01, 1 x svg = 0.01, 1 x webmanifest = 0.00 |
| `lanterns` | 2 | 0.04 | 1 x glb = 0.03, 1 x glb-compressed = 0.01 |
| `flowers` | 2 | 0.04 | 1 x glb-compressed = 0.02, 1 x glb = 0.02 |
| `explosiveCrates` | 2 | 0.03 | 1 x glb = 0.03, 1 x glb-compressed = 0.01 |
| `intro` | 10 | 0.03 | 5 x png = 0.02, 5 x ktx = 0.01 |
| `overlay` | 4 | 0.03 | 2 x ktx = 0.02, 2 x png = 0.01 |
| `blackFriday` | 4 | 0.03 | 2 x glb = 0.02, 2 x glb-compressed = 0.01 |
| `benches` | 2 | 0.02 | 1 x glb = 0.01, 1 x glb-compressed = 0.01 |
| `fences` | 2 | 0.02 | 1 x glb-compressed = 0.01, 1 x glb = 0.01 |
| `bricks` | 2 | 0.01 | 1 x glb-compressed = 0.01, 1 x glb = 0.01 |
| `foliage` | 2 | 0.01 | 1 x png = 0.01, 1 x ktx = 0.00 |
| `whispers` | 2 | 0.01 | 1 x ktx = 0.01, 1 x png = 0.00 |
| `easter` | 4 | 0.01 | 2 x glb = 0.01, 2 x glb-compressed = 0.01 |
| `achievements` | 2 | 0.01 | 1 x png = 0.01, 1 x ktx = 0.00 |
| `interactivePoints` | 10 | 0.01 | 5 x png = 0.00, 5 x ktx = 0.00 |
| `respawns` | 2 | 0.01 | 1 x glb = 0.00, 1 x glb-compressed = 0.00 |
| `tornado` | 2 | 0.00 | 1 x glb = 0.00, 1 x glb-compressed = 0.00 |
| `(root files)` | 2 | 0.00 | 1 x ktx = 0.00, 1 x png = 0.00 |
| `jukebox` | 2 | 0.00 | 1 x ktx = 0.00, 1 x png = 0.00 |
| **Total `static/`** | **958** | **193.25** | |

### 4.3 `static/` by file extension

| Extension | Files | MB | Note |
|---|---:|---:|---|
| wav | 3 | 129.63 | Three music masters in `sounds/musics/`; no `.wav` string exists anywhere in `sources/`. |
| png | 376 | 27.88 | Source images. 88 have a `.ktx` twin, 283 have a `.webp` twin; the rest are favicons and the social share image. |
| mp3 | 88 | 21.17 | 3 music tracks (18.01 MB) + 85 other files; 78 sound effects (3.10 MB) are referenced by literal path in `sources/`. |
| glb (source) | 32 | 4.95 | Uncompressed Blender exports, loaded only when `VITE_COMPRESSED` is empty (and by the Konami code). |
| js | 7 | 3.14 | Draco decoder/encoder and Basis transcoder glue code. |
| ktx | 88 | 3.10 | KTX2 (Basis ETC1S or UASTC) twins of the model-related PNGs. |
| glb (`-compressed`) | 32 | 1.04 | Draco geometry + KTX2 embedded textures, produced by `scripts/compress.js`. |
| wasm | 3 | 0.96 | Draco decoders (2) and Basis transcoder (1). |
| webp | 283 | 0.60 | Twins of every `static/ui/` PNG (quality 80). |
| eot | 4 | 0.27 |  |
| ttf | 4 | 0.27 |  |
| woff | 4 | 0.11 |  |
| woff2 | 4 | 0.09 |  |
| svg | 25 | 0.03 | UI icons. |
| ico | 1 | 0.01 |  |
| md | 3 | 0.01 |  |
| webmanifest | 1 | 0.00 |  |
| **Total** | **958** | **193.25** | |

### 4.4 Compressed and uncompressed twins

| Twin relationship | Pairs | Source MB | Compressed MB | Ratio |
|---|---:|---:|---:|---:|
| `x.glb` -> `x-compressed.glb` (Draco + KTX2 textures) | 32 | 4.95 | 1.04 | 21% |
| `x.png` -> `x.ktx` (KTX2 container, Basis ETC1S/UASTC) | 88 | 20.60 | 3.10 | 15% |
| `ui/x.png` -> `ui/x.webp` (WebP q80) | 283 | 6.59 | 0.60 | 9% |
| **All twins** | **403** | **32.14** | **4.75** | **15%** |

Every one of the 32 source GLBs has a `-compressed` twin, every one of the 88 model-related PNGs has a `.ktx` twin, and every one of the 283 UI PNGs has a `.webp` twin. No compressed file lacks its source. Only `.webp` and `.svg` UI images are referenced from `sources/`; the UI PNGs are compression inputs only.

### 4.5 What `Game.js` actually requests

| Loader batch (`Game.js`) | Entries | Compressed mode | Uncompressed mode |
|---|---:|---:|---:|
| Batch 1, awaited before the intro (lines 103-109) | 4 | 22.8 KB (1 glb = 2.8 KB, 3 ktx = 20.0 KB) | 112.5 KB (1 glb = 2.8 KB, 3 png = 109.7 KB) |
| Batch 2, loaded behind the progress ring (lines 132-179) | 40 | 1484.2 KB (21 glb = 968.3 KB, 19 ktx = 515.9 KB) | 5248.9 KB (21 glb = 4757.0 KB, 19 png = 491.9 KB) |
| **Total requested by `Game.js`** | **44** | **1507.0 KB = 1.47 MB** | **5361.3 KB = 5.24 MB** |

The ten largest entries in compressed mode:

| Resource key | File (compressed mode) | Compressed KB | Uncompressed twin KB | `Game.js` line |
|---|---|---:|---:|---:|
| `areasModel` | `areas/areas-compressed.glb` | 624.3 | 3209.2 | 155 |
| `terrainTexture` | `terrain/terrain.ktx` | 341.9 | 326.4 | 145 |
| `sceneryModel` | `scenery/scenery-compressed.glb` | 46.8 | 259.9 | 154 |
| `poleLightsModel` | `poleLights/poleLights-compressed.glb` | 42.2 | 43.0 | 156 |
| `vehicle` | `vehicle/default-compressed.glb` | 34.0 | 232.0 | 136 |
| `careerOnlineTeacherTexture` | `career/careerOnlineTeacher.ktx` | 30.1 | 7.0 | 170 |
| `playgroundVisual` | `playground/playgroundVisual-compressed.glb` | 26.9 | 93.9 | 137 |
| `terrainModel` | `terrain/terrain-compressed.glb` | 25.6 | 713.0 | 146 |
| `bushesReferences` | `bushes/bushesReferences-compressed.glb` | 25.0 | 25.0 | 135 |
| `careerIRLTeacherTexture` | `career/careerIRLTeacher.ktx` | 24.4 | 5.6 | 169 |

One model (`areas`, every content area in a single file) is 41 percent of the compressed world, and the terrain texture is another 23 percent. Everything else, including the vehicle, is under 50 KB per file.

### 4.6 Likely download of a first visit, against the repository total

| Item | Size | Status of the claim |
|---|---:|---|
| 44 world resources requested by `Game.js` (compressed mode) | 1.47 MB | Sizes verified in the tree; the request list is verified at `sources/Game/Game.js:103-174`. |
| Draco decoder: `draco/draco_wasm_wrapper.js` + `draco/draco_decoder.wasm` | 0.33 MB | Sizes verified; that three.js picks exactly these two files from `./draco/` is inferred (three.js `DRACOLoader` behaviour, not in the checkout). |
| Basis transcoder: `basis/basis_transcoder.js` + `.wasm` | 0.56 MB | Sizes verified; fetched by `KTX2Loader` from `./basis/` (path verified at `sources/Game/ResourcesLoader.js:30`). |
| One intro label texture (`intro/<mode>Label.ktx`) | 2.0-2.6 KB | Verified (`sources/Game/World/Intro.js:151-153`). |
| Sound effects: 78 MP3 files referenced by literal path | 3.10 MB | Sizes verified; that most are fetched in the first session is inferred from the Howler default `preload: true` (`sources/Game/Audio.js:81`); audio belongs to another slice. |
| One music track (only if `VITE_MUSIC` is set; loaded on demand, `preload: false`) | 5.89-6.21 MB | Sizes verified; timing inferred (`sources/Game/Audio.js:172-177`). |
| Local fonts: up to three `fonts/Pally-*.woff2` files | 63.1 KB | Sizes verified; `sources/style/fonts.styl:1-27` lists WOFF2 first for three weights; which weights the page really uses was not checked (other slice). |
| HTML document | 57.5 KB | Verified from the saved response headers (`Content-Length: 58883`). |
| JS bundle(s), CSS, Rapier WASM, Google Fonts | unknown | Not in the repository (build output and third-party CDN). Not measured. |
| **Subtotal: world + decoders (what the 3D scene itself needs)** | **2.36 MB** | |
| **Subtotal including sound effects and one music track** | **11.35-11.67 MB** | Plus the unknown JS/WASM bundle. |

Reading: the 3D scene itself needs about **2.36 MB** (world files plus decoders), which is 0.7 percent of the repository and 1.2 percent of `static/`. With sound effects and one music track a first session is about **11.35 to 11.67 MB** of assets, to which the unmeasured code bundle must be added. Audio, not 3D, dominates the asset payload.

Where the 193.25 MB of `static/` goes:

| Share of `static/` | MB | What |
|---:|---:|---|
| 67.1% | 129.63 | Three WAV music masters that no source file references. |
| 16.4% | 31.75 | Uncompressed twins (source GLBs and PNGs) that production does not request, apart from two vehicle GLBs used by the Konami code. |
| 14.5% | 28.03 | Upper bound of what the production site can request over a whole session in compressed mode: compressed models 1.04, `.ktx` 3.10, `.webp` 0.60, all MP3s 21.17 (of which the three music tracks are 18.01), SVG 0.03, WOFF2 0.09, the Draco and Basis files in use 0.89, favicons and share image 0.71, the two Konami GLBs 0.39. |
| 2.0% | 3.85 | Shipped but not fetched by a current browser (inferred): the Draco encoder and JavaScript-only decoders, a duplicate `draco/gltf/` folder, the fallback font formats (WOFF, TTF, EOT) and readme files. |

### 4.7 `resources/` (authoring sources, never served)

| `resources/` extension | Files | MB |
|---|---:|---:|
| wav | 23 | 26.94 |
| pur | 1 | 26.56 |
| mp4 | 4 | 19.86 |
| blend1 | 2 | 18.41 |
| blend | 2 | 18.10 |
| png | 38 | 17.63 |
| psd | 7 | 12.65 |
| exr | 3 | 6.02 |
| jpg | 5 | 2.62 |
| (none) | 12 | 2.49 |
| glb | 2 | 0.04 |
| sbs | 1 | 0.03 |
| plist | 12 | 0.02 |
| **Total `resources/`** | **112** | **151.39** |

### 4.8 Reading for a 16-bit world (my assessment, not a measurement)

- folio shows that a rich 3D world can be 1.5 MB of assets, and that the expensive parts of a web experience are audio and code. For a pixel-art world the asset side should be one to two orders of magnitude smaller still: a palette of a few hundred bytes, a sprite sheet for a 16 x 20 character, one tile atlas and one map image are tens of kilobytes in total as indexed PNGs.
- The dominant download will therefore be the 3D library chunk. It should be loaded only on opt-in and measured in the real Vite build before the renderer is chosen. I could not measure any bundle here.
- None of folio's 0.89 MB of decoders is justified at that scale.

## 5. Could not verify / open questions

### 5.1 Hidden in assets that were deliberately not downloaded

1. **GLB contents.** Whether mesh UVs point into palette swatches, which material names the models use, triangle counts, and whether normals are flat or smooth. The palette-driven reading in 2.10 rests on code and README, not on inspecting a model.
2. **Instance counts.** The numbers of bushes, trees, flower clusters, bricks, benches and so on equal the node counts of reference models. As an order of magnitude only: the reference files are 17 to 26 KB each and barely change size under Draco, which suggests they hold transforms and almost no geometry, hence on the order of one to a few hundred nodes each. This is an estimate from file size, not a fact.
3. **Palette image.** Its dimensions and colours. Only its size is known (362 bytes as PNG, 1,504 bytes as KTX2).
4. **Terrain resolution.** 512 x 512 for the texture and 129 x 129 vertices for the physics grid are inferred from file sizes that match those dimensions almost exactly.
5. **How it looks and feels.** I did not run the site; every "what the visitor sees" line is read from code.

### 5.2 three.js behaviour assumed, not read (the package is not in the checkout)

1. `WebGPURenderer` falling back to WebGL2 by itself when WebGPU is unavailable and `forceWebGL` is false. The application code only shows that a WebGL backend is an expected outcome (`sources/Game/Options.js:66`).
2. Whether `renderer.sortObjects = false` makes the custom sort functions and the many `renderOrder` assignments ineffective.
3. That TSL `Fn` bodies run when a shader is built, not when the material is constructed. The code relies on it in at least two places (`sources/Game/World/Foliage.js:154-159` uses `this.instanceMatrix`, which is assigned later at `:202`; the palette material reads `game.terrain`, created later).
4. The argument order of chained TSL calls. I read `a.step(b)` as "1 when a is at least b" and `x.smoothstep(low, high)` as `smoothstep(low, high, x)`. These readings are the only ones under which the reveal ring, the ripple mask and the grass hiding make visual sense, but they are assumptions.
5. Compute shaders (fallen leaves) working on the WebGL2 backend.
6. Default tone mapping and output colour space, and whether calling `renderOutput` inside the pipeline changes the final colour transform.
7. Which decoder files `DRACOLoader` fetches from `./draco/`.
8. That setting `count` on a plain `Mesh` produces an instanced draw (flowers, leaves, particles).
9. The private bloom field `_nMips`.

### 5.3 Not measured

1. **Bundle sizes**: the JavaScript (`assets/index-DZgz1LCb.js` and `assets/dist-BiW6BJVu.js` in the saved live HTML), the CSS and the Rapier WASM are build outputs that are not in the repository.
2. **Run-time cost**: frame rate, draw calls, triangle counts and GPU memory on any device. Vertex counts quoted in section 2 are computed from code constants.
3. **Network behaviour of the live site**: compression and cache headers for assets. Only the HTML response headers were saved.
4. **Optimal-area sizes** in 2.40 are derived by hand from constants.
5. **Audio loading** is only skimmed; the first-visit audio figures assume Howler's default of fetching each registered sound.

### 5.4 Ambiguities in the source

1. Is `Monitoring` disabled on purpose or temporarily? Its import, its construction and its tick are all commented out.
2. The production `.env` is not in the repository. That production runs in compressed mode is inferred from the live HTML, which preloads `-compressed.glb` and `.ktx` files.
3. The year presets define `clouds` and `wind` but nothing reads them. Leftover or planned?
4. Are the drifting constants in the grass and ground resize handlers bugs or intentional?
5. Do the four `<link rel="preload">` tags work at all, given that the loader appends `?cb=1` to the same paths?

### 5.5 Open design questions this slice raises for the 16-bit world

1. **Renderer**: `WebGLRenderer` with one small GLSL material, or WebGPU and TSL as in folio? This needs a bundle-size measurement in the real React and Vite project and a decision on the minimum supported device.
2. **Resolution policy**: which internal resolution (for example 320 x 180, 384 x 216 or 480 x 270), integer scaling only or not, and what a portrait phone shows.
3. **Camera projection**: orthographic with texel snapping (pixel-perfect sprites) or a narrow perspective like folio (depth feel, but sprite texels no longer map to whole pixels). This overlaps the camera slice.
4. **Shadows and tones**: shadow map or blob and painted shadows; two or three tones; smooth or stepped time-of-day palettes.
5. **World size relative to the screen**: if the whole map is only a few screens wide, most of folio's camera-footprint machinery (wrapping grass, following ground mesh) is unnecessary and only the principle remains.
6. **Ground model**: flat, stepped terraces or continuous height? This decides whether any height sampling is needed and whether the map can be a plain tile image.
7. **Level source of truth**: a PNG tile map read by both CPU and GPU, a JSON file, or an editor such as Tiled.
8. **Lifecycle**: when the visitor leaves the world, is it disposed or paused in the background? folio offers no model for either.
9. **Eligibility and fallback**: which checks gate the "enter the world" button (WebGL2 present, reduced-motion preference, measured frame time), and what the visitor sees when they fail.
