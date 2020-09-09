module.exports = {
  theme: "reco",
  themeConfig: {
    // 作者
    author: "duke",
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
    // 时间轴
    nav: [{ text: "TimeLine", link: "/timeline/", icon: "reco-date" }],
    // 评论-id和key来自LeanCloud
    valineConfig: {
      appId: "giocexAKdNJWtvVn5MuTvCm7-gzGzoHsz", // your appId
      appKey: "whqnMa5d9FEbOr22c4m7FFR3", // your appKey
    },
    noFoundPageByTencent: false,
    logo: "/android-chrome-512x512.png"
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
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
};
