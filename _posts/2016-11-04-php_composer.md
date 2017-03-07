---
layout: post
title:  "PHP-Composer 入门笔记"
author: weiwei
categories: php
---

![](https://getcomposer.org/img/logo-composer-transparent5.png)
最近看 Laravel 需要用到 Composer，之前没用过，了解了一下。





## 一、Composer 是什么

### 相关资源

官网：[https,://getcomposer.org](https://getcomposer.org)

国内汉化版官网：[http://phpcomposer.com](http://phpcomposer.com)

国内资源镜像：[http://pkg.phpcomposer.com](http://pkg.phpcomposer.com)

### 官方文档里节选２段

> “Composer 是 PHP 中的依赖关系管理工具。
> 它允许您声明项目依赖的库，它将为您管理（安装/更新）它们。”
  
> “Composer 和包管理器（Yum、Apt）不是一种东西。
> 它灵感来自 node's 的 npm 和 ruby 的 bundler。”


### 通俗理解

就是在项目中，根据自定义一份声明，自动下载需要的依赖包和库文件。

## 二、安装

Composer 需要 PHP5.3.2+ 以上版本，支持跨平台。
  
### Windows 下安装

　　有两种方法，第一种是使用安装程序。官网下载地址，[https://getcomposer.org/Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)

　　第二种是在命令提示行下通过命令完成，和 linux 安装过程类似，感兴趣可看官方文档，在 win 下用命令感觉真没必要，所以推荐第一种。
  
### Linux 下安装

首先，切换到 php 安装目录，下载安装脚本（一个php文件）：
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

如果下载失败报错，一般是 php 没开启 openssl 或 openssl 版本太老，
可以开启 openssl，或者试试 https 改成 http，或者干脆用 curl 下载：
```bash
curl -sS https://getcomposer.org/installer
```

然后，执行安装脚本，
脚本会分析本地php环境，并下载对应版本的 composer.phar 文件：
```bash
php composer-setup.php
```

然后，执行命令，如果出现帮助信息，说明安装成功：
```bash
php composer.phar
```

## 三、让 composer 命令全局可用

由于一些下载的脚本会直接执行 `php` 或 `composer` 命令，这些脚本并不会先切换到本地的 php 目录去执行 `php composer.phar` 命令，所以需要为了方便，需要让这2个命令全局可用。

### Windows 下设置办法

如果是用安装包安装，请忽略本步，如果是手工安装，继续看：
首先，在 composer.phar 同目录中创建一个 `composer.bat` 文件，内容如下：

```bash
php "%~dp0composer.phar" %*
```

然后，把这个**目录**和 php.exe 所在**目录**都设置到系统环境变量 `PATH` 中

### Linux 下设置方法

把 `composer.phar` 文件放到环境变量 PATH 目录中，并重命名为 `composer`

```bash
mv composer.phar /usr/local/bin/composer
```

### 测试

在任何位置输入 `php -v` 和 `composer --version` 都能显示出结果（需重新打开命令提示符），表示成功。


## 四、使用 Composer 安装其他项目

例如，用 Composer 安装 Laravel ，打开命令行窗口（windows）或控制台（Linux），由于国内你懂得原因，下载源被墙，执行如下命令，可将下载源切换到国内镜像：

```bash
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

然后切换到要安装 Laravel 的目录，执行安装：

```bash
composer create-project laravel/laravel --prefer-dist
```

即可在该目录中安装一个目录名为 laravel 的新的 Laravel 应用，如果安装报错：

```bash
[RuntimeException] 

Could not load package classpreloader/classpreloader in http://packagist.org: [UnexpectedValueException] Could not parse version constraint ^1.2.2: Invalid version string "^1.2.2"
```

则表示需要更新 Composer：

```bash
composer self-update
```

## 五、使用 Composer 为项目进行依赖管理

首先，在项目中创建一个 composer.json 文件，文件内格式如下：

```json
{
    "require": {
        "供应商名/项目名": "版本号（支持通配符）",
        "monolog/monolog": "1.0.*",
         ……
    },

    "repositories": {
        "packagist": {
            "type": "composer",
            "url": "https://packagist.phpcomposer.com"
        }
    }
}
```


require 里指定依赖（要加载）的包信息，
repositories 里指定包下载源改成国内镜像 url，原因见上文。


然后，下载包文件：
```bash
composer -d=项目(即存放composer.json的目录)路径 install
```

然后，等待完成，完成后，项目目录中会多一个 vendor 文件夹和 composer.lock 文件：

* **composer.lock 文件**

用途是记录首次下载依赖包的版本。由于 .json 文件中指定的包版本可以是动态的（比如利用通配符指定 >2.0 的最新版本），为保证一致性，重新安装时，会优先检查.lock文件是否存在，如果存在则会忽略 .json 中的把定义。

* **vendor 文件夹**

里面包含两部分内容：
第一部分， composer 子目录和 autoload.php 文件是 composer 生成用来自动加载的方法。
第二部分，即其它子目录就是自动下载的包文件，目录结构是：
```bash
./vendor/供应商名/包名/包文件……
```


然后，在php代码中利用自动加载功能使用包：

```php
<?php
    // 包含 Composer 生成的自动加载脚本
    require 'vendor/autoload.php';

    // 直接使用第三方包
    $log = new Monolog\Logger('name');
    $log->pushHandler(new Monolog\Handler\StreamHandler('app.log', Monolog\Logger::WARNING));
    $log->addWarning('Foo');

?>
```

(完)


* content
{:toc}