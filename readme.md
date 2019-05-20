# 说明

这是一个 vuepress 案例项目。我在学习 vuepress 的过程中，出了很多问题，又找不到现成的案例可以参考，于是走了很多弯路。今天我自己把这条路走通了，故把这个 demo 分享出来，方便大家参考。

使用方法：下载这个项目，在 docs 文件夹所在的目录打开命令行工具。使用管理员权限。安装 node_module。然后运行`yarn docs:dev` 即可查看 vuepress 静态博客效果。
本地开发请使用如下命令，它在本地启用了一个小型的服务器，你可以在浏览器中使用 localhost:8080(默认情况下)进行访问<br>
\$ `npm run docs:dev`
打包命令请使用如下命令，它在.vuepress 目录下生成一个 dist 文件夹<br>
\$ `npm run docs:build`
项目目录
VuePress 作为一个静态网站生成器，它对于项目的目录是有一定的限制的，一个基本的项目结构如下所示<br>

```
|-- docs // 特定的目录
|-- README.md // 首页
|-- .vuepress // 特定的目录
|-- config.js // 特定的配置文件
|-- package.json // 脚本命令
```
