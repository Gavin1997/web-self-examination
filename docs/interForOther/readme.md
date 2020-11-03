# 面试宝典

## HTML

### HTML5 有哪些新特性, 移除了那些元素？如何处理 HTML5 新标签的浏览器兼容问题？如何区分 HTML 和 HTML5

01. canvas
02. 用于媒介回放的video和audio元素
03. 本地离线存储。localStorage长期存储数据，浏览器关闭后数据不丢失; sessionStorage的数据在浏览器关闭后自动删除
04. 语意化更好的内容元素，比如 article footer header nav section
05. 位置API: Geolocation
06. 表单控件，calendar date time email url search
7. 新的技术：web worker(web worker是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行) web socket
08. 拖放API：drag、drop

### 什么叫优雅降级和渐进增强？

01. 优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了, 为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.
02. 渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能, 向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。

## CSS

### 什么是 flex 布局和 grid 布局？分别在什么时候使用

Flex 布局和 grid 布局都是创建网页布局的好方法。但是，面试官想知道的是两者的主要区别：它们具有哪些功能和更强大灵活的功能？以及应该在何时使用？

Flex 布局是 1D。这意味着使用 flex 布局可以操作行或列，但只能同时操作行和列中的任意一个。在 grid 布局中，您可以同时操作行和列。grid 布局功能非常强大，因为它具有许多强大而有用的特性，这些功能将有助于简化复杂布局的开发和控制。

可以通过 grid 进行大方向的布局，使用 flex 进行具体内容的布局。

### 说明如何维护 CSS，假设您目前正在负责企业的实际项目

管理大型项目中的 CSS 可能具有挑战性。一种方法是使用预处理器，例如 SASS 或 LESS。两者都是出色的预处理程序，可以很好地管理 CSS 文件。它们具有函数、变量、嵌套 CSS 等功能。这是避免样式表冲突以及管理大型 CSS 文件的有效方法。

### 1rem、1em、1vh、1px各自代表的含义？

 - rem

rem是全部的长度都相对于根元素 `<html>` 元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。

* em

子元素字体大小的em是相对于父元素字体大小
元素的width/height/padding/margin用em的话是相对于该元素的font-size
vw/vh
全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。

* px

px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。

一般电脑的分辨率有{1920*1024}等不同的分辨率

1920*1024 前者是屏幕宽度总共有1920个像素, 后者则是高度为1024个像素
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
07. 改变浏览器的字体颜色（只重绘，不回流）
08. 改变元素的背景颜色（只重绘，不回流）

#### 需要怎么优化？

01. 用transform 代替 top，left ，margin-top， margin-left... 这些位移属性
02. opacity 加上 transform: translateZ/3d  这个属性之后便不会发生回流和重绘了
03. 不要使用 js 代码对dom 元素设置多条样式，选择用一个 className 代替之。
04. 如果确实需要用 js 对 dom 设置多条样式那么可以将这个dom 先隐藏，然后再对其设置
05. 不要使用table 布局，因为table 的每一个行甚至每一个单元格的样式更新都会导致整个table 重新布局
06. 对于频繁变化的元素应该为其加一个 transform 属性，对于视频使用video 标签

## JS

### 谈谈用户从输入url到页面渲染完成发生了什么过程

01. 浏览器的地址栏输入URL并按下回车。
02. 浏览器查找当前URL的DNS缓存记录。
03. DNS解析URL对应的IP。
04. 根据IP建立TCP连接（三次握手）。
05. HTTP发起请求。
06. 服务器处理请求，浏览器接收HTTP响应。
07. 渲染页面，构建DOM树。
08. 关闭TCP连接（四次挥手）

### 谈谈深拷贝和浅拷贝

浅拷贝：浅拷贝就是对内存地址的复制，让目标对象指针和源对象指向同一片内存空间，当内存销毁的时候，指向这片内存的几个指针需要重新定义才可以使用，要不然会成为野指针。
深拷贝：深拷贝是指拷贝对象的具体内容，而内存地址是自主分配的，拷贝结束之后，两个对象虽然存的值是相同的，但是内存地址不一样，两个对象也互不影响，互不干涉。

### DOM事件模型 事件流

