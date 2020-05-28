### 一张图概览

<img :src="$withBase('/OneMap/onemap.png')" alt="foo">

---

### 一张图组件分布

<img :src="$withBase('/OneMap/onemapCompnent.png')" alt="foo">

## 路由获取

:::tip
如何根据运维中配置的组件和本地的组件一一对应

:::

1. src/路由拦截 permission.js

```js
    await store.dispatch("getUserInfo");
            // 无权限信息先获取权限信息
            const permission = await store.dispatch("userGetPermission");
            if (
              permission &&
              Array.isArray(permission) &&
              permission.length > 0 &&
              hasUserInfo()
            ) {
              // 如果权限信息获取成功，动态添加路由并继续原来的路由跳转
              const accessRoutes = await store.dispatch(
                "generateRoutes",
                permission
              );
              // 通配符404放置最后
              accessRoutes.push({ path: "*", redirect: "/404" });
              router.addRoutes(accessRoutes);
              // 同步到optios.routes对象中，方便在业务组件内部获取
              router.options.routes.push(...accessRoutes);
              loginLog();
              postCrossInfo();
              // hack method to ensure that addRoutes is complete
              // set the replace: true, so the navigation will not leave a history record
              await reSetLocalStorage(to.path, accessRoutes); // 针对子系统页面清完缓存后直接刷新情况
              next({ ...to, replace: true });
```

2. getUserInfo(根据 cookie 里存的 session-key,dist-token,region-key 等获取用户信息)

3. userGetPermission(根据用户信息获取对应权限-也就获取路由列表)

4. 触发 store 下的 generateRoutes(传入用户获取的权限路由表)再触发 utils/permission 下的 generateAsyncRoutes 方法,比较本地数据和权限路由表返回实际路由表

## 一张图进入时初始化操作

#### 一张图存储的 store

```js
  // 打开的专题
    openedTopics: state => {
      return state.openedTopics;
    },
    // 打开的专题Guid集合
    openedTopicGuids: state => {
      return state.openedTopicGuids;
    },
    // 收藏的专题
    favoriteTopics: state => {
      return state.favoriteTopics;
    },
    // 专题透明度
    topicOpacityHash: state => {
      return state.topicOpacityHash;
    },
    // 一张图专题过滤条件
    topicFilterHash: state => {
      return state.topicFilterHash;
    },
    // 地图范围
    mapExtent: state => {
      return state.mapExtent;
    },
    // 一张图加载的外部数据图层
    newLayers: state => {
      return state.newLayers;
    },
    // 加载的外部shp图层
    newShpLayer: state => {
      return state.newShpLayer;
    },
    // 地图对象
    mapObj: state => {
      return state.mapObj;
    },
    //  一张图映射服务关系（专题中配了切片and动态，做障眼法使用）暂未使用 //TODO:
    mappingService: state => {
      return state.mappingService;
    }
```

## 一张图入口 OneMap.vue

1. 渲染组件
   | component            | 组件功能                 |   备注   |
   | -------------------- | ------------------------ | :------: |
   | NrTopicTree          | 资源目录树组件           |
   | NrProductTree        | 专题分析产品树组件       |
   | NrMapFavorites       | 收藏夹                   |
   | nr-topMenu           | 顶部菜单栏               |
   | NrTopicFileView      | 资源目录专题关联专题查看 |
   | NrTopicTree_Ministry | 资源树                   | 部里特有 |
   | NrTopicProductTree   | 数据专题                 | 部里特有 |
   - 渲染 distMap 组件
     | component        | 组件功能                     |                                    备注                                    |
     | ---------------- | ---------------------------- | :------------------------------------------------------------------------: |
     | eyemap-map       | eyemap 地图组件              | 地图准备好以后,mapExent 以及 mapObj 存入 store`map mapDiv, mapView mapRef` |
     | nr-mapCoordinate | 比例尺组件                   |
     | nr-mapToggle     | 底图切换组件                 |
     | nr-topicResource | 专题资源管理组件(运维中配置) |
     | nr-mapToolBar    | 地图工具栏                   |
     | nr-regionList    | 区域选择组件                 |
     | nr-timeSelector  | 时间线组件                   |

## 资源目录的加载与操作

通过 utils/manager/topicManager.js 管理工具 管理 TopicTree 的各种操作和状态

那么专题的数据从哪里来?
运维获取和用户 systemcode 关联起来了

- api
  `getTopicTree(systemcode)`获取当前用户的所有专题,异步 Promise 方法（来源于运维）
