## CDN

> CDN 的全称是 Content Delivery Network，即内容分发网络。如果用一句通俗易懂的话来概括 CDN 的职能，那就是将内容缓存在离用户更近的节点上，以此来提高用户体验。

其原理就是，通过负载均衡技术，将不同地点的用户请求定向到最合适的缓存服务器上去获取内容，以减少源站的服务器压力，解决因分布、带宽、服务器性能带来的访问延迟问题。宽泛的说，CDN 就是源服务器的一层静态资源缓存。

* 规范做法

html文件放在服务端（避免被缓存），javascript、css、图片等资源放入不同的CDN服务器（避免浏览器并行下载限制），并开启长缓存带上hash值，用于更新缓存。

* webpack配置

```js
output.publicPath: '//assets.cdn.com/id/hash/'    // js的cdn地址
css-loader.publicPath: '//assets.cdn.com/id/hash/'    // css引入的资源（图片）的cdn地址
webPlugin.stylePublicPath: '//assets.cdn.com/id/hash/'    // css的cdn地址
```

* 几大类型

  - 传统的文件存储

  - 对象存储

![cdn](../../images/cdn.png)

## CDN地址

收藏的比较常用的cdn

[BootCDN](http://www.bootcdn.cn/)

[CDNJS](https://cdnjs.com/)

[微信CDN](http://qydev.weixin.qq.com/cdn/cdnjs.html)

[jsDelivr CDN](https://www.jsdelivr.com/)

  `highlight CDN: https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/plugin/highlight/highlight.js`

[CDNJS CDN](https://cdnjs.com/)

  `highlight CDN: https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.7.0/plugin/highlight/highlight.min.js`