事件模型分为：捕获和冒泡
事件流：
（1）捕获阶段：事件从window对象自上而下向目标节点传播的阶段；
（2）目标阶段：真正的目标节点正在处理事件的阶段；
（3）冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。
事件委托（代理）
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）
优点：

01. 减少内存消耗，提高性能不需要为每一个子元素绑定事件
02. 动态绑定事件

### 如何中断ajax请求？

一种是设置超时时间让ajax自动断开，另一种是手动停止ajax请求，其核心是调用XML对象的abort方法， `ajax.abort()`

### 跨域是什么原因引起？怎么解决？

跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。

01.  jsonp函数

在HTML DOM中, script标签本身就可以访问其它域的资源，不受浏览器同源策略的限制，可以通过在页面动态创建script标签。

``` js
var script = document.createElement('script');
script.src = "http://aa.xx.com/js/*.js";
document.body.appendChild(script);
```

02. iframe实现跨域

基于iframe实现的跨域要求两个域具有aa.xx.com, bb.xx.com这种特点，也就是两个页面必须属于同一个顶级基础域（例如都是xxx.com，或是xxx.com.cn），使用同一协议（例如都是 http）和同一端口（例如都是80），这样在两个页面中同时添加document.domain，就可以实现父页面调用子页面的函数

03. 跨域资源共享（CORS）

服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。

04. 使用HTML5的window.postMessage方法跨域

window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。目前IE8+、FireFox、Chrome、Opera等浏览器都已经支持window.postMessage方法。

05. nginx反向代理

### 谈谈你对闭包的理解

函数声明的时候，会生成一个独立的作用域，同一作用域的对象可以互相访问，作用域呈层级包含状态，形成作用域链，子作用域的对象可以访问父作用域的对象，反之不能；另外子作用域会使用最近的父作用域的对象

### 谈谈原型链继承的理解

什么是原型链：只要是对象就有原型, 并且原型也是对象, 因此只要定义了一个对象, 那么就可以找到他的原型, 如此反复, 就可以构成一个对象的序列, 这个结构就被称为原型链
所有的实例有一个内部指针(prototype)，指向它的原型对象，并且可以访问原型对象上的所有属性和方法。

### 说说构造函数中原型方法, 静态方法, 实列方法的区别

简而言之，实例方法就是只有实例可以调用，静态方法只有构造函数可以调用，原型方法是实例和构造函数都可以调用，是共享的方法。

像 Promise.all 和 Promise.race 这些就是静态方法，Promise.prototype.then 这些就是原型方法，new 出来的实例可以调用

### 谈谈toString和String的区别？

toString()方法；数值、字符串、对象、布尔；都有toString方法；这个方法唯一能做的就是返回相应的字符串；其中null和undefined没有toString()方法；
String()属于强制转换， null转换的结果为null；undefined转换的结果为undefined；其余的如果有toString()方法，即调用该方法，返回相应的结果；

## 框架

###  MVVM和MVC的区别

MVC：MVC模式可以这样理解，将html看成view; js看成controller，处理用户与应用的交互，响应对view的操作（对事件的监听），调用Model对数据进行操作，完成model与view的同步（根据model的改变，通过选择器对view进行操作）; 将js的ajax当做Model，从服务器获取数据，MVC是单向的。
MVVM：它实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变，MVVM是双向的。

### nextTick知道吗，实现原理是什么

在下次 DOM 更新循环结束之后执行延迟回调。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用

* Promise
* MutationObserver
* setImmediate

如果以上都不行则采用setTimeout
定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

### vue-router的路由模式?

#### hash、history

01. 早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理也很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 `location.hash` 的值为 ` '#search'`

此外，hash 也存在下面几个特性：
URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送。
hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换。
我们可以使用 hashchange 事件来监听 hash 的变化。
我们可以通过两种方式触发 hash 变化，一种是通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 就会发生改变，也就会触发 hashchange 事件了：
 `<a href="#search">search</a>`

复制代码还有一种方式就是直接使用 JavaScript来对 `loaction.hash` 进行赋值，从而改变 URL，触发 `hashchange` 事件：
 `location.hash="#search"`

 

