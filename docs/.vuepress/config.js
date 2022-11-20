const nav = require('./nav.js');
const sidebar = require('./sidebar.js');

module.exports = {
  base: '/',
  title: '我的学习笔记',
  description: '欢迎来到我的学习笔记',
  dest: './dist',
  port: '7777',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.jpg' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav,
    sidebar,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  },
  displayFooter: true,
  footer: {
    contact: [
      {
        type: 'github',
        link: 'WWW.GITHUB.COM/XXX'
      },
    ]
  }
}
