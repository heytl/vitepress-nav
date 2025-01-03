import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '推荐网站',
    items: [
      {
        icon: 'https://zh.z-library.sk/favicon.ico',
        title: 'Zlibray官网',
        desc: 'Zlibray 中文官网',
        link: 'https://zh.z-library.sk/',
      },
      {
        icon: 'https://zh.annas-archive.org/favicon.ico',
        title: '安娜档案馆',
        desc: '安娜档案馆',
        link: 'https://zh.annas-archive.org/',
      },
      {
        icon: 'assets/24h.png',
        title: '24H搜书',
        desc: '免费下载电子书，支持在线阅读和格式转换',
        link: 'https://24hbook.com/',
      },
    ],
  },
  {
    title: '书籍搜索',
    items: [
      {
        icon: 'https://zh.z-library.sk/favicon.ico',
        title: 'Zlibray官网',
        desc: 'Zlibray 中文官网',
        link: 'https://zh.z-library.sk/',
      },
      {
        icon: 'https://zh.annas-archive.org/favicon.ico',
        title: '安娜档案馆',
        desc: '安娜档案馆',
        link: 'https://zh.annas-archive.org/',
      },
      {
        icon: 'assets/24h.png',
        title: '24H搜书',
        desc: '免费下载电子书，支持在线阅读和格式转换',
        link: 'https://24hbook.com/',
      },
      {
        icon: 'https://www.jiumodiary.com/images/favicon.png',
        title: '鸠摩搜索',
        desc: '电子书搜索引擎',
        link: 'https://www.jiumodiary.com/',
      },
      {
        icon: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://zhiso.cc/&size=64',
        title: '知搜',
        desc: '一个聚合书籍资源的搜索引擎',
        link: 'https://zhiso.cc/',
      },
      {
        icon: 'https://www.book345.com/web_images/logo.png',
        title: '无名图书',
        desc: '高质量的书籍内容解析',
        link: 'https://www.book345.com/',
      },
      {
        icon: 'data:image/png;base64,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',
        title: 'liber3',
        desc: '一个开源的去中心化电子书搜索引擎',
        link: 'https://liber3.eth.limo/',
      },
    ],
  },
  {
    title: '中文站点',
    items: [
      {
        icon: 'https://www.mobitushu.com/favicon.ico',
        title: 'mobi图书网',
        desc: 'mobi图书资源网',
        link: 'https://www.mobitushu.com/',
      },

      {
        icon: 'https://book.zhishikoo.com/wp-content/uploads/2019/09/logo.png',
        title: '书籍知识库',
        desc: '电子书分享的资源网站',
        link: 'https://www.zhishikoo.com/',
      },
      {
        icon: 'assets/banshujiang.png',
        title: '搬书匠',
        desc: '分享各种编程语言和软件开发电子书籍',
        link: 'http://www.banshujiang.cn/',
      },
      {
        icon: 'https://www.bookstack.cn/favicon.ico',
        title: '书栈网',
        desc: 'IT 行业各种在线文档',
        link: 'https://www.bookstack.cn/',
      },
    ],
  },
  {
    title: '英文站点',
    items: [
      {
        icon: 'https://libgen.la/img/logo.png',
        title: 'Library Genesis',
        desc: 'libgen 创世纪图书馆最新地址',
        link: 'https://libgen.la',
      },
      {
        icon: 'https://libgen.la/img/logo.png',
        title: 'Library Genesis2',
        desc: 'libgen 创世纪图书馆最新地址',
        link: 'https://libgen.bz',
      },
      {
        icon: 'https://libgen.la/img/logo.png',
        title: 'Library Genesis3',
        desc: 'libgen 创世纪图书馆最新地址',
        link: 'https://libgen.li',
      },
      {
        icon: 'assets/LibSTC.svg',
        title: 'LibSTC',
        desc: '基于 IPFS 电子书搜索引擎',
        link: 'https://libstc.cc/',
      },
      {
        icon: 'https://www.gutenberg.org/favicon.ico',
        title: '谷登堡',
        desc: '谷登堡计划',
        link: 'https://www.gutenberg.org/',
      },
      {
        icon: 'https://manybooks.net/themes/custom/mnybks/logo.svg',
        title: 'ManyBooks',
        desc: '提供多种下载格式的最佳免费电子书籍资源网站',
        link: 'https://manybooks.net/',
      },
      {
        icon: 'https://www.free-ebooks.net/favicon.ico',
        title: 'free-ebooks',
        desc: 'free-ebooks',
        link: 'https://www.free-ebooks.net/',
      },
      {
        icon: 'https://www.letmeread.net/wp-content/themes/book5/favicon.ico',
        title: 'letmeread',
        desc: 'letmeread',
        link: 'https://www.letmeread.net/',
      },
    ],
  },
  {
    title: 'Kindle专区',
    items: [
      {
        icon: 'https://bookfere.com/favicon.ico',
        title: '书伴',
        desc: 'Kindle 使用技巧社区',
        link: 'https://bookfere.com/',
      },
    ],
  },
  {
    title: '数字古籍',
    items: [
      {
        icon: 'http://shuge.org/favicon.ico',
        title: '書格',
        desc: '古籍善本数字资源',
        link: 'http://shuge.org/',
      },
      {
        icon: 'https://www.cnbksy.com/public/common/image/favicon.ico',
        title: '全国报刊索引',
        desc: '上海图书馆主办主管',
        link: 'https://www.cnbksy.com/',
      },
      {
        icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ipsaulpjuh_yzj_zlp/ljhwZthlaukjlkulzlp/logo/logo.ico',
        title: '识典古籍',
        desc: '北京大学-字节跳动数字人文开放实验室',
        link: 'https://www.shidianguji.com/',
      },
    ],
  },
]