2. 前面的 hash 虽然也很不错，但使用时都需要加上 #，并不是很美观。因此到了 HTML5，又提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：

``` js
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
```

复制代码此外，history 存在下面几个特性：

`pushState` 和 `repalceState` 的标题（title）：一般浏览器会忽略，最好传入 null ；
我们可以使用 popstate  事件来监听 url 的变化；
`history.pushState() ` 或 `history.replaceState()` 不会触发 popstate 事件，这时我们需要手动触发页面渲染；

### $route和$router的区别

$router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。
$route对象表示当前的路由信息，包含了当前 URL 解析得到的信息

### target、currentTarget的区别？

currentTarget当前所绑定事件的元素

target当前被点击的元素

### vue中key的作用

强制替换元素，从而可以触发组件的生命周期钩子或者触发过渡。因为当key改变时，Vue认为一个新的元素产生了，从而会新插入一个元素来替换掉原有的元素。
`<transition> <span :key="text">{{text}}</span> </transition>` 、

--这里如果text发生改变，整个 `<span>` 元素会发生更新，因为当text改变时，这个元素的key属性就发生了改变，在渲染更新时，Vue会认为这里新产生了一个元素，而老的元素由于key不存在了，所以会被删除，从而触发了过渡。
同理，key属性被用在组件上时，当key改变时会引起新组件的创建和原有组

### v-if和v-for谁的优先级高？如何同时使用？

首先：永远不要把 v-if 和 v-for 同时用在同一个元素上。

其次：当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级

将 users替换为一个计算属性 ` (比如 activeUsers)` ，让其返回过滤后的列表

### Vue中组件生命周期调用顺序说一下

组件的调用顺序都是先父后子, 渲染完成的顺序是先子后父。

组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

* 加载渲染过程

父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted

* 子组件更新过程

父beforeUpdate->子beforeUpdate->子updated->父updated

* 父组件更新过程

父 beforeUpdate -> 父 updated

* 销毁过程

父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

### Vue2.x组件通信有哪些方式？

* 父子组件通信

父->子props，子->父 $on、$emit

获取父子组件实例 $parent、$children

Ref 获取实例的方式调用组件的属性或者方法

Provide、inject 官方不推荐使用，但是写组件库时很常用

* 兄弟组件通信

Event Bus 实现跨组件通信 Vue.prototype.$bus = new Vue

Vuex

* 跨级组件通信

Vuex

$attrs、$listeners

Provide、inject

### vue中常用的修饰符

.stop              //组织单击事件冒泡
.prevent        //提交事件不再重新加载页面
.capture        //添加事件侦听器时使用事件捕获模式
.self              //只当事件在该元素本身时触发回调（在其子元素上不触发）
.once             //只触发一次事件

### 对keep-alive的了解

keep-alive可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

常用的两个属性include/exclude，允许组件有条件的进行缓存。

两个生命周期activated/deactivated，用来得知当前组件是否处于活跃状态。
 通过设置了keep-alive，可以简单理解为从页面1跳转到页面2后，然后后退到页面1，只会加载缓存中之前已经渲染好的页面1，而不会再次重新加载页面1，及不会再触发页面一种的created等类似的钩子函数，除非自己重新刷新该页面

* `activated` ： 页面第一次进入的时候，钩子触发的顺序是created->mounted->activated
* `deactivated` :  页面退出的时候会触发deactivated，当再次前进或者后退的时候只触发activated

### vuex中的成员？对应的作用

state => 基本数据 
getters => 从基本数据派生的数据 
mutations => 提交更改数据的方法，同步！
 actions => 像一个装饰器，包裹mutations，使之可以异步。
 modules => 模块化Vuex

### Vue模版编译原理知道吗，能简单说一下吗

简单说，Vue的编译过程就是将template转化为render函数的过程。会经历以下阶段：

* 生成AST树
* 优化
* codegen

首先解析模版，生成AST语法树(一种用JavaScript对象的形式来描述整个模板)。使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。

Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。

编译的最后一步是将优化后的AST树转换为可执行的代码。

### 你都做过哪些Vue的性能优化

