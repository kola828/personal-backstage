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
 * 新增文章
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







module.exports = router;