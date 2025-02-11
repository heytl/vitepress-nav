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
        icon: '/icons/metaso.svg',
        title: '秘塔AI搜索',
        desc: '无需登录的AI搜索引擎',
        link: 'https://metaso.cn/',
      },
      {
        icon: 'https://chat.deepseek.com/favicon.svg',
        title: 'DeepSeek',
        desc: '幻方量化旗下深度求索推出的开源大模型和聊天助手',
        link: 'https://chat.deepseek.com/',
      },
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: '🧱OpenAI 推出的聊天机器人',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: '/icons/gemini.svg',
        title: 'Google Gemini',
        desc: '🧱Google推出的AI聊天对话机器人Bard',
        link: 'https://gemini.google.com/app',
      },
      {
        icon: '/icons/perplexity.ai.ico',
        title: 'perplexity.ai',
        desc: '🧱perplexity.ai 搜索引擎',
        link: 'https://www.perplexity.ai/',
      },
    ],
  },
  {
    title: 'AI 对话',
    items: [
      {
        icon: 'https://chat.deepseek.com/favicon.svg',
        title: 'DeepSeek',
        desc: '幻方量化旗下深度求索推出的开源大模型和聊天助手',
        link: 'https://chat.deepseek.com/',
      },
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: '🧱OpenAI 推出的聊天机器人',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: '/icons/gemini.svg',
        title: 'Google Gemini',
        desc: '🧱Google推出的AI聊天对话机器人Bard',
        link: 'https://gemini.google.com/app',
      },
      {
        icon: '/icons/poe.png',
        title: 'Poe',
        desc: '🧱问答社区Quora推出的问答机器人工具',
        link: 'https://poe.com/',
      },
      {
        icon: '/icons/xai.svg',
        title: 'Grok',
        desc: '🧱马斯克旗下xAI推出的人工智能助手',
        link: 'https://x.com/i/grok?focus=1',
      },
      {
        icon: '/icons/new-bing-icon.png',
        title: 'Bing 必应',
        desc: '🧱微软结合了ChatGPT功能的新必应',
        link: 'https://www.bing.com/',
      },
      {
        icon: '/icons/Claude.jpeg',
        title: 'Claude',
        desc: '🧱Anthropic 旗下智能助手',
        link: 'https://claude.ai/',
      },
      {
        icon: '/icons/DuckDuckGo.svg',
        title: 'DuckDuckGo',
        desc: '🧱DuckDuckGo 旗下智能助手',
        link: 'https://duckduckgo.com/?q=DuckDuckGo&ia=chat',
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
        title: '豆包',
        desc: '字节跳动旗下 AI 智能助手',
        link: 'https://www.doubao.com/chat/',
      },
      {
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        title: '文心一言',
        desc: '百度基于文心大模型的AI对话互动工具',
        link: 'https://yiyan.baidu.com/',
      },
      {
        icon: 'https://xj-psd-1258344703.cos.ap-guangzhou.myqcloud.com/image/hunyuan/brand2024/logo64@3x.png',
        title: '腾讯元宝',
        desc: '腾讯推出的免费AI智能助手',
        link: 'https://yuanbao.tencent.com/chat/',
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01asLYeX1WhbsyEZn5u_!!6000000002820-55-tps-56-56.svg',
        title: '通义千问',
        desc: '阿里云推出的一个超大规模的语言模型',
        link: 'https://tongyi.aliyun.com/qianwen/',
      },
      {
        icon: '/icons/tiangong.png',
        title: '天工AI助手',
        desc: '昆仑万维推出的免费AI智能助手',
        link: 'https://www.tiangong.cn/',
      },
      {
        icon: '/icons/xinghuo.png',
        title: '讯飞星火',
        desc: '科大讯飞推出的AI智能助手',
        link: 'https://xinghuo.xfyun.cn',
      },
      {
        icon: '/icons/deepseek.png',
        title: 'DeepSeek',
        desc: '幻方量化旗下深度求索推出的开源大模型和聊天助手',
        link: 'https://www.deepseek.com/',
      },
      {
        icon: '/icons/kimi.png',
        title: 'Kimi',
        desc: '月之暗面推出的AI智能助手',
        link: 'https://kimi.moonshot.cn/chat',
      },
    ],
  },
  {
    title: 'AI 搜索',
    items: [
      {
        icon: '/icons/perplexity.ai.ico',
        title: 'perplexity.ai',
        desc: '🧱perplexity.ai搜索引擎',
        link: 'https://www.perplexity.ai/',
      },
      {
        icon: '/icons/metaso.svg',
        title: '秘塔AI搜索',
        desc: '无需登录的AI搜索引擎',
        link: 'https://metaso.cn/',
      },
      {
        icon: '/icons/devv.ai.png',
        title: 'devv',
        desc: '🧱最懂程序员的新一代 AI 搜索引擎',
        link: 'https://devv.ai/zh',
      },
      {
        icon: 'https://picx.zhimg.com/v2-253edf392fe4507700601efc1b5b568f.png',
        title: '知乎直答',
        desc: '知乎推出的AI搜索引擎',
        link: 'https://zhida.zhihu.com/',
      },
      {
        icon: '/icons/n.png',
        title: '纳米AI搜索',
        desc: '360推出的AI搜索引擎',
        link: 'https://n.cn/',
      },
      {
        icon: '/icons/iflow.png',
        title: '心流',
        desc: '阿里旗下推出的AI搜索引擎',
        link: 'https://iflow.cn/',
      },
    ],
  },
  {
    title: 'AI 其他',
    items: [
      {
        icon: 'https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-square-logo.png',
        title: 'AI 工具集',
        desc: 'AI 工具合集导航',
        link: 'https://ai-bot.cn/',
      },
      {
        icon: '/icons/amz123.png',
        title: 'amz123的AI合集',
        desc: 'AI 工具合集导航',
        link: 'https://www.amz123.com/ai',
      },
      {
        icon: 'https://t1.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://monica.im/home',
        title: 'Monica',
        desc: '聚合多种AI的全能助手',
        link: 'https://monica.im/home',
      },
    ],
  },
]
