# Set、Map、Array、Object 

* Set区别：
  - 1、Set不会包含相同元素
  - 2、Set的数据存储结构专门为一种操作作了速度优化：包含性检测。has()
  - 3、Set不能提供的则是索引。

* Map区别：
  - 1、键值对

* WeakMap和WeakSet
  - 1、WeakMap只支持new、has、get、set 和delete。
  - 2、WeakSet只支持new、has、add和delete。
  - 3、WeakSet的值和WeakMap的键必须是对象。