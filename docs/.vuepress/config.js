module.exports = {
  title: "一只小唐唐",
  theme: "reco",
  themeConfig: {
    // 主题配色
    mode: "light",
    // 作者
    author: "duke",
    // 备案号
    record: '皖ICP备2022003743号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    // 全局启用侧边栏
    sidebar: 'auto',
    // 时间轴
    nav: [
      { text: "Introduction", link: "/" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
    ],
    // 评论-id和key来自LeanCloud
    valineConfig: {
      appId: "giocexAKdNJWtvVn5MuTvCm7-gzGzoHsz", // your appId
      appKey: "whqnMa5d9FEbOr22c4m7FFR3", // your appKey
    },
    noFoundPageByTencent: false,
    logo: "/logo.png"
  },
  // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ]
};
