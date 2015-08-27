<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>日期选择器</title>
 
 <style>
 .button {
  display: inline-block;
  *display: inline;
  /* IE7 inline-block hack */
  *zoom: 1;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 20px;
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #333333;
  background-color: #ffffff;
  border-color: #cccccc;
}
.button-primary {
  color: #ffffff;
  background-color: #6cb5f4;
  border-color: #54a9f2;
}
.button:hover,
.button:focus,
.button:active,
.button.active,
.open .dropdown-toggle.button {
  color: #333333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
 .c-month-container{position:relative;font-family: 'ArialMT', 'Arial';color: #333333;font-size:13px;}
 .c-month-calendar{position:absolute;top:24px;}
 .c-calendar-month, .c-calendar-year{width:130px;height:248px;border:1px #ccd solid;list-style:none; display: inline-block;padding:2px;margin:0;}
 .c-calendar-month{width:160px;margin-right: -5px;}
 .c-calendar-month li, .c-calendar-year li{padding:2px 4px;float: left;margin: 4px 0 0 6px;width: 50px;height: 32px;line-height: 32px;text-align: center;color: #333333;cursor:pointer;}
 .c-calendar-month li{width:64px;}
 .c-prev,.c-next{font-weight:bold;}
 .c-calendar-month li:hover, .c-calendar-year li:hover{background-color: #eeeeee;}
 .c-calendar-month li.active, .c-calendar-year li.active{color: #ffffff;background-color: #6cb5f4;}
 .c-btns{text-align:center;padding:5px;border: 1px #ccd solid;margin-top: -4px;}
 </style> 
</head>
<body>
    <div class="c-month-container">
        <input type="text" id="c-month-input" />
        <div class="c-month-calendar" style="display:none;">
            <ul class="c-calendar-month"></ul>
            <ul class="c-calendar-year"></ul>
            <div class="c-btns">
                <button class="button button-primary">OK</button>
                <button class="button">Cancel</button>  
            </div>
        </div>
    </div>
    
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
 
    <!-- script start --> 
    <script type="text/javascript">
        jQuery.fn.extend({
            /*
             * @id 容器id  
             * @showMonth 展示月份部分
             */
            "monthCalendar": function(showMonth){
                var container = this,
                    curFirstYear,
                    input = container.find('#c-month-input');

                //渲染月份
                var renderMonth = function(){
                    var m = (new Date()).getMonth() + 1, str = '', arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                    for(var i = 1, l = arr.length; i <= l; i++){
                        str += '<li data-value="' + i + '">' + arr[i - 1] + '</li>';
                    }
                    container.find('.c-calendar-month').html(str).find('li').filter(function(){return $(this).data("value") - 0 === m}).addClass('active');
                };

                //渲染年份
                var renderYear = function(){
                    var y = (new Date()).getFullYear(), str = '<li class="c-prev"><<</li><li class="c-next">>></li><li>', arr = [];
                    curFirstYear = curFirstYear === undefined ? y - 4 : curFirstYear;
                    for(var i = 0; i < 10; i++){
                        arr.push(curFirstYear + i);
                    }
                    str += arr.join("</li><li>");
                    str += "</li>";
                    container.find('.c-calendar-year').html(str).find('li').filter(function(){return $(this).text() - 0 === y}).addClass('active');
                };

                var init = function(){
                    showMonth ? renderMonth() : container.find('.c-calendar-month').hide();
                    renderYear();

                    //弹出日历选择框
                    container.on('click', '#c-month-input', function(event){
                        event.stopPropagation();
                        jQuery(this).siblings('.c-month-calendar').show();
                    });

                    //年月选择事件
                    container.on('click', 'li:not(".c-next,.c-prev")', function(event){
                        var me = $(this);
                        me.closest('ul').find('.active').removeClass('active');
                        me.addClass('active');
                    });

                    //下一批年份
                    container.on('click', '.c-next', function(event){
                        curFirstYear += 10;
                        renderYear();
                    });
                    //上一批年份
                    container.on('click', '.c-prev', function(event){
                        curFirstYear -= 10;
                        renderYear();
                    });

                    //OK按钮点击事件
                    container.on('click', '.c-btns .button-primary', function(event){
                        var m = container.find('.c-calendar-month .active').data('value') - 0,
                            y = container.find('.c-calendar-year .active').text();
                        showMonth ? input.val(y + (m > 9 ? "-" + m : "-0" + m)) : input.val(y);
                        jQuery('.c-month-calendar').hide();
                    });

                    //隐藏日历选择框
                    container.on('click', '.c-btns .button', function(event){
                        jQuery('.c-month-calendar').hide();
                    });
                };

                init();
            }
        });
        
        //调用方法
        jQuery('.c-month-container').monthCalendar(true);
    </script>
    <!-- script end -->
</body>
</html>
