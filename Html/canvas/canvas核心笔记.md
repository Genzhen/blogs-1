## HTML5 canvas核心技术读书总结

* 1、canvas环境中，有且仅有两个方法（fillRect()、strokeRect()）用来立即绘制图形的，当然fillText和strokeText不算是绘制图形，其他都是路径绘制；基于路径的绘制，必须定义路径的开始和结束，没有路径的结束（closePath），图形将不是闭合的（开放的）。当然，浏览器对其进行填充时，会将其当作封闭路径来填充。

* 2、rect总是按照逆时针方向来绘制；

* 3、某一时刻，canvas环境只存在一个路径（当前路径），这条路径由多个子路径组成。每次调用startPath方法时，将清掉所有的子路径。

* 4、canvas填充采取非零环绕原则或者奇偶原则；并且根据canvas规范，当使用arc()方法向当前路径中增加子路径时，该方法必须将上一条子路径的终点与所画的圆弧的起点相连接。
* 5、context.arc(x,y,r,sAngle,eAngle,counterclockwise)中，sAngle为起始角，为钟表的三点钟刻度，一圆周为2*Math.PI弧度，eAngle为结束角，顺时针转动的弧度，可以为负数（逆时针转动的弧度，小于-2*Math.PI则只取-2*Math.PI）

* 6、如果要绘制一条真正的1像素宽的线段，必须将该线段绘制在某两个像素之间的那个像素中（moveTo(50.5,50.5)）;因为在一个像素的范围内，无法绘制半个像素宽度的线段，所以左右两个方向上的半个像素会被扩展成一个像素。

* 7、为了阻止欺骗，浏览器会追踪image data。当你把一个“跟canvas的域不同的”图片放到canvas上，这个canvas就成为 “tainted”(被污染的，脏的)，浏览器就不让你操作该canvas 的任何像素。这对于阻止多种类型的XSS/CSRF攻击（两种典型的跨站攻击）是非常有用的。

* 8、CanvasRenderingContext2D对象中与线段绘制相关的属性：线宽lineWidth、线端点lineCap(butt、round、square)、线转接点lineJoin(round、bevel、miter)
