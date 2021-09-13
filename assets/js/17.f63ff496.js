(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(e,r,o){"use strict";o.r(r);var v=o(42),_=Object(v.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"docker-操作命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-操作命令"}},[e._v("#")]),e._v(" docker 操作命令")]),e._v(" "),o("p",[e._v("docker images --- 查看所以镜像")]),e._v(" "),o("p",[e._v("docker search 镜像名 --- 搜索相关镜像")]),e._v(" "),o("p",[e._v("docker pull（-a） 镜像名:版本号 --- 　拉取镜像,-a pull all")]),e._v(" "),o("p",[e._v("docker push 192.168.0.100:5000/ubuntu 　---　 推送镜像库到私有源")]),e._v(" "),o("p",[e._v("docker rmi（-f） 镜像名：版本号/镜像 ID --- 　　删除镜像 （加上 -f 参数 强制删除）")]),e._v(" "),o("p",[e._v("docker rmi $(docker images -q)　---　删除所有镜像")]),e._v(" "),o("p",[e._v("docker ps --- 查看所以的容器")]),e._v(" "),o("p",[e._v("docker ps -a --- 查看所有容器的状态")]),e._v(" "),o("p",[e._v("docker exec -it 容器 name /bin/sh --- 进入容器")]),e._v(" "),o("p",[e._v("exit --- 退出容器")]),e._v(" "),o("p",[e._v("docker start/stop id/name[name...] --- 启动/停止某个（多个）容器")]),e._v(" "),o("p",[e._v("docker kill name[name...] --- 强制中断")]),e._v(" "),o("p",[e._v("docker restart name[name...] --- 重启")]),e._v(" "),o("p",[e._v("docker pause name 　--- 暂停")]),e._v(" "),o("p",[e._v("docker unpause name --- 继续")]),e._v(" "),o("p",[e._v("docker rm name[name...] --- 移除容器(需要停止)")]),e._v(" "),o("p",[e._v("docker ps -a // 查看所有容器 $ docker ps -a -q "),o("code",[e._v("查看所有容器ID")]),e._v("\ndocker stop $(docker ps -a -q) "),o("code",[e._v("stop 停止所有容器")]),e._v("\ndocker rm $(docker ps -a -q) "),o("code",[e._v("remove 删除所有容器")])]),e._v(" "),o("p",[e._v("docker rmi （-f） name[name...] --- 移除镜像(-f:强制移除运行中容器)")]),e._v(" "),o("p",[e._v("一键删除所有 tag 为 none 的镜像")]),e._v(" "),o("p",[o("code",[e._v("docker images|grep none|awk '{print $3}'|xargs docker rmi")])]),e._v(" "),o("p",[e._v("先删除容器再删除镜像`")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("更详细的操作命令"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"具体操作流程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#具体操作流程"}},[e._v("#")]),e._v(" 具体操作流程")]),e._v(" "),o("h3",{attrs:{id:"上传本地镜像到远程仓库"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#上传本地镜像到远程仓库"}},[e._v("#")]),e._v(" 上传本地镜像到远程仓库")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("首先本地需要安装 docker,并且启动 docker,配置 ip 地址")])]),e._v(" "),o("ol",[o("li",[e._v("连接远程镜像仓库 （"),o("code",[e._v("docker login")]),e._v(" ip 地址:端口号）输入账户密码 提示成功")]),e._v(" "),o("li",[e._v("拉取仓库中的镜像到本地仓库 ("),o("code",[e._v("docker pull 镜像名:版本号")]),e._v(")")]),e._v(" "),o("li",[e._v("查看仓库中所有镜像 （"),o("code",[e._v("docker images")]),e._v(" ）")]),e._v(" "),o("li",[e._v("编写自己的 dockerfile 文件")]),e._v(" "),o("li",[e._v("build 当前镜像中的 dockerfile 文件，生成新的 dockerfile 文件。 （"),o("code",[e._v("docker build -t 镜像名：tag .")]),e._v("）")]),e._v(" "),o("li",[e._v("本地测试是否 build 成功 【本步骤可省略】， （"),o("code",[e._v("docker run -p 8081:80 -d --name 容器名 镜像名：tag")]),e._v("）")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v('-p, --publish=[]， 指定容器暴露的端口\n-d, --detach=false， 指定容器运行于前台还是后台，默认为 false\n--name=""， 指定容器名字，后续可以通过名字进行容器管理，links 特性需要使用名字\n::: 7. 查看当前运行的容器 （'),o("code",[e._v("docker ps")]),e._v(" ） 8. 测试成功后上传镜像， （"),o("code",[e._v("docker push 镜像名：tag")]),e._v("）")]),e._v(" "),o("h3",{attrs:{id:"在服务器上更新-docker-镜像"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#在服务器上更新-docker-镜像"}},[e._v("#")]),e._v(" 在服务器上更新 docker 镜像")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("docker images")]),e._v(" 查看本地 docker 镜像")]),e._v(" "),o("li",[e._v("找个路径 cd Downloads/ -> "),o("code",[e._v("docker save -o nr.tar(名字.tar包) 10.1.32.209:9081/dist/nr-web-app:v1024(镜像:tag)")])]),e._v(" "),o("li",[o("code",[e._v("scp nr.tar root@10.1.32.194:/root")]),e._v("\n或者 "),o("code",[e._v("scp -r -P 15874 nginx.conf root@52.82.117.147:/root/docker-images")])]),e._v(" "),o("li",[o("code",[e._v("登录 ssh root@10.1.32.194")])]),e._v(" "),o("li",[e._v("上传 "),o("code",[e._v("docker load -i nr.tar(名字.tar包)")])]),e._v(" "),o("li",[e._v("查看 docker 服务 "),o("code",[e._v("docker service ls")])]),e._v(" "),o("li",[e._v("更新某个服务下的镜像 "),o("code",[e._v("docker service update front_nr-frontend --image 10.1.32.209:9081/dist/nr-web-app:v1024")])])])])])}),[],!1,null,null,null);r.default=_.exports}}]);