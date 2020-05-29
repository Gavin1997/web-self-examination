# 面试宝典

## HTML

### HTML5 有哪些新特性, 移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5

1\. canvas
2\. 用于媒介回放的video和audio元素
3\. 本地离线存储。localStorage长期存储数据，浏览器关闭后数据不丢失; sessionStorage的数据在浏览器关闭后自动删除
4\. 语意化更好的内容元素，比如 article footer header nav section
5\. 位置API: Geolocation
6\. 表单控件，calendar date time email url search
7\. 新的技术：web worker\(web worker是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行\) web socket
8\. 拖放API：drag、drop

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

### 谈一谈CSS重绘与回流/重排

会触发重绘或回流/重排的操作

1. 添加、删除元素(回流+重绘)
2. 隐藏元素，display:none(回流+重绘)，visibility:hidden(只重绘，不回流)
3. 移动元素，如改变top、left或移动元素到另外1个父元素中(重绘+回流)
4. 改变浏览器大小(回流+重绘)
5. 改变浏览器的字体大小(回流+重绘)
6. 改变元素的padding、border、margin(回流+重绘)
7. 改变浏览器的字体颜色（只重绘，不回流）
8. 改变元素的背景颜色（只重绘，不回流）

#### 需要怎么优化？

1. 用transform 代替 top，left ，margin-top， margin-left... 这些位移属性
2. opacity 加上 transform: translateZ/3d  这个属性之后便不会发生回流和重绘了
3. 不要使用 js 代码对dom 元素设置多条样式，选择用一个 className 代替之。
4. 如果确实需要用 js 对 dom 设置多条样式那么可以将这个dom 先隐藏，然后再对其设置
5. 不要使用table 布局，因为table 的每一个行甚至每一个单元格的样式更新都会导致整个table 重新布局
6. 对于频繁变化的元素应该为其加一个 transform 属性，对于视频使用video 标签

## JS

### 谈谈用户从输入url到页面渲染完成发生了什么过程

1. 浏览器的地址栏输入URL并按下回车。
2. 浏览器查找当前URL的DNS缓存记录。
3. DNS解析URL对应的IP。
4. 根据IP建立TCP连接（三次握手）。
5. HTTP发起请求。
6. 服务器处理请求，浏览器接收HTTP响应。
7. 渲染页面，构建DOM树。
8. 关闭TCP连接（四次挥手）

### 谈谈深拷贝和浅拷贝

浅拷贝：浅拷贝就是对内存地址的复制，让目标对象指针和源对象指向同一片内存空间，当内存销毁的时候，指向这片内存的几个指针需要重新定义才可以使用，要不然会成为野指针。
深拷贝：深拷贝是指拷贝对象的具体内容，而内存地址是自主分配的，拷贝结束之后，两个对象虽然存的值是相同的，但是内存地址不一样，两个对象也互不影响，互不干涉。

### 跨域是什么原因引起？怎么解决？

跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。

1.  jsonp函数

在HTML DOM中, script标签本身就可以访问其它域的资源，不受浏览器同源策略的限制，可以通过在页面动态创建script标签。

``` js
var script = document.createElement('script');
script.src = "http://aa.xx.com/js/*.js";
document.body.appendChild(script);
```

2. iframe实现跨域

基于iframe实现的跨域要求两个域具有aa.xx.com, bb.xx.com这种特点，也就是两个页面必须属于同一个顶级基础域（例如都是xxx.com，或是xxx.com.cn），使用同一协议（例如都是 http）和同一端口（例如都是80），这样在两个页面中同时添加document.domain，就可以实现父页面调用子页面的函数

3. 跨域资源共享（CORS）

服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。

4. 使用HTML5的window.postMessage方法跨域

window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。目前IE8+、FireFox、Chrome、Opera等浏览器都已经支持window.postMessage方法。

5. nginx反向代理

### 谈谈你对闭包的理解

函数声明的时候，会生成一个独立的作用域，同一作用域的对象可以互相访问，作用域呈层级包含状态，形成作用域链，子作用域的对象可以访问父作用域的对象，反之不能；另外子作用域会使用最近的父作用域的对象

### 谈谈原型链继承的理解

什么是原型链：只要是对象就有原型, 并且原型也是对象, 因此只要定义了一个对象, 那么就可以找到他的原型, 如此反复, 就可以构成一个对象的序列, 这个结构就被称为原型链
所有的实例有一个内部指针(prototype)，指向它的原型对象，并且可以访问原型对象上的所有属性和方法。

### 谈谈toString和String的区别？

toString()方法；数值、字符串、对象、布尔；都有toString方法；这个方法唯一能做的就是返回相应的字符串；其中null和undefined没有toString()方法；
String()属于强制转换， null转换的结果为null；undefined转换的结果为undefined；其余的如果有toString()方法，即调用该方法，返回相应的结果；

## 框架

###  MVVM和MVC的区别

MVC：MVC模式可以这样理解，将html看成view; js看成controller，处理用户与应用的交互，响应对view的操作（对事件的监听），调用Model对数据进行操作，完成model与view的同步（根据model的改变，通过选择器对view进行操作）; 将js的ajax当做Model，从服务器获取数据，MVC是单向的。
MVVM：它实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变，MVVM是双向的。

### $route和$router的区别

$router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。
$route对象表示当前的路由信息，包含了当前 URL 解析得到的信息

### vue中key的作用

强制替换元素，从而可以触发组件的生命周期钩子或者触发过渡。因为当key改变时，Vue认为一个新的元素产生了，从而会新插入一个元素来替换掉原有的元素。
`<transition> <span :key="text">{{text}}</span> </transition>` 、

--这里如果text发生改变，整个 `<span>` 元素会发生更新，因为当text改变时，这个元素的key属性就发生了改变，在渲染更新时，Vue会认为这里新产生了一个元素，而老的元素由于key不存在了，所以会被删除，从而触发了过渡。
同理，key属性被用在组件上时，当key改变时会引起新组件的创建和原有组

### vue中常用的修饰符

.stop              //组织单击事件冒泡
.prevent        //提交事件不再重新加载页面
.capture        //添加事件侦听器时使用事件捕获模式
.self              //只当事件在该元素本身时触发回调（在其子元素上不触发）
.once             //只触发一次事件

### 对keep-aerlive的了解

 通过设置了keep-alive，可以简单理解为从页面1跳转到页面2后，然后后退到页面1，只会加载缓存中之前已经渲染好的页面1，而不会再次重新加载页面1，及不会再触发页面一种的created等类似的钩子函数，除非自己重新刷新该页面1。

### vuex中的成员？对应的作用

state => 基本数据 
getters => 从基本数据派生的数据 
mutations => 提交更改数据的方法，同步！
 actions => 像一个装饰器，包裹mutations，使之可以异步。
 modules => 模块化Vuex

## 工作流

### 谈谈前端性能优化

1. 减少HTTP请求：合并文件、CSS精灵、inline Image
2. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
3. 避免重定向：多余的中间访问
4. 使Ajax可缓存
5. 非必须组件延迟加载,未来所需组件预加载
6. 减少DOM元素数量
7. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
8. 减少iframe数量
