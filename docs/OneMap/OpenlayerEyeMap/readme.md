## openlayer版本eyemap

## 目录结构

``` 

│  │  ├─ EyeMap
│  │  │  ├─ Analysis
│  │  │  │  └─ AnalysisUtils.js # 分析
│  │  │  ├─ DrawAndMeasure
│  │  │  │  └─ DrawManager.js # 画图
│  │  │  ├─ Layer
│  │  │  │  ├─ arcgis
│  │  │  │  │  ├─ ArcGISImageLayer.js 
│  │  │  │  │  ├─ ArcGISImageTileLayer.js 
│  │  │  │  │  ├─ ArcGISTileLayer.js
│  │  │  │  │  └─ ArcGISXYZTileLayer.js
│  │  │  │  ├─ layerUtils.js
│  │  │  │  ├─ other
│  │  │  │  │  ├─ TDTLayer.js # 天地图
│  │  │  │  │  └─ TDTLayerWMTSSource.js
│  │  │  │  └─ supermap
│  │  │  │     ├─ SuperMapImageLayer.js
│  │  │  │     ├─ SuperMapImageSource.js
│  │  │  │     ├─ SuperMapTileLayer.js
│  │  │  │     └─ SuperMapTileSource.js
│  │  │  ├─ Legend
│  │  │  │  ├─ Legend.js
│  │  │  │  ├─ Legend.vue
│  │  │  │  ├─ LegendItem.vue
│  │  │  │  ├─ LegendItemItem.vue
│  │  │  │  └─ LegendUtils.js
│  │  │  ├─ Map
│  │  │  │  ├─ Map.vue
│  │  │  │  └─ index.js
│  │  │  ├─ Query
│  │  │  │  ├─ QueryManager.js # 查询管理
│  │  │  │  └─ QueryTask.js # 查询封装
│  │  │  ├─ Render
│  │  │  │  └─ renderUtils.js # 渲染方法
│  │  │  ├─ Style
│  │  │  │  └─ StyleUtils.js # 样式封装
│  │  │  └─ Utils
│  │  │     ├─ MapUtils.js # 地图方法封装 getLayer 创建矢量图等
│  │  │     ├─ ServiceBase.js # ol.supermap 的服务基类。
│  │  │     ├─ ThemeService.js # 获取专题图信息supermap
│  │  │     ├─ Util.js  # 地图基本方法工具类
│  │  │     ├─ baseUtils.js
│  │  │     ├─ http.js
│  │  │     ├─ locateUtils.js # 定位方法
│  │  │     ├─ mapGrind.js # 地图研磨
│  │  │     ├─ offScreenCanvas.js # offScreenCanvas
│  │  │     └─ worker.js # offScreenCanvasWorker
```

## 地图初始化配置

