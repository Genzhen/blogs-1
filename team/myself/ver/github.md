* contributions贡献图

  ```js
  var colors = ['#eeeeee', '#d6e685', '#8cc665', '#44a340', '#1e6823', '#eeeeee', '#eeeeee'];
  $$('.js-calendar-graph-svg g rect').forEach(function(ele){
    var r = Math.floor(Math.random() * 7);
    ele.setAttribute('fill', colors[r]);
  });
  ```

* interview 源码文件打印样式调试

  ```js
  $$('.js-header-wrapper,.file-navigation,.pagehead,.js-zeroclipboard-container,.commit-tease,.file-header,.site-footer-container,.footer').forEach(function(ele){
    ele.parentNode.removeChild(ele);
  });
  $$('.entry-content')[0].style.padding = '0px';
  $$('.new-discussion-timeline')[0].style.width = '100%';
  $$('.file')[0].style.margin = '0';
  $$('.markdown-body li>p, .markdown-body li, .markdown-body h2').forEach(function (ele) {
    ele.style.marginBottom = '6px';
    ele.style.marginTop = '6px';
    ele.style.fontSize = '14px';
    ele.style.lineHeight = '22px';
  });
  ```

* md文件打印样式

  ```js
  $$('#footer_wrap,#header_wrap').forEach(function(ele){
    ele.parentNode.removeChild(ele);
  });
  $$('#main_content')[0].style.maxWidth = '900px';
  $$('#main_content')[0].style.paddingTop = '0px';
  $$('body')[0].style.fontSize = '15px';
  ```

* 动态加载jQuery脚本

  ```js
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.async = true;
  script.timeout = 120000;
  script.src = 'http://apps.bdimg.com/libs/jquery/1.9.1/jquery.js';
  script.onload = function() {
    console.log(arguments);
    script.onload = null;
  };
  head.appendChild(script);
  ```

* 其他快速脚本

```js
var m = ['A','B','C','D'];
$('ol[type]').parent().map((i,ele) => {
	var s = $(ele).html().match(/\<span class="studentAnswer"\> ([A-Z]) \<\/span\>/)[1];
	return m.findIndex(item => item === s);
}).toArray();

jQuery('ol[type]').toArray().map(item => {
	var i = -1;
	$(item).find('li').each((index, ele) => {
		if($(ele).find('img').length)
			i = index;
    });
	return i;
});

var data = [0, 3, 0, 1, 1, 1, 0, 0, 0, 3, 2, 3, 0, 3, 2, 0, 2, 3, 0, 0, 3, 3, 2, 0, 0, 0, 0, 1, 3, 1, 1, 0, 0, 2, 2, 2, 0, 2, 3, 0, 2, 2, 1, 1, 0, 3, 1, 3, 2, 1];
jQuery('ol[type]').each((i, ele) => {
	$(ele).find('input').eq(data[i]).prop('checked', true);
});
```


## github搜索技巧

* 指定语言  `language:javascript`

* 指定stars数量   `stars:>200`

[github高级搜索](https://github.com/search/advanced)