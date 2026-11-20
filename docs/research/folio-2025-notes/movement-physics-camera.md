# folio-2025: movement, physics, inputs, camera, toys

Source studied: Bruno Simon's `folio-2025` (MIT), HEAD `70764a9` (2026-11-04, commit subject "Bump up dependencies (not Rapier because of sleep bug)"). This is slice A2, "moving around the world". All 41 assigned files were read in full, plus the supporting files needed to follow the calls (`Game.js`, `Ticker.js`, `Time.js`, `Events.js`, `Menu.js`, `Modals.js`, `ClosingManager.js`, `Map.js`, `Overlay.js`, `InstancedGroup.js`, `References.js`, `utilities/maths.js`, `World/Floor.js`, `Terrain.js`, `World/Scenery.js`, parts of `Reveal.js`, `InteractivePoints.js`, `ProjectsArea.js`, `LabArea.js`, `index.html` and the stylesheets that react to input state).

## How to read these notes

- **Paths.** Paths are relative to `sources/Game/` in the repository, so `Player.js:522` means `sources/Game/Player.js`, line 522, and `World/Areas/CircuitArea.js:1351` means `sources/Game/World/Areas/CircuitArea.js`. Paths that begin with `sources/`, and the root files `readme.md`, `package.json` and `vite.config.js`, are relative to the repository root.
- **Verified versus inferred.** I read the code and did not run it (as instructed). Every statement under "How it works" is verified in the code at the cited lines, unless the sentence starts with "Inferred:". Every "What the visitor experiences" line is my reading of what the cited code produces on screen; it was not observed in a browser.
- **Model contents are unknown.** The GLB models were not downloaded. Anything decided by the artist in Blender (how many bricks exist, where zones sit, how large they are, how many checkpoints the circuit has) cannot be known from the code. These gaps are listed in section 5.
- **Time units.** The simulation runs at twice wall-clock speed (see aspect 2.1). "Simulated seconds" are seconds as seen by the physics and by every gsap tween and delayed call. "Wall-clock seconds" are real seconds. Durations quoted from code are simulated ("nominal") unless I say otherwise, and take half as long in reality.
- **Coined terms.** "Tank controls" means steering relative to the vehicle's own heading (left always turns the vehicle left), as opposed to "camera-relative controls" (left always moves toward the left of the screen). "Billboard" means a flat textured quad that always faces the camera. "Context" means one of the named input situations the folio calls a filter or a category (wandering, racing, and so on).
- **Section 4 is reasoning.** Everything in section 4, and every "Transfer" bullet, is my reasoning for Juan's project, not a fact about folio-2025.

## 1. Summary (max 10 bullets)

1. Rapier (a WebAssembly physics engine) is used for exactly two jobs: the raycast car (`world.createVehicleController`) and the knock-about props. Everything that leads the visitor to content (zones, interaction prompts with a 2.5 unit radius, race checkpoints, area visibility) is plain 2D distance maths on the ground plane and never touches the physics engine.
2. The car is a 2.5 mass dynamic body with momentum, tank controls and the ability to flip over. Roughly half of the movement code (suspension, engine and brake curves, upside-down detection, automatic flip-back, stuck detection) exists only because of that and has no on-foot equivalent.
3. The input layer is the most portable part: named actions, key strings with a device prefix (`Keyboard.KeyW`, `Gamepad.r2`, `Pointer.any`, `Wheel.roll`), a set of active contexts that gates which actions may start, and a "last device used" mode mirrored to CSS classes on `<html>`.
4. Correction to the brief: `InputFlag.js` is a country-flag picker for the leaderboard form, not an input mode system. Input gating is done by `inputs.filters`. Opening a menu or modal only gates inputs; the simulation is never paused.
5. The camera is a perspective camera (25 degree field of view), at a fixed 45 degree yaw and a fixed pitch, 15 to 30 units from a ground "focus point" that follows the car with exponential smoothing. There is no look-ahead (second correction to the brief); speed is handled by zooming out. The yaw never changes, which is exactly the property a 2D billboard sprite needs.
6. The whole simulation runs at 2x wall-clock (`ticker.scale = 2` drives the physics timestep and gsap's global time scale), with a variable timestep clamped to 1/30 s and one `world.step` per frame. There is no fixed step and no sub-stepping. Every constant in the code is tuned inside that convention.
7. Touch driving is a custom ring drawn on the ground around the car (not the nipplejs library, not a screen joystick): one finger drives toward the touched ground point, two fingers pan, pinch zooms. Context-sensitive DOM buttons (Interact, Unstuck, previous, next, open, close) appear only in touch mode and only when relevant.
8. Props are cheap because they are asleep: every prop is created sleeping, is forced back to sleep when it is farther from the camera focus than the visible ground radius, is reset when it falls below y = -1.5, and is drawn through instanced meshes that only rewrite the matrices of props that are awake.
9. The circuit is a small state machine (pending, starting, running, ending) with checkpoint gates tested as line segments against a circle around the player, a countdown, checkpoint respawns, a temporary swap of the collision world and a server leaderboard. It is the mini-game that transfers best to a runner, minus the server.
10. My recommendation (reasoning, section 4): start the Runner with no physics engine at all (a circle against boxes on a flat plane, camera-relative controls), keep the engine-free parts of the folio's architecture (inputs, ordered ticker, camera rig, zones, respawns, prompts, race state machine), and add Rapier with a `KinematicCharacterController` and a capsule only if rigid-body toys become a goal. A dynamic body for the Runner is the wrong tool.

## 2. Aspects

### 2.1 Frame loop order and the 2x time scale

- What the visitor experiences: The world feels brisk because everything (physics, tweens, shader time) advances at twice real time. A strong explosion next to the car briefly slows the whole world down ("bullet time") and then eases back.
- How it works:
  - The renderer's animation loop calls `ticker.update(elapsedMs)` once per display frame (`Rendering.js:68`). There is no fixed-step accumulator.
  - `delta = min(now - previous, 1/30)` seconds; `deltaScaled = delta * scale`; `scale` starts at 2 (`Ticker.js:13-16`, `Ticker.js:29-35`; `Time.js:12-15`). A 30-frame moving average `deltaAverage` is also kept (`Ticker.js:37-44`).
  - Subsystems subscribe to the `tick` event with a numeric order, and `Events.trigger` walks the orders in ascending order (`Events.js:8-22`, `Events.js:50-61`). Orders used in this slice: 0 Inputs and Time (`Inputs/Inputs.js:55-58`, `Time.js:19-22`); 1 Player pre-physics (`Player.js:44-47`); 2 PhysicsVehicle pre-physics (`Physics/PhysicsVehicle.js:77-80`); 3 Physics step (`Physics/Physics.js:60-63`); 4 Objects sync and PhysicsWireframe (`Objects.js:15-18`, `Physics/PhysicsWireframe.js:22-25`); 5 PhysicsVehicle post-physics (`Physics/PhysicsVehicle.js:81-84`); 6 Player post-physics (`Player.js:49-52`); 7 View (`View.js:66-69`); 8 Zones and VisualVehicle (`Zones.js:13-16`, `World/VisualVehicle.js:34`); 9 InteractivePoints and Tornado (`InteractivePoints.js:40-43`, `Tornado.js:34-37`); 10 Areas and per-prop dirty flagging (`World/Areas/Area.js:22-29`, `World/Bricks.js:56-63`); 13 InstancedGroup (`InstancedGroup.js:19-22`); 14 Map marker (`Map.js:34-37`). This matches the table in `readme.md:22-114`.
  - "Pre-physics" means "decide what forces to apply this frame"; "post-physics" means "read back where things ended up". The split exists so that everything after order 6 reads a position that is final for the frame.
  - `ticker.wait(frames, callback)` runs a callback a given number of frames later (`Ticker.js:52-63`, `Ticker.js:68-71`). It is used widely to let the physics settle after a teleport (for example `Objects.js:250-263`, `World/Areas/BowlingArea.js:169-172`).
  - `Time` also calls `gsap.globalTimeline.timeScale(scale)`, so every gsap duration and delay in the codebase is in simulated seconds (`Time.js:15`, `Time.js:74-79`).
  - Bullet time: `time.bulletTime.activate(duration = 1.5)` (wall-clock seconds, measured with `Date.now()`) moves the scale from 2 toward 0.5 at a rate of 3 per second and back at 0.3 per second (`Time.js:36-72`). Its only caller is the explosion code when the car itself is hit hard (`Explosions.js:55-62`). Audio playback rate follows the scale (`Audio.js:715`).
  - Nothing pauses the ticker when a menu or modal opens or when the tab is hidden; a search for `visibilitychange` and `document.hidden` finds nothing. The only protection against a long frame is the 1/30 s clamp.
- Evidence: `Ticker.js:13-16`, `Ticker.js:29-71`, `Time.js:12-15`, `Time.js:36-79`, `Events.js:8-22`, `Events.js:50-61`, `Rendering.js:68`, `readme.md:22-114`, `Explosions.js:55-62`.
- Depends on: three.js `renderer.setAnimationLoop`, gsap (global timeline), the `Events` pub/sub class.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Keep the single ordered ticker, the pre-physics and post-physics split, and the frame-delay helper; they are what keep the camera, zones and prompts from reading a stale position. Change the default scale to 1 so authored durations mean real seconds, and keep the scale only as a hook for an occasional slow-motion beat (crossing a finish line, for example).

### 2.2 Inputs: named actions fed by device adapters

- What the visitor experiences: Driving, jumping and interacting work from a keyboard, a gamepad or a touch screen with no settings screen. Several keys can map to the same action, and holding two of them does not double-trigger the action or release it early.
- How it works:
  - `Inputs` owns a `Map` of actions. An action is declared as `{ name, categories: [...], keys: [...] }` and receives the runtime fields `active` (boolean), `value` (a number or an object), `trigger` (`'start'`, `'change'` or `'end'`) and `activeKeys` (the `Set` of keys currently holding it) (`Inputs/Inputs.js:169-181`).
  - Keys are plain strings with a device prefix. The keyboard emits both `Keyboard.<event.code>` (physical position, for example `Keyboard.KeyW`) and `Keyboard.<event.key>` (character, for example `Keyboard.m`) for every key press (`Inputs/Inputs.js:67-79`, `Inputs/Keyboard.js:27-28`). The others are `Gamepad.<buttonName>`, `Pointer.any` and `Wheel.roll`.
  - Any module can register its own actions at any time with `inputs.addActions([...])`. There are 14 call sites outside `Inputs` itself: Player, View (three times), Map, Menu, Audio, Whispers, ClosingManager, RayCursor, Reveal, and the Lab, Circuit and Social areas (for example `Player.js:220-239`, `View.js:296-299`, `Map.js:139-141`, `ClosingManager.js:15-18`, `World/Areas/CircuitArea.js:657-659`). `Inputs` registers one more for the touch control (`Inputs/Inputs.js:156-158`).
  - Three entry points turn raw device events into action events: `start(key, value = 1, isToggle = true)`, `end(key)` and `change(key, value)` (`Inputs/Inputs.js:204-300`). `start` activates every action that lists the key, provided its context is currently allowed, remembers the key in `activeKeys`, and emits two events: a generic `actionStart` and one named after the action. `end` removes the key and deactivates the action only when `activeKeys` is empty, so releasing W while ArrowUp is still down keeps `forward` active. `change` updates `value` for analog sources and emits `actionChange` plus the named event only when the value really changed. Non-toggle keys (the mouse wheel) fire on every event and never become active (`Inputs/Inputs.js:141-145`, `Inputs/Inputs.js:228-233`).
  - Consumers use either style. Event-driven: `inputs.events.on('respawn', (action) => ...)` (`Player.js:242-251`). Polled every frame: `inputs.actions.get('forward').active` and `.value` (`Player.js:535-563`).
  - Device adapters: `Keyboard` listens to `keydown` and `keyup`, ignores key presses while focus is in an `input`, a `textarea` or a `contenteditable` element (except Escape), and releases every held key on window `blur` (`Inputs/Keyboard.js:12-47`). `Gamepad` is polled (aspect 2.5). `Pointer` unifies mouse and touch (aspect 2.6). `Wheel` uses the `normalize-wheel` package (`Inputs/Wheel.js:10-15`). `Nipple` is the touch driving control (aspect 2.7). `InteractiveButtons` are DOM buttons with their own event emitter that bypasses the action map (aspect 2.8).
  - `Inputs.update()` runs at tick order 0 and polls the pointer, the gamepad and the touch control (`Inputs/Inputs.js:55-58`, `Inputs/Inputs.js:328-333`).
- Evidence: `Inputs/Inputs.js:17-61`, `Inputs/Inputs.js:63-167`, `Inputs/Inputs.js:169-300`, `Inputs/Inputs.js:328-333`, `Inputs/Keyboard.js:12-47`, `Inputs/Wheel.js:10-15`, `Player.js:220-251`, `Player.js:535-563`.
- Depends on: `Events`, `utilities/ObservableSet.js`, the `normalize-wheel` package, the canvas element for the pointer, the `.js-touch-buttons` DOM element for the buttons.
- Transfer to a 16-bit on-foot sprite world: DIRECT. The abstraction does not know about cars. A TypeScript port is small (an `Action` type, a `Map`, three methods and one adapter per device) and gives one place where "move", "sprint", "jump" and "interact" are defined for every device, which the current keyboard-only Play Mode lacks. Keep the two consumption styles (events for one-shot actions, polling for held ones).

### 2.3 Input contexts ("filters"), and what `InputFlag` really is

- What the visitor experiences: While a menu or a modal is open the car ignores the keyboard. Inside a project viewer the arrow keys flip pages instead of driving. During a race the R key restarts the race instead of respawning. The menu and map buttons slide away when they cannot be used.
- How it works:
  - Correction to the brief: `InputFlag.js` is not an input-mode flag. It is a country-flag picker widget (a search box over a list of flags, persisted in `localStorage.countryCode`, defaulting to the browser locale) used by the circuit leaderboard form and by the "whispers" feature (`InputFlag.js:4-79`, `InputFlag.js:193-216`; `World/Areas/CircuitArea.js:1348`). The mechanism that gates inputs is `inputs.filters`.
  - `inputs.filters` is an `ObservableSet` of context names. Each action lists the contexts (its `categories`) in which it may start. `checkCategory` allows an action when the filter set is empty, when the action lists no categories at all (the code comment says "Forbid" but the code returns `true`), or when at least one of its categories is in the set (`Inputs/Inputs.js:183-202`).
  - Six contexts exist. `intro` is the initial one (`Game.js:87`). `wandering` is set when the visitor starts (`Reveal.js:174-175`). `menu` is set by `Menu.open` (`Menu.js:233-234`). `modal` is set by `Modals.open` (`Modals.js:164-165`). `racing` is set when a race starts and `wandering` is restored when it ends (`World/Areas/CircuitArea.js:1372-1373`, `World/Areas/CircuitArea.js:1552-1553`). `cinematic` replaces `wandering` while a project or lab viewer is open (`World/Areas/ProjectsArea.js:1314-1315`, `World/Areas/ProjectsArea.js:1378-1379`; `World/Areas/LabArea.js:1294-1295`, `World/Areas/LabArea.js:1353-1354`). Closing any menu or modal restores `racing` if a race is starting, running or ending, and `wandering` otherwise (`ClosingManager.js:90-108`).
  - What each context lets through is listed in the table in section 3.4. In short: `menu` and `modal` block all driving, zooming, panning, interacting and respawning; `cinematic` keeps the four directions and interact (re-used for page navigation) but blocks boost, brake, jump, zoom, pan and respawn; `racing` blocks respawn, camera panning, the map key and whispers.
  - Only `start` and `change` are filtered. `end` is not (`Inputs/Inputs.js:238-259`), so a key that was already down when the context changed can still be released cleanly.
  - Inferred: an action that is already active stays active across a context change until its key is released, because `Player.updatePrePhysics` polls `.active` without consulting the filters (`Player.js:535-563`). Holding W and pressing M would keep the car accelerating behind the map modal.
  - Every change is mirrored to CSS: `<html>` gains or loses a class `input-filter-<name>` (`Inputs/Inputs.js:23-40`). Stylesheets use these classes to slide out and disable the menu and map trigger buttons (`sources/style/menu.styl:16-20`, `sources/style/menu.styl:43-48`, `sources/style/map.styl:16-19`, `sources/style/map.styl:42-47`).
  - `ClosingManager` centralises the "back" gesture. One `close` action (Escape or the gamepad cross button) walks a priority list: flag pickers, then the modal, then the menu, then "a race is running, so open the race menu", then the project viewer, then the lab viewer, and finally "Escape with nothing open opens the menu" (`ClosingManager.js:21-57`).
  - Inferred weakness: contexts are replaced imperatively (`clear()` followed by `add()`), not pushed and popped. The gamepad Start button (`pause`) is allowed in `cinematic` and opens the menu (`ClosingManager.js:17`, `ClosingManager.js:60-73`); closing that menu sets `wandering` even though the project viewer is still open.
- Evidence: `Inputs/Inputs.js:23-40`, `Inputs/Inputs.js:183-259`, `Game.js:87`, `Reveal.js:174-175`, `Menu.js:233-234`, `Modals.js:164-165`, `ClosingManager.js:15-108`, `World/Areas/CircuitArea.js:1372-1373`, `World/Areas/CircuitArea.js:1552-1553`, `World/Areas/ProjectsArea.js:1314-1315`, `InputFlag.js:4-79`.
- Depends on: `ObservableSet`, the DOM (`<html>` classes), Menu, Modals, ClosingManager.
- Transfer to a 16-bit on-foot sprite world: DIRECT for the pattern, with one change. Juan's site already has DOM overlays (the page itself, Play Mode, the Close-Up), so a single source of truth for "which inputs are live right now" is needed before a 3D world is added. Use a context stack (push on open, pop on close) instead of clear-and-add, so nested overlays restore correctly, and release held actions when a context that forbids them is pushed.

### 2.4 Active-device detection and prompt switching

- What the visitor experiences: Prompts follow the device touched last. The interact prompt shows an Enter-key glyph, a PlayStation cross or an Xbox "A". The controls help shows Xbox letters or PlayStation shapes. On a phone the glyph disappears and a large "Interact" button appears at the bottom of the screen, and hover effects are switched off.
- How it works:
  - `inputs.mode` is one of `MODE_MOUSEKEYBOARD = 1`, `MODE_GAMEPAD = 2`, `MODE_TOUCH = 3`, and starts as mouse and keyboard (`Inputs/Inputs.js:13-15`, `Inputs/Inputs.js:41`, `Inputs/Inputs.js:60`).
  - The rule is "the last device used wins". `updateMode` is called on key down and up and on the wheel (keyboard mode), on gamepad button down, up, analog change and brand change (gamepad mode), and on pointer down and up (mouse or touch, depending on which DOM event family fired last) (`Inputs/Inputs.js:67-146`; `Inputs/Pointer.js:35`, `Inputs/Pointer.js:45`, `Inputs/Pointer.js:66`, `Inputs/Pointer.js:89`). Moving the mouse without clicking does not change the mode. Moving a stick without pressing a button does not change it either, because the `joystickChange` event that `Inputs` listens for is never emitted by `Gamepad` (`Inputs/Inputs.js:109-112` against `Inputs/Gamepad.js:286-295`).
  - On a change, the `<html>` class is swapped between `is-mode-mouse-keyboard`, `is-mode-gamepad` and `is-mode-touch`, the DOM touch-button bar is shown only in touch mode, and a `modeChange` event is emitted (`Inputs/Inputs.js:302-326`).
  - Gamepad brand: `gamepad.type` is `default`, `xbox` or `playstation`, from a regular expression on `Gamepad.id`. It is mirrored as `<html class="is-gamepad-<type>">` and a `typeChange` event (`Inputs/Gamepad.js:204-208`, `Inputs/Gamepad.js:297-314`).
  - Consumers: CSS for the help table and the close buttons (`sources/style/controls.styl:29-45`, `sources/style/menu.styl:388`, `sources/style/modals.styl:107`); `html:not(.is-mode-touch) &:hover` to disable hover styles on touch (for example `sources/style/menu.styl:24`); the in-world interact key icon, which swaps texture between Enter, cross and A and hides itself in touch mode (`InteractivePoints.js:120-156`, `InteractivePoints.js:443-447`); the intro label (`World/Intro.js:191-192`); the project and lab blackboard legends (`World/Areas/ProjectsArea.js:1151-1175`).
  - The controls help itself is three static tabs (Mouse Keyboard, Mobile Tablet, Gamepad) written by hand in the HTML, not generated from the action map (`sources/index.html:333-500`). Verified discrepancy: the help says LT / L2 is "Accelerate" and RT / R2 is "Backward accelerate" (`sources/index.html:456-469`), while the code binds `Gamepad.r2` to `forward` and `Gamepad.l2` to `backward` (`Player.js:221`, `Player.js:223`).
- Evidence: `Inputs/Inputs.js:13-15`, `Inputs/Inputs.js:67-146`, `Inputs/Inputs.js:302-326`, `Inputs/Gamepad.js:204-208`, `Inputs/Gamepad.js:297-314`, `InteractivePoints.js:120-156`, `sources/style/controls.styl:29-45`, `sources/index.html:333-500`.
- Depends on: Inputs, the DOM, CSS.
- Transfer to a 16-bit on-foot sprite world: DIRECT. Mirror the mode and the gamepad brand to `<html>` as data attributes and style prompts with Tailwind variants (for example a custom variant `mode-touch:` that expands to `html[data-input-mode="touch"] &`). Generate the controls help from the action map so it cannot drift the way the folio's hand-written table has.

### 2.5 Gamepad: mapping, dead zones and analog values

- What the visitor experiences: A controller works when plugged in. Triggers give proportional throttle, the left stick steers smoothly, and the right stick pans the camera. A PlayStation 5 controller also works in Firefox, where the browser does not provide the standard layout.
- How it works:
  - The pad is polled every tick with `navigator.getGamepads()`. If several are connected, the last non-null one wins (`Inputs/Gamepad.js:243-249`).
  - Logical names follow PlayStation naming: `cross`, `circle`, `square`, `triangle`, `l1`, `r1`, `l2`, `r2`, `select`, `start`, `l3`, `r3`, `up`, `down`, `left`, `right`, and two sticks named `left` and `right` (`Inputs/Gamepad.js:28-48`).
  - Three mappings exist: `standard` (the W3C standard layout) and two special cases for a PS5 pad in Firefox on Windows (10 axes) and on macOS (7 axes), where the triggers and the D-pad arrive as axes. The choice is made from `gamepad.mapping === 'standard'` and then from the number of axes (`Inputs/Gamepad.js:49-106`). Mapping operations are `buttonRaw`, `axisToTrigger` (axis from -1..1 to 0..1), `axisToArrow` (a hat-switch axis within 0.1 of a listed value) and `axesToCircle` (two axes to one stick) (`Inputs/Gamepad.js:16-22`, `Inputs/Gamepad.js:127-196`).
  - Thresholds: a button counts as pressed when its analog value exceeds 0.2 (`buttonPressedZone`); a stick counts as active when its radius exceeds 0.2 (`joystickDeadZone`) (`Inputs/Gamepad.js:92-93`, `Inputs/Gamepad.js:163`, `Inputs/Gamepad.js:195`).
  - Dead-zone remap: `safeX = remapClamp(|x|, 0.2, 1, 0, 1) * sign(x)`, the same for `safeY`, and `safeRadius = remapClamp(radius, 0.2, 1, 0, 1)`. The raw `x`, `y`, `angle` and `radius` are also exposed (`Inputs/Gamepad.js:184-195`). Output therefore starts at 0 at the edge of the dead zone, with no jump.
  - Events: `down` and `up` when the value crosses the pressed threshold, and `change` whenever the analog value differs from the previous frame (`Inputs/Gamepad.js:261-284`). `Inputs` forwards them as `start` (carrying the analog value), `end` and `change` (`Inputs/Inputs.js:86-107`).
  - Analog throttle: `accelerating += forward.value` (`Player.js:535-539`), so R2 gives proportional throttle while a key gives 1.
  - Sticks are polled directly instead of going through actions. Steering reads `gamepad.joysticks.left.safeX`, and only when no digital left or right is held (`Player.js:565-567`). Camera panning reads the raw `joysticks.right.x` and `.y` once the stick is beyond the dead zone (`View.js:622-633`).
- Evidence: `Inputs/Gamepad.js:16-106`, `Inputs/Gamepad.js:127-196`, `Inputs/Gamepad.js:241-315`, `Inputs/Inputs.js:82-113`, `Player.js:535-567`, `View.js:622-633`.
- Depends on: the browser Gamepad API, `utilities/maths.js` (`remapClamp`).
- Transfer to a 16-bit on-foot sprite world: DIRECT, with a simplification. For a character, use the radial values (`angle` for direction and `safeRadius` for speed) instead of the per-axis `safeX`, so diagonals are not faster or slower than straight lines. Whether to keep the Firefox PS5 special cases is a judgement call; the standard mapping alone covers Chromium and Safari.

### 2.6 Pointer, wheel and pinch

- What the visitor experiences: Dragging with the mouse slides the map. The wheel zooms. On touch, two fingers slide the map and a pinch zooms. Clicking a highlighted marker in the world activates it.
- How it works:
  - `Pointer` unifies mouse and touch on the canvas element. DOM listeners only write into an `upcoming` state; `update()` (tick order 0) turns it into `current`, `delta`, `isDown` and `touches`, and emits `down`, `up`, `move` and `pinch` (`Inputs/Pointer.js:31-125`, `Inputs/Pointer.js:127-195`). For touch, the pointer position is the average of all touches (`Inputs/Pointer.js:69-82`, `Inputs/Pointer.js:93-108`).
  - `Inputs` exposes the pointer as the pseudo-key `Pointer.any` with the value `{ x, y }`: down becomes `start`, up becomes `end`, move becomes `change` (`Inputs/Inputs.js:115-135`). Three actions listen to that same key: `nipplePointer` (touch driving), `viewMapPointer` (camera pan and pinch) and `rayPointer` (picking). One physical gesture therefore fans out to several consumers, each gated by its own contexts (`Inputs/Inputs.js:156-158`, `View.js:586-588`, `RayCursor.js:209-211`).
  - Mouse: `mousedown` has no button check, so any button starts a drag, and the context menu is suppressed (`Inputs/Pointer.js:41-53`, `Inputs/Pointer.js:121-124`).
  - Pinch: the code tracks the largest pairwise distance between touches and its per-frame change (`Inputs/Pointer.js:137-176`). Verified bug: the distance is computed as `Math.sqrt(dX * dX, dY * dY)` (`Inputs/Pointer.js:146`); `Math.sqrt` ignores its second argument, so only the horizontal separation of the fingers is measured. Inferred effect: a purely vertical pinch does not zoom.
  - `touchend` clears the down state as soon as one or zero touches remain (`Inputs/Pointer.js:111-119`), so lifting one finger of a two-finger pan ends the gesture instead of turning it into a drive.
  - Wheel: a passive window-level listener, normalised by `normalize-wheel`, emitted as the non-toggle key `Wheel.roll` carrying the spin value; with Shift held the horizontal spin is used (`Inputs/Wheel.js:10-15`, `Inputs/Inputs.js:137-146`).
- Evidence: `Inputs/Pointer.js:31-195`, `Inputs/Wheel.js:10-15`, `Inputs/Inputs.js:115-146`, `View.js:586-618`.
- Depends on: DOM mouse and touch events, the `normalize-wheel` package.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Keep the "one pointer key, several gated consumers" idea and the average-of-touches trick. Change three things: compute the pinch distance with `Math.hypot(dX, dY)`; consider Pointer Events instead of separate mouse and touch listeners; and, because Juan's page scrolls (the folio's page has `overflow hidden`, `sources/style/general.styl:36`), capture the wheel and touch gestures only while the world is the active layer.