* 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
* v-if和v-for不能连用
* 如果需要使用v-for给每项元素绑定事件时使用事件代理
* SPA 页面采用keep-alive缓存组件
* 在更多的情况下，使用v-if替代v-show
* key保证唯一
* 使用路由懒加载、异步组件
* 防抖、节流
* 第三方模块按需导入
* 长列表滚动到可视区域动态加载
* 图片懒加载

## React

### React 中 keys 的作用是什么？

Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。

在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性

### react 生命周期函数

* 初始化阶段：

    - getDefaultProps: 获取实例的默认属性
    - getInitialState: 获取每个实例的初始化状态
    - componentWillMount：组件即将被装载、渲染到页面上
    - render: 组件在这里生成虚拟的 DOM 节点
    - componentDidMount: 组件真正在被装载之后

* 运行中状态：

    - componentWillReceiveProps: 组件将要接收到属性的时候调用
    - shouldComponentUpdate: 组件接受到新属性或者新状态的时候（可以返回 false，接收数据后不更新，阻止 render 调用，后面的函数不会被继续执行了）
    -  componentWillUpdate: 组件即将更新不能修改属性和状态
    - render: 组件重新描绘
    - componentDidUpdate: 组件已经更新

* 销毁阶段：

    componentWillUnmount: 组件即将销毁

### shouldComponentUpdate 是做什么的，（react 性能优化是哪个周期函数？）

shouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘 dom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更优化的 dom diff 算法，可以极大的提高性能。

### 为什么虚拟 dom 会提高性能?

虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。

用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。

### react diff 原理

* 把树形结构按照层级分解，只比较同级元素。
* 给列表结构的每个单元添加唯一的 key 属性，方便比较。
* React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
* 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty. 到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
* 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

## 工作流

### 谈谈前端性能优化

01. 减少HTTP请求：合并文件、CSS精灵、inline Image
02. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
03. 避免重定向：多余的中间访问
04. 使Ajax可缓存
05. 非必须组件延迟加载,未来所需组件预加载
06. 减少DOM元素数量
07. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
08. 减少iframe数量

## restAPI请求

### 什么是 options 请求

HTTP 的 OPTIONS 方法 用于获取目的资源所支持的通信选项。客户端可以对特定的 URL 使用 OPTIONS 方法，也可以对整站（通过将 URL 设置为“*”）使用该方法。
简单来说，就是可以用 options 请求去嗅探某个请求在对应的服务器中都支持哪种请求方法。

在前端中我们一般不会主动发起这个请求，但是往往你可以看到浏览器中相同的请求发起了 2 次
其实，这是因为在跨域的情况下，在浏览器发起"复杂请求"时主动发起的。跨域共享标准规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。

#### 简单请求与复杂请求

某些请求不会触发 CORS 预检请求，这样的请求一般称为"简单请求", 而会触发预检的请求则称为"复杂请求"。

##### 简单请求

* 请求方法为GET、HEAD、POST时发的请求
* 人为设置了规范集合之内的首部字段，如Accept/Accept-Language/Content-Language/- Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width
* Content-Type 的值仅限于下列三者之一, 即application/x-www-form-urlencoded、multipart/- form-data、text/plain
* 请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器；
* 请求中没有使用 ReadableStream 对象。

###### 复杂请求

* 使用了下面任一 HTTP 方法，PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH
* 人为设置了以下集合之外首部字段，即简单请求外的字段
* Content-Type 的值不属于下列之一，即application/x-www-form-urlencoded、multipart/form-data、text/plain

 `options 关键的请求字段`

**request header 的关键字段**
| 关键字段        | 作用           |
| ------------- |:-------------:|
| Access-Control-Request-Method     | 告知服务器，实际请求将使用 POST 方法 |
| Access-Control-Request-Headers     | 告知服务器，实际请求将携带的自定义请求首部字段    |
如：
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type

**response header 的关键字段**
| 关键字段        | 作用           |
| ------------- |:-------------:|
| Access-Control-Allow-Methods    | 表明服务器允许客户端使用什么方法发起请求 |
| Access-Control-Allow-Origin     | 允许跨域请求的域名，如果要允许所有域名则设置为 *    |
| Access-Control-Request-Headers    | 将实际请求所携带的首部字段告诉服务器    |
| Access-Control-Max-Age | 指定了预检请求的结果能够被缓存多久    |

