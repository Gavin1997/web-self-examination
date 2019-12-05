# 基本的 Linux 操作命令

:::tip
使用 docker 的前提是需要对 linux 命令有浅显的认识。
:::
1、目录查看命令
ls --- 查看当前的目录下文件
ls -al --- 查看当前的目录下文件包括隐藏文件

2、 目录切换命令
cd 目录名 --- 切换目录

常用：
cd ~ 当前用户主目录
cd / 根目录
cd - 上一次访问的目录
cd .. 上一级目录
cd 当前用户主目录

touch 1.txt --- 在当前目录创建一个文件 1.txt
clear ---清除屏幕

3、目录创建命令
pwd --- 显示当前工作目录
mkdir 名称 --- 创建目录文件

4、文件操作命令
cp [源文件或目录][目标文件或目录] ---复制文件或目录

```
cp 1.txt 2.txt
cp -b 1.txt 2.txt ：如果覆盖文件时,可以将源文件做一个备份
cp ./1.txt ../ ：将当前目录下的 1.txt 复制到父级目录
cp /root/1.txt /bin/2.txt ：将/root 下的 1.txt 文件复制到根目录下的 bin 目录下的 2.txt 中
复制目录：(无论是单层目录还是多层目录都可以复制):
cp -r ./a ./b
cp -r /root/a /root/z

mv [源文件或目录][目标文件或目录] ---移动或更名现有的文件或目录
rm [文件或目录...] --- 删除文件或目录

-f 或 --force 强制删除文件或目录
-r 或 -R 或 --recursive 递归处理，将指定目录下的所有文件及子目录一并处理
强制删除文件：rm -f ./1.txt
强制删除目录：rm -rf ./a

find [目录...][参数] --- 查找文件或目录

-name 指定字符串作为寻找文件或目录的范本样式
find /root/ -name 'test*' 查找 root 目录下的文件开头是 test 的文件和文件夹，*是通配符 。注意字符串要用单引号引起来。
```

5、系统操作命令

ps -ef --- 查看当前所有进程
kill pid(进程 id) --- 删除执行中的程序或工作
kill -9 --- 表示强制终止
ifconfig --- 查看当前主机 ip
ping ip 地址 --- 测试网络连通性
ping 　-c --- 要 ping 的次数 sudo --- 管理权限 Linux centos 重启命令：reboot
Linux centos 关机命令：halt

#基本的 docker 操作命令