### 2.7 Touch driving control ("Nipple")

- What the visitor experiences: On a phone, one finger placed near the car and dragged makes a ring drawn on the ground around the car fill up toward the finger. The car drives toward the finger; the farther the finger is from the car, the more throttle. Dragging behind the car makes it reverse. A quick tap on the car makes it jump.
- How it works:
  - It is not the nipplejs library and it is not a virtual stick anchored to the screen. It is a custom class that owns a flat ring mesh in the 3D scene, centred on the car and rotated to the car's heading (`Inputs/Nipple.js:32-117`, `Inputs/Nipple.js:119-128`; `Player.js:621-623`).
  - Ring dimensions in world units: inner (dead) radius `progressRadiusLow = 2`, outer (full throttle) radius `progressRadiusHigh = 4.5`, and a "forward arc" `forwardAmplitude = 1.5 * PI` (270 degrees) (`Inputs/Nipple.js:38-42`).
  - It is active only in touch mode and only with exactly one finger (`Inputs/Inputs.js:160-166`; `Inputs/Nipple.js:135-136`, `Inputs/Nipple.js:156`, `Inputs/Nipple.js:192-195`).
  - On each pointer start or change, a ray is cast from `view.defaultCamera` through the finger onto a horizontal plane at the ring's height, giving the `distance` from the car and `targetAngle = atan2(dz, dx)`. Then `progress = clamp((distance - 2) / (4.5 - 2), 0, 1)` (`Inputs/Nipple.js:158-177`).
  - On each tick, `smallestAngle` is the signed difference between the car's heading and `targetAngle`; `forward` is true when its absolute value is under 135 degrees; when not forward, the angle is recomputed against the rear of the car (`Inputs/Nipple.js:231-245`).
  - `Player` converts this into intent: `accelerating = progress^3`; `steering = -min(|angle| / (PI / 4), 1) * sign(angle)`, which is full lock at 45 degrees off-axis; when not forward, both are negated (`Player.js:572-598`). It also turns camera tracking back on after 5 frames; the delay prevents a two-finger gesture from being mistaken for a drive (`Player.js:574-582`).
  - Tap: when the touch began inside the inner radius and never left it, releasing emits `tap` (`Inputs/Nipple.js:139-148`, `Inputs/Nipple.js:179-189`). `Player` then raises all four suspensions to `high` for 200 ms (a wall-clock `setTimeout`) and the ring plays a hop animation (`Player.js:309-326`; `Inputs/Nipple.js:200-229`).
  - The ring's shader draws the edges, the forward arc and a filled wedge between the heading and the finger whose length is `progress`, brightened by 1.5 at full throttle (`Inputs/Nipple.js:57-112`, `Inputs/Nipple.js:247-267`).
- Evidence: `Inputs/Nipple.js:20-42`, `Inputs/Nipple.js:119-278`, `Inputs/Inputs.js:153-167`, `Player.js:303-326`, `Player.js:572-598`, `Player.js:621-623`.
- Depends on: three.js (`Raycaster`, a node material), `view.defaultCamera`, Pointer, Player.
- Transfer to a 16-bit on-foot sprite world: ADAPT, and it becomes simpler. The angle-relative-to-heading logic and the reverse sector exist only because a car has to be steered. For a runner the same raycast gives the answer directly: direction is from the Runner to the touched ground point, speed comes from the distance (inner radius means stand still, outer radius means sprint), and a tap inside the inner radius can be "jump" or "interact". Keep the on-ground ring as feedback, drawn as a pixel-art ring. The alternative, a floating thumb-stick in a lower corner, avoids covering the Runner with the finger; that is a design choice to prototype.

### 2.8 On-screen contextual buttons

- What the visitor experiences: On a touch device, a row of large buttons appears at the bottom of the screen only when there is something to press: "Interact" near an interactive point, "Unstuck" when the car has been stuck for a while, and previous, next, open and close inside a project viewer. With a mouse or a gamepad the row never shows.
- How it works:
  - The buttons are static HTML: a container `.js-touch-buttons` with six `button.js-button[data-name]` children named `interact`, `unstuck`, `previous`, `next`, `open` and `close`, plus a gradient overlay (`sources/index.html:67-76`).
  - `InteractiveButtons` keeps a `Set` of the names that should be visible. `addItems`, `removeItems` and `clearItems` toggle an `is-visible` class per button, and the overlay is shown when at least one is visible (`Inputs/InteractiveButtons.js:16-96`).
  - The whole container is displayed only while the input mode is touch (`Inputs/InteractiveButtons.js:98-114`; `Inputs/Inputs.js:310-313`; `sources/style/interactiveButtons.styl:1-14`). The container has `pointer-events none` and the buttons `pointer-events auto`, so touches between buttons still reach the canvas (`sources/style/interactiveButtons.styl:8`, `sources/style/interactiveButtons.styl:55`).
  - A click emits a generic `click` event with the name and an event named after the button (`Inputs/InteractiveButtons.js:31-35`). These do not go through the action map; consumers subscribe to `inputs.interactiveButtons.events`.
  - Who shows what: every interactive point's reveal callback adds `interact` and its conceal and hide callbacks remove it (for example `World/Areas/BowlingArea.js:236-247`); `InteractivePoints` handles the click by triggering the nearest open point (`InteractivePoints.js:171-177`); the vehicle's `stuck` event adds `unstuck` (`Player.js:395-409`); project and lab viewers set `previous`, `next`, `open` and `close` (`World/Areas/ProjectsArea.js:1347-1349`).
- Evidence: `Inputs/InteractiveButtons.js:5-114`, `Inputs/Inputs.js:310-313`, `sources/index.html:67-76`, `sources/style/interactiveButtons.styl:1-101`, `Player.js:395-409`, `InteractivePoints.js:171-177`.
- Depends on: the DOM, Inputs mode, InteractivePoints, the vehicle's stuck detection.
- Transfer to a 16-bit on-foot sprite world: DIRECT. This is already a DOM pattern and maps naturally onto a React component that renders the set of currently relevant button names. Routing the button presses through the same action map (as a `Touch.interact` key) would remove the folio's duplicate subscriptions.

### 2.9 Player: control state and what each tick phase does

- What the visitor experiences: The visitor can drive immediately. Control is taken away only for short scripted moments: the race countdown, a respawn fade, and the sacrifice at the altar. There is no idle animation and no attract mode.
- How it works:
  - There are only two control states, `STATE_DEFAULT = 1` and `STATE_LOCKED = 2` (`Player.js:10-11`). Locked means "intent is forced to zero": `updatePrePhysics` zeroes `accelerating`, `steering`, `boosting` and `braking` and returns (`Player.js:522-530`), and the respawn and suspension inputs are ignored (`Player.js:244-245`, `Player.js:263-264`). The physics body keeps simulating, so the car coasts to a stop under the idle brake.
  - Who locks: `Player.die()` (`Player.js:490-501`); a race restart, until the lights turn green (`World/Areas/CircuitArea.js:1369`, `World/Areas/CircuitArea.js:1454-1460`); a race checkpoint respawn, until 2 simulated seconds after the fade (`World/Areas/CircuitArea.js:675`, `World/Areas/CircuitArea.js:692-698`).
  - `Player` holds intent, not physics: `accelerating` (-1 to 1), `steering` (-1 to 1), `boosting` (0 or 1), `braking` (0 or 1) and `suspensions` (four values among `'low'`, `'mid'`, `'high'`) (`Player.js:17-22`).
  - Pre-physics, tick order 1 (`Player.js:522-599`): `forward` adds its analog value and `backward` subtracts its own; `boost` sets `boosting = 1`; `brake` sets `accelerating = 0` and `braking = 1`; steering comes from digital left and right (left is +1), otherwise from the left stick; finally the touch control overrides `accelerating` and `steering` when it is active.
  - `PhysicsVehicle` pre-physics, tick order 2, turns that intent into wheel commands (aspect 2.11).
  - Post-physics, tick order 6 (`Player.js:601-676`): the chassis position is copied into `player.position` (a 3D vector) and `player.position2` (a 2D vector on the ground plane). This is the one position that zones, interactive points, checkpoints, the map marker and positional audio read. The position is also handed to the camera (`view.focusPoint.trackedPosition`), to the speed lines, to the ground-track renderer and to the touch control. Landing sounds are played, and statistics and achievements are accumulated (time played and distance driven are persisted in `localStorage`; "sea" triggers beyond 120 units from the origin; "goHigh" by elevation).
  - Spawn: the constructor reads the default respawn (`landing`, overridable with the `VITE_PLAYER_SPAWN` environment variable), records it as the chassis' initial state and teleports the car there (`Player.js:24-42`; `Game.js:111`).
  - Idle and sleep: none. The chassis is created with `canSleep: false` (`Physics/PhysicsVehicle.js:100`). `PhysicsVehicle` emits `stop` (speed under 0.04) and `start` (speed over 0.7) with hysteresis, but nothing subscribes to them (`Physics/PhysicsVehicle.js:203-230`; a search for subscribers finds only the events listed in aspect 2.10).
- Evidence: `Player.js:10-53`, `Player.js:218-327`, `Player.js:469-501`, `Player.js:522-676`, `World/Areas/CircuitArea.js:675`, `World/Areas/CircuitArea.js:1369`, `Physics/PhysicsVehicle.js:100`, `Physics/PhysicsVehicle.js:203-230`.
- Depends on: Inputs, PhysicsVehicle, View, Respawns, Overlay, Achievements, Audio, Tracks.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Keep the three-layer split (intent, body, visual) and the single published position. The intent becomes a 2D move vector plus sprint and jump. Keep the control state as small as the folio's (default and locked), and let the sprite have its own animation states (idle, run, sprint, jump, faint), which are a visual concern. An idle animation after a few seconds of no input is something the folio lacks and a character benefits from.

### 2.10 Getting unstuck: flip-back, stuck detection, respawn and death

