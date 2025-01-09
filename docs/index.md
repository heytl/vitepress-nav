---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: PigAA
  text: 导航合集站
  tagline: 基于 VitePress 的个人导航合集页面
  image:
    src: /logo.png
    alt: 猪阿阿的导航站
  actions:
    - text: 影视导航
      link: /tv/
    - text: 书籍导航
      link: /book-nav/
      theme: alt
    - text: AI 导航
      link: /ai-nav/
    - text: 茂茂前端导航
      link: https://notes.fe-mm.com/nav
      theme: alt
    # - text: 测试页
    #   link: /test
    #   theme: alt
features:
  - icon: 📽️
    title: 影视导航
    details: 整理各类在线、下载、网盘等影视站<br />方便大家观看
    link: tv
    linkText: 找影视看一看
  - icon: 🤖
    title: AI 导航
    details: 整理各类 AI 相关的网站<br />方便大家学习
    link: ai-nav
    linkText: 找 AI 聊一聊
  - icon: 📘
    title: 书籍导航
    details: 整理各类下载电子书籍的网站<br />方便大家阅读
    link: book-nav
    linkText: 找本书读一读
  - icon: 👀
    title: 影视在线看
    details: 整理各类在线看影视的网站<br />方便大家观看
    link: tv/#在线观看
    linkText: 在线观看
  - icon: 📘
    title: 书籍搜一搜
    details: 整理各类搜索电子书籍的网站<br />方便大家查找
    link: book-nav/#书籍搜索
    linkText: 书籍搜索
  - icon: 📝
    title: 更新日志。
    details: 记录本站的更新日志<br />方便大家查看
    link: changelog
    linkText: 看一看更新日志
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
