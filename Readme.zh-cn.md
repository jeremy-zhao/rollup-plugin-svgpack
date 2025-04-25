# 介绍

一个 Rolup 插件，用于将指定文件夹内的所有 SVG 精简压缩，并组合为一个 [SVG symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)。

此插件通常用于打包图标文件，以减少 HTTP 请求的文件数量，提高前端性能。

# 安装

```sh
npm i rollup-plugin-svgpack -D
```

# 使用

在 vite.config.js 中配置：

```js
import svgpack from 'rollup-plugin-svgpack'

export default defineConfig({
  plugins: [svgpack()],
})
```

# 配置项

| 参数    | 类型            | 说明                 | 默认值                                                        |
| ------- | --------------- | -------------------- | ------------------------------------------------------------- |
| options | SvgPackOption[] | Svg 打包配置（数组） | `[{ from: 'src/lib/symbol', to: 'static/icons/symbol.svg' }]` |

## SvgPackOption 接口

| 参数 | 类型               | 说明                                           |
| ---- | ------------------ | ---------------------------------------------- |
| from | string \| string[] | 源文件夹。支持多个文件夹打包至同一个 .svg 文件 |
| to   | string             | 目标文件名                                     |

# [SVG symbol] 的使用方法

## 使用 SVG 标签引入

源 svg 文件： src/lib/symbol/github.svg
目标文件：static/icons/symbol.svg

```html
<!-- HTML -->
<svg width="24" height="24">
  <use href="/icons/symbol.svg#github"></use>
</svg>
```

## 使用 Sun Pacakeet 组件库（Svelte 5 移动端 UI 组件库）

```ts
// +page.svelte
<script lang="ts">
import { Icon } from 'sun-parakeet'
</script>

<Icon name="github" size={24} />
```

# SVG 文件调整策略

rollup-plugin-svgpack 插件会按照以下策略调整您的 svg 文件

- 当 fill 属性不为 none/currentColor 时，移除此属性
- 当 stroke 属性不为 none/currentColor 时，移除此属性

此策略会移除 svg 中原有的颜色值。您可以使用 css 为图标定义颜色

```css
.some-icon {
  /** 直接指定 fill 颜色 */
  fill: yellow;
  /* 直接指定 stroke 颜色 */
  stroke: blue;
  /* 使用 currentColor 传递颜色 */
  color: red;
}
```

# 许可证

本项目基于 [MIT 许可证]
