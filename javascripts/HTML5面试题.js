SGML（标准通用标记语言）和HTML（超文本标记语言），XML（可扩展标记语言）和HTML的之间有什么关系？

SGML（标准通用标记语言）是一个标准，告诉我们怎么去指定文档标记。他是只描述文档标记应该是怎么样的元语言，HTML是被用SGML描述的标记语言。
因此利用SGML创建了HTML参照和必须共同遵守的DTD，你会经常在HTML页面的头部发现“DOCTYPE”属性，用来定义用于解析目标DTD
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
现在解析SGML是一件痛苦的事情，所以创建了XML使事情更好。XML使用了SGML，例如：在SGML中你必须使用起始和结束标签，但是在XML你可以有自动关闭的结束标签。
XHTML创建于XML，他被使用在HTML4.0中。你可以参考下面代码片段中展示的XML DTD
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
总之，SGML是所有类型的父类，较旧的HTML利用SGML，HTML4.0使用派生自XML的XHTML


什么是HTML5？

HTML5是最新的HTML标准，他的主要目标是提供所有内容而不需要任何的像flash，silverlight等的额外插件，这些内容来自动画，视频，富GUI等
HTML5是万维网联盟（W3C）和网络超文本应用技术工作组（WHATWG）之间合作输出的


为什么HTML5里面我们不需要DTD（Document Type Definition文档类型定义）？

HTML5没有使用SGML或者XHTML，他是一个全新的东西，因此你不需要参考DTD，对于HTML5，你仅需放置下面的文档类型代码告诉浏览器识别这是HTML5文档


如果我不放入<! DOCTYPE html> ，HTML5还会工作么？

不会，浏览器将不能识别他是HTML文档，同时HTML5的标签将不能正常工作


哪些浏览器支持HTML5？

几乎所有的浏览器Safari，Chrome，Firefox，Opera，IE都支持HTML5

HTML5的页面结构同HTML4或者更前的HTML有什么区别？

一个典型的WEB页面包含头部，脚部，导航，中心区域，侧边栏。现在如果我们想在在HTML4的HTML区域中呈现这些内容，我们可能要使用DIV标签。
但是在HTML5中通过为这些区域创建元素名称使他们更加清晰，也使得你的HTML更加可读

HTML5中什么是不同的新的表单元素类型？

这里有10个重要的新的表单元素在HTML5中被介绍
Color
Date
Datetime-local
Email
Time
Url
Range
Telephone
Number
Search

什么是SVG（Scalable Vector Graphics可缩放矢量图形）？

SVG（Scalable Vector Graphics可缩放矢量图形）表示可缩放矢量图形。他是基于文本的图形语言，使用文本，线条，点等来进行图像绘制，这使得他轻便，显示更加迅速

Canvas和SVG图形的区别是什么？

Note：-如果你看了之前的两个的问题，Canvas和SVG都可以在浏览器上绘制图形。因此在这个问题中，面试官想知道你在什么时候选用哪种方式。

SVG	                                        Canvas
这个就好像绘制和记忆，换句话说任何使用SVG绘制的形状都能被记忆和操作，浏览器可以再次显示	     Canvas就像绘制和忘记，一旦绘制完成你不能访问像素和操作它
SVG对于创建图形例如CAD软件是良好的，一旦东西绘制，用户就想去操作它	    Canvas在绘制和忘却的场景例如动画和游戏是良好的
因为为了之后的操作，需要记录坐标，所以比较缓慢	    因为没有记住以后事情的意向，所以更快
我们可以用绘制对象的相关事件处理	   我们不能使用绘制对象的相关事件处理，因为我们没有他们的参考
分辨率无关	   分辨率相关

HTML5中的本地存储概念是什么？
很多时候我们会存储用户本地信息到电脑上，例如：比方说用户有一个填充了一半的长表格，然后突然网络连接断开了，这样用户希望你能存储这些信息到本地，当网络恢复的时候，他想获取这些信息然后发送到服务器进行存储
现代浏览器拥有的存储被叫做“Local Storage”,你可以存储这些信息。


我们如何从本地存储中添加和移除数据？
数据添加到本地存储采用键值对，以下示例显示了城市数据”India”添加了键”Key001”

1
localStorage.setItem(“Key001”,”India”);
从本地存储中检索数据我们可以提供键名并使用”getItem”方法

1
var country = localStorage.getItem(“Key001”);
你也可以使用以下代码，存储Javascript对象在本地存储中

var country = {};
country.name = “India”;
country.code = “I001”;
localStorage.setItem(“I001”, country);
var country1 = localStorage.getItem(“I001”);
如果你想存储Json格式，你可以使用“JSON.stringify”方法，如下所示：

1
localStorage.setItem(“I001”,JSON.stringify(country));

本地存储的生命周期是什么？
本地存储没有生命周期，它将保留知道用户从浏览器清除或者使用Javascript代码移除。


