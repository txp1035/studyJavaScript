# ant pro 解析

## 问题集合

1. 代码检查命令有两套问题。
2. 了解测试相关。
3. 了解区块相关。
4. 了解国际化相关。

## package.json

脚本分类：

1. 构建相关：
   - "build": "umi build", //构建
   - "analyze": "cross-env ANALYZE=1 umi build", //分析 bundle 构成，build 时有效。
2. 运行相关：
   - "start": "umi dev", //启动项目
   - "start:no-mock": "cross-env MOCK=none umi dev", //不使用 mock
3. 代码检查相关：
   - "lint": "npm run lint:js && npm run lint:style && npm run lint:prettier", //检查 js、css、格式
   - "lint:fix": "eslint --fix --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src && npm run lint:style", //修复 js 和修复样式
   - "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src", //js 代码检查
   - "lint:style": "stylelint --fix \"src/\*_/_.less\" --syntax less", //样式检查和修复
   - "lint:prettier": "check-prettier lint", //格式检查
   - "lint-staged": "lint-staged", //运行
   - "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx ",
   - "prettier": "prettier -c --write \"\*_/_\"", //
4. 测试相关：
   - "test": "umi test", //测试
   - "test:all": "node ./tests/run-tests.js", //运行测试脚本
   - "test:component": "umi test ./src/components" //测试组件
5. 工具相关：
   - "fetch:blocks": "pro fetch-blocks", //下载 pro 所有的官方区块
   - "format-imports": "import-sort --write '\*_/_.{js,jsx,ts,tsx}'", //import 排序
   - "deploy": "cross-env ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION=site npm run site && npm run gh-pages", //部署站点
   - "gh-pages": "cp CNAME ./dist/ && gh-pages -d dist", //
   - "i18n-remove": "pro i18n-remove --locale=zh-CN --write", //移除国际化

