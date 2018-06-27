# tua-mp-webpack-simple

> 简单使用 webpack 打包，每个页面、组件仍然由4个文件组成

## 用法

这是一个基于 [vue-cli](https://github.com/vuejs/vue-cli) 的项目

### 1.vue-cli v2

``` bash
$ npm i -g vue-cli

$ vue init tua-mp-templates/simple my-project

$ cd my-project
$ npm i
$ npm start
```
### 2.@vue/cli v3

``` bash
$ npm i -g @vue/cli @vue/cli-init

$ vue init tua-mp-templates/simple my-project

$ cd my-project
$ npm i
$ npm start
```

## 包括了什么

- `npm start`: 执行 `tua-mp-service serve` 命令（内部调用了 webpack -w），对于 `src/` 中的入口开启源文件监听，并生成小程序能运行的代码到 `dist/`

- `npm run build`: 执行 `tua-mp-service build` 命令内部调用 webpack 进行生产环境打包，将源代码进行压缩。

## Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
