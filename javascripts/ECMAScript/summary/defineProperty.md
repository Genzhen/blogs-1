## defineProperty

  > Object.defineProperty()������ֱ����һ�������϶���һ�������ԣ������޸�һ��������������ԣ��������������`Object.defineProperty(obj, prop, descriptor)`

* descriptor ����������޸ĵ����Ե���������������Ŀǰ���ڵ�������������������Ҫ��ʽ�������������ʹ�ȡ��������������������������ʽ֮һ������ͬʱ�����ߡ�

  - �����������ʹ�ȡ���������������¿�ѡ��ֵ:

    + configurable: ���ҽ��������Ե�configurableΪtrueʱ�����������������ܹ����ı䣬Ҳ�ܹ���ɾ��, �Լ���writable����������������Ƿ���Ա��޸ġ�Ĭ��Ϊfalse��

    + enumerable: ���ҽ��������Ե�enumerableΪtrueʱ�������Բ��ܹ������ڶ����ö��������( for...in ѭ���� Object.keys() ��)��Ĭ��Ϊfalse��

  - ����������ͬʱ�������¿�ѡ��ֵ:

    + value: �����Զ�Ӧ��ֵ���������κ���Ч��JavaScriptֵ����ֵ�����󣬺����ȣ���Ĭ��Ϊundefined��

    + writable�����ҽ��������Ե�writableΪtrueʱ�������Բ��ܱ���ֵ������ı䡣Ĭ��Ϊfalse��

  - ��ȡ������ͬʱ�������¿�ѡ��ֵ:

    + get: �������ṩgetter�ķ��������û��getter��Ϊundefined���÷�������ֵ����������ֵ��Ĭ��Ϊundefined��

    + set: �������ṩsetter�ķ��������û��setter��Ϊundefined���÷���������Ψһ�����������ò�������ֵ����������ԡ�Ĭ��Ϊ undefined��


  ```
  var o = {}; // ����һ���¶���

  // Example of an object property added with defineProperty with a data property descriptor
  Object.defineProperty(o, "a", {
    value : 37,
    writable : true,
    enumerable : true,
    configurable : true
  });

  // ����oӵ��������a��ֵΪ37

  // Example of an object property added with defineProperty with an accessor property descriptor
  var bValue;
  Object.defineProperty(o, "b", {
    get : function(){
      return bValue;
    },
    set : function(newValue){
      bValue = newValue;
    },
    enumerable : true,
    configurable : true
  });

  o.b = 38;
  // ����oӵ��������b��ֵΪ38

  // The value of o.b is now always identical to bValue, unless o.b is redefined

  // �����������ʹ�ȡ���������ܻ��ʹ��
  Object.defineProperty(o, "conflict", {
    value: 0x9f91102,
    get: function() {
      return 0xdeadbeef;
    }
  });
  // throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors

  var o = {};

  ob.a = 1;
  // ��ͬ�� :
  Object.defineProperty(ob, "a", {
    value : 1,
    writable : true,
    configurable : true,
    enumerable : true
  });


  // ��һ���棬
  Object.defineProperty(ob, "b", { value : 1 });
  // ��ͬ�� :
  Object.defineProperty(ob, "b", {
    value : 1,
    writable : false,
    configurable : false,
    enumerable : false
  });
  ```
