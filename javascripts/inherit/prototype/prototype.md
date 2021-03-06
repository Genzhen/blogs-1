## 原型

* 1、prototype、__proto__、getPrototypeOf区分  

  - C.prototype是指建立由new C()创建的对象的原型；  
  - obj.__proto__是指获取obj的原型对象的非标准方法；  
  - Object.getPrototypeOf(obj)是指ES5中用来获取obj的原型对象的标准方法；
    
  ```js
  if(typeof Object.create === "undefined"){
    Object.create = function(obj){
      var t = typeof obj;
      if(!obj || (t !== "object" && t !== "function")){
        throw new TypeError("Not an object");
      }
      var C = function(){};
      C.prototype = obj;
      return new C();
    }
  }
  ```

  ![prototype原型](../../images/prototype.jpg)
  
* 2、尽量使用Object.getPrototypeOf获取对象原型  

  不支持ES5环境，自动以构造此方法  

  ```js
  if(typeof Object.getPrototypeOf === "undefined"){
    Object.getPrototypeOf = function(obj){
      var t = typeof obj;
      if(!obj || (t !== "object" && t !== "function")){
        throw new TypeError("Not an object");
      }
      return obj.__proto__;
    }
  }
  ```
  
* 3、this绑定  

  两种方式：局部变量引用this形成闭包；回调函数使用bind(this), map函数中可以传入第二参作为this

  ```js
  function CVSReader(separators){
    this.separators = separators || [","];
    this.regexp = new RegExp(this.separators.map(function(sep){
      return "\\" + sep;
    }).join("|"));
  }
  CVSReader.prototype.read = function(str){
    var lines = str.trim().split(/\n/),
      self = this;
    return lines.map(function(line){
      return line.split(self.regexp);
    });
  }
  ```

* 4、原型链的顶端指向null

  ```js
  function Somebody(name, age){
    this.name = name;
    this.age = age;
  }
  var p1 = new Somebody('Pater', 22);
  var p2 = new Somebody('Cycle', 23);
  Object.getPrototypeOf(p1) === Somebody.prototype;     // true
  Object.getPrototypeOf(Somebody.prototype) === Function.prototype;     // true
  Object.getPrototypeOf(Function.prototype) === Object.prototype;       // true
  Object.getPrototypeOf(Object.prototype) === null;     // true
  ```

备注：侵图必删

### 其他资料

[彻底弄到原型链](https://www.cnblogs.com/xiaohuochai/p/5721552.html)