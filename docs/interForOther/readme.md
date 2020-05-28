# 面试宝典

## HTML

### HTML5 有哪些新特性, 移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5

1. canvas
2. 用于媒介回放的video和audio元素
3. 本地离线存储。localStorage长期存储数据，浏览器关闭后数据不丢失;sessionStorage的数据在浏览器关闭后自动删除
4. 语意化更好的内容元素，比如 article footer header nav section
5. 位置API: Geolocation
6. 表单控件，calendar date time email url search
7. 新的技术：web worker(web worker是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行) web socket
8. 拖放API：drag、drop

## CSS

### 什么是 flex 布局和 grid 布局？分别在什么时候使用

Flex 布局和 grid 布局都是创建网页布局的好方法。但是，面试官想知道的是两者的主要区别：它们具有哪些功能和更强大灵活的功能？以及应该在何时使用？

Flex 布局是 1D。这意味着使用 flex 布局可以操作行或列，但只能同时操作行和列中的任意一个。在 grid 布局中，您可以同时操作行和列。grid 布局功能非常强大，因为它具有许多强大而有用的特性，这些功能将有助于简化复杂布局的开发和控制。

可以通过 grid 进行大方向的布局，使用 flex 进行具体内容的布局。

### 说明如何维护 CSS，假设您目前正在负责企业的实际项目

管理大型项目中的 CSS 可能具有挑战性。一种方法是使用预处理器，例如 SASS 或 LESS。两者都是出色的预处理程序，可以很好地管理 CSS 文件。它们具有函数、变量、嵌套 CSS 等功能。这是避免样式表冲突以及管理大型 CSS 文件的有效方法。

### rem 和 em 有什么区别

rem 和 em 都是 CSS 单位。rem 表示 root-em。em 和 rem 之间的区别是，rem 从根元素获取值，而 em 从父元素获取值。这是导致两者完全不同的原因。

### position fixed 和 sticky 之间的区别

当开发人员要开发复杂的布局时，position是非常有趣的属性。我们很清楚什么是 fixed，它将把元素"固定"到我们声明的位置。sticky的基本作用类似于position：relative，直到元素滚动到特定偏移量以上为止，在这种情况下它将变成position：fixed，导致元素"粘在"其位置，而不是滚动到视线之外。

### 什么是 critical CSS

Critical CSS 是一种提取首屏中 CSS 的技术，以便尽快将内容呈现给用户。这是快速加载网页首屏的好方法。
CSS 资源的加载情况对浏览器渲染页面的影响很大，这是因为默认情况下浏览器只有在完成 `<head>` 部分 CSS 样式的加载、解析之后才会渲染页面。这种渲染方式意味着，如果 CSS 文件很大，那么用户就必须等待很长的时间才能看到渲染结果。针对这一问题，我们将在接下来的内容中讨论一种非常规的解决方案，提高页面的渲染速度，这一方案常被称为 `critical rendering path` 。

### 什么是伪元素和伪类

伪元素是样式元素特定部分的方式。例如 `::first-letter、:: first-line、:: after、:: before` 等。
伪类用于定义元素的特殊状态。例如 `:hover、:focus、:active` 等。
按照 CSS3 规范， `:: ` 和 `: ` 用于区分伪元素和伪类。

### 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？

盒子模型有两种：IE 盒子模型(IE5.5及以下)，W3C标准盒子模型。

盒子模型(box model)：
内容(content)、填充(padding)、边框(border)、边界(margin) 。

不同：
W3C标准盒子模型的width和height，是content的宽高；
IE盒模型的width和height，是content、padding、border三部分合起来的宽高。
附加：
outline（轮廓）绘制在元素框之上，其不占据空间（不影响元素大小和定位）【所以如果轮廓线很粗，会遮住其他内容demo，不是很懂轮廓的覆盖顺序，它居然可以盖住下一个元素的内容？轮廓本身是另一次元的吗？会覆盖内容，但后一个轮廓会覆盖前一个轮廓】。
兼容性：IE8以上。

## JS

## 框架

## 工作流
