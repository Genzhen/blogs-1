Ĭ������£�SeaJS Ҫ�������ļ����Ǳ�׼�� CMD ģ�飬����ʵ�����£��д��� jQuery ����ȷ� CMD ģ����ڡ��� SeaJS �ͨ�����·�ʽ������ֱ�ӵ��÷Ǳ�׼ģ�顣

1��//���Է����� init.js �ﱩ¶��ȫ�֣������������� init.js ֮��������ļ����Ͷ�����ֱ��ͨ��ȫ�ֱ������� $ �ȶ���

  ```
  seajs.use('init')

  //init.js
  define(function(require, exports) {
  	var $ = jQuery = require('jquery');

  	// ��¶��ȫ��
  	window.jQuery = window.$ = $;
  });
  ```

2��// ���� jquery ������Ԥ��������
  ```
  seajs.config({
    alias: {
      'jquery': 'https://a.alipayobjects.com/static/arale/jquery/1.7.2/jquery.js'
    },
    preload: ["jquery"]
  })

  // �� jQuery ��¶��ȫ��
  seajs.modify('jquery', function(require, exports) {
    window.jQuery = window.$ = exports
  })
  ```
