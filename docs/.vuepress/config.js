module.exports = {
  title: "怡然的博客",
  description: "云间数点红,撞落在我怀中",
  theme: 'reco',
  base:'/blogs/',
  themeConfig: {
    author: "怡然",
    subSidebar: 'auto',
    logo: "/ava.jpg",
    authorAvatar: "/ava.jpg",
    type:'blog',
    nav: [
      { text: "首页", link: "/" },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", 
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", 
      },
    },
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: "与夏令",
            artist: "泠泠彻夜",
            url: "/yxl.mp3",
            cover: "https://imgessl.kugou.com/stdmusic/20210111/20210111190019899225.jpg",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "float",
        // 悬浮窗样式
        floatStyle: { bottom: "20px", "z-index": "999999" },
      },
    ],
  ],
};