- What the visitor experiences: A car that lands on its roof flips itself back after a moment. A car wedged against something gets an "Unstuck" button on touch devices, and R (or Select) on other devices fades the screen and puts the car down at the nearest safe spot. Driving into the altar "kills" the car: control is lost briefly and then the same respawn happens.
- How it works:
  - Upside-down detection: `ratio = dot(carUp, worldDown) * 0.5 + 0.5`. The `upsideDown` event fires when the ratio exceeds 0.3, which is when the car is tilted more than about 66 degrees from upright, and `rightSideUp` fires when it drops back (`Physics/PhysicsVehicle.js:232-260`).
  - Automatic flip-back: on `upsideDown`, `Player` schedules a check after `unstuck.duration = 3` simulated seconds (1.5 wall-clock seconds). If the car is still upside down and the player state is default, it calls `flip.jump()` and schedules the check again, until `rightSideUp` cancels it (`Player.js:345-393`).
  - `flip.jump()` applies an upward impulse of `5 * mass` and a torque impulse chosen from the orientation: about the car's forward axis when it is fully upside down, and a mix about the forward and axle axes when it is on its side (`Physics/PhysicsVehicle.js:404-438`).
  - Stuck detection: while `|accelerating| > 0.5`, a sliding window of the last 3 simulated seconds of (distance moved, frame time) pairs is kept. When the window is full and the total distance is under 0.5 units, `stuck` fires; otherwise `unstuck` fires (`Physics/PhysicsVehicle.js:262-314`, `Physics/PhysicsVehicle.js:537-538`).
  - On `stuck`, `Player` adds the `unstuck` DOM button, and clicking it respawns (`Player.js:395-409`). Because the button bar is displayed only in touch mode, this is the touch equivalent of the R key.
  - Respawn, `Player.respawn(respawnName = null, callback = null)` (`Player.js:469-488`): show the full-screen overlay (nominal 2 s, `Overlay.js:114-124`), run the optional callback, pick the named respawn or the one closest to the player on the ground plane, teleport the chassis there (y = 4, heading from the respawn, velocities zeroed, `Physics/PhysicsVehicle.js:446-455`), set the state to default, and hide the overlay (nominal 4 s, `Overlay.js:126-137`). Triggers: R or gamepad Select in the `wandering` context (`Player.js:227`, `Player.js:242-251`); the Unstuck button; the "Respawn" button in the options menu, labelled "I'm stuck!" with the tooltip "Teleports you to the closest respawn" (`Options.js:42-51`, `sources/index.html:266-272`); map fast travel (`Map.js:80-87`); `die()`; and `game.reset()` (`Game.js:224`).
  - Death, `Player.die()` (`Player.js:490-501`): lock, wait 2 simulated seconds, respawn at the closest point. Its only caller is the altar (`World/Areas/AltarArea.js:406`).
  - Falling out of the world: any body below y = -1.5 is reset to its recorded initial transform by the object registry (`Objects.js:345-349`), and that includes the chassis, whose recorded initial position is the default respawn (`Player.js:39-41`). A kinematic "bedrock" slab at about y = -2 follows the player near and beyond the edge of the terrain, so the car drives on the sea bed instead of falling forever (`World/Floor.js:155-209`).
  - Flip tricks: front and back flips are detected by accumulating pitch while all four wheels are off the ground, and counted at landing when the accumulated pitch exceeds 5 radians and the accumulated roll stays under 1 radian (`Physics/PhysicsVehicle.js:344-402`; `Player.js:444-453`).
- Evidence: `Player.js:345-410`, `Player.js:469-501`, `Physics/PhysicsVehicle.js:232-314`, `Physics/PhysicsVehicle.js:344-455`, `Overlay.js:114-137`, `Objects.js:345-349`, `World/Floor.js:155-209`, `Options.js:42-62`.
- Depends on: Rapier (impulses), gsap (delayed calls), Overlay, Respawns, InteractiveButtons.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Drop upside-down detection, flip-back and flip tricks entirely; a sprite cannot roll over. Keep three things because collision bugs happen in any world: the sliding-window stuck detector (it only needs "input held" and "distance moved"), the always-available respawn to the nearest spawn point behind a short fade, and the out-of-bounds reset. `die()` becomes "faint, then wake up at the nearest spawn".

### 2.11 Vehicle physics (Rapier raycast vehicle)

- What the visitor experiences: A small four-wheel-drive car with soft suspension that accelerates quickly, coasts to a stop, drifts a little, can be boosted to several times its normal speed, slides on ice in winter weather, and shoves light props out of the way.
- How it works:
  - Controller: `world.createVehicleController(chassisBody)` (`Physics/PhysicsVehicle.js:69`). In Rapier's JavaScript API this returns a `DynamicRayCastVehicleController`; I state this from knowledge of Rapier, because the package is not installed locally and its typings could not be opened. The method names used match that class: `addWheel`, `setWheelSteering`, `setWheelBrake`, `setWheelEngineForce`, `setWheelSuspensionRestLength`, `setWheelSuspensionStiffness`, `setWheelFrictionSlip`, `wheelGroundObject`, `wheelIsInContact`, `wheelContactPoint`, `wheelSuspensionLength`, `updateVehicle` (`Physics/PhysicsVehicle.js:131`, `Physics/PhysicsVehicle.js:170-179`, `Physics/PhysicsVehicle.js:488-512`, `Physics/PhysicsVehicle.js:545-554`).
  - Chassis: one dynamic rigid body registered through the object registry with no visual, `canSleep: false`, friction 0.4, and three box colliders given as half-extents: a main box 1.3 x 0.4 x 0.85 at y = -0.1 with mass 2.5 and its centre of mass lowered to y = -0.5; a roof box 0.5 x 0.15 x 0.65 at y = +0.4 with mass 0; and a "bumper" box 1.5 x 0.5 x 0.9 at (0.1, -0.2, 0) with mass 0 in the collision category `bumper` (`Physics/PhysicsVehicle.js:87-109`). The total mass is 2.5. The bumper category collides with props and scenery but not with the terrain (aspect 2.13), so the car presents a larger, lower hull to objects than to the ground.
  - Local axes: forward is +X, up is +Y, sideways is +Z (`Physics/PhysicsVehicle.js:23-25`, `Physics/PhysicsVehicle.js:523-525`).
  - Wheels: four raycast wheels at (+/-0.90, 0, +/-0.75), radius 0.4, suspension direction (0, -1, 0), axle (0, 0, 1) (`Physics/PhysicsVehicle.js:140-163`). Wheels 0 and 1 are the front pair and the only steered ones (`Physics/PhysicsVehicle.js:488-489`).
  - Tuning constants (all in `Physics/PhysicsVehicle.js`):

    | Constant | Value | Line |
    |---|---|---|
    | `steeringAmplitude` | 0.5 rad (about 28.6 degrees) maximum wheel angle | 14 |
    | `engineForceAmplitude` | 300 | 15 |
    | `boostMultiplier` | 2 (boost multiplies engine force by 1 + 2 = 3) | 16 |
    | `topSpeed` | 5 | 17 |
    | `topSpeedBoost` | 40 | 18 |
    | `brakeAmplitude` | 35 | 19 |
    | `idleBrake` | 0.06 | 20 |
    | `reverseBrake` | 0.4 | 21 |
    | Suspension rest length, low / mid / high | 0.88 / 1.23 / 1.63 | 31-35 |
    | Suspension stiffness, low / mid / high | 20 / 30 / 40 | 36-40 |
    | Wheel offset | x 0.90, y 0, z 0.75 | 141 |
    | Wheel radius | 0.4 | 142 |
    | `frictionSlip` | 0.9 (down to 0.04 on full ice) | 145, 504 |
    | `maxSuspensionForce` | 150 | 146 |
    | `maxSuspensionTravel` | 2 | 147 |
    | `sideFrictionStiffness` | 3 | 148 |
    | `suspensionCompression` | 10 | 149 |
    | `suspensionRelaxation` | 2.7 | 150 |
    | `settings.suspensionStiffness` | 25, declared but never applied; the per-state values above are what is set each frame | 151, 496 |
    | `flip.force` | 5 | 347 |
    | Stop / start speed thresholds | 0.04 / 0.7 | 207-208 |
    | `upsideDown.threshold` | 0.3 | 237 |
    | Stuck window / distance | 3 simulated s / 0.5 units | 265, 269 |

  - Engine: `engineForce = accelerating * (1 + boosting * 2) * 300 / (1 + overflowSpeed) * deltaScaled`, where `overflowSpeed = max(0, speed - topSpeed)` and `topSpeed = lerp(5, 40, boosting)` (`Physics/PhysicsVehicle.js:460-462`). "Top speed" is therefore a soft knee: above it the engine fades as 1 / (1 + excess), and the real maximum emerges from that fade against friction and damping. The force goes to all four wheels (`Physics/PhysicsVehicle.js:491-494`).
  - Brake: `brake = braking` (0 or 1). With no input (`|accelerating| < 0.1`) it becomes `idleBrake` 0.06, so the car rolls to a stop. When the driver asks for the direction opposite to the motion while the speed is above 0.5, it becomes `reverseBrake` 0.4 and the engine is cut, so the car brakes before reversing. The result is multiplied by `35 * deltaScaled` and applied to all wheels (`Physics/PhysicsVehicle.js:464-482`, `Physics/PhysicsVehicle.js:493`).
  - Steering: `steer = steering * 0.5` radians, applied instantly and not reduced with speed (`Physics/PhysicsVehicle.js:484-489`).
  - Ice: for each wheel, when the collider under it belongs to the ice body, `frictionSlip` is interpolated from 0.9 to 0.04 by the weather's ice ratio (`Physics/PhysicsVehicle.js:498-507`).
  - Controller timestep: `updateVehicle(delta)` is called with `delta = 1/60` on the low quality level (which `Quality.js:12-13` selects for mobile user agents) and with `min(1/60, average frame time)` on the high level (`Physics/PhysicsVehicle.js:510-512`). This is a different, unscaled and capped timestep from the world's. Inferred: because the controller's step is capped while the frame time is not, forces are pre-multiplied by `deltaScaled` (lines 462 and 482) to keep the impulse per wall-clock second roughly independent of the frame rate. The constants are meaningful only inside this loop.
  - Post-physics measurements, tick order 5 (`Physics/PhysicsVehicle.js:515-578`): velocity is the position change over the frame; `speed = |velocity| / deltaScaled` (units per simulated second); also `xzSpeed`, `forwardRatio = dot(direction, forward)`, `goingForward = forwardRatio > 0.5`, `forwardSpeed`, three Euler angles, and per wheel the contact flag, contact point and suspension length, plus `inContactCount` and `justTouchedCount`.
  - `moveTo(position, rotationY)` teleports and zeroes the velocities (`Physics/PhysicsVehicle.js:446-455`). `deactivate()` and `activate()` disable and enable the body, and are used by the project and lab viewers so the car cannot be knocked away while the camera is elsewhere (`Physics/PhysicsVehicle.js:580-590`; `World/Areas/ProjectsArea.js:1345`, `World/Areas/ProjectsArea.js:1405`).
  - The visual car (`World/VisualVehicle.js:418-546`) copies the chassis transform, eases the visual wheel steering and suspension height, spins the wheels from the forward speed, shows blinkers, brake lights and reverse lights from the inputs, emits boost trails, and feeds the wheel contact points to the ground-track renderer.
- Evidence: `Physics/PhysicsVehicle.js:14-40`, `Physics/PhysicsVehicle.js:69`, `Physics/PhysicsVehicle.js:87-201`, `Physics/PhysicsVehicle.js:446-590`, `World/VisualVehicle.js:418-546`, `Quality.js:12-13`.
- Depends on: Rapier (`DynamicRayCastVehicleController`), the object registry, Player intent, the water surface (ice), the quality level.
- Transfer to a 16-bit on-foot sprite world: SKIP. None of this applies to a person on foot. Two ideas are worth keeping in a different form: the "bumper" (a second, larger shape that interacts with props but not with the ground) becomes the Runner's push or kick sensor; and the soft speed knee plus the separate idle brake show that the folio tunes feel with three numbers (acceleration, cap, coast), which for a runner become acceleration time, run speed, sprint speed and stop time.

### 2.12 Jump, hydraulics and honk

- What the visitor experiences: Space makes the car hop. The number keys and the numpad raise individual corners like a lowrider. H honks, and the car twitches when it does.
- How it works:
  - The jump is a suspension trick, not an impulse. The `suspensions` action (Space, Numpad5 or the gamepad triangle) sets all four wheels to `high` while it is held, which changes the suspension rest length from 0.88 to 1.63 and the stiffness from 20 to 40; the springs throw the body upward. Releasing returns to `low` (`Player.js:261-301`; `Physics/PhysicsVehicle.js:495-496`).
  - Per-side and per-corner "hydraulics" use the `mid` setting (1.23 and 30): numpad 1 to 9 or digits 1 to 4, and L1 and R1 for the left and right sides (`Player.js:228-236`, `Player.js:266-276`). Using them without jumping counts toward an achievement (`Player.js:281-289`).
  - Touch jump: a tap on the car, as described in aspect 2.7.
  - Honk: H or L3. A looped horn sample is always playing and its volume follows the action. The honk also sets one random wheel to `mid` for 0.15 simulated seconds as a body twitch, and increments an achievement counter (`Player.js:70-81`, `Player.js:254-258`, `Player.js:503-520`).
- Evidence: `Player.js:228-236`, `Player.js:254-327`, `Player.js:503-520`, `Physics/PhysicsVehicle.js:31-40`, `Physics/PhysicsVehicle.js:495-496`.
- Depends on: Inputs, PhysicsVehicle suspension, Audio, Achievements.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Jump becomes a real hop for the Runner, which ties in with the existing side-scrolling Play Mode. Honk becomes an emote (a wave, a whistle, a speech bubble). Hydraulics have no equivalent.

### 2.13 Physics world: gravity, timestep, collision groups, damping, contact events

- What the visitor experiences: Objects fall and tumble plausibly at double speed, sink slowly when they end up in water, and make impact sounds whose loudness follows how hard they were hit.
- How it works:
  - World: `new RAPIER.World({ x: 0, y: -9.81, z: 0 })`. All integration parameters are left at Rapier's defaults; a tuning block is present but commented out (`Physics/Physics.js:10-25`, `Physics/Physics.js:48-58`).
  - Loading: Rapier is loaded with a dynamic `import('@dimforge/rapier3d')` in parallel with the main batch of assets, so the intro screen is shown before the WebAssembly arrives; everything that needs physics is constructed after both have resolved (`Game.js:128-129`, `Game.js:181-200`). The build uses `vite-plugin-wasm` (`vite.config.js:3`, `vite.config.js:26`).
  - Step: once per frame at tick order 3, `world.timestep = ticker.deltaScaled` and then `world.step(eventQueue)` (`Physics/Physics.js:60-63`, `Physics/Physics.js:243`, `Physics/Physics.js:263`). The timestep is therefore variable: the clamped frame time multiplied by 2, which is 1/30 s of simulated time per step at 60 frames per second and at most 1/15 s. There is no sub-stepping, no fixed-step accumulator and no interpolation.
  - Collision groups: three bits, `all` (1), `object` (2) and `bumper` (4), combined into three categories using Rapier's 32-bit packing with membership in the high 16 bits and the filter in the low 16 bits (`Physics/Physics.js:31-40`). `floor` is a member of {all} and collides with {all}. `object`, the default, is a member of {all, object} and collides with {all, bumper}. `bumper` is a member of {bumper} and collides with {object}. Working this through with Rapier's rule that each side's membership must intersect the other side's filter (my derivation): floor and object collide, object and object collide, bumper and object collide, bumper and floor do not, bumper and bumper do not.
  - Body factory, `physics.getPhysical(description)` (`Physics/Physics.js:85-239`): the type is `dynamic` (default), `fixed`, `kinematicPositionBased` or `kinematicVelocityBased`; optional position, rotation, `canSleep`, `sleeping` and `enabled`; linear and angular damping default to 0.1; collider shapes are `cuboid`, `ball`, `cylinder`, `trimesh`, `hull` (convex hull) and `heightfield`; density is 0.1 unless a mass is given, either per collider or as a body mass split evenly across the colliders; friction defaults to 0.2 and restitution to 0.15; an optional friction combine rule can be set; the category defaults to `object`. The factory records `initialState` (position, rotation, sleeping) for later resets and keeps every body in `physics.physicals`.
  - Water drag: every frame, for every body, when its y coordinate is below 0 both dampings are set to 1, and otherwise they are set back to the body's own values (`Physics/Physics.js:245-260`). A buoyancy idea (`waterGravityMultiplier` applied through the gravity scale) is present but commented out (`Physics/Physics.js:90`, `Physics/Physics.js:248`), so that parameter currently has no effect.
  - Contact events: a body's colliders get Rapier contact-force events only when its description has an `onCollision` function or a `contactThreshold` (the default threshold is 15) (`Physics/Physics.js:215-223`). After the step the queue is drained; for each event the code looks up both bodies' `onCollision` callbacks and calls them with `force = maxForceMagnitude / (mass1 + mass2)` and a position (`Physics/Physics.js:282-313`). This drives impact sounds and detonates crates. A comment reading "Doesn't work" sits above the block (`Physics/Physics.js:281`). Inferred: the comment is stale, because the explosive crates depend on this path.
  - Sleeping is covered in aspect 2.24. The HEAD commit message says dependencies were bumped "not Rapier because of sleep bug", which shows that the project holds its Rapier version back because it relies on sleeping behaviour.
  - Debug view: `PhysicsWireframe` draws `world.debugRender()` as line segments when toggled in the debug panel (`Physics/PhysicsWireframe.js:44-57`).
  - Cost note (the code is verified, the impact is inferred): the water-drag loop makes three WebAssembly calls per body per frame for every body, including fixed and sleeping ones (`Physics/Physics.js:245-260`), and the registry's sync loop reads every body's translation every frame (`Objects.js:320-322`). The per-frame overhead is linear in the total number of bodies, not in the number of awake bodies.
- Evidence: `Physics/Physics.js:10-63`, `Physics/Physics.js:85-239`, `Physics/Physics.js:241-314`, `Game.js:128-129`, `Game.js:181-200`, `vite.config.js:3`, `vite.config.js:26`, `Physics/PhysicsWireframe.js:44-57`.
- Depends on: `@dimforge/rapier3d` (WebAssembly), `vite-plugin-wasm`, Ticker, Water (surface elevation).
- Transfer to a 16-bit on-foot sprite world: SKIP if the Runner starts without a physics engine (my recommendation in section 4.2), ADAPT otherwise. If Rapier is adopted later, the transferable parts are the description-object factory with sensible defaults, the recorded initial state, the collision category scheme, the contact-force callback with a threshold for sounds, and the dynamic import. The parts to change are the per-frame loop over all bodies and the choice between a variable and a fixed timestep.

### 2.14 Level colliders: where collision data comes from

