# twitterShare
## [API 文件](https://fast-tundra-64548.herokuapp.com/api-doc/#/)
## [後端 repo](https://github.com/jason06286/twitterDemoBackend)

## 使用技術

這次使用 vite 做開發， UI框架使用 Tailwind

使用 Pinia 做狀態管理，取代原本 provide inject

使用 compensation api 做邏輯拆分

## Coding Style
* ESLint-Airbnb
* Vue 3 Script Setup
* Vue SFC (由上而下排列)
  - script: `<script setup>`
  - template: `<template>`
  - style: `<style scoped>`
## Vite 插件功能
* src/components
   - 此資料夾下的 Component 可以在任何 .vue 檔案中直接使用不需用 import。
   - https://github.com/antfu/vite-plugin-components
* import 自動導入
   - 系統會自動偵測  `.vue.js.ts` 檔，並引入 `vue、vue router、Pinia`
   - https://github.com/antfu/unplugin-auto-import
* Icon 自動導入
   - 只要進入這個網站
   - https://icones.netlify.app/
   - 選擇你要的 icon 然後直接以 components 的方式使用，比如說：`<mdi:menu />`
   - Vite 就會自動導入對應的 svg
   - 調整顏色大小（配合Tailwind）
   - 顏色：`text-white`
   - 大小：`text-xl`
   - https://github.com/antfu/vite-plugin-icons
## 開發

```
# install deps
npm install

# run dev server
npm run dev

# run build
npm run build

```
