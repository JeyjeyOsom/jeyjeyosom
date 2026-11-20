# The Overworld renders with three.js on WebGL2, with no physics engine and no model files

The Overworld is inspired by bruno-simon.com, which uses three.js's WebGPU renderer, the Rapier physics engine and a Blender-to-GLB asset pipeline. We decided to take none of the three: the Overworld is a real 3D scene drawn by three.js on WebGL2 at a low internal resolution (around 320x180) and scaled up with hard pixels, the Runner is a flat sprite moved by plain arithmetic (a circle sliding along boxes on flat ground), and every shape is built in TypeScript, including existing pixel sprites extruded pixel by pixel into blocks.

## Considered Options

- **WebGPU renderer**: rejected. A capture of bruno-simon.com in November 2026 showed it shipping 3.8 MB of JavaScript before compression and still needing a WebGL2 fallback path; WebGL2 alone covers every browser Roam Mode targets.
- **Rapier physics**: deferred, not rejected. On that site it does two jobs, the car and the knock-about props, and costs a 1.5 MB WebAssembly download. A runner on foot needs neither. The movement code is to be written so an engine can be added if props become a goal.
- **Modelled assets (Blender or MagicaVoxel, loaded as files)**: rejected for now. It has the higher ceiling, but it adds a tool and an export pipeline, and every other asset on the site is drawn in code. CC0 packs recoloured to the palette are allowed as filler.
- **Mode 7 (a tilted ground image with scaled sprites, no 3D scene)**: kept as the fallback if code-built 3D turns out too plain or too slow to make.

## Consequences

- There are no binary art assets and no asset build step for the Overworld; its download is code.
- The ground is flat, and nothing can be pushed, stacked or knocked over until an engine is added.
- The camera never rotates, because a flat sprite only works from a fixed angle.
