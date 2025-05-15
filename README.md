# rollup-plugin-svgpack

[中文](https://github.com/jeremy-zhao/rollup-plugin-svgpack/blob/master/README.zh-cn.md)

## Introduction

A Rollup plugin for minifying and compressing all SVG files in a specified folder and combining them into an [SVG symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol).

This plugin is commonly used for bundling icon files to reduce the number of HTTP requests and improve front-end performance.

## Installation

```sh
npm i rollup-plugin-svgpack -D
```

## Usage

Configure in `vite.config.js`:

```js
import svgpack from 'rollup-plugin-svgpack'

export default defineConfig({
  plugins: [svgpack()],
})
```

## Configuration

| Parameter | Type            | Description                 | Default Value                                                 |
| --------- | --------------- | --------------------------- | ------------------------------------------------------------- |
| options   | SvgPackOption[] | SVG bundling config (array) | `[{ from: 'src/lib/symbol', to: 'static/icons/symbol.svg' }]` |

### SvgPackOption Interface

| Parameter | Type               | Description                                                                  |
| --------- | ------------------ | ---------------------------------------------------------------------------- |
| from      | string \| string[] | Source folder(s). Supports bundling multiple folders into a single .svg file |
| to        | string             | Target filename                                                              |

## [SVG symbol] Usage

### Using SVG Tag

Source SVG file: `src/lib/symbol/github.svg`
Target file: `static/icons/symbol.svg`

```html
<!-- HTML -->
<svg width="24" height="24">
  <use href="/icons/symbol.svg#github"></use>
</svg>
```

### Using Sun Parakeet Component Library (Svelte 5 Mobile UI Components)

```ts
// +page.svelte
<script lang="ts">
import { Icon } from 'sun-parakeet'
</script>

<Icon name="github" size={24} />
```

## SVG File Adjustment Strategy

The `rollup-plugin-svgpack` plugin adjusts your SVG files with the following strategy:

- Removes the `fill` attribute if its value is not `none` or `currentColor`.
- Removes the `stroke` attribute if its value is not `none` or `currentColor`.

This strategy removes predefined colors in SVGs. You can define colors for icons using CSS:

```css
.some-icon {
  /* Directly specify fill color */
  fill: yellow;
  /* Directly specify stroke color */
  stroke: blue;
  /* Use currentColor to inherit color */
  color: red;
}
```

## License

This project is licensed under the [MIT License](https://github.com/jeremy-zhao/rollup-plugin-svgpack/blob/master/LICENSE).
