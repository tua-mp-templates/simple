# {{ name }}

> {{ description }}

对于样式的编写加入了预处理器的功能：

* wxss: 会被拷贝到 dist/ 下的对应路径
* css: 需要在 js 中引入，生成对应的 wxss
* less: 需要在 js 中引入，生成对应的 wxss
* scss/sass: 需要在 js 中引入，生成对应的 wxss
* stylus: 需要在 js 中引入，生成对应的 wxss

## 构建步骤

``` bash
# 安装依赖
npm i

# 开启 webpack 监听
npm start

# 压缩打包
npm run build
```

## 文件结构

```
.
├── README.md
├── dist
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── assets
│   │   └── vue-logo.png
│   ├── chunks
│   │   ├── runtime.js
│   │   ├── scripts.js
│   │   └── vendors.js
│   ├── comps
│   │   └── filter
│   │       ├── filter.js
│   │       ├── filter.json
│   │       ├── filter.wxml
│   │       └── filter.wxss
│   ├── pages
│   │   ├── index
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   ├── logs
│   │   │   ├── logs.js
│   │   │   ├── logs.json
│   │   │   ├── logs.wxml
│   │   │   └── logs.wxss
│   │   └── todos
│   │       ├── comps
│   │       │   └── todo
│   │       │       ├── todo.js
│   │       │       ├── todo.json
│   │       │       ├── todo.wxml
│   │       │       └── todo.wxss
│   │       ├── todos.js
│   │       ├── todos.json
│   │       ├── todos.wxml
│   │       └── todos.wxss
│   ├── project.config.json
│   └── templates
│       └── info.wxml
├── package.json
├── project.config.json
├── src
│   ├── app
│   │   ├── app.js
│   │   ├── app.json
│   │   └── app.scss
│   ├── assets
│   │   └── vue-logo.png
│   ├── comps
│   │   └── filter
│   │       ├── filter.js
│   │       ├── filter.json
│   │       ├── filter.less
│   │       └── filter.wxml
│   ├── pages
│   │   ├── index
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.less
│   │   │   └── index.wxml
│   │   ├── logs
│   │   │   ├── logs.js
│   │   │   ├── logs.json
│   │   │   ├── logs.scss
│   │   │   └── logs.wxml
│   │   └── todos
│   │       ├── comps
│   │       │   └── todo
│   │       │       ├── todo.js
│   │       │       ├── todo.json
│   │       │       ├── todo.less
│   │       │       └── todo.wxml
│   │       ├── todos.js
│   │       ├── todos.json
│   │       ├── todos.less
│   │       └── todos.wxml
│   ├── scripts
│   │   ├── const
│   │   │   ├── README.md
│   │   │   └── index.js
│   │   └── utils
│   │       ├── README.md
│   │       ├── event.js
│   │       ├── format.js
│   │       ├── index.js
│   │       └── log.js
│   ├── styles
│   │   ├── global.styl
│   │   ├── todomvc-app-css.css
│   │   └── todomvc-common-base.css
│   └── templates
│       └── info.wxml
├── webpack.config.babel.js
├── webpackUtils.js
└── yarn.lock
```

### `src/` 源码
* app/: 应用入口
* assets/: 资源文件，比如图片
* comps/: 组件
* pages/: 页面
    * pages/todos/comps/: 属于 todos 的页面级组件
* scripts: 公用代码
* scripts/const: 常量（已配置别名 @const）
* scripts/utils: 辅助函数（已配置别名 @utils）
* styles/: 公用样式
* templates/: 模板

### `dist/` 打包后代码
* chunks/: 公共依赖
    * runtime: [是 webapck 在运行时连接各个模块的代码](https://doc.webpack-china.org/concepts/manifest/#runtime)
    * vendors: 是提取的 `node_modules` 下的依赖
    * scripts: 是提取的 `src/scripts/` 下的依赖
* comps/: 组件
* pages/: 页面
    * pages/todos/comps/: 属于 todos 的页面级组件
