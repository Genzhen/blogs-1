## grid布局

Grid Layout 是一种基于二维网格的布局系统，旨在完全改变我们设计基于网格的用户界面的方式，弥补网页开发在二维布局能力上的缺陷。

* 函数

  - repeat

  - minmax

  - auto-fill / auto-fit

* 单位

  fr / min-content / max-content / vm、vh / number%  

* 属性

  - grid-template-rows，指定每行的高度，单位fr表示网格轨道。

  - grid-template-columns， 指定每列的列宽，可以通过minmax()函数来创建网格轨道的最小或最大尺寸，或者通过fit-content来计算轨道的尺寸

  - grid-column-gap，指定列与列之间的间距

  - grid-row-gap，指定行与行之间的间距

  - grid-row-start，从第几行开始, span [value] 表示几行格栅

  - grid-row-end，到第几行结束

  - grid-auto-rows

  - grid-template-areas

* 结合flex

  grid适合二维布局，flex适合块级布局

### 参考资料

[grid全面知识点](https://cloud.tencent.com/developer/section/1072106)

[grid-MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-row)

[腾讯云grid手册](https://cloud.tencent.com/developer/section/1072093)

[css常见函数](http://www.w3chtml.com/css3/values/functional/)
