# 图层 Layers

:::tip
定义图层：地图图层 layers:[...]组定义映射中可用的图层组，用来盛放地图上的各种元素，其在地图上的显示顺序是按照数组中元素序列从下到上呈现的，可以直接在创建地图时定义图层，多个图层的时候可以单独定义。
:::

```js
const layer = new ol.layer.Vector({
  //这里定义的是图层类型(Image/Title/Vector)
  source: new ol.source.Vector(), //矢量图层源  源是用于获取映射块的协议【必须】
  style: [], //图层样式 【必须】
  feature: [] //图层元素 【必须】
});
```

- 添加指定图层：map.addLayer(layer)；
- 移除指定图层：map.removeLayer(layer)；

图层是轻量级容器，从数据源 `Source` 获取数据。
`Source` 子类分别有，分别对应不同图层类：

- `ol.source.VectorSource()`
- `ol.source.ImageSource()`
- `ol.source.TileSource()`

`Source` 主要有以下属性选项：

```js
new ol.source.VectorSource({
    attributions:,//
    attributionsCollapsible:,//布尔值  默认为true
    projection:,//投影系
    state:'ready',//默认为'ready'
    wrapX:false,//默认为false
})
```

`ol.layer.Tile()`和 `ol.layer.Image()`图层类都具有相同的属性如下：

```js
new ol.layer.Tile/Image({//以下为图层的属性选项， 都可设置，所以皆有getter/setter
    opacity:2,//透明度 区间范围为(0, 1) 默认为1
    visible:true,//显示属性 布尔值 默认为true
    extent:[],//图层渲染的边界范围。该层将不会在此范围之外呈现
    zIndex:2,//图层渲染的索引层级。在渲染时，图层将被排序，首先是z-idnex，然后是位置，当为undefined时，对于添加到映射的layers集合中的层，zIndex为0，或者当使用该层的setMap()方法时，zIndex为无穷大
    minResolution:3,//该层可见的最小分辨率(包括在内)
    maxResolution:6,//该层可见的最大分辨率（包括在内）
    repload:0,//预加载。将低分辨率瓦片加载到预加载级别。0表示没有预加载 默认为0
    source:new ol.source.TileSource()/ImageSource(),//图层源
    map:  ,//把图层覆盖在地图上，地图不会在它的图层集合中管理这个图层，这个图层将被呈现在顶部，这对于临时层非常有用。
})
```

---

(1) `ol.layer.Tile()`
平铺图层。

对于提供预呈现、平铺的网格图像的层源，这些网格按特定分辨率的缩放级别组织。

(2) `ol.layer.Image()`
图像图层。

服务器呈现的映像，可用于任意范围和分辨率。

(3) `ol.layer.Vector()`
矢量图层。

在客户端呈现矢量数据，其属性具备 **getter** 和 **setter**

```js
new ol.layer.Vector({//以下为图层的属性选项， 都可设置，所以皆有getter/setter
    opacity:2,//透明度 区间范围为(0, 1) 默认为1
    visible:true,//显示属性 布尔值 默认为true
    extent:[],//图层渲染的边界范围。该层将不会在此范围之外呈现
    zIndex:2,//图层渲染的索引层级。在渲染时，图层将被排序，首先是z-idnex，然后是位置，当为undefined时，对于添加到映射的layers集合中的层，zIndex为0，或者当使用该层的setMap()方法时，zIndex为无穷大
    minResolution:3,//该层可见的最小分辨率(包括在内)
    maxResolution:6,//该层可见的最大分辨率（包括在内）
    renderOrder:,//呈现顺序。函数用于在呈现前对特性进行排序。默认情况下，特性是按照创建它们的顺序绘制的。使用null来避免排序，但是得到一个未定义的绘制顺序
    renderBuffer:100,//默认为100 缓冲区
    renderMode:'vector',//默认为'vector' 矢量图层的渲染模式
    source:new ol.source.VectorSource(),//图层源
    map:  ,//把图层覆盖在地图上，地图不会在它的图层集合中管理这个图层，这个图层将被呈现在顶部，这对于临时层非常有用
    declutter:false,//默认为false 整理图片和文字。清理应用于所有图像和文本样式，优先级由样式的z-index定义。z-index指数越低，优先级越高
    style:new ol.style.Style(),//图层样式
    updateWhileAnimating:false,//默认为false
    updateWhileInteracting:false,//默认为false
})
```

其中渲染模式有两种：

- `image`：矢量图层被渲染为图像。性能很好，但是点符号和文本总是随着视图旋转，像素在缩放动画中缩放
- `vector`：矢量图层被呈现为向量。即使在动画期间也有最准确的渲染，但性能较慢

## Feature

用于地理特征的矢量元素，具有几何 geometry()和其他属性，类似于矢量文件格式(如 GeoJSON)中的特性。

- 添加矢量元素：通过 `vectorsource().addFeature(feature)`添加到矢量图层上。
- 移除图层所有的矢量元素：`vectorsource().clear()`

```js
let feature = new ol.Feature({
  geometry: new ol.geom.Polygon(polyCoords),
  labelPoint: new ol.geom.Point(labelCoords),
  style: new ol.style.Style({}),
  name: "My Polygon"
});
```

- 定义矢量元素:`new ol.Feature()`
- 矢量元素样式：

  - 设置样式：`new ol.style.Style()`，也可以使用 `feature.setStyle(style)`，未定义的话，可以使用它的盛放容器 `layer` 的样式；
  - 获取样式：`feature.getStyle()`
    定义矢量元素：new ol.Feature()，；
    矢量元素样式：

- 一个 feature 只有一个默认几何属性 geometry，可以有任意数量的命名几何图形：

  - 获取默认几何属性：`feature.getGeometry()`；

  - 设置几何属性：`feature.setGeometry(geometry)`；

  - 设置几何属性名：`feature.setGeometryName(name)`；

  - 矢量元素要呈现的几何图形的特征属性、几何图形或函数由 **geometry** 属性选项设定，主要有以下几种子类模块：

    - ol.geom.Circle()：圆形
    - ol.geom.Geometry()：几何图形
    - ol.geom.GeometryCollection()：
    - ol.geom.LinearRing()：环线
    - ol.geom.LineString()：线段
    - ol.geom.Point()：点
    - ol.geom.Polygon()：多边形
    - ol.geom.MultiLineString()
    - ol.geom.MultiPoint()
    - ol.geom.MultiPolygon()
    - ol.geom.SimpleGeometry()

- feature 的稳定标识符 ID：

  - 设置 feature 的 id：feature.setId(id)，当 id 可能相同时，可以这样加以区分
    `feature.setId(id + "featureName")`
  - 获取 feature 的 id：`vector.getSource().getFeatureById()`或者 v`ectorsource().getFeatureById()`

- feature 的 set(key, value, opt_silent)：

  - 设置 key：`feature.set("keyName",name)`，keyName 是字符串，自己根据情况设置
  - 获取 key：之前设置的什么，就获取什么，`feature.get("keyName")`，会得到设置的值