本地存储和cookies（储存在用户本地终端上的数据）之间的区别是什么？

Cookies	Local storage
客户端/服务端	客户端和服务端都能访问数据。Cookie的数据通过每一个请求发送到服务端	只有本地浏览器端可访问数据，服务器不能访问本地存储直到故意通过POST或者GET的通道发送到服务器
大小	每个cookie有4095byte	每个域5MB
过期	Cookies有有效期，所以在过期之后cookie和cookie数据会被删除	没有过期数据，无论最后用户从浏览器删除或者使用Javascript程序删除，我们都需要删除
 


什么是事务存储？我们如何创建一个事务存储？
会话存储和本地存储类似，但是数据在会话中有效，简而言之数据在你关闭浏览器的时候就被删除了。
为了创建一个会话存储你需要使用“sessionStorage.variablename.”在以下的代码我们创建了一个名为”clickcount”的变量；
如果你刷新浏览器则数目增加，但是如果你关闭浏览器，“clickcount”变量又会从0开始。

if(sessionStorage.clickcount)
{
sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
}
else
{
sessionStorage.clickcount = 0;
}

本地存储和事务存储之间的区别是什么？
本地存储数据持续永久，但是会话在浏览器打开时有效知道浏览器关闭时会话变量重置


什么是WebSQL？
WebSQL是一个在浏览器客户端的结构关系数据库，这是浏览器内的本地RDBMS(关系型数据库系统)，你可以使用SQL查询


WebSql是HTML5的一个规范吗？
不是，许多人把它标记为HTML5，但是他不是HTML5的规范的一部分，这个规范是基于SQLite的


我们如何使用WebSQL？
第一步我们需要做的是使用如下所示的“OpenDatabase”方法打开数据库，第一个参数是数据库的名字，接下来是版本，然后是简单原文标题，最后是数据库大小；

1
var db=openDatabase('dbCustomer','1.0','Customer app’, 2 * 1024 * 1024);
为了执行SQL，我们需要使用“transaction”方法，并调用”executeSql”方法来使用SQL

db.transaction(function (tx) 
{
tx.executeSql('CREATE TABLE IF NOT EXISTS tblCust(id unique, customername)');
tx.executeSql('INSERT INTO tblcust (id, customername) VALUES(1, "shiv")');
tx.executeSql('INSERT INTO tblcust (id, customername) VALUES (2, "raju")');
}
万一你要使用“select”查询你会得到数据”result”集合，我们可以通过循环展示到HTML的用户界面


db.transaction(function (tx) 
{
  tx.executeSql('SELECT * FROM tblcust', [], function (tx, results) {
   for (i = 0; i < len; i++)
{
     msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
     document.querySelector('#customer).innerHTML +=  msg;
}
 }, null);
});

HTML5中的应用缓存是什么？
一个最需要的事最终是用户的离线浏览，换句话说，如果网络连接不可用时，页面应该来自浏览器缓存，离线应用缓存可以帮助你达到这个目的
应用缓存可以帮助你指定哪些文件需要缓存，哪些不需要。


HTML5中我们如何实现应用缓存？
首先我们需要指定”manifest”文件，“manifest”文件帮助你定义你的缓存如何工作。以下是”mainfest”文件的结构

CACHE MANIFEST
# version 1.0
CACHE :
Login.aspx
所有manifest文件都以“CACHE MANIFEST”语句开始.
#（散列标签）有助于提供缓存文件的版本.
CACHE 命令指出哪些文件需要被缓存.
Mainfest文件的内容类型应是“text/cache-manifest”.
以下是如何在ASP.NET C#使用manifest缓存
Response.ContentType = "text/cache-manifest";
Response.Write("CACHE MANIFEST \n");
Response.Write("# 2012-02-21 v1.0.0 \n");
Response.Write("CACHE : \n");
Response.Write("Login.aspx \n");
Response.Flush();
Response.End();
创建一个缓存manifest文件以后，接下来的事情实在HTML页面中提供mainfest连接，如下所示：

1
<html manifest="cache.aspx">
当以上文件第一次运行，他会添加到浏览器应用缓存中，在服务器宕机时，页面从应用缓存中获取


我们如何刷新浏览器的应用缓存？
应用缓存通过变更“#”标签后的版本版本号而被移除，如下所示：

CACHE MANIFEST
# version 2.0(new)
CACHE :
Login.aspx
Aboutus.aspx
NETWORK :
Pages.aspx

应用缓存中的回退是什么？
应用缓存中的回退帮助你指定在服务器不可访问的时候，将会显示某文件。例如在下面的manifest文件中，我们说如果谁敲击了”/home”同时服务器不可到达的时候，”homeoffline.html”文件应送达

2
FALLBACK:
/home/ /homeoffline.html

应用缓存中的网络是什么？
网络命令描述不需要缓存的文件，例如以下代码中，我们说”home.aspx”永远都不应该被缓存或者离线访问。

NETWORK:
home.aspx
