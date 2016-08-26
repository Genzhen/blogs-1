## module

    > 每一个ES6模块都是一个包含JS代码的文件，模块本质上就是一段脚本.

* 模块和脚本的区别：

    - 在ES6模块中，无论你是否加入“use strict;”语句，默认情况下模块都是在严格模式下运行。

    - 在模块中你可以使用import和export关键字。

* export

    - 可以导出所有的最外层函数、类以及var、let或const声明的变量。

    - 可以声明多个export列表，甚至通过其它的export声明打造一个混合的export列表，只要保证每一个被导出的名称是唯一的即可。

    - 导出的名称会与你需要使用的其它名称产生冲突，ES6为你提供了重命名的方法解决.`export {
      v1 as streamV1 }` 或者 `import {flip as flipOmelet} from "eggs.js";`

    - export default, 后可跟随任何值：一个函数、一个类、一个对象字面量，只要你能想到的都可以。

    - 可以用一种统一的方式将其它模块中的内容聚合在一起导出.

        ```
        // world-foods.js - 来自世界各地的好东西

        // 导入"sri-lanka"并将它导出的内容的一部分重新导出
        export {Tea, Cinnamon} from "sri-lanka";

        // 导入"equatorial-guinea"并将它导出的内容的一部分重新导出
        export {Coffee, Cocoa} from "equatorial-guinea";

        // 导入"singapore"并将它导出的内容全部导出
        export * from "singapore";

        //这些导入内容再重新导出的方法不会在作用域中绑定你导入的内容。如果你打算用world-foods.js中的Tea来写一些代码，可别用这种方法导入模块，你会发现当前模块作用域中根本找不到Tea。
        ```

* import

    - 当你运行的模块中包含一条import声明时，首先会加载被导入的模块；然后依赖图的深度优先遍历按顺序执行每一个模块的主体代码；为了避免形成回环，所有已执行的模块都会被忽略。

    - 导入的力度可以根据需求来决定。`import {each, map} from "lodash";` 或者 `import _ from "lodash";`


* JS引擎运行模块的步骤

    - 语法解析：阅读模块源代码，检查语法错误。

    - 加载：递归地加载所有被导入的模块。这也正是没被标准化的部分。

    - 连接：每遇到一个新加载的模块，为其创建作用域并将模块内声明的所有绑定填充到该作用域中，其中包括由其它模块导入的内容。

    - 如果你的代码中有import {cake} from "paleo"这样的语句，而此时“paleo”模块并没有导出任何“cake”，你就会触发一个错误。这实在是太糟糕了，你都快要运行模块中的代码了，都是cake惹的祸！

    - 运行时：最终，在每一个新加载的模块体内执行所有语句。此时，导入的过程就已经结束了，所以当执行到达有一行import声明的代码的时候……什么都没发生！