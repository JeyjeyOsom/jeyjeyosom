# Play and Browse share one World

The portfolio has two experiences: Browse Mode (default scrollable page, recruiter-first) and Play Mode (keyboard-driven Runner, opt-in via Press Start). We decided they share a single DOM World: the Runner's position *is* the scroll position, and Press Start only swaps the input source from wheel/touch to keyboard. No game engine and no canvas-rendered content layer.

## Considered Options

- **Canvas game engine (Phaser/Kaplay) layered over or replacing the DOM**: rejected because it forks the content into two implementations (or creates a permanent DOM↔canvas sync problem), breaks semantic HTML for screen readers and resume-parsing bots, and conflicts with the browse-primary decision.
- **Separate contained mini-game** instead of full traversal: deferred, not rejected — it can be added later as an easter egg without touching this architecture.

## Consequences

- Content exists once, in semantic HTML; game-feel comes from framer-motion (sprite cycles, parallax) driven by scroll state.
- Play Mode physics are deliberately simple (DOM-based collision for collectibles); anything needing real engine physics belongs in a future canvas easter egg, not in the World.
- Play Mode is desktop/keyboard-only at launch; mobile gets Browse Mode (tap-to-jump auto-run is a possible fast follow).