#### Options 请求优化

当我们发起跨域请求时，如果是简单请求，那么我们只会发出一次请求，但是如果是复杂请求则先发出 options 请求，用于确认目标资源是否支持跨域，然后浏览器会根据服务端响应的 header 自动处理剩余的请求，如果响应支持跨域，则继续发出正常请求，如果不支持，则在控制台显示错误。

由此可见，当触发预检时，跨域请求便会发送 2 次请求，既增加了请求数，也延迟了请求真正发起的时间，严重影响性能。

所以，我们可以优化 Options 请求，主要有 2 种方法。

01. 转为简单请求，如用 JSONP 做跨域请求
02. 对 options 请求进行缓存，服务器端设置 Access-Control-Max-Age 字段，那么当第一次请求该 URL 时会发出 OPTIONS 请求，浏览器会根据返回的 Access-Control-Max-Age 字段缓存该请求的 OPTIONS 预检请求的响应结果（具体缓存时间还取决于浏览器的支持的默认最大值，取两者最小值，一般为 10 分钟）。在缓存有效期内，该资源的请求（URL 和 header 字段都相同的情况下）不会再触发预检。（chrome 打开控制台可以看到，当服务器响应 Access-Control-Max-Age 时只有第一次请求会有预检，后面不会了。注意要开启缓存，去掉 disable cache 勾选。）

   

#### 总结

options 请求就是预检请求，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求。

### get和POST的区别

get用来获取数据，post用来提交数据
get参数有长度限制（受限于url长度，具体的数值取决于浏览器和服务器的限制，最长2048字节），而post无限制。
get请求的数据会附加在url之 ，以 " ？ "分割url和传输数据，多个参数用 "&"连接，而post请求会把请求的数据放在http请求体中。
get是明文传输，post是放在请求体中，但是开发者可以通过抓包工具看到，也相当于是明文的。
get请求会保存在浏览器历史记录中，还可能保存在web服务器的日志中
首先get和post在本质上都是tcp链接，但由于http协议和浏览器或者服务器的限制，从而使它们在应用过程中产生了差别，但是它们中还有一个较大的区别：get在请求时发送一个数据包，会将header和data一起发送过去，而post会产生两个数据包先发送header，服务器返回100，然后在发送data，服务器返回200

## 工具的使用

#### webpack

##### 有哪些常见的Loader？你用过哪些Loader？

    raw-loader：加载文件原始内容（utf-8）
    file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
    url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
    source-map-loader：加载额外的 Source Map 文件，以方便断点调试
    svg-inline-loader：将压缩后的 SVG 内容注入代码中
    image-loader：加载并且压缩图片文件
    json-loader 加载 JSON 文件（默认包含）
    handlebars-loader: 将 Handlebars 模版编译成函数并返回
    babel-loader：把 ES6 转换成 ES5
    ts-loader: 将 TypeScript 转换成 JavaScript
    awesome-typescript-loader：将 TypeScript 转换成 JavaScript，性能优于 ts-loader
    sass-loader：将SCSS/SASS代码转换成CSS
    css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
    style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
    postcss-loader：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀
    eslint-loader：通过 ESLint 检查 JavaScript 代码
    tslint-loader：通过 TSLint检查 TypeScript 代码
    mocha-loader：加载 Mocha 测试用例的代码
    coverjs-loader：计算测试的覆盖率
    vue-loader：加载 Vue.js 单文件组件
    i18n-loader: 国际化
    cache-loader: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里

##### 有哪些常见的Plugin？你用过哪些

    Plugindefine-plugin：定义环境变量 (Webpack4 之后指定 mode 会自动配置)
    ignore-plugin：忽略部分文件
    html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
    web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用
    uglifyjs-webpack-plugin：不支持 ES6 压缩 (Webpack4 以前)
    terser-webpack-plugin: 支持压缩 ES6 (Webpack4)
    webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
    mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)
    serviceworker-webpack-plugin：为网页应用增加离线缓存功能
    clean-webpack-plugin: 目录清理
    ModuleConcatenationPlugin: 开启 Scope Hoisting
    speed-measure-webpack-plugin: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)
    webpack-bundle-analyz

