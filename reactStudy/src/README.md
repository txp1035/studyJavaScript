# 学习笔记

## 疑问

1. react 原理：怎么渲染虚拟 dom 的，怎么解析 jsx 的，diff 算法相关。
2. 了解 Next.js 的 ssr
3. 了解 webpack
4. 了解 Gatsby，看看 umi 文档和 antd 文档是不是用的这个
5. 从零打造 react 应用
6. reactdom.render()实现
7. jsx 实现
8. babel 转译原理
9. class 定义组件原理
10. 类 super 原理
11. setstae 异步合并原理
12. 事件处理中的 e，什么是合成事件
13. 事件处理中的 this 值，箭头函数、绑定、class fields 优劣
14. key 值是干什么的？原理呢？
15. 什么是受控组件、非受控组件
16. 状态提升是什么
17. react 哲学五步走
18. ref 使用和原理
19. 了解 ast
20. 动态引入，React.lazy 关系，懒加载好处，原理，
21. Suspense 作用，使用方式
22. 异常捕获边界生命周期实验
23. tree shaking 了解
24. context 用法，作用，原理
25. 了解 polyfill
26. mixins 是什么
27. 装饰器是什么
28. jsx 的 props 展开剩余参数使用
29. 性能相关了解 benchmark、Brunch、Browserify、uglifyify、terser、envify、Rollup、rollup-plugin-commonjs、rollup-plugin-replace、rollup-plugin-terser
30. 了解 Chrome Performance
31. 了解虚拟化长列表、“虚拟滚动”技术。react-window、react-virtualized。
32. react 开发工具，查看渲染
33. polyfill 了解
34. Immutable.js 了解
35. Class Properties 了解
36. 与第三方库协同、协调章节细读
37. 严格模式了解
38. SharedApplicationState.recordEvent？
39. class fields proposal
40. Web Components
41. react.children 用法
42. getDerivedStateFromProps 研究
43. SyntheticEvent
44. ui 测试

## antd

默认值修改
static defaultProps 设置默认值的
可以直接 AntdComponent.defaultProps.props = 'my_default_value' 改
在所有组件渲染之前修改