- What the visitor experiences: The ground has gentle hills and a sea bed. Buildings, trees and lamp posts are solid. During a race the track has guard rails that are not there otherwise.
- How it works:
  - Terrain: a Rapier `heightfield` collider is built at start-up from the vertex heights of the terrain model (`terrain/terrain.glb`, first child geometry), with `rowsCount = sqrt(vertexCount)` and scaled to `terrain.size = 192` units square, in the `floor` category, with friction 0.2 and restitution 0.15 (`World/Floor.js:120-153`; `Terrain.js:12-13`). The visible floor is a separate, smaller plane that follows the camera and is displaced in the shader from a terrain texture (`World/Floor.js:33-93`, `World/Floor.js:176-179`), so collision and visuals share source data but not meshes.
  - Scenery and areas: colliders are authored in Blender and decoded by a naming convention in `objects.getFromModel` (`Objects.js:116-221`). An object whose name contains `physical` gets a body. The body is `fixed` unless the name contains `dynamic` or `kinematicPositionBased`. Each child whose name starts with `cuboid`, `tube` (a cylinder), `ball`, `hull` or `trimesh` becomes a collider, sized from the child's scale (or from its geometry for hulls and triangle meshes), and is removed from the visual. The Blender custom properties `restitution`, `friction`, `category` and `mass` are honoured. The callers are `Scenery` for the scenery model and every `Area` for its own children (`World/Scenery.js:13-35`; `World/Areas/Area.js:32-70`).
  - Anchors: objects named `ref<Name>` or `reference<Name>` (with an optional trailing number) are collected into a lookup of "references" (`References.js:11-31`). Areas use them to find zones, spawners, interactive point positions, checkpoints and so on by name, instead of hard-coding coordinates.
  - Areas are created by name as well: each child of the areas model whose name starts with one of thirteen keys (`achievements`, `altar`, `behindTheScene`, `bowling`, `career`, `circuit`, `cookie`, `lab`, `landing`, `projects`, `social`, `toilet`, `timeMachine`) is handed to the matching class (`World/Areas/Areas.js:23-48`). `EasterArea` exists as a class with one interactive point that opens a menu page, but it is not in that list, so it is not instantiated (`World/Areas/EasterArea.js:4-36`).
  - Colliders defined in code: one thin cylinder per tree (half-height 2.5, radius 0.15) (`World/Trees.js:104-112`) and one box per pole light (half-extents 0.2 x 1.7 x 0.2) (`World/PoleLights.js:48-66`).
  - Moving kinematic colliders: an "ice" plate 512 units square that rises to the water surface when the weather freezes (`World/WaterSurface.js:400-415`, `World/WaterSurface.js:449-464`); the bedrock slab (aspect 2.10); the bowling screen and bumpers; the circuit obstacles.
  - Swapped colliders: the circuit disables the terrain heightfield and enables a dedicated road collider and guard rails for the duration of a race (`World/Areas/CircuitArea.js:552-579`, `World/Areas/CircuitArea.js:1390-1395`, `World/Areas/CircuitArea.js:1442`, `World/Areas/CircuitArea.js:1559-1564`, `World/Areas/CircuitArea.js:1578`).
  - A flat-ground alternative, `World.setPhysicalFloor` (a box 2000 units square), exists but is never called (`World/World.js:88-101`).
  - File sizes, from the GitHub git-tree listing of the repository at that commit: `terrain.glb` is 730 KB (26 KB compressed), `scenery.glb` is 266 KB (48 KB compressed), `areas.glb` is 3.29 MB (639 KB compressed).
- Evidence: `World/Floor.js:120-209`, `Terrain.js:12-13`, `Objects.js:116-227`, `References.js:11-31`, `World/Scenery.js:13-35`, `World/Areas/Area.js:32-70`, `World/Areas/Areas.js:23-48`, `World/Trees.js:104-112`, `World/PoleLights.js:48-66`, `World/WaterSurface.js:400-415`, `World/World.js:88-101`.
- Depends on: Blender exports (glTF), Rapier collider shapes, the object registry.
- Transfer to a 16-bit on-foot sprite world: ADAPT. The idea to keep is "collision and anchors are data, authored next to the art, decoded by convention". Juan has no Blender pipeline, so the data would live in a typed TypeScript or JSON level file (or a tile-map editor export): a list of boxes and circles for solids, and named anchors for spawns, zones, prompts and checkpoints. The collider-swap trick (a different collision set while an activity is running) transfers directly to a race course with barriers.

### 2.15 Camera: the follow rig

