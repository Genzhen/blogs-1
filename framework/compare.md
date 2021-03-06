## vue vs angularjs vs react

* **vue**

  - 特点：

    + 库小，易于学习理解，拥有中文文档

    + 虚拟化DOM，模板（Templates）搭建

    + 数据变化之后，框架通过对原生对象和数组类型变更方法的劫持自动发现更新的部分，刷新UI视图

  - 适用业务场景：小而精，HTML模板搭建

  - 生态圈配套：ES6+Webpack+unit/e2e+Vue+vue-router+单文件组件+vuex+iVew

  - 缺点：模板搭建不利于测试，分解和重构

  - 双向绑定

    VueJS 则使用 ES5 提供的 Object.defineProperty() 方法，监控对数据的操作，从而可以自动触发数据同步。并且，由于是在不同的数据上触发同步，可以精确的将变更发送给绑定的视图，而不是对所有的数据都执行一次检测。v-modal则是通过事件监听来实现视图向数据同步的操作。

* **angularjs**

  - 特点

    + 大而全，学习曲线曲折

    + watch

    + 脏检查

      ![脏检查代码](../images/digest.png)
      AngularJS 采用“脏值检测”的方式，数据发生变更后，对于所有的数据和视图的绑定关系进行一次检测，识别是否有数据发生了改变，有变化进行处理，可能进一步引发其他数据的改变，所以这个过程可能会循环几次，一直到不再有数据变化发生后，将变更的数据发送到视图，更新页面展现。如果是手动对 ViewModel 的数据进行变更，为确保变更同步到视图，需要手动触发一次“脏值检测”。

      具体点，当对象被绑定到html中后，这个对象才会添加为检查对象，同样当属性被绑定后，这个属性才会被列为检查的属性。系统的方法中都会触发比较事件，controller初始化，以ng-开头的事件触发，手动触发（$apply -> $digest）。$apply如果不给参数的话，会检查该$scope里的所有监听的属性，建议指定属性参数。

* **react**

  > 一个组件的渲染函数就是一个基于 state 和 props 的纯函数，state 是自己的，props 是外面来的，任何东西变了就重新渲染一遍。

  - 特点

    + 虚拟化DOM、模板jsx语法

    + 数据变化之后，用户通过 setState 主动通知框架更新视图，diff的是HTML tag，而非data劫持

    + 组件化(受控和非受控)，可测试性

    + 单向数据流

    + 高度可移植，跨平台

  - 缺点

    + 架构：大型应用程序应该如何组织代码？

    + 通信：组件之间如何通信？

  - 适用场景：大型多人合作，多端共用，成熟生态圈，API少且稳定

  - 解析流程：`jsx -> js -> vdom -> dom`

  - 生态圈配套（flux的实现）：ES6+Webpack+Enzyme+React+React-router+Redux

    + redux 函数式（Functional）管理，state 是不可变对象，适合大型项目

    + MobX 响应式（Reactive）管理，state 是可变对象，适合中小型项目



## vs React 16

* componentWillMount、componentWillReceiveProps、componentWillUpdate vs getDerivedStateFromProps

![getDerivedStateFromProps](../images/derived.webp)

* fiber

  [fiber参见](../implement/fiber)

* hooks