* 1、层次选择器 ->  通用选择和相邻选择
  .active ~ div 和 .active + div
  通用兄弟选择器选中的是.active后面所有的同辈div元素，相邻兄弟选择器选中的是紧挨的一个元素。

* 2、伪类选择器（都以:开头）分类：
  - ①. 动态伪类选择器，LoVe / HAte(爱恨原则)
  - ②. 目标伪类选择器，只有存在URL指向该匹配元素时，样式效果才会生效
  - ③. 语言伪类选择器，
  ```css
  p:first-of-type // 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
  p:last-of-type  // 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
  p:only-of-type  // 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
  p:only-child    // 选择属于其父元素的唯一子元素的每个 <p> 元素。
  p:nth-child(2)  // 选择属于其父元素的第二个子元素的每个 <p> 元素。
  :enabled  :disabled // 控制表单控件的禁用状态。
  :checked        // 单选框或复选框被选中。
  ```

* 3、选择器的权重计算

    4个等级的定义如下：  

    第一等：代表内联样式，如: style=””，权值为1000。  
    第二等：代表ID选择器，如：#content，权值为100。  
    第三等：代表类，伪类和属性选择器，如.content，权值为10。  
    第四等：代表类型选择器和伪元素选择器，如div p，权值为1。  

    备注：通用选择器（\*），子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为0。

    ![css权重](./images/selector.jpg)