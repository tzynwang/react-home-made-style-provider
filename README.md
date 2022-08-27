# Introduction

Build a style provider to load different style setting dynamically.\
The only package dependency: `@emotion/react` (11.10.0)

# Demo site

https://tzynwang.github.io/react-home-made-style-provider/

# Structure

- styles: in this demo we have 2 style settings `coffee` and `garden`
  - `src/styles/coffee/index.ts`
  - `src/styles/garden/index.ts`
- models:
  - `src/models/style/index.tsx`: where the style context is created
- components:
  - `src/components/Common/StyleToggle/index.tsx`: to toggle style option between `coffee` and `garden`
  - `src/components/Layer/StyleProvider/index.tsx`: to apply style object base on the style name toggles by `StyleToggle`

