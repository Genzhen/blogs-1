## [Antd](http://ant.design/docs/react/introduce)

  > 基于react的UI组件库。

* 尽量使用手动安装，不要依赖antd-init工具

  package.json案例 [package](./examples)

* 删除node_modules后，可以直接从缓存中安装依赖包

  `npm install --cache-min Infinity <package-name>`

* 升级antd版本尽量多测试

* Tabs组件defaultActiveKey设置为不存在的key，会导致当前面板内容渲染不出来

* antd的组件按需加载

  ```js
  import { Button, Message } form 'antd';
  // ==> 单文件方式
  import Button from 'antd/lib/button';
  import Message from 'antd/lib/message';
  ```
