# 1-什么是 webgl

## 1.webgl 概述

webgl 是一项用来在网页上绘制和渲染复杂三维图形（3D 图形）,并允许用户与之进行交互的技术。

传统意义上，为了显示三维图形，开发者需要使用 c 或者 c++语言，辅以专门的计算机图形库，如 OpenGL 或者 Direct3D，来开发一个独立的应用程序。现在用了 webgl，我们只需要向已经熟悉的 html 和 javascript 中添加一些额外的三维图形学代码，就可以在网页上显示三维图形了。

webgl 是内嵌在浏览器中的，你不必安装插件和库就可以使用它，而且它是基于浏览器的，你可以在多个平台上运行 webgl 程序。

## webgl 起源

在个人计算机上使用最广泛的两种三维图形渲染技术是 Direct3D 和 OpenGL，Direct3D 是微软 DirectX 技术的一部分，是一套由微软控制的编程接口，主要用户 windows 平台。而 OpenGL 由于其开放性和免费性，在多个平台上被广泛的应用。

webgl 根植与 OpenGL，但它实际是从 OpenGL 的一个特殊的版本 OpenGL ES 中派生出来。OpenGL ES 于 2003-2004 年被手提出来，并且在 2007 年（ES2.0）和 2012 年（ES3.0）进行了两次升级。webgl 是基于 OpenGL ES 2.0 的

![webgl历史](https://images.vrm.cn/2018/12/18/history.png)

## 着色器

从 2.0 版本开始，OpenGL 支持一项非常重要的特性，既可编程着色器方法，该特性被 OpenGL ES 2.0 继承，并成为了 WebGL1.0 的标准核心部分。

着色器方法，或成为着色器。使用的是一种类似于 C 的编程语言实现了精美的视觉效果。编写着色器的语言又成为着色器语言。OpenGL ES 2.0 基于 OpenGL 着色器语言（GLSL），因此后者又被陈伟 OpenGL ES 着色器语言（GLSL ES），webgl 也使用 GLSL ES 编写着色器。

## webgl 程序的结构

在 html 中，动态网页包括 html 和 javascript，现在引入了 webgl 后，还需要加入着色器语言 GLSE ES,也就是说，WegGL 页面包含三种语言：HTML5 Javascript 和 GLSL ES

![网页结构](https://images.vrm.cn/2018/12/19/construct.png)
