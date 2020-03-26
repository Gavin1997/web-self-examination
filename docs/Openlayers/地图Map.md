# 地图 Map

### 创建地图

---

:::tip
创建地图底图：需要用`new ol.Map({})`
地图 map 是由图层 **layers**、一个可视化视图 **view**、用于修改地图内容的交互 **interaction** 以及使用 **UI** 组件的控件 **control** 组成的。
:::

1. 创建基本地图

```js
let map = new ol.Map({
  target: "map", //对象指向
  layers: [
    //图层
    new ol.layer.Tile({
      //这里定义的是平铺图层
      source: new ol.source.OSM() //图层源 定义图层映射协议
    })
  ],
  view: new ol.View({
    //视图
    center: ol.proj.fromLonLat([37.41, 8.82]), //地图中心
    zoom: 4 //缩放层级
  })
});
```

2. 属性选项

```js
new ol.Map({
    target: 'map',//对象映射：要将`map`对象附加到div，` map`对象将`target`作为参数，值是`div`的`id`
    layers: [//图层
      new ol.layer.Tile({//这里定义的是平铺图层
        source: new ol.source.OSM()//图层源 定义图层映射协议
      })
    ],
    view: new ol.View({//视图
      center: ol.proj.fromLonLat([37.41, 8.82]),//地图中心
      zoom: 4//缩放层级
    }),
    controls:[//最初添加到映射中的控件  如未设置 使用默认控件
        new ol.control.Control({
            element:,//元素是控件的容器元素(DOM)。只有在开发自定义控件时才需要指定这一点
            render: ,//控件重新呈现时调用的函数
            target: //如果想在映射的视图端口之外呈现控件，指定目标
        })
    ],
    interactions:[//最初添加到映射中的交互 如未设置 使用默认交互
        new ol.interaction.Interaction({
            handleEvent
        })
    ],
    overlays:[
        new ol.Overlay()
    ],
    maxTilesLoading:16,//同时加载的最大瓷砖数 默认16
    loadTilesWhileAnimating:false,//
    loadTilesWhileInteracting:false,//
    moveTolerance:1,//光标必须移动的最小距离(以像素为单位)才能被检测为map move事件，而不是单击。增加这个值可以使单击地图变得更容易
    pixelRatio:window.devicePixelRatio,//
    keyboardEventTarget:,//要监听键盘事件的元素
})
```

3. 地图事件
   | 地图事件 | 含义 |
   | ------------- |:----------------:|
   | click | 无拖动单击 |
   | dblclick | 无拖动双击 |
   | moveend | 移动地图结束时|
   | movestart|移动地图开始时|
   | pointerdrag|拖到指针时触发|
   |pointermove|当指针移动时触发。注意，在触摸设备上，这是在地图平移时触发的，因此与 mousemove 不同|
   |propertychange|当属性被更改时触发|
   |rendercomplete|渲染完成时触发，即当前视图的所有源和 tile 都已加载完毕，所有 tile 都将淡出|
   |singleclick| 一个真正的无拖放和无双击的单击。注意，这个事件被延迟了 250 毫秒，以确保它不是双击|
4. 地图方法
   |地图方法|功能|
   | -------------- |:----------------:|
   | addControl(control) | 将给定的控件添加到地图中 |
   | removeControl(control) | 从地图中移除已给定的控件 |
   | addInteraction(interaction)| 将给定的交互添加到地图中 |
   | removeInteraction(interaction)| 从地图中移除已给定的交互 |
   | addLayer(layer)| 将给定的图层添加到地图的顶部 |
   | removeLayer(layer)| 从地图中移除已给定的图层 |
   | forEachFeatureAtPixel(pixel, callback, opt_options)| 检测与视图端口上的像素相交的特性，并对每个相交的特性执行回调。检测中包含的层可以通过 opt_options 中的 layerFilter 选项配置 |
   | forEachLayerAtPixel(pixel, callback, opt_options)| 检测在视图端口上的像素处具有颜色值的层，并对每个匹配的层执行回调。检测中包含的层可以通过 opt_layerFilter 配置 |
   | getControls()| 获取地图控件 |
   | getCoordinateFromPixel(pixel)| 获取给定像素的坐标。这将返回地图视图投影中的坐标。 |
   | getEventCoordinate(event)| 返回浏览器事件的视图投影中的坐标 |
   | getEventPixel(event)| 返回浏览器事件相对于视图端口的地图像素位置 |
   | getFeaturesAtPixel(pixel, opt_options)| 获取视图端口上与像素相交的所有特性 |
   | getInteractions()| 获取地图交互 |
   | getLayerGroup()| 获取与此地图关联的图层组 |
   | setLayerGroup(layerGroup)| 设置与此地图关联的图层组 |
   | getLayers()| 获取与此地图关联的图层的集合 |
   | getOverlayById(id)| 通过其标识符获取覆盖(overlay. getId()返回的值)。注意，索引将字符串和数字标识符视为相同的。getoverlaybyid(2)将返回 id 为 2 或 2 的叠加层 |
   | getOverlays()| 获得地图叠加 |
   | getPixelFromCoordinate(coordinate)| 获取坐标的像素。它接受地图视图投影中的坐标并返回相应的像素 |
   | getSize()| 获取地图尺寸 |
   | setSize(size)| 设置地图尺寸 |
   | getTarget()| 获取呈现此映射的目标。注意，这将返回作为选项或 setTarget 中输入的内容。如果这是一个元素，它将返回一个元素;如果是字符串，它会返回这个字符串 |
   | setTarget(target)| 设置要将地图呈现的目标元素 |
   | getTargetElement()| 获取呈现此映射的 DOM 元素。与 getTarget 相反，这个方法总是返回一个元素，如果映射没有目标，则返回 null |
   | getView()| 获取地图视图。视图管理中心和分辨率等属性 |
   | setView(view)|设置地图视图 |
   | getViewport()|获取作为 map 视图端口的元素 |
   | hasFeatureAtPixel(pixel, opt_options)|检测在 viewport 上是否与一个像素相交。可以通过 opt_layerFilter 配置在检测中包含的层。 |
