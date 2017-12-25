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
// app.use(session({
//   secret:'12345',
//   cookie:{maxAge:60000},
//   resave:false,
//   saveUninitialized:true,
// }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/user', userApi);
app.use('/api/atr',artApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');