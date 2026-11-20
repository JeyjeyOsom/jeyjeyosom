// The Overworld's shared materials: the toon ramp, dithered ground decals
// and the unlit glow. Every colour stays on the palette: decals are one
// colour through an ordered dither, glow parts are their own colours.

import * as THREE from "three"

export function gradientTexture(tones: 2 | 3): THREE.DataTexture {
  const values = tones === 2 ? [0, 255] : [0, 128, 255]
  const data = new Uint8Array(values.length * 4)
  values.forEach((v, i) => data.set([v, v, v, 255], i * 4))
  const tex = new THREE.DataTexture(data, values.length, 1, THREE.RGBAFormat)
  tex.minFilter = THREE.NearestFilter
  tex.magFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  tex.needsUpdate = true
  return tex
}

// Decals: dithered shapes lying on the ground, in one colour, so they stay
// on the palette. A blob shadow is a disc at half density; a pool of lamp
// light thins toward its rim through a 4x4 ordered dither. A cone opens
// along the decal's +x, from its lamp at u = 0; a rect fills its square;
// a ring is a disc's outer rim (ripples).
const DECAL_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 p = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
    #endif
    gl_Position = projectionMatrix * modelViewMatrix * p;
  }
`
const DECAL_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uDensity;
  uniform float uShape;
  uniform float uFalloff;
  varying vec2 vUv;
  const float BAYER[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
  void main() {
    vec2 d = vUv - 0.5;
    float r;
    if (uShape > 2.5) {
      r = length(d) * 2.0;
      if (r < 0.7) discard;
    } else if (uShape > 1.5) {
      r = max(abs(d.x), abs(d.y)) * 2.0;
    } else if (uShape > 0.5) {
      float hw = 0.12 + 0.38 * vUv.x;
      if (abs(d.y) > hw) discard;
      r = max(abs(d.y) / hw * 0.55, vUv.x);
    } else {
      r = length(d) * 2.0;
    }
    if (r > 1.0) discard;
    ivec2 q = ivec2(mod(floor(gl_FragCoord.xy), 4.0));
    float threshold = (BAYER[q.x + q.y * 4] + 0.5) / 16.0;
    if (threshold > uDensity * mix(1.0, 1.0 - r * r, uFalloff)) discard;
    gl_FragColor = vec4(uColor, 1.0);
  }
`

const DECAL_SHAPES = { disc: 0, cone: 1, rect: 2, ring: 3 } as const

export function decalMaterial(color: number, density: number, opts: { shape?: keyof typeof DECAL_SHAPES; falloff?: boolean } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uDensity: { value: density },
      uShape: { value: DECAL_SHAPES[opts.shape ?? "disc"] },
      uFalloff: { value: opts.falloff ? 1 : 0 },
    },
    vertexShader: DECAL_VERTEX,
    fragmentShader: DECAL_FRAGMENT,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  })
}

// Glow: boxes drawn in their own colours, untouched by the sky's light
// (lamps, the save crystal), with a fixed step of shade per face so their
// shape still reads. uBoost pulses them.
const GLOW_VERTEX = /* glsl */ `
  varying vec3 vColor;
  varying float vShade;
  void main() {
    vColor = color;
    vec3 n = normalize(mat3(modelMatrix) * normal);
    vShade = n.y > 0.5 ? 1.0 : (n.z > 0.5 ? 0.9 : 0.78);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const GLOW_FRAGMENT = /* glsl */ `
  uniform float uBoost;
  varying vec3 vColor;
  varying float vShade;
  void main() {
    gl_FragColor = vec4(min(vColor * vShade * uBoost, vec3(1.0)), 1.0);
  }
`

export function glowMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uBoost: { value: 1 } },
    vertexShader: GLOW_VERTEX,
    fragmentShader: GLOW_FRAGMENT,
    vertexColors: true,
  })
}
