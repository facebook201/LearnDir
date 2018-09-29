#### 卸载mysql

> brew remove mysql
>
> brew cleanup
>
> launchctl unload -w ~/Library/LaunchAgents/com.mysql.mysqld.plist
>
> rm ~/Library/LaunchAgents/com.mysql.mysqld.plist
>
> sudo rm -rf /usr/local/var/mysql



#### 安装 

>brew install mysql 
>
>// 安装mysql 服务 
>
>brew install mysql-server
>
>brew install mysqladmin 
>
>
>
>// 初始化 mysql 
>
>mysqld --initialize



#### 启动mysql

> mysql.server start

 

#### 登录 mysql

>mysql -u root -p
>
>// 有密码输密码 默认没有密码
>
>// 设置密码
>
>```
>mysqladmin -u root password "new_password";
>```

**如果忘记密码** 

> sudo pkill -9 mysql



#### 其他命令

> exit; // 退出数据库
>
> show databases; // 显示数据库
>
>  create database demo; // 创建数据库 