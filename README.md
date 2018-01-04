
## 前言
这应该算是第一个前后端都是自己写的项目。
整个项目的前期构想是希望能够实现一个个人的工作平台，可以记录一些自己的工作笔记、心得，能够建立备忘录提醒自己还有那些事情需要做。以后可以和整个公司的考勤，薪资等等结合起来。想法很美好，但是自己能力有限目前只是实现了登录和对笔记的增删改。其中新增文章支持markdown语法。

前端技术栈 vue2.0全家桶+Element-UI+axios+stylus

后端技术栈 node.js+express+mysql

### 后端接口部分
 在项目的目录下面新建一个server的文件夹用来放后端相关的文件
 
 新建inde.js 作为后端入口文件
 ```
 // node 后端服务器

const userApi = require('./api/userApi');
const artApi=require('./api/artApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/user', userApi);
app.use('/api/atr',artApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
 ```
 
 新建 db.js 配置数据库相关
 ```
 module.exports = {
  mysql: {
    host     : 'localhost',
    user     : 'root',
    password : '****',
    database : 'myblog',
    port: '3306'
  }
};
 ```
新建sqlMap.js写sql语句
```
const sqlMap = {
  // 用户
  user: {
    add: 'insert into user(user_id, user_name, user_age) values (0, ?, ?)',
    login: 'SELECT * FROM user WHERE user_name= ? ',
  },
  // 文章
  art: {
    addArt: 'INSERT INTO artinfo(art_title,art_author,art_contant,art_edit_time) VALUES(?,?,?,?)',
    upDataArt: 'update artinfo set art_title=?,art_edit_time=?,art_contant=? where art_id=?',
    artList: 'SELECT art_id,art_title,art_author,art_edit_time FROM artinfo WHERE art_author= ? ORDER BY art_edit_time DESC',
    oneArt: 'SELECT  art_id,art_title,art_author,art_contant FROM artinfo WHERE art_id=  ? ',
    delArt: 'DELETE FROM artinfo WHERE art_id=? ',
    pageList:'SELECT art_id,art_title,art_author,art_edit_time FROM artinfo WHERE art_author=? ORDER BY art_edit_time DESC LIMIT ?,?' ,
    allSum:'SELECT COUNT(*) FROM artinfo WHERE art_author= ? ',
  }
};

module.exports = sqlMap;

```
新建一个api文件夹，然后再在下面新建一个userApi.js用于写和用户相关的接口
```
// api/userApi.js ---- 测试用api示例
const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sqlMap');

// 连接数据库
const conn = mysql.createConnection(models.mysql);

conn.connect();

/**
 * @method isLogined
 * @description 判断是否登录
 * @param req {obj}
 * @returns {boolean}
 */
function isLogined(req){
  if(req.cookies["user"] !== null){
    let account = req.cookies["user"];
    let user = account.user;
    if(user){
      console.log(req.cookies.user.user + " had logined.");
      return true;
    }
  }
  return false;
}
/**
 * @method backJson
 * @description 请求成功后返回json
 * @param res {obj}请求结果
 * @param result {obj} 查询结果
 * @param cb 回调函数
 */
const backJson = function (res, result, cb) {
  if (typeof result === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    cb()
  }
};


/**
 * @description 登录接口
 */
router.post('/login', (req, res) => {
  let sql = $sql.user.login;
  let params = req.body;
  let pw = params.password;
  conn.query(sql, [params.username], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      backJson(res, result, function () {
        if (result.length === 0) {
          res.json({
            code: '1',
            msg: '用户名不存在',
          });
        } else if (pw === result[0].user_password) {
          // req.session.user=result[0].user_name;
          res.cookie("user", {user: result[0].user_name,},{expires: new Date(Date.now() + 36000000)});
          res.json({
            code: '0',
            msg: '登录成功',
            data: {
              id: result[0].user_id,
              name:result[0].user_name
              // name: params.username,
            }
          });
        } else {
          res.json({
            code: '1',
            msg: '用户名或密码错误'
          })
        }
      })

    }
  })
});
module.exports = router;
```

完成这些操作后可以在server文件夹下的命令行运行 node indx 使用postman就可以访问http://localhost:3000/api/user/login 这个接口了

### 前端部分
使用了vue-cli脚手架，然后使用vue2.0全家桶配合element-UI完成整个前端页面的绘制。

### 跨域问题
因为端口号不一样 前端调用接口的时候会有跨域的问题存在，可以设置一个代理
- 安装webpack-dev-server插件
- 修改config文件夹下的index.js文件
```
dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://192.168.1.181:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
  
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    // useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },
```
### github地址
https://github.com/kola828/personal-backstage
### 安装
npm i
### 运行 
npm run dev
### 访问地址
http://localhost:8080
### 打包
npm run build
### 页面截图

### 目录结构

```

│  .babelrc                 // ES6语法编译配置
│  .editorconfig            // 代码编写规格
│  .eslintignore
│  .eslintrc.js
│  .gitignore               // 忽略的文件     
│  .postcssrc.js
│  index.html               // 入口html文件
│  package-lock.json
│  package.json             // 项目及工具的依赖配置文件
│  README.md                // 说明
         
├─build                     //webpack配置文件
│      
├─config
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js     
│                  
├─server                     //后端服务
│  │  db.js                  //数据库
│  │  index.js               //入口文件
│  │  sqlMap.js              //sql语句
│  │  
│  └─api                    //api
│          artApi.js 
│          userApi.js
│          
├─src
│  │  App.vue               // 页面入口文件
│  │  main.js               // 程序入口文件，加载各种公共组件
│  │      
│  ├─components             //页面
│  │  │  chart.vue          
│  │  │  editNote.vue
│  │  │  HelloWorld.vue
│  │  │  index.vue
│  │  │  login.vue
│  │  │  noteList.vue
│  │  │  notepad.vue
│  │  │  pie.vue
│  │  │  table.vue
│  │  │  tree.vue
│  │  │  
│  │  └─nav                 //公共导航组件
│  │          header-nav.vue
│  │          left-nav.vue
│  │          
│  ├─image
│  │      bg.jpg
│  │      chart.png
│  │      editnote.png
│  │      head.jpg
│  │      login.jpg
│  │      login2.png
│  │      notelist.png
│  │      notepad.png
│  │      pie.png
│  │      table.png
│  │      tree.png
│  │      
│  ├─router
│  │      index.js
│  │      
│  ├─store                   // vuex的状态管理
│  │      action.js
│  │      common.js          //公共js
│  │      getdata.js         //获取接口数据
│  │      index.js
│  │      mutations.js
│  │      
│  └─style                     //样式
│      │  chart.styl
│      │  common.styl
│      │  editNote.styl
│      │  index.styl
│      │  login.styl
│      │  noteList.styl
│      │  notepad.styl
│      │  pie.styl
│      │  table.styl
│      │  tree.styl
│      │  
│      └─base
│              reset.styl
│              

```
