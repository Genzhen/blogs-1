## 正则

[regexp](http://javascript.ruanyifeng.com/stdlib/regexp.html#toc15)

String.prototype.replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

  - $& 指代匹配的子字符串。  
  - $\` 指代匹配结果前面的文本。  
  - $' 指代匹配结果后面的文本。  
  - $n 指代匹配成功的第n组内容，n是从1开始的自然数。  
  - $$ 指代美元符号$。  

  ```js
  var prices = {
    'pr_1': '$1.99',
    'pr_2': '$9.99',
    'pr_3': '$5.00'
  };

  var template = '/* ... */'; // 这里可以放网页模块字符串

  template.replace(
    /(<span id=")(.*?)(">)(<\/span>)/g,
    function(match, $1, $2, $3, $4){
      return $1 + $2 + $3 + prices[$2] + $4;
    }
  );

  editorContent.replace(
    /<img .* (width=".*") (height=".*")\/>/g,
    function(match, $1, $2, $3, $4){
      return match.replace($1,'').replace($2,'')
    }
  );
  ```

* 懒惰模式正则(非贪婪模式)

  > 在* + 后面加个？表示懒惰模式，也就是匹配到一次就不匹配了，偷懒噻。正则默认是贪婪模式，也就是在满足匹配时，匹配尽可能长的字符串

  `('src="test.jpg"').match(/src="(.*?)"/)[1]`    // .表示除了\n之外的任意字符。

  - 常见的非贪婪匹配

  ```js
  *? 重复任意次，但尽可能少重复
  +? 重复1次或更多次，但尽可能少重复
  ?? 重复0次或1次，但尽可能少重复
  {n,m}? 重复n到m次，但尽可能少重复
  {n,}? 重复n次以上，但尽可能少重复
  ```

### 正则几个基本概念：

- 1、贪婪：+,*,?,{m,n}等默认是贪婪匹配，即尽可能多匹配，也叫最大匹配
如果后面加上?，就转化为非贪婪匹配，需要高版本支持

- 2、获取：默认用(x|y)是获取匹配，很多时候只是测试，不一定要求得到所匹配的数据，尤其在嵌套匹配或大数据中就要用非获取匹配(?:x|y)，这样提高了效率，优化了程序。

- 3、消耗：默认是消耗匹配，一般在预查中是非消耗匹配。
举个例子，2003-2-8要变为2003-02-08
如果用/-(\d)-/第二次匹配将从8开始，从而只替换第一个2，错误
如果用/-(\d)(?=-)/则第二次匹配从第二个-开始，即不消耗字符-

- 4、预查：js中分为正向预查和负向预查
如上面的(?=pattern)是正向预查，在任何匹配 pattern 的字符串开始处匹配查找字符串。还有(?!pattern)是负向预查，在任何不匹配 pattern 的字符串开始处匹配查找字符串。负向预查有时会用在对[^]的扩充，[^]只是一些字符，而?!可以使整个字符串。

- 5、回调：一般用在替换上，即根据不用的匹配内容返回不用的替换值，从而简化了程序，需要高版本支持

- 6、引用：\num 对所获取的第num个匹配的引用。
例如，'(.)\1\1' 匹配AAA型。'(.)(.)\2\1' 匹配ABBA型。

## 正则表达式保留字

```
^ (carat)
. (period)
[ (left bracket}
$ (dollar sign)
( (left parenthesis)
) (right parenthesis)
| (pipe)
* (asterisk)
+ (plus symbol)
? (question mark)
{ (left curly bracket, or left brace)
\ backslash 
```

* 数字（十六进制、十进制）

  0xffff 65535  -- 十六进制数字
  0o11  9  --- 八进制数字

* 字符

  \\ 反斜线字符
  \0n 八进制值的字符0n (0 <= n <= 7)
  \0nn 八进制值的字符 0nn (0 <= n <= 7)
  \0mnn 八进制值的字符0mnn 0mnn (0 <= m <= 3, 0 <= n <= 7)
  \xhh 十六进制值的字符0xhh
  \uhhhh 十六进制值的字符0xhhhh
  \t 制表符('\u0009')
  \n 换行符 ('\u000A')
  \r 回车符 ('\u000D')
  \f 换页符 ('\u000C')
  \a 响铃符 ('\u0007')
  \e 转义符 ('\u001B')
  \cx T对应于x的控制字符 x

* 字符类

  [abc] a, b, or c (简单类)
  [^abc] 除了a、b或c之外的任意 字符（求反）
  [a-zA-Z] a到z或A到Z ，包含（范围)
  [a-z-[bc]] a到z，除了b和c ： [ad-z]（减去）
  [a-z-[m-p]] a到z，除了m到 p： [a-lq-z][a-z-[^def]] d, e, 或 f 
  预定义的字符类
  . 任意字符（也许能与行终止符匹配，也许不能）
  \d 数字: [0-9]
  \D 非数字: [^0-9]
  \s 空格符: [ \t\n\x0B\f\r]
  \S 非空格符: [^\s]
  \w 单词字符: [a-zA-Z_0-9]
  \W 非单词字符: [^\w]
