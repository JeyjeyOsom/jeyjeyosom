# The Overworld is a separate canvas layer whose Landmarks are doors into the World

Juan wanted a free-roam 3D world in the spirit of bruno-simon.com, which ADR 0001 had ruled out for the World itself. We decided to add it as a third Mode (Roam Mode) on its own canvas layer, lazily loaded and entered deliberately, and to give it no content: each Zone has a Landmark in the Overworld, and opening a Landmark leaves the canvas for Browse Mode at that Zone. ADR 0001 stays in force for the World.

## Considered Options

- **Replace the site with the canvas, as bruno-simon.com does**: rejected for ADR 0001's reasons, now with evidence. A capture of that site in November 2026 exposed one canvas and two buttons to assistive technology, and its projects exist only inside the canvas.
- **Replace Play Mode with the 3D world**: deferred, not rejected. Whether Press Start should lead into the Overworld is a decision for when Roam Mode exists and is good.
- **Open a Zone as a dialog over the Overworld**: rejected because every Zone is a full-height page section with its own anchor. A dialog would need a second mount of each one (duplicate ids, a second Save Point form) or surgery to move them.
- **Draw content inside the 3D scene**: rejected. It is the choice that makes content unreadable outside the canvas.

## Consequences

- Content still exists once, as semantic HTML. Roam Mode never renders Zone content, and Zone components are never mounted a second time.
- Roam Mode ships as a lazily loaded chunk behind its entrances, so a visitor who stays in Browse Mode downloads none of it.
- Roam Mode has its own address (a hash) and takes part in browser history: Back leaves a door for the Overworld, and leaves the Overworld for the page.
- The World and the Overworld stay in step. Returning through a door puts the Runner at the Landmark of the Zone on screen, not the one he entered by.
