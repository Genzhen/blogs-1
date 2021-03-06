## Ajax

  > Asynchronous Javascript and XML, 通过XMLHttpRequest与服务端进行通信，对页面的局部内容进行更新。

  * [Ajax的常识和优缺点](ajax)

  * [跨域的常见解决方案](crossDomain)

  * [ajax轮询分类及案例](轮询)

### 其他请求方式

  * [fetch](fetch)

    fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象。

  * [axios](https://github.com/axios/axios)

    axios不是原生JS的，需要进行安装，它不但可以在客户端使用，而且可以在nodejs端使用。Axios也可以在请求和响应阶段进行拦截。同样也是基于promise对象的。

    ```js
    axios({    
      method: 'get',    
      url: '/getsomething.json',    
      data: {        
        age: 22
      }
    }).then(function (response) {    
      console.log(response);
    }).catch(function (error) {    
      console.log(error);
    });

    axios.get('./getthing.json').then(res => { })
    ```

    - 从浏览器中创建 XMLHttpRequest
    - 从 node.js 发出 http 请求
    - 支持 Promise API
    - 拦截请求和响应
    - 转换请求和响应数据
    - 取消请求
    - 自动转换JSON数据
    - 客户端支持防止CSRF/XSRF

### 相关知识点

  * [iframe](iframe)

  * [cookie](cookie)