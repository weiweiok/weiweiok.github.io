---
layout: post
title:  "在github上建博客"
author: weiwei
categories: talk
---

折腾个博客，写写记记，留点痕迹




## 旧的回忆

![](http://imglf1.nosdn.127.net/img/MzVqS0VIeGlFdm5HYzEwWXRhUTA3T0EyUmpFaWI2TFcrdTEya1V2S0VOZ0IwcWdiKzBlcjdnPT0.png)
早年刚接触网络，还没有博客，那时候流行个人主页，在搜狐的chinaren上申请免费的主页，心思全花在怎么弄得让页面好看点，实际上毫无内容 (￣▽￣") 

后来渐渐不满足于在免费的平台上东拼西凑点html代码，复制粘贴点js特效，某一天看到一个叫龙城闪客的网站，整站都是用flash做的，简直吊炸天(@[]@!!) ，于是开始玩起flash5.0，靠着学校开的c语言入门课里学的皮毛知识研究起AS，买域名租空间用flash做了个整站，不过……依然没啥内容，只有华丽…   ( ＿ ＿)ノ｜扶墙，再后来丢了电脑源码也没备份，站点也懒得维护了，这时博客平台出现，博客中国，博客巴士，都是申请个账号进去鼓捣一番索然无趣  ╮(╯_╰)╭

终于有一天，有了写作和收藏内容的需求，在百度空间这棵大树上建了个博客，之所以选择百度空间，是因为可以自定义CSS，从此走向另一个极端，内容为主页面基本极简风，结果……几年后百度空间宣布关闭了…… (ﾟ皿ﾟﾒ)!!! 大树也靠不住啊

然后几年都没再写博，日常笔记什么的都扔硬盘了，后来一直有再整个博客的想法，这时国内博客已经是 博客园、CSDN 之类的天下了，但一直没去建，始终觉得颜值略低……另外百度空间的阴影还在ಥ_ಥ，一天在知乎无意中看到，另一条技能树的人玩腻了Wordpress，在聊GithubPage，于是去了解了下，才发现……原来5年前大神们就这么玩了…… ⊙ˍ⊙ 


## 新的开始

![](http://imglf.nosdn.127.net/img/MzVqS0VIeGlFdm5HYzEwWXRhUTA3SWdtVUVGMzJQZHNPRGM0MVVPRUw0QWl0eUhvRFlsa3V3PT0.png)
作为连git都太不会用的人，想在github上建博客，网上教程多如牛毛，我就不打算写教程了，写一下如何看教程≖‿≖✧


### 1、原理介绍

有个叫 github 的网站，为开源项目提免费供托管服务，然而并不是所有项目都有自己的“官网”，于是 github 推出了一个叫 [Github Pages](https://pages.github.com/) 的服务，免费提供300M的静态空间，还能绑定自己的域名，利用 github pages 建个博客，既免去了自己购买和维护服务器的麻烦，又能自己设计页面。

唯一的缺点它是静态空间，只能放静态文件，总不能发个文章，还要自己去去编辑一堆 html 吧，于是产生了“静态网站生成器”（以下简称生成器），顾名思义就是在电脑上安装一个程序，写好文章后，自动生成网页，只需要把生成的网页上传到 github pages 里就行了。

常见的生成器有：ruby写的[jekyll](http://jekyllrb.com/)、nodejs写的[Hexo](https://hexo.io/zh-cn/)、Go写的[Hugo](http://gohugo.io/overview/introduction/)、python写的[Pelican](https://blog.getpelican.com/) …还有很多不列举了（以上链接均为官网）。其中， jekyll 被 github pages 默认内置了，也就是说，如果不想在本地安装生成器，可以用 github page 自带的 jekyll 在线生成，后面也已 jekyll 作为介绍。

最后，这些生成器都是命令行操作，并没有 word 那么高大上的界面，怎么编辑图文呢？答案就是一种叫 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 的书写规范，通过一些约定好的文字符号，就可以用纯文本表示出图片、超级链接、标题等。这里有一个 [在线 Markdown 编辑器](https://maxiang.io/) 体验一下，立即学会。

### 2、开通 Github pages

首先，要简单学一下 Git （[廖雪峰的 Git 教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)），只用来建博客的话，了解 Git 是干什么的，学会本地安装 Git 工具，了解下 `add` 、`commit`、`push`、`clone` 4个命令就够用了。

然后，要简单学一下 Github （[许晴的 Github 注册教程和初步使用体验](http://www.cnblogs.com/-XQ-/p/5228045.html)），了解如何注册账号，如何创建库，如何生成公钥并关联到自己 github 上。

然后，跟随 （[Github Pages 官网图文步骤](https://pages.github.com/)），创建个名为 `用户名.github.io` 的仓库，然后用 `clone` 命令把远程仓库 “下载” 到本地，在仓库里创建个 `index.html` 文件，再用 `add`、`commit`、`push` 命令（均有示例） “上传” 到远程。此时用浏览器访问 `https://用户名.github.io` 就看到这个页面了。

最后，照着（[Github 帮助文档](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider)），把自己的域名，添加A记录，解析到说明中提供的 IP 地址。然后在仓库里创建个 `CNAME` 文件（无扩展名），把域名写进去（不含 http:// 和 www），然后上传，稍等片刻就可以用自己的域名来访问了。

### 3、使用 Jeykll 主题

首先，看一遍（[阮一峰的 Jekyll 入门教程](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)），基本就了解其工作原理了。

然后，到（[Jekyll 主题站](http://jekyllthemes.org/)）里，挑选一个喜欢的主题，下载下来，简单改改配置什么的，再上传到自己的 github pages 里，就能快速搭出漂亮的博客。

以后要发表新文章，直接建个 `*.md` 文件，用 Markdown 格式写好内容，再上传到自己的 github pages 的 _posts 目录里，就ok了。

然后，如果对主题有个性需求，想对下载的主题改动改动，有以下一些资源：
*  Jekyll 内置变量介绍： [Jekyll 官网文档](http://jekyllrb.com/docs/home/) （这里有个：[汉化版](http://jekyllcn.com/docs/home/)）
*  Jekyll 内置模板语法： [Liquid 官网文档](https://shopify.github.io/liquid/filters/minus/) （这里有个：[中文教程](http://blog.csdn.net/dont27/article/details/38097581)）

最后，如果想完全自己制作主题，建议在本地安装一个 Jekyll 来调试，否则每次调试都 push 到 github 很痛苦，具体安装方法官网文档和百度都有，这里有个[长篇完整教程](http://beiyuu.com/github-pages)。

### 4、其他问题

静态站点，评论功能，只能选择第三方的JS插件，常见的有： [Disqus](http://disqus.com)、[搜狐畅言](http://changyan.kuaizhan.com/) 、 [网易云跟帖](https://gentie.163.com/info.html)、[多说](http://duoshuo.com/) 、[有言](http://www.uyan.cc/) 、[来必力](https://livere.com/city-demo/city)。Disqus 是国外最好的，可惜被墙了╮(╯▽╰)╭ ，搜狐畅言是国内最好的，可惜要备案号 ╮(╯▽╰)╭ ，来必力是韩国的，支持国内社交账号，但速度一般。

然后是图片问题，Github pages 空间有限传图的话不太够用，于是需要找图床，目前还没有特别完美的方案，国外的好图床基本被墙了，国内利用社交平台发图外链会有防盗链无法使用风险，著名的七牛图床需要备案号 (￣﹏￣) ，其他一些方案见[知乎](https://www.zhihu.com/question/50747615?sort=created)。


(完)


* content
{:toc}