## Gis

###	认为身为一个GIS程序员，需要掌握的各方面素养是什么？
a. 编程语言能力 b. 英语 c. 学习能力 d. 文档能力 e. 创造能力

WebGIS前端开发的核心能力就是实现 `数据展示(map,layer)` , `查询(三大查询)` 和 `简单分析(soe,geometryService)` . 其中分析功能在有计算后台参与的情况下, 可以交给后台通过开发SOE插件或WebAPI接口来实现, 查询功能是我们前端WebGIS开发最常使用的API, 在没有后台可依赖的情况下, 前端要想实现服务信息的统计分析, 依赖于对查询功能的灵活使用.

### 什么是空间元数据

空间元数据是关于空间数据的描述性数据信息，它反映了空间数据所包含的内容、质量、空间参考、生成转换等信息。
###	地理坐标系和投影坐标系的区别？arcgis里哪个坐标系可测面积？

* 地理坐标系统（GCS）用一个三维的球面来确定地物在地球上的位置，地面点的地理坐标有经度、纬度、高程构成。地理坐标系统与选择的地球椭球体和大地基准面有关。椭球体定义了地球的形状，而大地基准面确定了椭球体的中心。
* 投影坐标系统是根据某种映射关系，将地理坐标系统中由经纬度确定的三维球面坐标投影到二维的平面上所使用的坐标系统。在该坐标系统中，点的位置是由(x, y, z)坐标来确定的。由于投影坐标是将球面展会在平面上，因此不可避免会产生变形。这些变形包括3种：长度变形、角度变形以及面积变形。

地理坐标系统不可测面积，投影坐标系可测面积。
###	简单列举常用的地理坐标系统、投影坐标系统和地心坐标系统？并简要描述他们的区别。
地理坐标系统：WGS84；
投影坐标系统：北京54，西安80。
地理坐标系统与投影坐标系统的区别：

01. 地理坐标系统是以经纬度为地图的存储单位，确定一个可以量化计算的椭球体，还有一个可以将该椭球体定位的大地基准面。
02. 投影坐标系统是以长度单位（通常是米）来进行地图的存储，要确定一个投影坐标，首先要有一个球面坐标，然后就是转化过程，即通过一定的算法（高斯克吕格就是一种投影算法），将该球面坐标投影成为平面坐标。

###	简要描述一下矢量数据结构和栅格数据，以及各自应用的领域。

* 栅格结构是以规则的阵列来表示空间地物或现象分布的数据组织，组织中的每个数据表示地物或现象的非几何属性特征。

* 矢量数据结构是通过记录坐标的方式尽可能精确地表示点、线和多边形等地理实体，坐标空间设为连续，允许任意位置、长度和面积的精确定义。

* 栅格数据操作总的来说容易实现，矢量数据操作则比较复杂；

* 栅格结构是矢量结构在某种程度上的一种近似，对于同一地物达到于矢量数据相同的精度需要更大量的数据；在坐标位置搜索、计算多边形形状面积等方面栅格结构更为有效，而且易于遥感相结合，易于信息共享；

* 矢量结构对于拓扑关系的搜索则更为高效，网络信息只有用矢量才能完全描述，而且精度较高。对于地理信息系统软件来说，两者共存，各自发挥优势是十分有效的。

###	地理坐标与投影坐标有什么区别和联系。

01. 地理坐标系统是以经纬度为地图的存储单位，确定一个可以量化计算的椭球体，还有一个可以将该椭球体定位的大地基准面。
02. 投影坐标系统是以长度单位（通常是米）来进行地图的存储，要确定一个投影坐标，首先要有一个球面坐标，然后就是转化过程，即通过一定的算法（高斯克吕格就是一种投影算法），将该球面坐标投影成为平面坐标。

### ArcGIS Server切片缓存格式有哪几种？试评价它们的优缺点？

* ArcGIS Server缓存瓦片文件格式一般来说有三种：JPEG、PNG32及PNG8。