```json
{
  "name": "ant-design-pro",
  "version": "1.0.0",
  "private": true,
  "description": "An out-of-box UI solution for enterprise applications",
  "scripts": {
    "analyze": "cross-env ANALYZE=1 umi build", //分析 bundle 构成，build 时有效。
    "build": "umi build", //构建
    "deploy": "cross-env ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION=site npm run site && npm run gh-pages", //部署站点
    "fetch:blocks": "pro fetch-blocks", //下载 pro 所有的官方区块
    "format-imports": "import-sort --write '**/*.{js,jsx,ts,tsx}'", //import排序
    "gh-pages": "cp CNAME ./dist/ && gh-pages -d dist", //
    "i18n-remove": "pro i18n-remove --locale=zh-CN --write", //移除国际化
    "lint": "npm run lint:js && npm run lint:style && npm run lint:prettier", //检查js、css、格式
    "lint-staged": "lint-staged", //运行
    "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx ",
    "lint:fix": "eslint --fix --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src && npm run lint:style", //修复js和修复样式
    "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src", //js代码检查
    "lint:prettier": "check-prettier lint", //格式检查
    "lint:style": "stylelint --fix \"src/**/*.less\" --syntax less", //样式检查和修复
    "prettier": "prettier -c --write \"**/*\"", //
    "start": "umi dev", //启动项目
    "start:no-mock": "cross-env MOCK=none umi dev", //不使用mock
    "test": "umi test", //测试
    "test:all": "node ./tests/run-tests.js", //运行测试脚本
    "test:component": "umi test ./src/components" //测试组件
  },
  "husky": { "hooks": { "pre-commit": "npm run lint-staged" } },
  "lint-staged": {
    "**/*.less": "stylelint --syntax less",
    "**/*.{js,jsx,tsx,ts,less,md,json}": ["prettier --write", "git add"],
    "**/*.{js,jsx}": "npm run lint-staged:js",
    "**/*.{js,ts,tsx}": "npm run lint-staged:js"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 10"],
  "dependencies": {
    "@ant-design/pro-layout": "^4.5.9", //布局组件
    "@antv/data-set": "^0.10.2", //数据组件，项目未使用
    "antd": "^3.20.0", //antd ui组件，防止eslint报错
    "classnames": "^2.2.6", //model组合class包
    "dva": "^2.4.1", //dva包，防止eslint报错
    "lodash": "^4.17.11", //js常用库，深拷贝等
    "moment": "^2.24.0", //js时间处理库
    //用于创建丢弃某些字段的对象的浅表副本。
    //var omit = require('omit.js');
    //omit({ name: 'Benjy', age: 18 }, [ 'name' ]); // => { age: 18 }
    "omit.js": "^1.0.2",
    "path-to-regexp": "^3.0.0", //URL匹配
    "qs": "^6.7.0", //service对象转字符串，项目未使用
    "react": "^16.8.6", //react库，防止eslint报错
    "react-copy-to-clipboard": "^5.0.1", //复制到剪贴板，项目未使用
    "react-document-title": "^2.0.3", //SPA修改title值
    "react-dom": "^16.8.6", //react-dom库，不知道什么用，防止eslint报错？项目未使用
    "redux": "^4.0.1", //redux库，使用接口，防止eslint报错
    "umi": "^2.8.7", //umi，核心库，集成了react、react-dom和react-router
    "umi-plugin-pro-block": "^1.3.2", //更好的使用block插件
    "umi-plugin-react": "^1.9.5", //react插件，集成dva、antd
    "umi-request": "^1.0.8" //请求包
  },
  "devDependencies": {
    "@ant-design/colors": "^3.1.0", //调色板，更具一个颜色生成10个颜色
    "@ant-design/pro-cli": "^1.0.0", //pro命令行一些功能
    "@types/classnames": "^2.2.7", //ts扩展
    "@types/express": "^4.17.0", //ts扩展
    "@types/history": "^4.7.2", //ts扩展
    "@types/jest": "^24.0.13", //ts扩展
    "@types/lodash": "^4.14.133", //ts扩展
    "@types/qs": "^6.5.3", //ts扩展
    "@types/react": "^16.8.19", //ts扩展
    "@types/react-document-title": "^2.0.3", //ts扩展
    "@types/react-dom": "^16.8.4", //ts扩展
    "@umijs/fabric": "^1.1.0", //代码规范（eslint、prettier、stylelint）
    "chalk": "^2.4.2", //终端样式更好看，项目未使用
    "check-prettier": "^1.0.3", //配置式检查文件
    "cross-env": "^5.2.0", //运行跨平台设置和使用环境变量的脚本
    "cross-port-killer": "^1.1.1", //终止在Windows，Linux和Mac上的给定TCP端口上运行的进程
    "enzyme": "^3.9.0", //Enzyme是React的JavaScript测试实用程序，可以更轻松地测试React Components的输出。您还可以在给定输出的情况下操纵，遍历并以某种方式模拟运行时。项目未使用
    "eslint": "^5.16.0", //代码检查
    "express": "^4.17.1", //用于mock使用接口
    "gh-pages": "^2.0.1", //将文件发布到gh-pagesGitHub（或其他任何地方的任何其他分支）上的分支。
    "husky": "^3.0.0", //方便使用git钩子
    "import-sort-cli": "^6.0.0", //import排序
    "import-sort-parser-babylon": "^6.0.0", //import排序
    "import-sort-parser-typescript": "^6.0.0", //import排序
    "import-sort-style-module": "^6.0.0", //import排序
    "jest-puppeteer": "^4.2.0", //Jest预设，包含使用Puppeteer编写集成测试所需的所有配置。
    "lint-staged": "^9.0.0", //针对暂存的git文件运行linters并且不要让💩滑入你的代码库！
    "mockjs": "^1.0.1-beta3", //生成随机数据＆拦截Ajax请求。项目未使用
    "node-fetch": "^2.6.0", //node请求，项目未使用
    "prettier": "^1.17.1", //代码格式化
    "pro-download": "1.0.1", //，项目未使用
    "slash2": "^2.0.0", //将Windows反斜杠路径转换为斜杠路径：foo\\bar➔foo/bar
    "stylelint": "^10.1.0", //样式检查
    "umi-plugin-ga": "^1.1.3", //Umi插件支持谷歌分析
    "umi-plugin-pro": "^1.0.2", //用于部署antd pro
    "umi-types": "^0.3.8", //umi的ts类型支持
    "webpack-theme-color-replacer": "^1.2.15" //这个插件可以从所有输出的css文件（例如element-ui主题颜色）中提取主题颜色样式，并制作一个仅包含颜色样式的'theme-colors.css'文件。在您的网页运行时，客户端部分将帮助您下载此css文件，然后动态地将颜色替换为新的自定义颜色。
  },
  "optionalDependencies": {
    "puppeteer": "^1.17.0" //e2e测试需要的浏览器内核
  },
  "engines": { "node": ">=10.0.0" },
  "checkFiles": [
    "src/**/*.js*",
    "src/**/*.ts*",
    "src/**/*.less",
    "config/**/*.js*",
    "scripts/**/*.js"
  ]
}
```