- Vuex
  - `YZT_OPENED_TOPICS`, 一张图打开的专题
  - `YZT_FAVORITE_TOPICS`, 一张图收藏的专题
  - `YZT_OPACITY_TOPICS` 一张图专题透明度

:::tip
打开专题-> 地图为何会渲染专题图层?->并且获取相应的图列信息?
:::

1. 通过 store 获取上面保存的 mapObj 对象取其中的 mapRef 触发`toggleSetMap(点击专题item)`事件
2. 触发 topicManager.js 里的`openTopicsByGuids(专题的guid,mapRef)`事件
3. 最后触发`openTopics(topicInfo,eyeMap(mapRef)`事件
   ```js
   async function openTopics(topics, eyeMap, isRecord = true) {
   for (let i = 0; i < topics.length; i++) {
    let topicInfo = topics[i];
    let operationLayers = [];
    if (topicInfo.layers && topicInfo.layers.length > 0) {
      topicInfo.layers.forEach(layerInfo => {
        if (window.__NETWORK__ === "intranet") {
          if (layerInfo.resourceType === "WMTSServer") {
            layerInfo.type = "wmts";
          } else if (layerInfo.resourceType === "MapServer") {
            if (layerInfo.cacheType === 1) {
              layerInfo.type = "dynamic";
              layerInfo.layerIndex = -1;
            } else if (layerInfo.cacheType === 2) {
              layerInfo.type = "tiled";
              layerInfo.layerIndex = -1;
            }
          }
        }
        let layerObj = {
          name: topicInfo.name,
          url: layerInfo.serviceUrl,
          layerID: layerInfo.layerIndex,
          type: layerInfo.type,
          params: layerInfo.params
        };
        if (
          topicInfo.hasOwnProperty("opacity") &&
          topicInfo.opacity !== undefined
        ) {
          layerObj.opacity = topicInfo.opacity;
        }
        if (
          topicInfo.hasOwnProperty("filter") &&
          topicInfo.filter !== undefined
        ) {
          layerObj.filter = topicInfo.filter;
        }
        operationLayers.push(layerObj);
      });
    }
    if (!eyeMap) {
      eyeMap = store.getters.mapObj.mapRef;
    }
    await eyeMap.addLocateLayers_1(operationLayers, false);
    addToOpenedTopics(topicInfo, isRecord);
   }
   ```
4. 此时会找到专题对应的地图服务类型获取图层信息,然后触发 eyemap 里面的 layers/`layerUtils.js` 方法中的图层方法.
   :::tip
   大多数图层方法都在此文件里面,若有相关对应的图层操作,可到此文件里查询方法
   :::

   - 例如专题全图方法 定位到专题图范围

   ```js
    toggleExtentSet(curTopicItem) {
      let mapRef = this._getMapRef();
      if (mapRef === null) {
        console.log("map容器未获取到");
        return;
      }
      mapRef.zoomToLayers(curTopicItem.layers, true);
      this.popTipVisible = false;
    },
   ```

   此时`zoomToLayers`可在 layerUtils 中查看

5. 此时调用 eyeMap 的 addLocateLayers_1 的方法后.此方法中回去调用**Legend**组件 EventBus 中的设置地理特征矢量元素图层`setFeatureLegend`方法 传入对应图层信息然后获取图列

## 管理工具

:::tip
Widget 管理工具,管理 widget 的各种操作和状态
创建动态组件实例 widget, 分为 router 组件,inOverlay 全局组件,inpanel 弹窗组件;
Panel 管理器,用于管理弹窗组件的相关事件和操作,同时挂载在 panel 中的 widget 由 panel 管理,不由 widgetManager 管理
:::
<img :src="$withBase('/OneMap/widget.png')" alt="foo">

## 顶部工具栏

`SearchLocation(地名,道路,地区查询)`
<img :src="$withBase('/OneMap/searchLocation.png')" alt="foo">

剩下的`SpaceAnalysisTools(空间分析和查询)`是由一个面包屑组件+下拉菜单组合而成的,每一个功能都对应一个组件,统一由 widget 工具来管理他的加载与销毁;

#### 数据加载

| 加载方式      |           区别           |
| ------------- | :----------------------: |
| 加载 CAD 数据 |         不可编辑         |
| 加载 SHP 数据 | 可编辑点线面的颜色和形式 |

加载 CAD 数据
加载 SHP 数据

**流程:上传 CAD/SHP 数据->加载至地图场景->专题制图->导出图片**

#### 空间查询/数据查询

##### 指标一键式查询 IndicatorsQuery.vue

<img :src="$withBase('/OneMap/indexQuery.png')" alt="foo">

