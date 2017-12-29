### 写在前面
这是一个简单的后台管理模板后台管理系统一般使用较多有表格，图表，以及树状图。在这个简单的项目中我的使用node+express+mysql写了几个接口实现了部分功能，有登录，新增笔记，删除笔记，分页以及查看编辑笔记。前端使用技术栈有：vue-cli+vue+vuex+vue-router+axios+element-ui+echart
### 安装
npm i
### 运行 
npm run dev
### 访问地址
http://localhost:8080
### 打包
npm run build
### 页面截图

![image](https://github.com/kola828/personal-backstage/blob/master/src/image/login.jpg)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/login2.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/notelist.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/editnote.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/notepad.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/chart.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/pie.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/table.png)
![image](https://github.com/kola828/personal-backstage/blob/master/src/image/tree.png)

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