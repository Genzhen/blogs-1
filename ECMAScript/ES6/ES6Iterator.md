* Iterator的作用有三个：
  - 一、是为各种数据结构，提供一个统一的、简便的访问接口；
  - 二、是使得数据结构的成员能够按某种次序排列；
  - 三、是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

* Iterator的遍历过程：
  - （1）创建一个指针，指向当前数据结构的起始位置。也就是说，遍历器的返回值是一个指针对象。
  - （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
  - （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
  - （4）调用指针对象的next方法，直到它指向数据结构的结束位置。

  ```
  var it = makeIterator(['a', 'b']);

  it.next() // { value: "a", done: false }
  it.next() // { value: "b", done: false }
  it.next() // { value: undefined, done: true }

  function makeIterator(array) {
    var nextIndex = 0;
    return {
      next: function() {
        return nextIndex < array.length ?
          {value: array[nextIndex++], done: false} :
          {value: undefined, done: true};
      }
    };
  }
  ```

  每一次调用next方法，都会返回当前成员的信息，具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员
  的值，done属性是一个布尔值，表示遍历是否结束。  
  在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构。  

* 调用默认Iterator接口的场合：
  - 1. 对数组和Set结构进行解构赋值时，会默认调用iterator接口。
  - 2. 扩展运算符（...）也会调用默认的iterator接口。
    yield*  
    Array.from()  
    Map(), Set(), WeakMap(), WeakSet()  
    Promise.all(), Promise.race()  

* 原生具备Iterator接口的数据结构：
  ES6对数组提供entries()、keys()和values()三个方法，就是返回三个遍历器。  
  字符串是一个类似数组的对象，也原生具有Iterator接口。  

* 遍历器的return()，throw()
  遍历器返回的指针对象，next方法是必须部署的，return方法和throw方法是否部署是可选的。  
  return方法的使用场合是，如果for...of循环提前退出（通常是因为出错，或者有break语句或continue语句），就会调用return方法。  
  如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法。  



* for...of循环
  一个数据结构只要部署了Symbol.iterator方法，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。也就是说，
  for...of循环内部调用的是数据结构的Symbol.iterator方法。  
  for...of循环可以代替数组实例的forEach方法。  
  for...in循环读取键名，for...of循环读取键值。  

* 与其他遍历方法比较：
  for: 比较麻烦，写法繁琐  
  forEach: 无法中止跳出，break命令或return命令都不能奏效。  
  for...in: 数组中只能遍历键名，并且会遍历原型链的新增键。总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。  