##### 总规项目查询 ProjectQuery.Vue

<img :src="$withBase('/OneMap/zgQuery.png')" alt="foo">

##### 条件组合查询 ConditionalCombinationQuery.Vue

<img :src="$withBase('/OneMap/conditionQuery.png')" alt="foo">

---

#### 用地统计 Ledger(台账)vue

| 统计方式                 |       配置文件        |
| ------------------------ | :-------------------: |
| 两规差异图斑统计         |      ledger.json      |
| 三线分布统计             |      ledger.json      |
| 国土空间规划基本分区统计 |      ledger.json      |
| 国土空间规划用途分类统计 |      ledger.json      |
| 项目周边用地配置         | surroundProjects.json |

选择范围方式,四选一,本质上是一个功能(除项目周边用地配置外)

<img :src="$withBase('/OneMap/LandStatistics.png')" alt="foo">

配置文件
<img :src="$withBase('/OneMap/landStatisticsParams.png')" alt="foo">

##### 项目周边用地 SurroundProjects.vue

<img :src="$withBase('/OneMap/surroundProjects.png')" alt="foo">

---

#### 设施统计

##### 项目周边设施统计 SurroundProjects.vue

和项目周边用地一样,配置文件也一致 **SurroundProjects.json**
| 统计方式         |         区别          |
| ---------------- | :-------------------: |
| 项目周边用地统计 | 图层类型为 polygon 面 |
| 项目周边设施统计 |   图层类型为 point    |

##### 设施总量与分布统计 facilityDistribute.vue

流程: 选择设施类型->选择统计范围
配置文件: **facilityDistribute.json** 主要配置设施图层 专题 guid 字段:设施名称

---

#### 项目审查

##### 合规审查 GHSS/ComplianceCheck.vue

##### 项目列表 GHSS/ProjectCreatePage

<img :src="$withBase('/OneMap/examine.png')" alt="foo">

---

#### 空间分析

##### 两规差异分析 ConflictAnalysis.vue

##### 三线冲突分析 ConflictAnalysis.vue

<img :src="$withBase('/OneMap/chongtu.png')" alt="foo">

两规差异分析和三线冲突分析两个逻辑相同

---

##### 自定义缓冲区分析 CustomBufferAnalysis.vue

<img :src="$withBase('/OneMap/customBuffer.png')" alt="foo">

##### 设施覆盖用地分析 facilityCoverLandAnalysis.vue

<img :src="$withBase('/OneMap/coverLand.png')" alt="foo">

##### 用地冲突分析 LandConflictAnalysis.vue

<img :src="$withBase('/OneMap/LandConflictAnalysis.png')" alt="foo">

## 专题分析 NrProductTree.vue

<img :src="$withBase('/OneMap/NrProductTree.png')" alt="foo">

## 地图工具 NrToolBar.vue

### TopicManage（专题管理），popPanel 组件

可拖拽组件 vuedraggable，内部以 TopicItem 作为子项，数据源自 opendTopics（即已经打开的专题）

#### TopicClose（专题关闭），非 panel，非 overlay

WidgetManager 的 `closeWidgetByCode`方法
TopicManager 的 `closeAllTopics` 方法

### MapSplitScreen（分屏分析），overlay 组件

1. isOverlay=true，createWidgetByCode 触发 OneMap.vue 中监听的 overlayCompont 事件和 getComponentByFileName，分别用于挂载实例和获取实例
2. 根据 tabName 判断左部渲染 dataOption 组件和 screenOption 组件
3. tabName === 分屏配置，渲染 screenOption 组件
   <img :src="$withBase('/OneMap/split.png')" alt="foo">

### TopicMake（专题制图），overlay 组件

加载从一张图继承过来的专题图层,使用 html2canvas 各种图片要素，生成图片

### DataQuery (属性查询)

1.  选定区域后点击，触发 drawGeometry 时间，并调用回调函数 drawGeometryHandler 获取图层数据，setTreeAndTable 函数将数据填入 treeData 并通过 renderQueryResult 渲染
2.  locateQueryResult 改变渲染表数据，同时改变视图显示区域

### toolbox(工具箱)

  <img :src="$withBase('/OneMap/toolbox.png')" alt="foo">

## 区域选择 RegionList.vue

- RegionPageOne（省级）
- RegionPageTwo（市级）
- RegionPageThree（区县级）
- RegionSearch（搜索）

## 底图切换 NrMapToggle.vue

1. utils/proxy.js 处理地图相关信息 显示范围、服务代理、底图切换、服务列表存入 vuex