``` js
{
  /*
    设置用户进入系统地图页面的显示范围，根据用户所在组织机构的行政区划代码进行查询
    若用户对应的行政区划代码为000000000000，则不进行查询直接走下一个“extent”节点
    若为其他行政区划代码，则通过对应的url和field进行查询定位
  */
  "map_locate": {
    "url": "http://***/arcgis/rest/services/SCST/XZQH_polygon/MapServer",
    "field": "CODE"
  },
  /*
    若运维中给某个用户(组织机构)配了行政区划代码为000000000000，则走该条配置
    通过中心点+比例尺进行定位
    x,y为地图中心点坐标，zoom为比例尺级别，scale为比例尺数值
    其中zoom、scale任意设置其中一个，遍历这2个参数，某个参数有值时就取该参数，并不再向后遍历
    若用zoom定位，scale会被忽略；若用scale定位，zoom设置为null即可
    wkid为地图空间坐标参考
  */
  "extent": {
    "x": 107.871,
    "y": 34.444,
    "zoom": 4,
    "scale": 1.9837624000000007E7,
    "wkid": 4490,
    "coordinate": {
      "epsg": "EPSG:4490",
      "units": "meter",
      // proj为通用坐标系转换工具它将地理空间坐标从一个坐标系转换为另一个坐标系。这包括地图投影和大地坐标变换,epsg.io查看 openlayer默认为epsg:4326和3587
      "proj": "+proj=longlat +ellps=GRS80 +no_defs",
      "extent": [107.62672089216353, 24.874617665735485, 112.34700616779583, 29.594902941367778],
      "esriSpatialReference": {
        "wkid": 4490
      }
    }
  },
  /*
    天地图的配置信息，一般情况下是不需要修改的
    若系统中没有天地图，也不需要删除
  */
  "tileInfo": {
    "dpi": 96,
    "rows": 256,
    "cols": 256,
    "compressionQuality": 0,
    "origin": {
      "x": -180,
      "y": 90
    },
    "spatialReference": {
      "wkid": 4490
    },
    "lods": [{
        "level": 3,
        "resolution": 0.17578125,
        "scale": 7.39573388636414E7
      },
      {
        "level": 4,
        "resolution": 0.087890625,
        "scale": 3.69786694318207E7
      },
      {
        "level": 5,
        "resolution": 0.0439453125,
        "scale": 1.848933471591035E7
      },
      {
        "level": 6,
        "resolution": 0.02197265625,
        "scale": 9244667.357955175
      },
      {
        "level": 7,
        "resolution": 0.010986328125,
        "scale": 4622333.678977588
      },
      {
        "level": 8,
        "resolution": 0.0054931640625,
        "scale": 2311166.839488794
      },
      {
        "level": 9,
        "resolution": 0.00274658203125,
        "scale": 1155583.419744397
      },
      {
        "level": 10,
        "resolution": 0.001373291015625,
        "scale": 577791.7098721985
      },
      {
        "level": 11,
        "resolution": 0.0006866455078125,
        "scale": 288895.85493609926
      },
      {
        "level": 12,
        "resolution": 0.00034332275390625,
        "scale": 144447.92746804963
      },
      {
        "level": 13,
        "resolution": 0.000171661376953125,
        "scale": 72223.96373402482
      },
      {
        "level": 14,
        "resolution": 8.58306884765625e-5,
        "scale": 36111.98186701241
      },
      {
        "level": 15,
        "resolution": 4.291534423828125e-5,
        "scale": 18055.990933506204
      },
      {
        "level": 16,
        "resolution": 2.1457672119140625e-5,
        "scale": 9027.995466753102
      },
      {
        "level": 17,
        "resolution": 1.0728836059570313e-5,
        "scale": 4513.997733376551
      },
      {
        "level": 18,
        "resolution": 5.3644180297851563e-6,
        "scale": 2256.998866688275
      }
    ]
  }
}
```

## 图层管理

* 加载图层组

``` js
 Layers: [{
   layerID: 4
   name: "合规审查面"
   platform: "arcgis"
   type: "dynamic"
   url: "http://***/arcgis/rest/services/YZT/JSFW/MapServer"
 }]
 isLocate 是否定位
 isRenderLegend 是否渲染图例

 addLocateLayers(layers, isLocate = true, isRenderLegend = true)
```

* 加载单个图层

``` js
layerInfo: {
  layerID: 4
  name: "合规审查面"
  platform: "arcgis"
  type: "dynamic"
  url: "http://***/arcgis/rest/services/YZT/JSFW/MapServer"
}
isLocate 是否定位
isRenderLegend 是否渲染图例
group 默认为0, 但一般使用加载图层组的时候为1, 避免加载租的时候定位重复, 单独调用此方法可不传
addLocateLayer(layerInfo, isLocate = false, isRenderLegend = true, group = "0")
```

* 删除图层组

``` js
layers: [{
  id: "",
  platform: "",
  type: "",
  url: "",
  layerID: "",
  layerName: ""
}]
removeLayers(layers)
```

* 删除图层

``` js
// 参数同上
removeLayer(layerInfo)
```

* 关闭图层组

``` js
// 参数同上
closeLayers(layers)
```

* 关闭图层

``` js
// 参数同上
closeLayer(layerInfo)
```

* 缩放到专题

``` js
layers: [] 图层组
zoomToLayers(layers)
```

* 改变图层组的透明度