* 这三种文件格式在一些方面上有些不同，这些不同就决定了他们主要应用的方向。以下详细看看主要的差别：

     1. 是否支持透明：JPEG不支持透明底色，PNG32与PNG8支持透明底色。也就是作为最低层的底图可以使用JPEG，其他地方最好使用PNG格式。
     2. 支持的颜色级别：JPEG与PNG32支持16万色，而PNG8支持256色。对于需要丰富颜色表达的图层，建议采用JPEG或者PNG32，对于简单的要素渲染的需求，则选择PNG8比较合适。
     3. 存储方式 ：JPEG为有损带高压缩比的文件格式，能支持55-90的压缩比例。而PNG32和PNG8都是无损的。图片精度高，同时占用磁盘空间较大。

* 综合上述的特点一般来说JPEG比较适合用于影像切片，PNG32则适中与影像与矢量的切片。由于支持的颜色数较少及透明的特点PNG8更适合用于矢量数据的切片

###	试述坐标变换的基本原理？写出仿射变换的主要处理过程。
坐标变换的基本原理是：是通过改变对应的参数，如基准面，椭球体，或者投影计算方法，实现由一种坐标系统向另一种坐标系统转换转换的过程。（找不到相关的资料，自己总结的）
仿射变换：是空间直角坐标变换的一种，它是一种二维坐标到二维坐标之间的线性变换，保持二维图形的“平直线”和“平行性”，其可以通过一系列的原子变换的复合来实现，包括平移(Translation)、缩放（Scale）、翻转（Flip）、旋转（Rotation）和剪切(Shear)。

### 地图服务元数据信息

| 属性名称 | 属性含义 |
| --- | ---|
| Spatial Reference | 地图服务坐标系, 图层坐标系 |
| Initial Extent | 地图初始化范围 |
| Full Extent | 地图全图范围 |
| Units | 地图数据单位 |
| Supported Image Format Types | 地图支持输出的图像格式 |
| Supports Dynamic Layers | 支持动态修改地图图层顺序和渲染 |
| MaxRecordCount | 查询一次支持最大输出要素的个数 |
| MaxImageHeight | 一次请求输出的图片最大像素高度 |
| MaxImageWidth | 一次请求输出的图片最大像素宽度 |
| Min Scale, Max Scale | 限制比例尺, 地图服务仅在此比例尺范围内可见 |
| Display Field | 图层默认展示字段 |
| Type | 图层类型 |
| Geometry Type | 图层要素类型 |
| Default Visibility | 图层是否默认可见 |
| Supports Statistics | 是否支持统计查询 |
| Extent | 图层数据范围 |
| Drawing Info | 图层配图信息 |
| Fields | 图层属性字段名称, 别名, 类型 |

### 三大查询的对比

| API | 说明 | 特点 | 使用场景 |
| --- | --- | ------ | -------- |
| QueryTask | 对图层进行空间和属性查询的功能类 | 查询某个地图服务的某个子图层, 空间查询的地图服务不必加载到Map中, 返回FeatureSet结果, 其中包含Graphic对象, 其中属性字段key值为属性名称 | 基础查询类型, 前端进行数据查询时基本都是使用此类 |
| IdentifyTask | 对服务空间查询功能类 | 查询一个服务的多个图层, 空间查询, 返回IdentifyResults数组, 其中包含Graphic对象, 其中属性字段key值为属性别名 | 系统中的属性查询功能使用此类 |
| FindTask | 对服务属性查询功能类 | 查询一个地图服务的多个图层的多个字段, 不能进行空间查询, 返回FindResults数组, 其中包含Graphic对象, 其中属性字段key值为属性别名 | 当实现地块查询, 定位查询时, 可使用此类 |

### rest服务: 

rest就是每个厂家的一种特殊的服务，一般厂商会提供对应的接口进行对接，他也是符合restful标准的.ogc标准有很多，常见就是wmts，wms，wfs等; 

### ogc: 

国家地理协会定义的一种webgis共通的一种语言; 

###  Web地图服务(WMS): 

