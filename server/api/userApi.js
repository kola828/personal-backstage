// api/userApi.js ---- 测试用api示例
const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sqlMap');

// 连接数据库
const conn = mysql.createConnection(models.mysql);

conn.connect();
//完成后删除
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};


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

// 增加用户接口
router.post('/addUser', (req, res) => {
  let sql = $sql.user.add;
  let params = req.body;
  conn.query(sql, [params.username, params.age], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
      jsonWrite(res, result);
    }
  })
});

/**
 * 测试接口(查询所有文章)
 */
router.post('/test', (req, res) => {
  let sql = $sql.user.artList;
  let params = req.body;
  console.log(req.cookies["user"],1111);
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      backJson(res, result, function () {
        res.json({
          code: '0',
          msg: '成功',
          data: result,
        });
      })

    }
  })
});

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
          res.cookie("user", {user: result[0].user_name,}, {maxAge: 60000});
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