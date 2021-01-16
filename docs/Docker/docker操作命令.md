# docker 操作命令

docker images --- 查看所以镜像

docker search 镜像名 --- 搜索相关镜像

docker pull（-a） 镜像名:版本号 --- 　拉取镜像,-a pull all

docker push 192.168.0.100:5000/ubuntu 　---　 推送镜像库到私有源

docker rmi（-f） 镜像名：版本号/镜像 ID --- 　　删除镜像 （加上 -f 参数 强制删除）

docker rmi \$(docker images -q)　---　删除所有镜像

docker ps --- 查看所以的容器

docker ps -a --- 查看所有容器的状态

docker exec -it 容器 name /bin/sh --- 进入容器

exit --- 退出容器

docker start/stop id/name[name...] --- 启动/停止某个（多个）容器

docker kill name[name...] --- 强制中断

docker restart name[name...] --- 重启

docker pause name 　--- 暂停

docker unpause name --- 继续

docker rm name[name...] --- 移除容器(需要停止)

docker ps -a // 查看所有容器 \$ docker ps -a -q `查看所有容器ID`
docker stop \$(docker ps -a -q) `stop 停止所有容器`
docker rm \$(docker ps -a -q) `remove 删除所有容器`

docker rmi （-f） name[name...] --- 移除镜像(-f:强制移除运行中容器)

一键删除所有 tag 为 none 的镜像

`docker images|grep none|awk '{print $3}'|xargs docker rmi`

先删除容器再删除镜像`

[更详细的操作命令](https://www.runoob.com/docker/docker-command-manual.html)

## 具体操作流程

### 上传本地镜像到远程仓库

:::tip
首先本地需要安装 docker,并且启动 docker,配置 ip 地址
:::

1. 连接远程镜像仓库 （`docker login` ip 地址:端口号）输入账户密码 提示成功
2. 拉取仓库中的镜像到本地仓库 (`docker pull 镜像名:版本号`)
3. 查看仓库中所有镜像 （`docker images` ）
4. 编写自己的 dockerfile 文件
5. build 当前镜像中的 dockerfile 文件，生成新的 dockerfile 文件。 （`docker build -t 镜像名：tag .`）
6. 本地测试是否 build 成功 【本步骤可省略】， （`docker run -p 8081:80 -d --name 容器名 镜像名：tag`）

::: tip
-p, --publish=[]， 指定容器暴露的端口
-d, --detach=false， 指定容器运行于前台还是后台，默认为 false
--name=""， 指定容器名字，后续可以通过名字进行容器管理，links 特性需要使用名字
::: 7. 查看当前运行的容器 （`docker ps` ） 8. 测试成功后上传镜像， （`docker push 镜像名：tag`）

### 在服务器上更新 docker 镜像

1. `docker images` 查看本地 docker 镜像
2. 找个路径 cd Downloads/ -> `docker save -o nr.tar(名字.tar包) 10.1.32.209:9081/dist/nr-web-app:v1024(镜像:tag)`
3. `scp nr.tar root@10.1.32.194:/root`
   或者 `scp -r -P 15874 nginx.conf root@52.82.117.147:/root/docker-images`
4. `登录 ssh root@10.1.32.194`
5. 上传 `docker load -i nr.tar(名字.tar包)`
6. 查看 docker 服务 `docker service ls`
7. 更新某个服务下的镜像 `docker service update front_nr-frontend --image 10.1.32.209:9081/dist/nr-web-app:v1024`
