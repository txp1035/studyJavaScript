# blog

## 使用方法

安装 MongoDB，并创建服务和启用服务，[安装教程](http://www.runoob.com/mongodb/mongodb-window-install.html)。

bat 处理文件：`mongod --dbpath D:\Office\MongoDB\data\db`。

安装数据库可视化工具[Robo 3T](https://robomongo.org/)，[使用教程](https://jingyan.baidu.com/article/a17d5285f476c78098c8f2d0.html)。

运行批量处理文件，创建数据库，运行`node index.js`

## 包说明

```json
  "dependencies": {
    "config-lite": "2.1.0",//config-lite 会根据环境变量（NODE_ENV）的不同加载 config 目录下不同的配置文件。
    "connect-flash": "0.1.1",//页面通知的中间件，基于 session 实现
    "connect-mongo": "2.0.1",//将 session 存储于 mongodb，结合 express-session 使用
    "ejs": "2.5.7",//模板
    "express": "4.16.2",//web 框架
    "express-formidable": "git+https://github.com/utatti/express-formidable.git",//接收表单及文件上传的中间件
    "express-session": "1.15.6",//session 中间件
    "express-winston": "2.4.0",//express 的 winston 日志中间件
    "marked": "0.3.12",//markdown 解析
    "moment": "2.20.1",//时间格式化
    "mongolass": "~4.1.1",//mongodb 驱动
    "objectid-to-timestamp": "1.3.0",//根据 ObjectId 生成时间戳
    "sha1": "1.1.1",//加密，用于密码加密
    "winston": "2.4.0"//日志
  },
  "devDependencies": {
    "cross-env": "5.2.0",
    "eslint": "5.5.0",
    "eslint-config-standard": "11.0.0-beta.0",
    "eslint-plugin-import": "2.8.0",
    "eslint-plugin-node": "5.2.1",
    "eslint-plugin-promise": "3.6.0",
    "eslint-plugin-standard": "3.0.1",
    "istanbul": "0.4.5",
    "mocha": "4.1.0",
    "pm2": "3.0.0",
    "supertest": "3.0.0"
  }
```
