## npm scripts -- CLI Commands

* name, version, description, homepage, author, contributors, repository, keywords

* scripts

    - 参数：npm_package_name, npm_package_version(环境变量中以"npm_config_"开头的都被解释为配置选项)

* main  包的入口文件

* config 添加一些设置，可以供scripts读取用，同时这里的值也会被添加到系统的环境变量中。

    ```
    "config": {
        "port": "8080"
    }
    ```

    优先级：命令行 > 环境变量 > 用户配置文件 > 全局配置 > 内置配置文件 > 默认配置  

* engines  

    指定包运行的环境
    ```
    "engines": {
        "node": ">=0.10.3 < 0.12",
        "npm": "~1.0.20"
    }
    ```


## 常用命令

- NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

- 使用npm help <command>可查看某条命令的详细帮助，例如npm help install。

- 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。

- 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。

- 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。

- 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

- 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。