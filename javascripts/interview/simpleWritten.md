```
// д����ӡ�Ľ��
function swap(x, y){
  var temp = x;
  x = y;
  y = temp;  
}

var a = 1
var b = 2
swap(a, b)
console.log(a) //���ʲô
console.log(b) //���ʲô

var obj1 = {name: 'jirengu'}
var obj2 = {age: 2}
swap(obj1, obj2)
console.log(obj1)  //���ʲô
console.log(obj2)  //���ʲô








// д����ӡ�Ľ��
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);
```