``` js
layers: [] 图层组
opacity: 0 - 1 透明度
changeLayersOpacity(layers, opacity)
```

* 改变图层的透明度

``` js
changeLayerOpacity(layerInfo, opacity)
```

* 获取图层元数据信息&&判断服务图层是否存在

``` js
serviceUrl - 图层服务地址
platform - 图层所属服务的发布平台: arcgis supermap
layerInfo - 图层信息
getLayerMetaData(serviceUrl, platform, layerInfo) {
```

* 图层组加载完毕事件

``` js
openlayer - 实例过后的openlayer图层
最后请监听layerLoadComplete事件
updateLayerProgress(openlayer)
```

* 底图是否可见

``` js
isDisplayMap - 布尔值 是否显示底图
changeMapDisplay(isDisplayMap)
```

* 底图置灰

``` js
isGrayMap - 布尔值 是否将底图置灰
changeMapGray(isGrayMap)
```

* 根据id找到对应图层

``` js
layerId - 图层id, 可能为运维专题生成的guid, 也有可能为手动加上的id `${url + "_shadow_"layerID}`
findLayerById(layerId)
```

* 获取最上层的业务图层

``` js
return topLayer
getTopOperationLayer()
```

* 创建graphicsLayer

``` js
layerId 要创建的graphicsLayer的id
return graphicsLayer图层
createGraphicsLayer(layerId)
```

* 将所有GraphicsLayer置于顶层

``` js
// 实际为layerId为GraphicsLayer 放到顶层
resetGraphicsLayers()
```

* 调整图层位置

``` js
layerObj - 图层对象, 该图层已存在于Map中
index - 调整后的图层层级, 不传则移到最上层
reorderLayer(layerObj, index = 9999)
```

* 调整专题顺序

``` js
oldTopic - 之前的图层guid即专题id
newTopic - 需要调整的图层guid
reorderTopicLayer(oldTopic, newTopic)
```

* 设置地图服务过滤

``` js
param - url, layerID, filter
监听filterMap事件
filterLayer(param)
```

* 清空所有图层-除底图图层

``` js
removeAllLayer()
```

* cad转图片

``` js
mapView - mapView对象
file - 文件
loadFile - 布尔值 是否加载文件
map - map实例对象
getImageInfo(mapView, file, loadFile, map)
```

* 创建cad动态图层

``` js
map - map实例
layerId - dynamicLayer服务对应的图层id, 一般为0
sublayers - 更改dynamicLayer的sublayers参数
url - dynamicLayer服务地址
return cadLayer
createCADDynamicLayer(map, layerId, sublayers, url)
```

 * 通过指定layerid的图层，加载并返回 -辅助编制用

``` js
url - 服务地址
layerIDs - 图层id数组
isVisible - 是否显示
isLocate - 是否定位
isRenderLegend - 是否渲染图例
return layerIDs的layers
addSpecificLayersByUrlAndlayerIDs(
  url,
  layerIDs = [],
  isVisible = true,
  isLocate = true,
  isRenderLegend = false
)
```

    

## 图例

* 获取服务图列 arcgis和Super M平

``` js
legendUrlInfo: {
  url,
  platform,
}
getServiceLegend(legendUrlInfo)
```

 * 设置图例渲染-要素图列

``` js
response为地图服务查询元数据
legendRenderArr.push({
  url: layerInfo.url,
  layerGuid: layerInfo.id,
  layerID: layerInfo.layerID,
  layerName: layerInfo.layerName,
  groupLayerId: response.groupLayerId,
  groupLayerName: response.groupLayerName,
  platform: layerInfo.platform,
  type: layerInfo.type,
  legendFilterNames: layerInfo.legendFilterNames,
  metadata: response,
  operation: "add"
})
setFeatureLegend(legendRenderArr);
如何是删除的话 参数相同 调用方式也相同 只用将operation: "remove"
即可
```

* 通过legend组件控制图层的显隐

``` js
param: {
  layerID: 34,
  platform: "arcgis",
  uid: "0f4fed5a-6038-4e1c-a300-65bf30b65e63",
  url: "http://***/arcgis/rest/services/YZT/YZTYLSJ/MapServer"
  visible: false
}
controlMapVisible(param)
```