# SPA 内容管理系统系统搭建

## 技术体系

基础：typescript、less

技术栈：react、umi（react-router、webpack）、umi-plugin-react（dva（redux、sago）、ant design）

1. react

规范：

1. prettier（格式化代码）：check-prettier、prettier
2. git 检查（git 提交检查）：husky、lint-staged
3. eslint（代码检查）：@umijs/fabric
4. stylelint（样式规范）：stylelint

## 需要解决的问题

1. ts 配置理解不透测，需要实践具体配置的作用。
2. 关于 hash 打包发版后，若用户还使用上次的版本则找不到新发版的 js。

## package.json

```json
{
  "name": "cms",
  "version": "1.0.0",
  "scripts": {
    "start": "umi dev",
    "build": "umi build"
  },
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "umi": "^2.8.18" //会用到router的api所以需要打包依赖
  },
  "devDependencies": {
    "umi-types": "^0.3.17" //umi的一些接口，ts开发用于约束
  }
}
```

## typescript

由于 umi 内置支持了 ts 所以只需要在根目录新建 tsconfig.json 就能使用 ts 了。关于 antd pro 配置解析

```json
{
  "compilerOptions": {
    "outDir": "build/dist", //ts输出目录，但是有umi内置处理不知道有什么用
    "module": "esnext", //用于指定生成哪个模块系统代码，此处是生成最新es代码
    "target": "esnext", //指定ECMAScript目标版本，此处是最新版本
    "lib": ["esnext", "dom"], //编译过程中需要引入的库文件的列表。
    "sourceMap": true, //生成相应的 .map文件。
    "baseUrl": ".", //解析非相对模块名的基准目录。查看 模块解析文档了解详情。
    "jsx": "react", //在 .tsx文件里支持JSX： "React"或 "Preserve"。查看 JSX。
    "allowSyntheticDefaultImports": true, //允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查。
    "moduleResolution": "node", //决定如何处理模块。或者是"Node"对于Node.js/io.js，或者是"Classic"（默认）。查看模块解析了解详情。
    "forceConsistentCasingInFileNames": true, //禁止对同一个文件的不一致的引用。
    "noImplicitReturns": true, //不是函数的所有返回路径都有返回值时报错。
    "suppressImplicitAnyIndexErrors": true, //阻止 --noImplicitAny对缺少索引签名的索引对象报错。查看 issue #1232了解详情。
    "noUnusedLocals": true, //若有未使用的局部变量则抛错。
    "allowJs": true, //允许编译javascript文件。
    "experimentalDecorators": true, //启用实验性的ES装饰器。
    "strict": true, //启用所有严格类型检查选项。
    "paths": {
      "@/*": ["./src/*"]
    } //模块名到基于 baseUrl的路径映射的列表。
  },
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts",
    "tslint:latest",
    "tslint-config-prettier"
  ]
}
```
