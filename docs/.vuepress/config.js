module.exports = {
  title: "前端自省清单",
  base: "/web-self-examination/",
  description: "全面、深入解析MDN推荐使用的JavaScript API",
  themeConfig: {
    activeHeaderLinks: true,
    repo: "https://github.com/Gavin1997/vuepress_web.git",
    repoLabel: "GitHub",
    docsDir: "docs",
    editLinks: true,
    search: true,
    searchMaxSuggestions: 10,
    editLinkText: "在 GitHub 上编辑此页",
    nav: [
      {
        text: "JavaScript",
        link: "/JavaScript/",
      },
      {
        text: "HTML",
        link: "/HTML/",
      },
      {
        text: "CSS",
        link: "/CSS/",
      },

      {
        text: "个人博客",
        link: "http://www.gavin88.top:5800",
      },
    ],

    sidebar: [
      {
        title: "javaScript",
        collapsable: true,
        children: [
          "/JavaScript/VarandTypes/",
          "/JavaScript/ProtoAndChain/",
          "/JavaScript/ScoprAndClosure/",
          "/JavaScript/ExecutionMechanism/",
          "/JavaScript/GrammarAndApi/",
          "/JavaScript/Promise/",
        ],
      },
      {
        title: "HTML",
        collapsable: true,
        children: ["/HTML/"],
      },
      {
        title: "CSS",
        collapsable: true,
        children: ["/CSS/"],
      },
      {
        title: "计算机基础",
        collapsable: true,
        children: [
          "/CoumpterBasic/FundamentalsOfCompiling/",
          "/CoumpterBasic/NetworkingProtocol/",
          "/CoumpterBasic/DesignMode/",
        ],
      },
      {
        title: "数据结构和算法",
        collapsable: true,
        children: [
          "/DataStructureAndAlgorithms/JsProgramme/",
          "/DataStructureAndAlgorithms/WebWheel/",
          "/DataStructureAndAlgorithms/DataStructure/",
          "/DataStructureAndAlgorithms/Algorithms/",
        ],
      },
      {
        title: "运行环境",
        collapsable: true,
        children: [
          "/OperatingEnvironment/BrowserAndApi/",
          "/OperatingEnvironment/BrowserPrinciple/",
          "/OperatingEnvironment/Node/",
        ],
      },
      {
        title: "框架和类库",
        collapsable: true,
        children: [
          "/FrameAndClasslib/TypeScript/",
          "/FrameAndClasslib/React/",
          "/FrameAndClasslib/Vue/",
          "/FrameAndClasslib/Multiport/",
          "/FrameAndClasslib/DataFlow/",
          "/FrameAndClasslib/PracticalLib/",
        ],
      },
      {
        title: "webGL",
        collapsable: true,
        children: [
          "/webgl/1-什么是webgl",
          "/webgl/2-初识webgl和着色器",
          "/webgl/3-坐标系与鼠标交互",
        ],
      },
      {
        title: "openLayer",
        collapsable: true,
        children: [
          "/Openlayers/地图Map",
          "/Openlayers/图层Layers",
          "/Openlayers/视图View",
          "/Openlayers/叠加层Overlay",
          "/Openlayers/交互动作Interaction",
          "/Openlayers/控件Control",
          "/Openlayers/投影Projections",
        ],
      },
      {
        title: "面试宝典",
        collapsable: true,
        children: ["/interForOther/"],
      },
    ],
    displayAllHeaders: true,
    lastUpdated: "上次更新",
  },
}