* 通过图列控制要素在图层中的显隐

``` js
params: {
  filterValue: "农业农村发展区",
  groupLayerId: undefined,
  groupLayerName: undefined,
  layerID: 34,
  layerName: "国土空间规划分区",
  platform: "arcgis",
  uid: "0f4fed5a-6038-4e1c-a300-65bf30b65e63",
  url: "http://***/arcgis/rest/services/YZT/YZTYLSJ/MapServer"
}
filterMap(params)
```

 * 设置图例渲染-渲染图例(矢量渲染, 一般监测预警, 资源环境承载力用的较多)

``` js
 param -
   legends: [{
     color: "#F5222D"
     index: "超载"
   }]

 setRenderLegend(param)
```

## 定位locate

* 根据四至范围定位

``` js
extent[minx, miny, maxx, maxy] || {
  xmin,
  ymin,
  xmax,
  ymax
}
locateByExtent(extent)
```

* 根据坐标点和缩放层级缩放

``` js
x, y 坐标点xy zoom 层级
locateByCoordinate(x, y, zoom = this.mapView.getZoom())
```

* 根据geometrys定位

``` js
 geometries geometry数组
 isLocate 是否定位
 isRender 是否渲染
 symbol 渲染symbol
 isClearLayer 是否清除graphicslayer
 locateByGeometries(
   geometries,
   isLocate = true,
   isRender,
   symbol = null,
   isClearLayer = true
 )
```

* 根据featrues定位

``` js
features - 要素集
locateByFeatures(features, isLocate, isRender, symbol = null, isClearLayer = true)
```

* 根据regioncode 定位

``` js
ownRegion - 行政区划code(注意行政区划服务6位或者12位)
locateByRegionCode(ownRegion, options)
```

## 查询方法

* query查询封装, 支持超图和esri服务

``` js
     url 查询服务url地址
     dataSetArr 地图服务查询数据集数组, 用于超图服务查询, 此时layerID请传null或不传
     layerID 地图服务图层ID, 用于ESRI查询服务, 此时dataSetArr请传null或不传
     sql 查询SQL语句
     geometry 查询范围几何图形
     spatialRelationship 空间图形查询关系
     outFields 导出的字段, 不传默认为 * 全部导出多个请用逗号隔开 "a,b,c"
     query({
       url,
       dataSetArr,
       objectIds,
       layerID,
       sql,
       geometry = null,
       outFields = "*",
       spatialRelationship
     })
```

* Identify查询-即属性查询

``` js
   url 查询服务地址
   layerIDs 查询图层数组
   dataSetArr 地图服务查询数据集数组, 用于超图服务查询, 此时layerID请传null或不传, 超图查询featureResults
   geometry 查询范围

   identify({
       url,
       layerIDs,
       dataSetArr,
       geometry
     }) {
```

* 获取图层中指定字段的所有不同的值

``` js
 url 图层url地址
 dataSetArr 超图服务要素集数组
 layerID esri服务图层id
 groupByField 分类字段, 返回唯一值的字段

 queryDistinctValues({
   url,
   dataSetArr,
   layerID,
   groupByField
 })
```

* Find查询

``` js
  url 查询服务url地址
  layerIDs 查询图层数组
  dataSetArr 地图服务查询数据集数组, 用于超图服务查询, 此时layerID请传null或不传
  searchText 查询关键字
  searchFields 查询字段名称

  find({
    url,
    layerIDs,
    dataSetArr,
    searchText,
    searchFields
  })
```

* 自定义query查询, 利用query查询接口的丰富性, 旨在突破查询结果1000条的限制, 超图服务有现成的参数可设置maxFeatures, 主要针对esri服务

``` js
url
layerID
sql
geometry - 此处为arcgis格式的geometry
queryBreakLimit(url, layerID, sql = "1=1", geometry = null, objectIds = null)
```

## 渲染矢量图层

## 分析方法

* buffer封装
* intersect封装
* difference封装
* union封装
* 计算图形的面积和长度, 先封装arcgis, 

## 画图工具