能够根据用户的请求返回相应的地图(包括PNG，GIF，JPEG等栅格形式或者是SVG和WEB CGM等矢量形式）。WMS支持网络协议HTTP，所支持的操作是由URL定义的。)  有三个重要操作 `GetCapabilities` ， `GetMap` ， `GetFeatureinfo` 。
        `GetCapabilities` 返回服务级元数据。
        `GetMap` 返回一个地图影像。
        `GetFeatureinfo` 返回显示在地图上的某些特殊要素的信息。
        还有一些其它操作如 `DescribeLayer` ， `GetLegendGraphic` ， `GetStyles` 。
        事实上用传统的观点来解释， `GetMap` 获得的就是在桌面程序中画在控件上的里的结果，是数据的表现。
        `GetFeatureInfo` 更容易理解，它和几乎所有的桌面程序上都用的Info按钮功能相同，都是用来获得屏幕坐标某处的信息，       GetFeatureInfo中的参数是屏幕坐标、当前视图范围等，在一定程度上也方便了客户端的编写。
        `GetFeatureInfo` 可以同时返回多个图层中的要素信息，这一点和ArcGIS Desktop等也都是相同的。WMS还包括一些 `GetLegend` 之类的返回图例信息的请求，也是完全按照桌面既有的标准定义的。

### Web 要素服务(WFS): 

支持对地理要素的插入, 更新, 删除, 检索和发现服务. 该服务根据http客户请求返回GML数据; 
   其基础接口是： `GetCapabilities` ， `DescribeFeatureType` ， `GetFeature`

        `GetCapabilities` 同上。
        `DescribeFeatureType` 返回要素结构，以便客户端进行查询和其他操作。
        `GetFeature` 可根据查询要求返回一个符合GML规范的数据文档。GetFeature是最重要的接口。
        其它接口如 `Transaction` 它不仅能提供要素读取，同时支持要素在线编辑和事务处理。
        WFS对应于常见桌面程序中的条件查询功能，WFS通过OGC Filter构造查询条件，支持基于空间几何关系的查询，基于属性域的查询，当然还包括基于空间关系和属性域的共同查询。
        在Web上，WFS的请求不是以SQL实现的，而是通过 `Filter XML` 来实现，可扩展性更强。WFS所返回的是查询的结果集，从某种程度上说，区别于WMS的“数据的表现”，WFS的结果集是由完整的Schema定义和约束的结果集，以GML为载体。这个结果集，类似于桌面程序查询结果的数据表

###  WEB地图切片服务(WMTS)

 WMTS，切片地图Web服务（OpenGIS Web Map Tile Service）当前版本是1.0.0。WMTS标准定义了一些操作，这些操作允许用户访问切片地图。WMTS可能是OGC首个支持RESTful访问的服务标准。
        WMTS提供了一种采用预定义图块方法发布数字地图服务的标准化解决方案。WMTS弥补了WMS不能提供分块地图的不足。WMS针对提供可定制地图的服务，是一个动态数据或用户定制地图（需结合SLD标准）的理想解决办法。WMTS牺牲了提供定制地图的灵活性，代之以通过提供静态数据（基础地图）来增强伸缩性，这些静态数据的范围框和比例尺被限定在各个图块内。这些固定的图块集使得对WMTS服务的实现可以使用一个仅简单返回已有文件的Web服务器即可，同时使得可以利用一些标准的诸如分布式缓存的网络机制实现伸缩性

###  什么是图层

图层是 `ArcMap、ArcGlobe` 和 `ArcScene 等Arcgis` 产品套件中地理数据集的显示机制。一个图层引用一个数据集，并指定如何利用符号和文本标注绘制该数据集。向地图添加图层时，要指定它的引用数据集并设定地图符号和标注属性。
包含一个地图控件的每个应用程序是通过一系列图层组装的。显示以特定的顺序显示在地图上，列在最底部的显示在地图的最上面显示，也就是先添加的显示在下面显示（原理类似于“栈”）

所有的图层都是从Layer类型继承而来的，可以参考下载的API中的对象模型图。

``` js
Layer
  |
  –TiledMapServiceLayer |
  -- -- | –ArcGISTiledMapServiceLayer | –DynamicLayer |
  -- -- | –DynamicMapServiceLayer |
  -- -- -- -- -- | –ArcGISDynamicMapServiceLayer |
  -- -- -- -- -- | –ArcGISImageServiceLayer |
  -- -- -- -- -- | –GPResultImageLayer | –GraphicsLayer |
  -- -- | –FeatureLayer | –ElementLayer
```