- What the visitor experiences: A fixed-angle, slightly telephoto three-quarter view that glides after the car. The camera never turns with the car and never bobs when the car jumps or climbs.
- How it works:
  - The camera is a `THREE.PerspectiveCamera` with a 25 degree vertical field of view, near plane 0.1 and far plane 200 (`View.js:394`). It is not orthographic; the narrow field of view gives a near-isometric look.
  - Three camera objects exist: `defaultCamera` (the gameplay rig), `freeCamera` (debug) and `camera` (the one that is rendered, which copies one of the other two each frame) (`View.js:392-400`, `View.js:736-747`). Game logic that needs "the gameplay camera" (the touch ring raycast, the optimal area) uses `defaultCamera`, so it keeps working when the free camera is active.
  - The rig is "focus point plus a fixed spherical offset". The focus point is the ground position the camera looks at. The offset uses a polar angle `phi` of `0.31 * PI` (55.8 degrees from vertical, so the camera looks down about 34 degrees below the horizon) on the high quality level and `0.27 * PI` (48.6 degrees from vertical, about 41 degrees down) on the low or mobile level; an azimuth `theta` of `0.25 * PI` (45 degrees), which never changes; and a radius between 15 and 30 (`View.js:332-344`). The quality level is read once at construction.
  - Each frame at tick order 7 (`View.js:620-788`): when tracking, the focus point's x and z are set to the player's position (`trackedPosition`, written by the Player's post-physics step). The y coordinate is never copied, so the focus stays at ground level (`View.js:636-640`; `Player.js:608`). The smoothed focus is `lerp(previous, target, delta * 10)` with the wall-clock delta, which is an exponential follow with a time constant of about 0.1 s (`View.js:658-660`, `View.js:681`). The camera position is the smoothed focus plus the offset, and the camera looks at the smoothed focus (`View.js:705-719`).
  - There is no look-ahead. I found no code that shifts the focus ahead of the vehicle. Because of the smoothing the camera trails the car slightly, and speed is compensated by zooming out (aspect 2.16). This corrects the assumption in the brief.
  - Aspect compensation: `ratioOverflow = max(1, (1920 / 1080) / viewportRatio) - 1`, and the maximum radius becomes `30 + ratioOverflow * 9`, so narrow and portrait screens get a more distant camera (`View.js:22`, `View.js:29-30`, `View.js:341`, `View.js:567`, `View.js:706-707`).
  - `view.delta`, the camera's movement during the frame, is exposed for other systems (`View.js:714`; used by `World/Scenery.js:117`).
- Evidence: `View.js:22-30`, `View.js:116-129`, `View.js:332-344`, `View.js:392-400`, `View.js:620-640`, `View.js:658-681`, `View.js:705-747`, `Player.js:608`.
- Depends on: three.js, the Player's published position, Viewport (aspect ratio), Quality.
- Transfer to a 16-bit on-foot sprite world: DIRECT, and it is the most important fit of the whole slice. A camera whose yaw never changes means a billboard sprite never has to be drawn from a new angle, so the existing side-view Runner can be used as it is. Keep "focus point plus fixed offset", ground-level focus (so a jump does not shake the view) and the aspect compensation for portrait phones. Two changes for pixel art: snap the smoothed focus to the world's pixel grid after smoothing, so the art does not shimmer, and decide between a narrow perspective and a true orthographic camera together with the rendering notes from slice A1.

### 2.16 Camera: zoom

- What the visitor experiences: The wheel, a pinch or a click of the right stick moves the camera between a close view and a far view. At speed, and only on desktop, the camera pulls back by itself and returns when the car slows down.
- How it works:
  - `zoom.baseRatio` lies between 0 and 1. 0 is far (the maximum radius) and 1 is near (radius 15): `radius = lerp(15, radiusMax, 1 - smoothedRatio)` (`View.js:340`, `View.js:705-707`). It is 0.6 before the intro, eases to 0.3 for the intro and to 0 when the visitor starts (`View.js:287`; `Reveal.js:73-85`, `Reveal.js:182-195`), so normal play begins fully zoomed out.
  - Wheel: `baseRatio -= wheelSpin * 0.05`, clamped to 0..1 (`View.js:292`, `View.js:296-305`). Allowed in `wandering` and `racing`.
  - Gamepad R3: zooms while held, and each press alternates the direction; `baseRatio` changes by 0.01 per frame (`View.js:298`, `View.js:307-318`, `View.js:690-694`). The step is per frame, so its speed depends on the frame rate.
  - Pinch: `baseRatio += pinch.distanceDelta * 0.005` (`View.js:612-614`).
  - Speed zoom: `zoomSpeedRatio = smoothstep(focusSpeed, 5, 40)`, where `focusSpeed` is the speed of the smoothed focus point in units per wall-clock second. Then `ratio = baseRatio - 0.4 * zoomSpeedRatio`, only while tracking and only on the high quality level, and `smoothedRatio` follows with `lerp(smoothedRatio, ratio, delta * 10)` (`View.js:290-291`, `View.js:679-680`, `View.js:696-702`). `ratio` is not clamped after the subtraction, so the radius can exceed the nominal maximum: at a 16:9 aspect, `lerp(15, 30, 1.4)` is 36.
- Evidence: `View.js:284-330`, `View.js:612-614`, `View.js:679-708`, `Reveal.js:73-85`, `Reveal.js:182-195`.
- Depends on: Inputs (wheel, R3, pinch), Quality, the focus point.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Continuous zoom scales pixel art by non-integer factors and blurs or shimmers it. Use two or three discrete zoom levels at whole-number pixel scales, changed by the same inputs. The speed zoom-out is tuned for speeds of 5 to 40 units per second; a runner is far slower, so at most keep a small step back while sprinting, or drop it.

### 2.17 Camera: panning the map and snapping back

- What the visitor experiences: Dragging with the mouse, with two fingers or with the right stick slides the view away from the car so the visitor can look around the world. Pressing any driving key glides the view back to the car.
- How it works:
  - The action `viewMapPointer` listens to `Pointer.any` and is allowed in the `intro` and `wandering` contexts only (`View.js:584-588`).
  - While the pointer is down and it is either a mouse or at least two touches, tracking is switched off, the pointer delta is rotated by `-theta` (so that screen directions map to ground directions under the 45 degree camera), scaled by `10 / min(viewportWidth, viewportHeight)` and then by 2, and subtracted from the focus point, so the ground follows the cursor (`View.js:590-611`).
  - The gamepad right stick does the same at 20 units per wall-clock second, unless a cinematic is active (`View.js:622-633`).
  - Snap back: the start of any of a fixed list of actions (the four directions, boost, brake, respawn, every suspension action, interact and whisper) sets `isTracking = true` (`View.js:131-155`). So do the touch driving control (`Player.js:574-582`), fast travel (`Map.js:82-85`) and the intro start (`Reveal.js:178`). Because the smoothed focus then eases toward the car, the return is a glide and not a cut.
  - Magnet: while not tracking, an optional pull drags the focus point back toward the car with a strength that grows with the square of the distance (`multiplier = 0.25`). It is on during the intro and switched off when the visitor starts (`View.js:127-129`, `View.js:642-656`; `Reveal.js:179`).
  - After the intro there are no pan limits; the focus point is not clamped to the world bounds.
  - Other code can park the view the same way: the circuit podium sets `isTracking = false` and moves the focus point to a fixed spot until the visitor drives again (`World/Areas/CircuitArea.js:1124-1135`).
- Evidence: `View.js:116-155`, `View.js:584-656`, `Player.js:574-582`, `Map.js:82-85`, `Reveal.js:178-179`, `World/Areas/CircuitArea.js:1124-1135`.
- Depends on: Inputs (pointer, gamepad), the focus point, Viewport.
- Transfer to a 16-bit on-foot sprite world: DIRECT. "Look around freely, and any movement input brings the camera home" is a cheap discoverability feature that needs no avatar animation. Add what the folio leaves out: clamp the pan to the world bounds so a visitor cannot lose the world off screen.

### 2.18 Camera: cinematic override

- What the visitor experiences: Opening the projects board or the lab swings the camera from the follow view to a framed, authored shot of that area; closing it swings the camera back. While the shot is active the keys navigate the content instead of driving.
- How it works:
  - `view.cinematic.start(position, target)` stores an authored camera position and look-at target, sets `active = true` and tweens `progress` from its current value to 1 over a nominal 1.5 s; `end()` tweens it back to 0 over a nominal 1 s. Both also tween the strength of a depth-of-field pass (`View.js:422-460`).
  - On screens narrower than 16:9, the authored position is pushed back along the line from the target by `ratioOverflow * 10` units, so the framing still fits (`View.js:430`, `View.js:444-448`).
  - Each frame, while `progress > 0`, a dummy camera is placed at the authored position looking at the target, and the gameplay camera is blended toward it with `position.lerp` and `quaternion.slerp` by `progress` (`View.js:727-734`). The follow rig keeps running underneath, so releasing the override returns to wherever the car is.
  - Callers are the projects and lab areas. On open they also replace the `wandering` context with `cinematic`, hide all interactive points, disable the car's physics body, and show the touch buttons previous, next, open and close; on close they undo each of these (`World/Areas/ProjectsArea.js:1296-1358`, `World/Areas/ProjectsArea.js:1360-1414`; `World/Areas/LabArea.js:1294-1298`, `World/Areas/LabArea.js:1320`, `World/Areas/LabArea.js:1353-1357`, `World/Areas/LabArea.js:1375`). The authored position and target are offsets from an anchor in the area's model (`World/Areas/ProjectsArea.js:178-191`).
  - While the cinematic context is active, the direction and interact actions are re-used for navigation by the area itself (`World/Areas/ProjectsArea.js:112-171`).
- Evidence: `View.js:422-460`, `View.js:727-734`, `World/Areas/ProjectsArea.js:112-191`, `World/Areas/ProjectsArea.js:1296-1414`, `World/Areas/LabArea.js:1294-1375`.
- Depends on: gsap, the input contexts, InteractivePoints, PhysicsVehicle (`deactivate` and `activate`), InteractiveButtons.
- Transfer to a 16-bit on-foot sprite world: DIRECT. This is the bridge between "walking around" and "reading portfolio content". The same four steps apply: blend the camera to an authored shot, push a `cinematic` context, hide prompts, freeze the avatar. In Juan's case the content itself can be an ordinary React panel laid over the framed scene, so the existing DOM sections are re-used instead of being rebuilt in 3D.

### 2.19 Camera: free (debug) camera

- What the visitor experiences: Nothing in normal use. In debug mode a developer presses V to detach an orbit camera and inspect the scene.
- How it works:
  - `View.MODE_FREE` hands a separate camera to the `camera-controls` library, configured with a smooth time of 0.075 and a dolly speed of 0.2 (`View.js:13`, `View.js:19-20`, `View.js:413-420`, `View.js:742-747`).
  - It is toggled from the debug panel or with the V key, and that key action is registered only when debug is active (`View.js:39-52`, `View.js:84-114`). Switching modes copies the current camera position and focus into the free camera so there is no jump (`View.js:105-114`).
  - A hidden keyboard shortcut used for a staged event also switches to the free camera (`World/Areas/SocialArea.js:229-247`).
- Evidence: `View.js:13-20`, `View.js:39-52`, `View.js:84-114`, `View.js:413-420`, `View.js:736-747`.
- Depends on: the `camera-controls` package, the debug flag.
- Transfer to a 16-bit on-foot sprite world: DIRECT as a development aid, and optional. The design point worth copying is that the gameplay camera stays a separate object, so game logic never depends on the debug view.

### 2.20 Camera feedback: roll kick, speed lines, bullet time

- What the visitor experiences: An explosion near the view makes the picture rock from side to side for a moment. While boosting at speed, thin white streaks converge on the car. A blast that hits the car slows time.
- How it works:
  - Roll kick: the camera's roll angle is a damped spring. `roll.kick(strength)` sets the spring's speed to `strength * kickStrength` with a random sign; each frame the spring is pulled back with `pullStrength = 100` and damped with `damping = 4`, and the value is added to the camera's z rotation (`View.js:358-371`, `View.js:721-725`). The only caller is `Explosions.explode`, with a strength that falls from 1 at 2 units to 0 at 15 units between the explosion and the focus point (`Explosions.js:17-20`).
  - Speed lines: 30 thin screen-space triangles around the edge of the screen whose tips oscillate toward the car's projected screen position. Their strength is 1 while boosting, accelerating and faster than 15, and 0 otherwise, smoothed with `lerp(..., delta * 2)` (`View.js:462-563`, `View.js:783-787`; `Player.js:610-616`).
  - Bullet time is described in aspect 2.1.
- Evidence: `View.js:358-390`, `View.js:462-563`, `View.js:721-725`, `View.js:783-787`, `Explosions.js:17-20`, `Player.js:610-616`.
- Depends on: three.js node materials, Explosions, Player.
- Transfer to a 16-bit on-foot sprite world: ADAPT. Rotating the view rotates every pixel and breaks the 16-bit look; use a translation shake in whole screen pixels driven by the same damped spring. Speed lines can become pixel dash marks behind the sprinting Runner. Respect `prefers-reduced-motion` for all three.

### 2.21 Camera: the "optimal area"

- What the visitor experiences: Nothing directly. Grass, rain, snow, water, shadows and fog always seem to cover exactly what is on screen, and props far from the view stop moving.
- How it works:
  - The "optimal area" is the folio's name for the patch of ground that the gameplay camera can see at its most zoomed-out setting, expressed as a quad, a centre and a bounding radius.
  - It is computed on the first frame and on every throttled resize (`View.js:579-582`, `View.js:754-756`). The gameplay camera is temporarily placed at the maximum radius (multiplied by 1.4 on the high quality level to cover the speed zoom) looking at the origin. Rays through the four screen corners are intersected with the plane y = 0 to get a ground quad (`quad2[0..3].base`). The centre (`basePosition`) is the average of the midpoints of the quad's two diagonals. `radius` is the distance from that centre to the far-right corner. `nearDistance` and `farDistance` are the camera's distances to the ground at the bottom-centre and top-centre of the screen. The camera is then put back (`View.js:172-282`).
  - Each frame: `optimalArea.position = basePosition + smoothed focus (x, z)`, and each quad corner's `offseted` value is its base plus the unsmoothed focus (x, z) (`View.js:754-766`).
  - Consumers found by search: grass, floor mesh size and position, water surface, leaves, snow, rain, wind lines and lightning spawn positions (`World/Grass.js:13`, `World/Floor.js:35`, `World/Floor.js:178-179`, `World/WaterSurface.js:384`, `World/Leaves.js:148`, `World/Snow.js:14`, `World/RainLines.js:30`, `World/WindLines.js:159-160`, `World/Lightnings.js:421-423`); the shadow frustum and the fog range (`Ligthing.js:17-25`, `Fog.js:20-21`); the physics sleep radius (`Objects.js:356`); the pointer-picking range (`RayCursor.js:85`); and each area's visibility test, a circle against the quad (`World/Areas/Area.js:137-146`).
- Evidence: `View.js:172-282`, `View.js:579-582`, `View.js:754-766`, `Objects.js:351-360`, `World/Areas/Area.js:104-177`, `RayCursor.js:79-89`.
- Depends on: three.js `Raycaster`, the camera constants, Viewport resize events.
- Transfer to a 16-bit on-foot sprite world: ADAPT. The principle transfers directly: compute "what ground is visible" once per resize and let every other system (culling, decoration, simulation sleep, area updates) read that one answer. The implementation becomes simpler in a small tile world: with an orthographic camera the visible ground is an exact rectangle, and a visible tile range replaces the quad and radius.

### 2.22 Zones

- What the visitor experiences: Driving into an area for the first time ticks it off in the achievements. Driving into the glowing circle at the altar triggers the sacrifice. Driving behind the waterfall unlocks a secret.
- How it works:
  - `zones.create(type, position, radius)` returns `{ type, position, radius, isIn, events }`. The type is `'sphere'` (3D distance) or `'cylinder'` (distance on the ground plane only, so infinitely tall) (`Zones.js:33-48`, `Zones.js:57-62`). There are no box zones.
  - `update()` runs at tick order 8, after the player's post-physics position is final. For every zone it compares the player's distance to the radius and emits `enter` or `leave` on transitions only (`Zones.js:50-80`). It is a linear scan with no spatial index; the number of zones is small.
  - Debug: wireframe sphere previews can be toggled in the debug panel (`Zones.js:18-30`, `Zones.js:39-45`).
  - Subscribers: `Area.setBounding` creates a cylinder zone from the area's `zoneBounding` anchor (centre from its position, radius from its x scale) and re-emits `boundingIn` and `boundingOut`, also keeping `area.isIn` (`World/Areas/Area.js:72-102`). Every area uses `boundingIn` to mark itself as visited (for example `World/Areas/BowlingArea.js:518-524`, `World/Areas/ToiletArea.js:34-40`), and the landing area uses `boundingOut` for a "left the start" achievement (`World/Areas/LandingArea.js:259-266`). The altar creates a sphere of radius 2.5 as its death zone (`World/Areas/AltarArea.js:392-415`). The achievements area creates a cylinder for the waterfall secret (`World/Areas/AchievementsArea.js:330-342`).
  - A second kind of zone, the area's `zoneFrustum` circle, is not tested against the player but against the camera's ground quad (circle against polygon). It hides the area's static meshes and skips the area's `update()` while the area is off screen (`World/Areas/Area.js:22-29`, `World/Areas/Area.js:104-177`; `utilities/maths.js:145-168`).
- Evidence: `Zones.js:33-80`, `World/Areas/Area.js:22-29`, `World/Areas/Area.js:72-177`, `World/Areas/AltarArea.js:392-415`, `World/Areas/AchievementsArea.js:330-342`, `utilities/maths.js:145-168`.
- Depends on: the Player's published position, `Events`, anchors from the area models.
- Transfer to a 16-bit on-foot sprite world: DIRECT. It is about fifty lines and has no dependency on the physics engine or on the vehicle. For a tile world, add rectangle zones. The two-zone idea per area (one circle for "the player is here", one for "the camera can see this") is worth keeping, because it separates content triggers from performance culling.

### 2.23 Respawn points and fast travel

- What the visitor experiences: R puts the car back on the nearest road. The map (M, or the map button) shows the island with named pins; clicking a pin fades the screen and drops the car at that place.
- How it works:
  - Respawn points come from a tiny model file, `respawns/respawnsReferences.glb` (2.8 KB according to the saved tree listing), loaded in the first asset batch (`Game.js:104`). Each child named `respawn<Name>` becomes `{ name, position: (x, 4, z), rotation: rotation.y }`, with the first letter of the name lower-cased (`Respawns.js:14-38`). The y coordinate is always 4, so the car is dropped from a height.
  - The API is `getByName(name)`, `getDefault()` (the name given to the constructor, `landing` by default or the `VITE_PLAYER_SPAWN` environment variable) and `getClosest(position)`, a linear search on the ground plane (`Respawns.js:6-9`, `Respawns.js:40-67`; `Game.js:111`).
  - The default respawn also seeds the intro, the grid, the reveal effect and the camera's first focus point (`View.js:118-121`, `World/Intro.js:13`, `Reveal.js:13`).
  - Fast travel is the map modal (`Map.js`). It is plain DOM: a pre-rendered image of the island (day or night version, `ui/map/map-day.webp` at 106 KB and `ui/map/map-night.webp` at 68 KB) with absolutely positioned pins. The twelve pins are a hard-coded list of `{ name, respawnName, offset }`; each pin's position is its respawn's world position converted with `x / terrain.size + 0.5` (`Map.js:40-89`, `Map.js:109-119`, `Map.js:154-169`).
  - Clicking a pin calls `player.respawn(respawnName, callback)`, whose callback turns camera tracking back on, and closes the modal (`Map.js:80-87`). The teleport therefore re-uses the respawn fade described in aspect 2.10.
  - A player marker is positioned and rotated only while the modal is open, and only when the rounded position changes (`Map.js:171-192`).
  - The map opens with M (allowed in `modal`, `menu` and `wandering`) or with a DOM button (`Map.js:122-152`; `sources/index.html:93`).
- Evidence: `Respawns.js:6-67`, `Game.js:104`, `Game.js:111`, `Map.js:26-192`, `Player.js:469-488`.
- Depends on: a glTF model for the points, Modals, Overlay, Player, Terrain (for the world size).
- Transfer to a 16-bit on-foot sprite world: DIRECT. Named spawn points with "closest" and "by name" lookups, one fade-teleport function shared by respawn, fast travel and death, and a DOM map with clickable pins all transfer as they are; the points simply live in the level data instead of a model. For a walking avatar fast travel matters more than for a car, because crossing a world on foot is slow. The pin list can also be offered as a plain list of links, which gives keyboard and screen-reader users the same navigation.

### 2.24 Objects registry: pairing visuals with bodies, sync, sleep and reset

- What the visitor experiences: Props stay where they were knocked to as long as they are on screen, stop moving once they are well off screen, come back if they fall into the sea, and all return to their places when the visitor uses "Reset".
- How it works:
  - `objects.add(visualDescription, physicalDescription)` creates `{ visual, physical, needsUpdate, reseting }` (`Objects.js:21-28`). Either half may be null: the car chassis has no visual (`Physics/PhysicsVehicle.js:90`), and decorative meshes have no body.
  - Visual half: `{ object3D, parent }`. Defaults are "update materials, cast and receive shadows, add to the scene". Passing `parent: null` means "do not add to the scene"; instanced props use this because their visual is only a transform holder (`Objects.js:33-75`).
  - Physical half: built by `physics.getPhysical` (`Objects.js:80-83`; aspect 2.13).
  - Cross links: `body.userData = { object }` and `object3D.userData.object = object` (`Objects.js:88-95`). From a Rapier body in a collision event the code reaches the game object (`Physics/Physics.js:293-294`), and from a named anchor in a model an area reaches the body (for example `World/Areas/BowlingArea.js:183`).
  - Everything is stored in `objects.list`, a `Map` keyed by an incrementing integer (`Objects.js:100-101`).
  - Sync at tick order 4 (`Objects.js:306-363`): for each object the body's translation is read; when the object has a visual and either `needsUpdate` is set or the body is awake and enabled, position and rotation are copied to the visual. Sleeping bodies therefore cost no transform updates, and `needsUpdate` forces one sync after a kinematic move or a reset.
  - Reset when out of the world: a body below `water.depthElevation` (-1.5) is reset (`Objects.js:345-349`; `Water.js:11`).
  - Sleep by distance: whenever the camera focus point, rounded to whole units, changes, every enabled and awake body farther than `view.optimalArea.radius` from it is put to sleep with `body.sleep()` (`Objects.js:308-319`, `Objects.js:351-360`).
  - Initial sleep: every prop, scenery object and area object is created with `sleeping: true` (for example `World/Bricks.js:39`, `World/Scenery.js:28`, `World/Areas/Area.js:50`). Rapier wakes a body when something touches it.
  - `resetObject(object)`, for dynamic and position-based kinematic bodies: disable the body, restore the initial translation and rotation, zero velocities, forces and torques, snap the visual, re-enable the body one frame later, put it back to sleep if it started asleep, and flag one more sync a frame after that; a `reseting` flag prevents re-entry (`Objects.js:229-272`). `resetAll()` does this for every object (`Objects.js:274-280`).
  - `disable(object)` and `enable(object)` remove or restore both halves at once: velocities zeroed, body disabled and visual detached; or body enabled and visual re-attached (`Objects.js:282-304`). They are used for the circuit rails and podium, exploded crates and the ice plate.
  - How many dynamic bodies exist cannot be read from the code, because most counts are the number of instances the artist placed in a model. What the code fixes: 1 car chassis that never sleeps; 22 cookies, of which 20 are pooled and disabled until spawned (`World/Areas/CookieArea.js:197-199`); one bowling ball, and pins whose score display has room for 10 (`World/Areas/BowlingArea.js:262-266`); explosive crates, for which the achievement expects 20 (`sources/data/achievements.js:99-105`). Bricks, benches, fences, lanterns and the dynamic objects inside the scenery and area models are counted by the models.
- Evidence: `Objects.js:21-114`, `Objects.js:229-363`, `Physics/Physics.js:230-236`, `Physics/Physics.js:293-294`, `Water.js:10-11`, `World/Areas/CookieArea.js:197-199`, `sources/data/achievements.js:99-105`.
- Depends on: Physics (Rapier bodies), three.js objects, View (focus point and optimal area radius), Water (the reset height), Ticker (`wait`).
- Transfer to a 16-bit on-foot sprite world: ADAPT. If the Runner's world has no rigid bodies, the useful remainder is small: a list of resettable things with a recorded initial state and one `reset()` each, plus one "reset the world" command. If Rapier is added later, copy the four rules that make many props affordable: start asleep, sync only awake bodies, sleep by distance from the view, reset below the floor.

### 2.25 Instanced visuals that follow physics bodies

- What the visitor experiences: Dozens of identical bricks, fences, lanterns, pins and crates are drawn cheaply, and each still moves independently when hit.
- How it works:
  - `new InstancedGroup(references, group, autoUpdate = true)` takes an array of `Object3D` transform holders, one per instance, each with a custom `needsUpdate` flag, and a template object. For each mesh inside the template it creates one `THREE.InstancedMesh(geometry, material, count)` and remembers that mesh's local matrix (`InstancedGroup.js:6-53`).
  - Helpers build both from a model whose children are the placed copies: the first child is cloned as the template and reset to the origin, and every child yields one reference with its position, rotation and scale (`InstancedGroup.js:55-84`).
  - `update()` runs at tick order 13. For each reference that is dirty (or for all of them when the group's own `needsUpdate` is set) it updates the reference's world matrix and writes `localMatrix premultiplied by reference.matrixWorld` into every instanced mesh at that index. `instanceMatrix.needsUpdate` is set only when something changed (`InstancedGroup.js:92-119`).
  - The full chain for one physics prop is: the Rapier body; then the reference's position and quaternion, copied by the object registry at tick order 4 because the reference is the object's visual with `parent: null`; then `reference.needsUpdate = true`, set by the prop's own class at tick order 10 while the body is awake and enabled (for example `World/Bricks.js:56-63`); then the instance matrix, written by the instanced group at tick order 13.
  - Culling: `updateBoundings()` recomputes the instanced meshes' bounding spheres. Bowling calls it five times per second while pins are awake (`World/Areas/BowlingArea.js:609-616`) and the cookie stand calls it while cookies are awake (`World/Areas/CookieArea.js:513-521`). Bricks and lanterns instead switch frustum culling off (`World/Bricks.js:15`, `World/Lanterns.js:19`).
  - After a world reset each group's `needsUpdate` is set so all matrices are rewritten once (`Game.js:252-266`).
- Evidence: `InstancedGroup.js:6-119`, `World/Bricks.js:10-63`, `World/ExplosiveCrates.js:12-71`, `Objects.js:320-340`, `World/Areas/BowlingArea.js:609-616`, `Game.js:252-266`.
- Depends on: three.js `InstancedMesh`, the object registry, Ticker ordering.
- Transfer to a 16-bit on-foot sprite world: ADAPT. The dirty-flag instancing idea transfers to sprites as "one instanced quad batch per sprite sheet, rewrite only the instances that moved". Whether it is needed depends on how many repeated props the world has; a small 16-bit scene may not need instancing at all.

### 2.26 Pointer picking of world objects

- What the visitor experiences: With a mouse, markers in the world highlight under the cursor and can be clicked, even from a distance, without driving up to them. The cursor turns into a hand over them.
- How it works:
  - `RayCursor` keeps a list of "intersects": `{ active, shape, onEnter, onLeave, onDown, onUp, onClick }`, where the shape is a three.js `Sphere`, `Box3`, `Plane` or `Mesh` (`RayCursor.js:20-55`).
  - The action `rayPointer` on `Pointer.any` is allowed in `intro`, `wandering`, `racing` and `cinematic` (`RayCursor.js:207-219`). On pointer start and move, the active intersects within `optimalArea.radius` of the camera focus are tested against a ray from the rendered camera; enter and leave callbacks fire on changes and the canvas cursor is set to `pointer` (`RayCursor.js:57-166`). On release, `onClick` fires only when the pointer moved less than 25 pixels in total, which separates a click from a map drag (`RayCursor.js:168-204`).
  - Interactive points register a sphere of radius 0.75; hovering reveals the point and clicking triggers it (`InteractivePoints.js:349-384`). Proximity is the other way to activate one: the nearest point within 2.5 units of the player is revealed, re-evaluated only after the player has moved 0.2 units, and the `interact` action triggers it (`InteractivePoints.js:163-169`, `InteractivePoints.js:576-628`).
- Evidence: `RayCursor.js:20-219`, `InteractivePoints.js:163-177`, `InteractivePoints.js:349-384`, `InteractivePoints.js:576-628`.
- Depends on: three.js `Raycaster`, Inputs (pointer), View (camera, optimal area).
- Transfer to a 16-bit on-foot sprite world: DIRECT for the behaviour, ADAPT for the code. "Walk up and press interact, or simply click the marker" gives mouse users a shortcut and makes content reachable for visitors who do not want to steer an avatar. The click-versus-drag threshold of 25 pixels is worth copying. In a flat tile world the test can be a 2D point-in-rectangle check on the ground plane instead of a 3D raycast.

### 2.27 Explosive crates (with Explosions and Fireballs)

- What the visitor experiences: Touching a crate makes it click; a moment later it bursts into a fireball that throws the car and everything nearby into the air, rocks the camera and, when the car was close, slows time. Crates standing together go off as a chain. Exploded crates stay gone until the world is reset or a race starts or ends.
- How it works:
  - Mechanic: each crate is one dynamic box with half-extents 0.5, mass 0.02 and friction 0.7, created asleep, with `contactThreshold: 0` and an `onCollision` callback, so any contact force at all detonates it (`World/ExplosiveCrates.js:28-59`). Placement and count come from the `explosiveCrates` model, and the visuals are instanced (`World/ExplosiveCrates.js:12-24`).
  - `explode(crate)` is guarded by `crate.exploded`. It plays a click and, after 0.4 simulated seconds, plays one of two explosion sounds, creates a fireball at the body's position, disables the object, moves its reference 100 units up to hide the instance, and records the crate's id in the `explosiveCrates` achievement (`World/ExplosiveCrates.js:123-148`).
  - `Fireballs.create(position, fireRadius = 5, explosionRadius = 5)` builds a temporary sphere mesh with a noise-dissolve material, scales it from 0.5 to 5 in a nominal 0.6 s, dissolves it and removes it after a nominal 2.25 s. It calls `explosions.explode(position, 5, 8)` immediately (`World/Fireballs.js:33-107`).
  - `Explosions.explode(coordinates, radius = 7, strength = 4, vehicleOnly = false, bulletTimeStrengthThreshold = 3)` (`Explosions.js:15-81`) kicks the camera roll according to the distance from the camera focus, scatters the leaf particles, and then, for every enabled dynamic body (or for the car only), computes the horizontal distance, `fadedStrength = remapClamp(distance, 1, radius, 1, 0)`, and an impulse that points mostly upward (horizontal 0.5, vertical 1, then normalised) with magnitude `fadedStrength * strength * mass`, applied at the body's centre one frame later. When the body is the car and `fadedStrength * strength` exceeds 3, bullet time is activated; the function returns whether the car was hit that hard.
  - Because the impulse is multiplied by each body's own mass, every body receives the same change of velocity whatever it weighs.
  - Inferred: chain reactions happen because the impulse pushes neighbouring crates into contact with something, which fires their own zero-threshold callback.
  - Another caller: a lightning strike calls `explode(coordinates, 7, 4, true)`, which affects the car only, and grants an achievement when the car is hit (`World/Lightnings.js:441-445`).
  - Start and reset: crates never respawn on their own. `explosiveCrates.reset()` resets every crate object, clears `exploded`, re-enables the bodies two frames later, and disables every other dynamic or kinematic body for one frame so that resting contacts do not immediately detonate the fresh crates (`World/ExplosiveCrates.js:150-189`). It is called by `game.reset()` (`Game.js:229-231`) and at the start and at the end of every race (`World/Areas/CircuitArea.js:1414-1415`, `World/Areas/CircuitArea.js:1580-1581`).
  - Scoring and persistence: the `explosiveCrates` achievement counts distinct crate ids toward a total of 20 (`sources/data/achievements.js:99-105`), and achievements are stored in `localStorage` (`Achievements.js:64-69`).
  - Cost: one sleeping body per crate and instanced drawing while idle. Each explosion loops once over every registered object and creates one temporary mesh with its own material (`World/Fireballs.js:36`, `World/Fireballs.js:102-106`). Inferred: a new material per fireball may cause a shader compilation hitch on first use. The model file is 27.7 KB (8.6 KB compressed).
- Evidence: `World/ExplosiveCrates.js:12-189`, `World/Fireballs.js:33-107`, `Explosions.js:15-81`, `World/Lightnings.js:441-445`, `Game.js:229-231`, `sources/data/achievements.js:99-105`.
- Depends on: Rapier (contact-force events, impulses), the object registry, InstancedGroup, View (roll kick), Time (bullet time), Audio, Achievements, gsap.
- Transfer to a 16-bit on-foot sprite world: ADAPT. The fun (touch, fuse, bang, get launched) does not need a car, and it is a 16-bit staple. Without a physics engine the launch is a scripted knockback arc for the Runner (a decaying velocity plus a cosmetic hop), a pixel shake of the screen and an animated explosion sprite; the fuse delay and the chain reaction (explode neighbours within a radius after the same delay) are a few lines. Keep the "reset on world reset" rule so exploded crates can come back.

### 2.28 Bricks, benches, fences, lanterns (knock-about props) and fixed street furniture

- What the visitor experiences: Walls of loose bricks, benches, fence panels and lanterns that scatter satisfyingly when the car ploughs through them, with a clatter whose loudness follows the impact. Trees and lamp posts do not move.
- How it works:
  - Mechanic: every one of these is the same recipe: instance placements from a model, one dynamic body per instance created asleep, visuals drawn through an `InstancedGroup`, and a tick at order 10 that marks awake instances dirty.

    | Prop | Collider (half-extents) | Mass | Friction | Contact threshold | Impact sound | Source |
    |---|---|---|---|---|---|---|
    | Bricks | box 0.5625 x 0.375 x 0.75 | 0.1 | 0.7 | 15 | `hitBrick` | `World/Bricks.js:21-50` |
    | Benches | colliders taken from the model | 0.1 | 0.7 | 10 | none (commented out) | `World/Benches.js:17-48` |
    | Fences | colliders taken from the model | 0.1 | 0.7 | 10 | none (commented out) | `World/Fences.js:17-52` |
    | Lanterns | box 0.35 x 0.5 x 0.35 | 0.1 | 0.7 | 10 | `hitMetal` | `World/Lanterns.js:26-55` |
    | Explosive crates | box 0.5 x 0.5 x 0.5 | 0.02 | 0.7 | 0 | click, then explosion | `World/ExplosiveCrates.js:35-54` |

  - The car weighs 2.5, so it is 25 times heavier than a brick and 125 times heavier than a crate, a pin or a cookie. That ratio is why the car ploughs through everything without slowing much.
  - Benches and fences show how one collider set authored once in Blender is shared by all instances: `objects.getFromModel(base)` extracts the colliders from the template and the same array is passed to each body (`World/Benches.js:17`, `World/Benches.js:39`).
  - Fixed furniture: pole lights and trees get fixed colliders with an impact sound callback but no dynamic body (`World/PoleLights.js:48-66`, `World/Trees.js:104-118`).
  - Start and reset: nothing starts them; they simply wait asleep. They are put back only by the world reset (aspect 2.37), which calls `objects.resetAll()` and then flags every instanced group for a full rewrite (`Game.js:227`, `Game.js:252-266`).
  - Scoring and persistence: none. There is no achievement for knocking these over.
  - Cost: one sleeping body per instance and one instanced mesh per sub-mesh. Each prop class also loops over all of its bodies every frame and asks Rapier whether each one is asleep and enabled (`World/Bricks.js:56-63`). Model files are small: bricks 6.8 KB, fences 8.2 KB, benches 14.5 KB, lanterns 29 KB.
- Evidence: `World/Bricks.js:10-63`, `World/Benches.js:10-62`, `World/Fences.js:10-65`, `World/Lanterns.js:10-68`, `World/PoleLights.js:48-66`, `World/Trees.js:104-118`, `Game.js:227`, `Game.js:252-266`.
- Depends on: Rapier dynamic bodies and sleeping, the object registry, InstancedGroup, Audio.
- Transfer to a 16-bit on-foot sprite world: SKIP as rigid bodies. The pleasure here is momentum transfer from a heavy, fast vehicle into light objects, and a person at running speed does not have it. Make such furniture solid, or give it a small non-physical reaction (a lantern that sways, a pot that shatters into pixel particles when the Runner dashes into it). This is the main reason the Runner's world may not need a physics engine.

### 2.29 Bowling

- What the visitor experiences: A lane with ten pins and a ball. The car pushes the ball (or simply drives into the pins). A floating scoreboard follows the car along the lane and shows a cross for each fallen pin; knocking all of them down shows a blinking "strike" label with confetti. A "Restart" prompt appears once anything has been disturbed. A "Bumpers" prompt raises side walls, and a jukebox changes the music.
- How it works:
  - Mechanic, pins: the pin positions are the children of the `pinPositions` anchor, and one template pin from the model provides the colliders. Each pin is a dynamic body created asleep with friction 0.5, linear damping 0.1, angular damping 0.5, mass 0.02 and contact threshold 5, with a sound on impact (`World/Areas/BowlingArea.js:73-153`). A typo, `resitution: 0.5`, means the intended bounciness is ignored and the default restitution of 0.15 applies (`World/Areas/BowlingArea.js:116`; `Physics/Physics.js:200-205`).
  - Mechanic, ball: the ball is an ordinary model object that the area base class registered as a dynamic body from its Blender name; the bowling code only keeps a handle to its body and measures its speed for a rolling sound (`World/Areas/BowlingArea.js:177-202`, `World/Areas/BowlingArea.js:618-638`).
  - Game logic runs in the area's `update()`, which is only called while the area is on screen (`World/Areas/Area.js:22-29`). A pin counts as down when its up vector's y component is below 0.5, which is a tilt of more than 60 degrees (`World/Areas/BowlingArea.js:548-565`). The state of each pin is written into a 10 x 1 data texture that the scoreboard's shader reads to raise a disc or a cross per pin (`World/Areas/BowlingArea.js:262-299`, `World/Areas/BowlingArea.js:564`).
  - Win: when every pin is down and the game has not been won since the last restart, `won` is set, three confetti bursts are fired, a sound plays and the `strike` achievement is set; the "strike" label is shown for half of every 3 simulated seconds (`World/Areas/BowlingArea.js:542-546`, `World/Areas/BowlingArea.js:581-607`).
  - Start: there is no start. The game is always armed, and the "Restart" interactive point, hidden by default, is shown as soon as any pin or the ball wakes up (`World/Areas/BowlingArea.js:225-249`, `World/Areas/BowlingArea.js:567-575`, `World/Areas/BowlingArea.js:619-626`, `World/Areas/BowlingArea.js:640-642`).
  - Reset: `restart()` teleports every pin and the ball to their base pose, zeroes their velocities, puts them to sleep two frames later, clears the scoreboard texture, flags the instanced group and hides the Restart prompt (`World/Areas/BowlingArea.js:156-175`, `World/Areas/BowlingArea.js:189-223`, `World/Areas/BowlingArea.js:321-328`). The world reset also calls it (`Game.js:233-235`).
  - Extras: the scoreboard is a kinematic body eased toward the player's x position, clamped to the lane (`World/Areas/BowlingArea.js:530-540`). The bumpers are a kinematic body with two colliders set to restitution 1 and friction 0, raised and lowered over a nominal 1 s by an interactive point (`World/Areas/BowlingArea.js:344-409`). The jukebox interactive point advances the music playlist (`World/Areas/BowlingArea.js:479-504`).
  - Scoring and persistence: there is no score beyond the per-pin display. Only the `strike` achievement persists.
  - Cost: the pins and the ball are sleeping bodies until touched; the pins are instanced; bounding spheres are recomputed five times per second while pins are awake; nothing runs while the area is off screen.
- Evidence: `World/Areas/BowlingArea.js:73-249`, `World/Areas/BowlingArea.js:251-409`, `World/Areas/BowlingArea.js:526-644`, `World/Areas/Area.js:22-29`, `Game.js:233-235`.
- Depends on: Rapier (dynamic and kinematic bodies, sleep state), InstancedGroup, InteractivePoints, Confetti, Audio, Achievements, gsap.
- Transfer to a 16-bit on-foot sprite world: ADAPT, or SKIP for a first version. On foot the natural verb is a kick: press interact next to the ball to send it down the lane in the direction the Runner faces. Ten pins and a ball can be simulated without Rapier as eleven circles on the ground plane with elastic collisions, and a pin "falls" (switches sprite) when hit above a speed threshold. Two details are worth copying whatever the implementation: the game is always armed with no start button, and the reset prompt appears only once something has been disturbed.

### 2.30 Circuit (time trial)

- What the visitor experiences: A "Start race!" prompt at the track. The screen fades, the car is placed on the start line, three lights count down and a floating timer follows the car. Glowing gates show the next checkpoint, each one pops confetti and plays a slightly higher note, and crossing the start line again ends the lap with a fanfare, a podium and, when the time is in the day's top ten, a form to enter three letters and a country flag for the leaderboard shown on a board next to the track. Falling off the track puts the car back at the last checkpoint. R restarts.
- How it works:
  - State machine: `STATE_PENDING = 1`, `STATE_STARTING = 2`, `STATE_RUNNING = 3`, `STATE_ENDING = 4` (`World/Areas/CircuitArea.js:16-19`, `World/Areas/CircuitArea.js:34`).
  - Start: the interactive point "Start race!" calls `restart()` (`World/Areas/CircuitArea.js:581-610`). `restart()` returns if already starting; forces the area to stay visible; sets the state to starting; hides the prompt; locks the player; replaces the input contexts with `racing`; and shows the overlay (`World/Areas/CircuitArea.js:1351-1379`). Behind the overlay it teleports the car to the `start` anchor, disables the terrain heightfield and enables the road collider and the guard rails, resets the lights, sets the first checkpoint as target and clears the progress, resets the track's own props and every explosive crate in the world, forces clear weather and a fixed time of day, shows the timer and hides the podium (`World/Areas/CircuitArea.js:1381-1445`). When the overlay has faded out, the state becomes running and the countdown plays (`World/Areas/CircuitArea.js:1447-1462`).
  - Countdown: a paused gsap timeline with steps at nominal 0, 2, 4 and 6 seconds (0, 1, 2 and 3 wall-clock seconds). The first three play a beep and move the light strip; the fourth plays a different sound, turns the lights green, unlocks the player and starts the timer (`World/Areas/CircuitArea.js:612-653`, `World/Areas/CircuitArea.js:1454-1460`).
  - Timer: wall-clock elapsed seconds from `ticker.elapsed`, so it is not affected by the 2x simulation scale or by bullet time; it is written every frame into a small canvas texture in the format `MM:SS:mmm` on a panel that eases toward a point beside the car (`World/Areas/CircuitArea.js:141-307`; `utilities/time.js:1-8`).
  - Checkpoints: anchors named `checkpoints...`, sorted by name. Each becomes a line segment on the ground (half-width from the anchor's x scale, rotated by its heading), plus a respawn position 3 units along its direction (`World/Areas/CircuitArea.js:309-352`). While running, every frame tests every checkpoint's segment against a circle of radius 2 around the player (`World/Areas/CircuitArea.js:1632-1649`; `utilities/maths.js:40-81`). `reach()` ignores a checkpoint that is not the current target, so the order is enforced but the crossing direction is not (`World/Areas/CircuitArea.js:385-430`).
  - Lap logic: because the count is assigned before each push, `checkpoints.count` ends up as the number of checkpoints minus one; the race finishes when `reachedCount === count + 2`, and the next target is `items[reachedCount % (count + 1)]` (`World/Areas/CircuitArea.js:416-426`, `World/Areas/CircuitArea.js:432-435`). In words: the first checkpoint is the start and finish line, it is crossed once at the start and once at the end, and every other checkpoint is crossed once in between. That is one lap.
  - Each reached checkpoint pops confetti at both posts, moves the "reached" door there, plays a sound whose pitch rises by 6 percent per checkpoint, and records the elapsed milliseconds in `timings` (`World/Areas/CircuitArea.js:391-413`; `World/Areas/CircuitArea.js:83-93`).
  - Respawn inside the race: when the player's y drops below 0 while running, `respawn()` locks the player, fades, and places the car at the last reached checkpoint's respawn position (or at the start), unlocking 2 simulated seconds later. The timer keeps running, so the only penalty is time (`World/Areas/CircuitArea.js:669-715`, `World/Areas/CircuitArea.js:1662-1674`).
  - Restart key: in the `racing` context the R key and gamepad Select are bound to `circuitRestart`, which restarts the race; the normal `respawn` action is not allowed in that context (`World/Areas/CircuitArea.js:655-667`; `Player.js:227`).
  - Moving obstacles: kinematic bodies that oscillate 5 units along z with `sin(elapsedTime * 1.25 + offset)` (`World/Areas/CircuitArea.js:531-550`, `World/Areas/CircuitArea.js:1651-1660`).
  - Finish, `finish(forced)` (`World/Areas/CircuitArea.js:1510-1628`): the state becomes ending, the timer stops, a fanfare plays, and after a nominal 4 s (1 s when the visitor chose "End" in the menu) the overlay is shown. Behind it everything is undone: `wandering` context, car moved to the `circuit` respawn, terrain collider back on, road and rails off, weather and day overrides ended, crates reset. Then the podium appears with the camera parked on it, the achievements `circuitFinish` and `circuitFinishFast` (under 30 s) are set, and, when the server is connected, the end modal opens.
  - Leaderboard and persistence: the server sends `circuitLeaderboard` (rows of tag, country code, duration in ms) and `circuitResetTime` in its `init` message and in `circuitUpdate` messages (`World/Areas/CircuitArea.js:1466-1500`). The scores are drawn onto a 512 x 512 canvas texture on an in-world board, including flag images, and into an HTML table in the menu; the board shows "OFFLINE" without a server and "NO SCORE YET TODAY" when empty (`World/Areas/CircuitArea.js:789-974`, `World/Areas/CircuitArea.js:1162-1205`). The board resets daily, with a countdown text (`World/Areas/CircuitArea.js:976-1092`). The end modal shows the tag input only when the time would enter the top ten (`World/Areas/CircuitArea.js:1605-1617`; `sources/style/circuit-end.styl:18-35`); submitting sends `circuitInsert` with the country code, a three-letter tag, the duration and the per-checkpoint timings (`World/Areas/CircuitArea.js:1283-1304`). Nothing about a race is stored locally.
  - Menu: Escape during a race opens a "circuit" menu page with Restart, End and Controls buttons, shown only while racing (`ClosingManager.js:41-43`; `World/Areas/CircuitArea.js:1207-1236`; `sources/style/circuit.styl:39-43`). Inferred: the gamepad cross button does the same during a race, because the `close` action is bound to it as well as to Escape (`ClosingManager.js:16`).
  - Cost: the area is forced visible for the whole race; a handful of kinematic obstacles; several small canvas textures redrawn on change (the timer every frame); one per-frame loop over the checkpoints. The server is required only for the leaderboard.
- Evidence: `World/Areas/CircuitArea.js:16-61`, `World/Areas/CircuitArea.js:141-307`, `World/Areas/CircuitArea.js:309-438`, `World/Areas/CircuitArea.js:581-715`, `World/Areas/CircuitArea.js:1246-1349`, `World/Areas/CircuitArea.js:1351-1500`, `World/Areas/CircuitArea.js:1510-1690`, `utilities/maths.js:40-81`, `ClosingManager.js:41-43`, `sources/style/circuit.styl:1-43`, `sources/style/circuit-end.styl:1-35`.
- Depends on: Player lock state, input contexts, Overlay, Respawns, the object registry (reset, enable, disable), Rapier kinematic bodies, Weather and DayCycles overrides, Confetti, Audio, Menu and Modals, the WebSocket server, `InputFlag`.
- Transfer to a 16-bit on-foot sprite world: DIRECT, and the best fit of all the toys, because a time trial is what a marathon runner does. Everything except the car carries over: the four-state machine, gates as segments tested against a circle, ordered targets with a visible "next gate", countdown with input lock, wall-clock timer, checkpoint respawn with time as the only penalty, a `racing` context that repurposes the respawn key as restart, a collision set that exists only during the race, and fixed weather and light for fairness. The leaderboard needs a server, which a static GitHub Pages site does not have; a personal best in `localStorage` is the honest equivalent.

### 2.31 Cookie stand

- What the visitor experiences: A stall with an oven and an "Accept cookie" prompt. Each press makes the oven flare, rings a till, and shoots a cookie out onto the ground. A counter on the stall shows how many cookies everyone in the world has accepted.
- How it works:
  - Mechanic: 22 dynamic cylinder bodies with mass 0.02 and friction 0.7: 20 form a pool that starts disabled and parked 99 units up, and 2 start stacked on the table (`World/Areas/CookieArea.js:184-252`). `accept()` takes the next pooled body in ring order, teleports it to the spawner with a little sideways jitter, enables it and, two frames later, applies an impulse forward and slightly upward; when all 20 are out, the oldest is re-used (`World/Areas/CookieArea.js:462-484`).
  - Feedback: the oven's heat mesh is scaled up and eased back, a till sound plays, and the counter increments immediately (`World/Areas/CookieArea.js:486-494`).
  - The joke: it also writes a real browser cookie, `acceptedCookies=<n>`, read back at start-up (`World/Areas/CookieArea.js:254-267`, `World/Areas/CookieArea.js:496-497`).
  - Start and reset: started by the interactive point (`World/Areas/CookieArea.js:269-293`); the world reset puts the bodies back (`Game.js:237-239`).
  - Scoring and persistence: the global count comes from the server (`init` and `cookiesUpdate` messages) and local presses are batched to the server once per second as `cookiesInsert` with an amount (`World/Areas/CookieArea.js:403-451`). The counter is drawn with canvas text into a texture and is only created once the server is connected (`World/Areas/CookieArea.js:324-363`, `World/Areas/CookieArea.js:444-451`). The `cookie` achievement has tiers at 1, 10, 100 and 1000 (`sources/data/achievements.js:33-55`).
  - Cost: at most 22 light bodies, instanced; bounding spheres recomputed only while cookies are awake (`World/Areas/CookieArea.js:512-527`).
- Evidence: `World/Areas/CookieArea.js:184-293`, `World/Areas/CookieArea.js:295-452`, `World/Areas/CookieArea.js:462-528`, `Game.js:237-239`.
- Depends on: Rapier (pooled dynamic bodies), InstancedGroup, InteractivePoints, the WebSocket server, Audio, Achievements, `document.cookie`.
- Transfer to a 16-bit on-foot sprite world: ADAPT. This is an interaction gag, not a driving toy, so it works unchanged on foot. Without a physics engine the cookie is a pooled sprite on a scripted arc. Without a server the counter is the visitor's own, kept in `localStorage`. The pattern worth keeping is "a tiny repeatable interaction with instant feedback and a number that goes up".

### 2.32 Toilet cabin

- What the visitor experiences: An outdoor toilet cabin that can be rammed over, which unlocks an achievement.
- How it works:
  - Mechanic: the cabin is a dynamic body registered by the area base class from the model. While the area is on screen and the cabin is awake, the code checks its up vector; when the y component drops below 0.4 the cabin counts as down and the `toiletDown` achievement is set, once (`World/Areas/ToiletArea.js:16-21`, `World/Areas/ToiletArea.js:42-54`).
  - Start and reset: no start. The world reset clears the `down` flag and puts the cabin back (`Game.js:241-243`).
  - Scoring and persistence: the achievement only.
  - Cost: one sleeping body and one check per frame while visible and awake.
- Evidence: `World/Areas/ToiletArea.js:16-54`, `Game.js:241-243`.
- Depends on: Rapier, the area base class, Achievements.
- Transfer to a 16-bit on-foot sprite world: SKIP. A person cannot ram a cabin over. If the joke is wanted, it becomes an interaction ("knock" and the door rattles), not physics.

### 2.33 Altar

- What the visitor experiences: A glowing circle with a counter above it. Driving into it fires a beam, tolls bells, adds one to the counter, takes control away and returns the car to the nearest respawn. The counter is shared by all visitors, and the server uses it to decide when to start a storm with a tornado for everyone.
- How it works:
  - Mechanic: a sphere zone of radius 2.5 centred 1.25 units below the altar anchor. On `enter` it plays the beam and particle animations, sends `cataclysmInsert` to the server, optimistically shows the counter plus one, calls `player.die()`, plays two bell sounds and sets the `sacrifice` achievement (`World/Areas/AltarArea.js:392-415`).
  - Start and reset: the zone is always armed. `die()` locks the player for 2 simulated seconds and then runs the normal respawn at the closest point (`Player.js:490-501`).
  - Scoring and persistence: the count lives on the server. `init` and `cataclysmUpdate` messages carry `cataclysmCount`, `cataclysmProgress` (which recolours floating glyphs) and `cataclysmRunning` (which starts and stops the tornado, aspect 2.35) (`World/Areas/AltarArea.js:417-445`; `Tornado.js:116-141`). Without a server the counter shows "..." (`World/Areas/AltarArea.js:38-45`).
  - Cost: one zone check per frame; a few shader-animated meshes hidden while the area is off screen.
- Evidence: `World/Areas/AltarArea.js:22-53`, `World/Areas/AltarArea.js:392-445`, `Player.js:490-501`, `Tornado.js:116-141`.
- Depends on: Zones, Player (`die`), the WebSocket server, Audio, Achievements, gsap.
- Transfer to a 16-bit on-foot sprite world: ADAPT. "A marked spot that harmlessly defeats you and sends you to the nearest spawn" needs only a zone and the respawn function, and it works for a runner. The shared counter and the world event it triggers need a server; on a static site the counter can only be personal.

### 2.34 Time machine

- What the visitor experiences: A "Time Machine" prompt opens the 2019 version of the portfolio in a new tab. Bumping the television next to it switches the picture on its screen and, the first time, plays an alert sound.
- How it works:
  - Mechanic: the interactive point calls `window.open` with the address of the 2019 site (`World/Areas/TimeMachineArea.js:18-42`).
  - The television is a model object with a physics body. After creation the code assigns `onCollision` on that body's record; each call advances an index, rebuilds the screen material with the next of two textures and blocks further switches for a nominal 1 s (`World/Areas/TimeMachineArea.js:44-109`).
  - Inferred: the television's own colliders were created without contact events, because `onCollision` was not in its description when the body was built (`Physics/Physics.js:215-223`). The callback therefore fires only when the other body in the contact has contact events enabled, as the car's chassis does.
  - Start, reset, scoring and persistence: none beyond the area-visited achievement.
  - Cost: negligible; one material rebuild per switch.
- Evidence: `World/Areas/TimeMachineArea.js:18-117`, `Physics/Physics.js:215-223`, `Physics/Physics.js:282-313`.
- Depends on: InteractivePoints, Rapier contact events, Audio, gsap.
- Transfer to a 16-bit on-foot sprite world: DIRECT. "Walk up, press interact, an older version of the site opens" is exactly the kind of content hook a portfolio world needs, and Juan's history (earlier portfolio versions, the DOM site itself) can be offered the same way. The television switch becomes an interact action instead of a bump.

### 2.35 Tornado

- What the visitor experiences: Occasionally, for everyone at once, the sky turns red and stormy and a tornado wanders around the island along a fixed loop. Getting close pulls the car in, spins it sideways and lifts it.
- How it works:
  - Mechanic: the path is a closed Catmull-Rom curve through anchor points from a small model, resampled to 100 points (`Tornado.js:47-76`). The tornado's position follows the day cycle's progress along that loop, eased with `lerp(..., 0.3 * deltaScaled)` (`Tornado.js:202-224`).
  - Force on the car, every frame while active: within 20 units the pull strength rises from 0 to 1 (full at 2 units); within 8 units the pull direction is rotated sideways by up to 45 degrees and an upward component up to 2 is added; the resulting vector is scaled to `strength * deltaScaled * tornadoStrength * 30` and applied as an impulse to the chassis (`Tornado.js:233-253`). Only the car is affected, not the props.
  - Start and stop: driven by the server's `cataclysmRunning` flag in `init` and `cataclysmUpdate` messages (`Tornado.js:116-141`). `start()` and `stop()` ramp the strength over a nominal 20 s and start or end overrides of the weather and of the day cycle's colours (`Tornado.js:143-200`).
  - Scoring and persistence: the `cataclysm` achievement is set when the pull strength exceeds 0.5 (`Tornado.js:237-242`).
  - Cost: one impulse per frame while active, and one shader-animated twisted cylinder for the visual (`World/VisualTornado.js:54-169`).
- Evidence: `Tornado.js:47-76`, `Tornado.js:116-254`, `World/VisualTornado.js:54-169`.
- Depends on: the WebSocket server, DayCycles and Weather overrides, Rapier impulses, gsap.
- Transfer to a 16-bit on-foot sprite world: SKIP. It depends on a server-driven shared event and on a body that can be thrown about. A much smaller cousin is possible without either: a wind zone that adds a push vector to the Runner's movement.

### 2.36 Confetti

- What the visitor experiences: Bursts of pastel paper pop at every race checkpoint, on the podium, on a bowling strike and when the Konami code is entered.
- How it works:
  - Mechanic: a pool of 4 emitters. Each is one `InstancedMesh` of 500 small planes, animated entirely in the vertex shader from a single `progress` uniform that is tweened from 0 to 1 over a nominal 5 s. `pop(position, radius = 4, elevation = 6)` takes a free emitter, or silently does nothing when all four are busy (`World/Confetti.js:22-25`, `World/Confetti.js:45-172`, `World/Confetti.js:174-183`).
  - Start and reset: fired by callers (`World/Areas/BowlingArea.js:595-600`, `World/Areas/CircuitArea.js:391-396`, `World/Areas/CircuitArea.js:1107-1122`, `KonamiCode.js:66-71`); each emitter frees itself when its tween completes.
  - Scoring and persistence: none.
  - Cost: fixed. Four pre-built instanced meshes, no per-particle work on the CPU, no allocation at pop time.
- Evidence: `World/Confetti.js:22-183`, `World/Areas/BowlingArea.js:595-600`, `World/Areas/CircuitArea.js:391-396`, `KonamiCode.js:66-71`.
- Depends on: three.js instancing and node materials, gsap.
- Transfer to a 16-bit on-foot sprite world: DIRECT in spirit. A small fixed pool of reward bursts that callers fire by position is a cheap way to make every success feel good. In pixel art it is a pooled sprite-particle burst; Juan's site already uses framer-motion for DOM effects, so a DOM confetti burst over the canvas is also possible.

### 2.37 World reset

- What the visitor experiences: A "Res(e)t" prompt at a bonfire near the start, and a "Reset" button in the options menu ("Resets every object"), fade the screen and put every prop, crate, pin and cookie back where it started.
- How it works:
  - `game.reset()` clears the touch buttons and calls `player.respawn(null, callback)`. Inside the fade, the callback runs `objects.resetAll()`, resets the explosive crates, restarts bowling, flags the instanced groups of cookies, fans, benches, fences, bricks and lanterns for a full rewrite, clears the "down" flags of the toilet cabin and of a statue, and sets a `reset` achievement a nominal 2 s later (`Game.js:218-274`).
  - Triggers: the bonfire interactive point in the landing area (`World/Areas/LandingArea.js:217-225`) and the options menu button (`Options.js:53-62`; `sources/index.html:276-283`).
  - The reset is a hand-maintained list of calls into each feature, not an event that features subscribe to.
- Evidence: `Game.js:218-274`, `World/Areas/LandingArea.js:217-225`, `Options.js:53-62`, `Objects.js:229-280`.
- Depends on: Player respawn, the object registry, every resettable feature.
- Transfer to a 16-bit on-foot sprite world: DIRECT. Any world with disturbable things needs one obvious "put it all back" action, and hiding it behind the respawn fade is a neat touch. Implement it as an event that features subscribe to, so that adding a toy does not mean editing a central list.

## 3. Input binding tables (keyboard, gamepad, touch)

All bindings below are verified in code. Context abbreviations: I = `intro`, W = `wandering`, R = `racing`, C = `cinematic`, Me = `menu`, Mo = `modal`. Keyboard names such as `KeyW` are `event.code` values, which identify the physical key position and therefore work on any keyboard layout. Bindings written as a lower-case character (`l`, `m`, `k`, `j`) are `event.key` values and match only that character.

### 3.1 Keyboard and mouse

| Action | Keys | Contexts | Effect | Source |
|---|---|---|---|---|
| `forward` | ArrowUp, KeyW | W R C | Throttle forward. In C: previous item. | `Player.js:221` |
| `backward` | ArrowDown, KeyS | W R C | Brake then reverse. In C: next item. | `Player.js:223` |
| `left` | ArrowLeft, KeyA | W R C | Steer left. In C: previous item. | `Player.js:224` |
| `right` | ArrowRight, KeyD | W R C | Steer right. In C: next item. | `Player.js:222` |
| `boost` | ShiftLeft, ShiftRight | W R | Engine force x3 and soft top speed 40 instead of 5. | `Player.js:225` |
| `brake` | KeyB, ControlLeft | W R | Full brake; cancels the throttle. | `Player.js:226` |
| `respawn` | KeyR | W | Fade and teleport to the closest respawn. | `Player.js:227` |
| `suspensions` | Space, Numpad5 | W R | Jump (all four corners to "high"). | `Player.js:228` |
| `suspensionsFront`, `suspensionsBack`, `suspensionsRight`, `suspensionsLeft` | Numpad8, Numpad2, Numpad6, Numpad4 | W R | Raise one side ("mid"). | `Player.js:229-232` |
| `suspensionsFrontLeft`, `suspensionsFrontRight`, `suspensionsBackRight`, `suspensionsBackLeft` | Numpad7 or Digit2, Numpad9 or Digit3, Numpad3 or Digit4, Numpad1 or Digit1 | W R | Raise one corner ("mid"). | `Player.js:233-236` |
| `interact` | Enter, KeyE, KeyF | W R C | Trigger the active interactive point. In C: open the link (on release). | `Player.js:237` |
| `honk` | KeyH | W R C | Horn. | `Player.js:238` |
| `zoom` | Mouse wheel (with Shift: horizontal scroll) | W R | Camera zoom. | `View.js:297` |
| `viewMapPointer` | Mouse drag, any button | I W | Pan the camera. | `View.js:587` |
| `rayPointer` | Mouse move and click | I W R C | Hover and click world markers. | `RayCursor.js:210` |
| `map` | `m`, KeyM | Mo Me W | Open or close the map. | `Map.js:140` |
| `mute` | `l` | all six | Toggle sound. | `Audio.js:683` |
| `whisper` | KeyT | W | Open the whispers menu page. | `World/Whispers.js:430` |
| `close` | Escape | Mo Me R C W | Close the top-most open thing; with nothing open, open the menu. | `ClosingManager.js:16` |
| `circuitRestart` | KeyR | R | Restart the race. | `World/Areas/CircuitArea.js:658` |
| `introStart` | Enter, ArrowUp, ArrowDown, KeyW, KeyD | I | Start the experience. | `Reveal.js:140` |
| `labScroll` | Mouse wheel | C | Scroll inside the lab viewer. | `World/Areas/LabArea.js:1020` |
| `viewToggle` | KeyV, registered only in debug mode | no categories, so always allowed | Toggle the free camera. | `View.js:87` |
| `startFWA`, `winFWA` | `k`, `j` | all six | Staged-event shortcuts. | `World/Areas/SocialArea.js:230-231` |
| Konami code (not an action) | Up, Up, Down, Down, Left, Right, Left, Right, B, A, with W, S, A, D and Q accepted as alternates | raw `keydown` listener outside the action map | Swap the car model and pop confetti. | `KonamiCode.js:13-49` |

### 3.2 Gamepad

Logical button names follow PlayStation naming; the Xbox label is in brackets.

| Action | Control | Contexts | Source |
|---|---|---|---|
| `forward` | D-pad up, R2 [RT], analog value used as throttle | W R C | `Player.js:221`, `Player.js:535-536` |
| `backward` | D-pad down, L2 [LT], analog | W R C | `Player.js:223`, `Player.js:538-539` |
| `left`, `right` | D-pad left, D-pad right | W R C | `Player.js:222`, `Player.js:224` |
| Steering (polled, not an action) | Left stick, x axis, dead zone 0.2, used only when no digital left or right is held | not gated by context; only by the player being unlocked | `Player.js:565-567` |
| `boost` | circle [B] | W R | `Player.js:225` |
| `brake` | square [X] | W R | `Player.js:226` |
| `suspensions` (jump) | triangle [Y] | W R | `Player.js:228` |
| `suspensionsRight`, `suspensionsLeft` | R1 [RB], L1 [LB] | W R | `Player.js:231-232` |
| `interact` | cross [A] | W R C | `Player.js:237` |
| `honk` | L3 (left stick press) | W R C | `Player.js:238` |
| `respawn` | select | W | `Player.js:227` |
| `circuitRestart` | select | R | `World/Areas/CircuitArea.js:658` |
| `zoomToggle` | R3 (right stick press), held; the direction alternates on each press | W R | `View.js:298`, `View.js:307-318` |
| Camera pan (polled, not an action) | Right stick, dead zone 0.2 | not gated by context; only by the default view mode and no active cinematic | `View.js:622-633` |
| `close` | cross [A] | Mo Me R C W | `ClosingManager.js:16` |
| `pause` | start | Mo Me R C W; opens or closes the menu | `ClosingManager.js:17`, `ClosingManager.js:60-73` |
| `next`, `prev` | R1, L1 | Me; switch menu page | `Menu.js:149-150` |
| `introStart` | cross [A] | I | `Reveal.js:140` |

Analog constants: button pressed threshold 0.2, stick dead zone 0.2, remapped so output starts at 0 at the edge of the dead zone (`Inputs/Gamepad.js:92-93`, `Inputs/Gamepad.js:184-195`).

### 3.3 Touch

| Gesture or control | Effect | Condition | Source |
|---|---|---|---|
| One finger pressed and dragged near the car | Drive toward the finger. Throttle is the cube of the finger's distance from the car mapped from 2..4.5 units to 0..1. Steering comes from the angle to the car's heading, full lock at 45 degrees. A finger more than 135 degrees off the heading means reverse. | Touch mode; contexts W R; exactly one finger | `Inputs/Nipple.js:130-198`, `Player.js:572-598` |
| Tap on the car (inside the 2 unit ring) | Jump for 200 ms. | Same | `Player.js:309-326` |
| Two fingers dragged | Pan the camera. | Contexts I W | `View.js:598-610` |
| Pinch | Zoom. | Contexts I W | `View.js:612-614` |
| Tap on a world marker | Reveal it and trigger it. | Contexts I W R C | `RayCursor.js:57-204`, `InteractivePoints.js:349-384` |
| DOM button "Interact" | Trigger the active interactive point. | Shown while a point is revealed | `InteractivePoints.js:171-177` |
| DOM button "Unstuck" | Respawn at the closest point. | Shown while the stuck detector is active | `Player.js:395-409` |
| DOM buttons previous, next, open, close | Navigate a project or lab viewer. | Shown while a viewer is open | `World/Areas/ProjectsArea.js:151-171`, `World/Areas/ProjectsArea.js:1347-1349` |
| DOM menu button and DOM map button | Open the menu or the map. | Slid away or disabled by the `input-filter-*` classes | `Menu.js:53-70`, `Map.js:122-134`, `sources/style/menu.styl:16-20`, `sources/style/map.styl:16-19` |

### 3.4 What each context lets start

| Context | Set by | Actions that may start |
|---|---|---|
| `intro` | Game start (`Game.js:87`) | `viewMapPointer`, `rayPointer`, `introStart`, `mute` |
| `wandering` | Visitor starts (`Reveal.js:174-175`); a menu, modal or viewer closes; a race ends | Every driving action, `respawn`, `zoom`, `zoomToggle`, `nipplePointer`, `viewMapPointer`, `rayPointer`, `interact`, `honk`, `map`, `whisper`, `close`, `pause`, `mute` |
| `racing` | Race start (`World/Areas/CircuitArea.js:1372-1373`) | Every driving action, `zoom`, `zoomToggle`, `nipplePointer`, `rayPointer`, `interact`, `honk`, `circuitRestart`, `close`, `pause`, `mute`. Not `respawn`, not `viewMapPointer`, not `map`, not `whisper`. |
| `cinematic` | A project or lab viewer opens (`World/Areas/ProjectsArea.js:1314-1315`) | `forward`, `backward`, `left`, `right` (re-used as navigation), `interact`, `honk`, `rayPointer`, `labScroll`, `close`, `pause`, `mute`. Not `boost`, `brake`, the suspension actions, `zoom`, `nipplePointer`, `viewMapPointer`, `respawn`, `map`, `whisper`. |
| `menu` | `Menu.open` (`Menu.js:233-234`) | `next`, `prev`, `map`, `close`, `pause`, `mute` |
| `modal` | `Modals.open` (`Modals.js:164-165`) | `map`, `close`, `pause`, `mute` |

The two staged-event shortcuts are allowed everywhere, and the debug-only `viewToggle` has no categories and is always allowed.

## 4. The on-foot translation (reasoning, not facts)

Everything in this section is my reasoning about Juan's project. It is not a description of folio-2025. Where I name Rapier's character-controller functions, I am writing from memory of Rapier's public JavaScript API; folio-2025 does not use them and the package was not available locally to check them against.

### 4.1 What actually changes when the car becomes a person

Three properties of the folio's car generate most of its movement code: it has momentum, it is steered relative to its own heading, and it can tip over. The Runner has none of the three.

| Topic | folio-2025 (car) | Runner (on foot) |
|---|---|---|
| Body | Dynamic rigid body, mass 2.5, never sleeps | A point with a small collision circle; no mass |
| Controls | Tank controls: throttle and steering | Camera-relative: the stick or keys give the direction of travel |
| Speed | Emerges from engine force, friction and a soft knee at 5 (40 when boosting) | Set directly: a run speed, a sprint speed and a very short ramp |
| Stopping | Coasts under an idle brake | Stops within about a tenth of a second |
| Facing | Continuous yaw from the physics | Sprite flipped left or right; kept when moving straight up or down |
| Ways to get in trouble | On its roof, wedged, in the sea | Wedged by a collision bug, out of bounds |
| Where the fun comes from | Ploughing through props, jumps, drifting | Exploring, timing (a race), small interaction gags |
| Jump | Suspension extension | A hop |

Which parts of this slice survive:

- Carried over essentially unchanged: the input layer (aspects 2.2 to 2.6 and 2.8), the ordered ticker (2.1), the camera rig with pan and snap-back (2.15, 2.17), the cinematic override (2.18), zones (2.22), respawn points and fast travel (2.23), clicking markers (2.26), the race state machine (2.30), the time machine hook (2.34) and the world reset (2.37).
- Redesigned: the touch control (2.7), the player intent (2.9), stuck handling (2.10), zoom (2.16), camera feedback (2.20), the visible-ground calculation (2.21), the object registry (2.24), crates, cookie stand and altar (2.27, 2.31, 2.33).
- Dropped: the raycast vehicle (2.11), hydraulics (2.12), the knock-about props (2.28), the toilet cabin (2.32) and the tornado (2.35).

### 4.2 Collision and physics: three options

| | A. No physics engine | B. Rapier kinematic character controller | C. Rapier dynamic body |
|---|---|---|---|
| Runner's shape | Circle on the ground plane, radius about 0.3 to 0.35 of a tile | Capsule on a `kinematicPositionBased` body | Capsule on a `dynamic` body with rotations locked |
| Static world | A list (or grid) of boxes and circles | Fixed Rapier colliders (boxes; a heightfield if there is terrain) | Same as B |
| Movement step | Move, then push the circle out of any overlapping solid; repeat two or three times | `controller.computeColliderMovement(collider, desiredTranslation)`, then `controller.computedMovement()`, then `body.setNextKinematicTranslation(...)` | `body.setLinvel(...)` every tick, preserving the vertical component |
| Slopes and steps | None (flat world), or hand-made ramps | Built in: `enableAutostep`, `enableSnapToGround`, `setMaxSlopeClimbAngle`, `setMinSlopeSlideAngle` | Fragile: sliding on slopes and sticking to walls must be fought with friction settings |
| Pushing props | Scripted only | `setApplyImpulsesToDynamicBodies(true)` and `setCharacterMass(...)` | Natural |
| Being pushed (explosion, wind) | Add a decaying knockback velocity by hand | Same as A, because kinematic bodies ignore impulses | Natural, with `applyImpulse` exactly as the folio does to its chassis |
| Jump | A cosmetic arc on the sprite, or simple vertical integration over flat ground | Own vertical velocity plus `controller.computedGrounded()` | Impulse plus a ground ray |
| Download | Nothing | The Rapier WebAssembly module, on the order of one to two megabytes before compression (from memory; must be measured) | Same as B |
| Testing | Pure functions; unit tests without a browser | Needs the WebAssembly module in tests | Same as B |
| Feel | Exact and crisp, like a tile game | Crisp, and robust on uneven ground | Floaty and slippery; fights the 16-bit feel |
| Folio code that carries over | Zones, checkpoints, prompt radius, visible ground (all already engine-free) | Also the object registry, collision categories, contact events and sleeping rules | Also the explosion and tornado impulse code, unchanged |

My recommendation is A first, B only if a concrete need appears, and never C.

- The verified facts behind this: in folio-2025 the engine does two jobs, the car and the knock-about props (summary bullet 1). The first job disappears with the car. The second job is the one group of toys that is not fun on foot (section 4.8). What leads visitors to content never used the engine.
- A flat 16-bit world has no slopes, steps or terrain heightfield, which are the things a character controller is good at.
- Option A keeps the DOM site's bundle untouched and keeps the movement rules in pure TypeScript functions that can be tested.
- Option B becomes justified by either of two decisions: the world gets real height (stairs, hills), or a rigid-body toy becomes a goal. In that case load Rapier with a dynamic import inside the opt-in world chunk, as the folio does (`Game.js:128-129`).
- Option C is the closest structural copy of the folio (everything that applies impulses to the chassis would keep working), and that is its trap: it imports the car's failure modes (sliding, jitter, getting wedged) into a character that should feel exact.

A sketch of option A, to show its size. One world unit is one 16-pixel tile, so the 16 x 20 pixel Runner is 1 unit wide and 1.25 units tall, with a collision circle at the feet.

```
intent    = camera-relative move vector, length 0..1
target    = intent * (sprinting ? sprintSpeed : runSpeed)
velocity  = moveToward(velocity, target, acceleration * dt)
knockback = knockback * decay              (set by an explosion or a wind zone, then fades out)
next      = position + (velocity + knockback) * dt
repeat 3 times:
    for each solid near next:
        push next out of the solid         (circle against box: closest point; circle against circle)
position  = next
```

With the folio's clamp of the frame time to 1/30 s (`Ticker.js:14`, `Ticker.js:32`), a sprint of 8 units per second moves at most 0.27 units per step, which is less than the circle's radius, so the Runner cannot tunnel through a wall one tile thick.

To keep the door to option B open, hide the body behind a small interface (`position`, `step(intent, dt)`, `teleport(point)`) and keep solids, spawns, zones, prompts and checkpoints in one typed level-data file. Zones, prompts and checkpoints only ever need `position`.

### 4.3 Controls on foot

Movement is camera-relative. The input is a 2D vector in screen terms (right, up); the world direction is that vector rotated by the camera's yaw. The folio performs exactly this rotation for its camera pan (`View.js:603`, `View.js:628`). Keyboard input should be normalised so diagonals are not faster; stick input should use the radial dead zone (aspect 2.5).

A proposed default map, keeping the folio's bindings where they still make sense:

| Action | Keyboard | Gamepad | Touch |
|---|---|---|---|
| Move | WASD or arrows, eight directions | Left stick (analog) or D-pad | Hold one finger: run toward the touched ground point |
| Sprint (the folio's boost) | Shift | circle [B] or R2 [RT] | Finger beyond an outer ring |
| Jump | Space | triangle [Y] | Tap on the Runner |
| Interact | Enter, E, F | cross [A] | DOM "Interact" button, or tap the marker |
| Respawn | R | select | DOM "Unstuck" button when stuck, plus a menu entry |
| Map | M | a free button (the folio binds none) | DOM map button |
| Menu and back | Escape | start; cross [A] to close | DOM menu button |
| Pan camera | Mouse drag | Right stick | Two fingers |
| Zoom step | Wheel | R3 | Pinch |
| Emote (the folio's honk) | H | L3 | optional button |

Points that differ from the folio:

- Juan's page scrolls and the folio's does not (`sources/style/general.styl:36` sets `overflow hidden`, and the folio's keyboard adapter never calls `preventDefault`, `Inputs/Keyboard.js:21-47`). While the world is the active layer, the bound keys (arrows, Space) must not scroll the page: either lock the page scroll or call `preventDefault` for bound keys only. Keep the folio's two keyboard safeguards: ignore keys while a text field has focus, and release everything on window blur (`Inputs/Keyboard.js:12-25`).
- Touch. My first choice is "hold to run toward the point": it needs no on-screen stick, it is the direct descendant of the folio's control without the steering maths, and it coexists with two-finger pan and pinch if the folio's two guards are kept (exactly one finger, and a few frames of grace before the camera snaps back: `Inputs/Nipple.js:135-136`, `Player.js:574-582`). Its weakness is that the finger covers the Runner on a small phone. The alternative is a floating thumb-stick in a lower corner. This is worth a quick prototype of both.
- The existing Play Mode is keyboard-only. The same input layer could serve it, which would give Play Mode gamepad and touch support as a by-product.

### 4.4 The player on foot

- Keep the three layers of aspect 2.9: intent (a move vector, sprint, jump), body (integration and collision) and visual (the sprite). Publish one position per frame after the body has moved, and let everything else read only that.
- Keep the control state as small as the folio's: default and locked. Use contexts, not player states, for "a panel is open" or "a race is running".
- Sprite animation is derived, not stored: idle when the speed is near zero, run or sprint otherwise, jump while airborne, faint while locked by a death. Facing flips with the sign of the screen-space horizontal velocity and is kept when that velocity is near zero.
- The existing Runner sprite is a side view. With a camera whose yaw never changes (aspect 2.15) one side-view sprite, mirrored, is enough for a first version; the Runner will look like a paper cut-out when moving toward or away from the camera, which is an accepted convention in 2.5D games. Front and back frames would be an art upgrade later, not an engineering change.
- Keep a stuck detector with the folio's shape (input held, but less than a threshold distance covered over a sliding window: `Physics/PhysicsVehicle.js:262-314`), scaled to walking: for example two wall-clock seconds and a quarter of a tile. When it fires, show the Unstuck button on touch and a hint for R elsewhere.
- Add what the folio lacks: an idle animation after a few seconds without input.

### 4.5 Camera: what to keep, change and drop

| Folio rule | For the Runner |
|---|---|
| Yaw never changes | Keep. It is what makes a single-view sprite possible. |
| Focus point plus fixed offset, focus at ground level | Keep. |
| Exponential follow (`delta * 10`) | Keep, then snap the result to the world's pixel grid so the art does not shimmer. |
| No look-ahead | Keep. The folio shows that a trailing camera is acceptable even for a fast car. |
| Farther camera on narrow screens | Keep; on a portrait phone show more world rather than a larger Runner. |
| Perspective with a 25 degree field of view | Decide together with slice A1. An orthographic camera is the natural 16-bit choice and makes "what ground is visible" and marker picking exact rectangles. |
| Pitch of about 34 to 41 degrees below the horizon | Keep in that range. A constant pitch means a constant foreshortening of an upright sprite, which can be compensated once. |
| Continuous zoom | Change to two or three whole-number pixel scales. |
| Zoom out with speed | Drop, or keep one small step while sprinting. |
| Drag to pan, any movement input snaps back | Keep, and clamp the pan to the world bounds. |
| Magnet toward the player during the intro | Optional. |
| Cinematic blend to an authored shot | Keep. This is how a content panel is framed. |
| Roll kick | Change to a translation shake in whole pixels, driven by the same damped spring. |
| Speed lines | Optional sprint streaks. |
| Optimal area (quad, centre, radius) | Change to a visible tile rectangle, still computed once per resize and read by everything else. |
| Separate free debug camera | Keep as a development tool. |

One decision should be made early because it fixes how tiles are drawn: the yaw itself. A yaw of 0 (screen right is world +X) gives the classic top-down three-quarter look, keeps tiles axis-aligned on screen and lets left and right movement match the side-view sprite. The folio's 45 degrees gives an isometric diamond in which all four keyboard directions are diagonal on screen, which suits a side-view sprite less well.

### 4.6 Zones, prompts, respawns and fast travel

- Zones transfer as they are (aspect 2.22). Add rectangle zones for a tile world.
- Prompts: the folio's activation radius is 2.5 units around a car that is 2.6 units long, re-tested only after 0.2 units of movement (`InteractivePoints.js:585`, `InteractivePoints.js:595`). For a Runner one unit wide, start at about 1.5 units and tune.
- One spawn list should feed every teleport: the initial spawn, respawn (closest), fast travel (by name), defeat, and the end of a race. The folio does this with one function behind one fade (`Player.js:469-488`).
- Fast travel matters more on foot than in a car. The DOM map with pins transfers directly (aspect 2.23), and offering the same destinations as a plain list of links gives keyboard and screen-reader users the same navigation.
- World size is a related decision. The folio's island is 192 units across for a car that covers tens of units per second. A walking avatar wants a much more compact world, with fast travel for the long hops.

### 4.7 Props and the registry on foot

- Without rigid bodies the registry shrinks to "things that can be reset": each records its initial state and exposes `reset()`, and one world-reset event calls them all (aspects 2.24 and 2.37).
- If Rapier arrives later, copy the four rules that make many props affordable in the folio: start asleep, sync only awake bodies, sleep by distance from the view, reset below the floor.
- Instancing (aspect 2.25) is worth having only if the world repeats many identical sprites; a small scene can draw them individually.

### 4.8 Which toys are still fun without a car's momentum

| Toy | Where the fun comes from in the folio | On foot | Verdict | Needs a physics engine? | Needs a server? |
|---|---|---|---|---|---|
| Explosive crates | Surprise, being launched, chain reactions | Fuse, bang, knockback arc, chain reaction; all scriptable | ADAPT; still fun | No | No |
| Bricks, benches, fences, lanterns | Ploughing through light objects with a heavy car | A runner nudging a brick is not fun | SKIP, or replace with breakable decorations | Yes, for real stacks | No |
| Bowling | Ramming the ball or the pins | Kick the ball; pins as circles on the ground plane | ADAPT; optional | No, eleven circles are enough | No |
| Circuit | Speed, the racing line, the clock | A running time trial with gates and hurdles | DIRECT; the most on-theme | No | Only for a shared leaderboard |
| Cookie stand | A repeatable gag and a number that goes up | The same gag | ADAPT; cheap and fun | No | Only for a shared count |
| Toilet cabin | Ramming it over | Nothing to do | SKIP | Yes | No |
| Altar | A forbidden button, a shared counter, a world event | A marked spot that defeats you and respawns you | ADAPT; modest | No | Only for the shared counter |
| Time machine | A content hook | The same | DIRECT | No | No |
| Tornado | Being thrown about | At most a wind zone that pushes | SKIP | A body that can be pushed | Yes |
| Jump and hydraulics | Playing with the car body | A hop; hurdles in the race | ADAPT | No | No |
| Honk | Expressive noise | An emote | ADAPT | No | No |
| Confetti | Reward feedback | A pixel burst | DIRECT | No | No |

The pattern: the toys that survive are built on zones and interactions, and the toys that die are built on momentum transfer. That pattern is the reason for the recommendation in section 4.2.

### 4.9 The time trial as the Runner's signature activity

Mapping aspect 2.30 onto a runner, piece by piece:

- A start prompt, a fade, the Runner placed on the start line, a three-beat countdown with the player locked, and a timer that reads wall-clock time.
- Gates as line segments tested against a small circle around the Runner every frame (the folio's function is 40 lines, `utilities/maths.js:40-81`), reached in order, with the next gate highlighted and a rising note per gate.
- Out of bounds or stuck during the race puts the Runner back at the last gate while the clock keeps running, so time is the only penalty.
- A `racing` context in which the respawn key restarts the race and the map and camera pan are off.
- Solids that exist only during the race (barriers), and hurdles to jump, which ties the activity to the existing side-scrolling Play Mode.
- Fixed light and weather during the race, if the world has either, so that runs are comparable.
- At the finish: a fanfare, the camera parked on a podium until the visitor moves, and a personal best kept in `localStorage`.
- A shared leaderboard needs a server, which a static GitHub Pages site does not have. The folio sends the per-gate timings along with the final time (`World/Areas/CircuitArea.js:1290-1296`); inferred: so the server can sanity-check a result. That is a later decision and does not block the activity.

### 4.10 Fitting this into React 19, Vite 7 and TypeScript on GitHub Pages

- Opt-in and lazy. The world should be a separate chunk loaded only when the visitor chooses it, so the DOM site pays nothing. The folio's own loading is two-phase for the same reason: a tiny first batch for the intro, then everything else and the physics engine in parallel (`Game.js:103-109`, `Game.js:128-181`).
- Run the game loop outside React. A plain TypeScript module with an ordered ticker owns the simulation; React renders the interface around the canvas and reads a few small external stores (input mode, active context, active prompt, visible touch buttons, race state).
- The folio's own interface is DOM too: its menus, modals, map, touch buttons and controls help are HTML and CSS laid over the canvas. Juan's existing DOM skills and components transfer, and his existing content sections can be what a cinematic shot reveals.
- Mirror the input mode, the gamepad brand and the active context to `<html>` as data attributes and style with Tailwind variants, as the folio does with classes (`Inputs/Inputs.js:23-40`, `Inputs/Inputs.js:315-323`).
- Accessibility and comfort: honour `prefers-reduced-motion` for shake, zoom and bursts; keep the DOM site as the complete, accessible baseline; make every destination reachable without steering (fast-travel list, clickable markers).
- Sub-path hosting: the folio builds with a relative base (`vite.config.js:11`) and refers to assets by relative path, which is the pattern that survives a sub-path deployment.
- Only if Rapier is added: load it dynamically, check how the `.wasm` file is served from GitHub Pages, and measure its size and start-up time before committing (section 5).
- Testing: option A's collision, zone, gate and stuck logic are pure functions and can be test-driven.

### 4.11 A possible order of work

1. The input layer (actions, a context stack, device modes), which the existing Play Mode can use immediately.
2. Flat ground, the Runner as a billboard, and the camera rig (follow, pixel snap, pan and snap-back).
3. Solids with circle collision, spawn points, respawn behind a fade, and the stuck detector.
4. Zones, prompts and the cinematic override, opening one existing DOM section as the first content area.
5. The map and fast travel.
6. The time trial.
7. One gag toy (crates or the cookie stand).

Each step is usable on its own, and the physics-engine question does not need answering before step 7.

### 4.12 Things in folio-2025 not to copy as they are

- The 2x time scale is baked into every duration and speed constant (aspect 2.1). Copy mechanisms, not numbers.
- Forces are pre-multiplied by the frame time to compensate for a capped controller step (aspect 2.11). The constants mean nothing outside that loop.
- Contexts are a flat set replaced with clear-and-add, which restores the wrong context when overlays nest (aspect 2.3).
- A held action is not released when its context is switched off (aspect 2.3).
- The controls help is hand-written and has drifted from the bindings (aspect 2.4).
- Two per-frame loops touch every physics body, awake or not (aspect 2.13).
- The pinch distance ignores vertical finger separation (aspect 2.6).
- The gamepad zoom step is per frame, not per second (aspect 2.16).
- Nothing pauses when the tab is hidden or a menu is open (aspect 2.1).
- The world reset is a central list of calls into each feature (aspect 2.37).
- Camera panning has no bounds (aspect 2.17).

## 5. Could not verify / open questions

Could not verify from the material available:

1. Counts and placements that live in the models: how many bricks, benches, fences, lanterns, crates, pins, checkpoints, zones and respawn points exist, and how large the zones are. The models were not downloaded. The only hints in code are a scoreboard texture with room for 10 pins, an achievement that expects 20 crates, a map list of 12 destinations and a 22-cookie pool.
2. Runtime behaviour. The code was not run, so the following are readings of the code, not observations: the car's actual top speed (it emerges from several terms), how the touch ring feels, whether the horizontal-only pinch is noticeable, whether a fireball causes a visible hitch, and the edge cases I marked "Inferred" (a held key surviving a context change; the gamepad Start button restoring the wrong context from a viewer; the television reacting only to bodies with contact events).
3. Rapier's API surface. `@dimforge/rapier3d` was not installed locally. That `world.createVehicleController` returns a `DynamicRayCastVehicleController`, the meaning of the packed collision groups, and every character-controller function named in section 4.2 come from my knowledge of Rapier, not from files in this checkout.
4. The cost of Rapier for Juan's site: the size of the WebAssembly module after compression, its start-up time on a phone, and whether GitHub Pages serves `.wasm` with the media type that streaming compilation requires. All three need measuring before option B is chosen.
5. The server. The WebSocket server is not in this repository (the saved tree listing contains no server code). How it validates race results, when it declares a "cataclysm", and how the daily leaderboard reset works are unknown.
6. The comment "Doesn't work" above the contact-force handling (`Physics/Physics.js:281`). I read it as stale because crates depend on that code, but I could not confirm it.
7. Whether the quality level changes anything else in this slice at run time. In the files I read it affects the camera pitch (read once at construction), the speed zoom, the visible-ground margin and the vehicle controller's timestep.

Open decisions for Juan that these notes cannot settle:

8. Camera yaw: 0 degrees (top-down three-quarter view, axis-aligned tiles) or the folio's 45 degrees (isometric diamond). This also decides how well the existing side-view Runner sprite reads.
9. Whether the Runner gets front and back frames, or stays a mirrored side view.
10. Orthographic or narrow perspective camera. This belongs with the rendering notes of slice A1.
11. Whether any rigid-body toy is in scope. If none is, no physics engine is needed.
12. Whether the world is flat. Height (stairs, hills) is the other reason to adopt a character controller.
13. How large the world is and how many content areas it has, which sets the run speed and how much fast travel has to carry.
14. The touch scheme: run toward the touched point, or a floating thumb-stick.
15. Whether a shared leaderboard or shared counters are wanted at all, since they require a server that a static site does not have.
