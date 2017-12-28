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
const isLogined = (req, user) => {
  if (req.cookies["user"] !== null) {
    let account = req.cookies["user"];
    console.log(user, account.user, 555);
    // let user = account.user;
    if (user === account.user) {
      console.log(req.cookies.user.user + " had logined.");
      return true;
    }
  }
  return false;
};
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
 * 查询所有文章
 */
// router.post('/artList', (req, res) => {
//   let sql = $sql.art.artList;
//   let params = req.body;
//   params.art_author = req.cookies.user.user;
//   conn.query(sql, [params.art_author], function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//     if (result) {
//       backJson(res, result, function () {
//         res.json({
//           code: '0',
//           msg: '成功',
//           data: result,
//         });
//       })
//
//     }
//   })
// });

router.post('/artList', (req, res) => {
  let sql = $sql.art.pageList;
  let params = req.body;
  params.art_author = req.cookies.user.user;

  let num;
  let sql2 = $sql.art.allSum;
  let page = params.page;
  conn.query(sql2,[params.art_author], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      num = result[0]["COUNT(*)"];
      // console.log(result[0]["COUNT(*)"])
    }
  });

  conn.query(sql, [params.art_author, (page - 1) * 5, page * 5], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      backJson(res, result, function () {
        res.json({
          code: '0',
          msg: '成功',
          data: {
            'result': result,
            'mun': num
          },
        });
      })

    }
  })
});

/**
 * 查询一篇文章
 */

router.post('/oneArt', (req, res) => {
  let sql = $sql.art.oneArt;
  let params = req.body;
  params.art_author = req.cookies.user.user;
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      backJson(res, result, function () {
        res.json({
          code: '0',
          msg: '成功',
          data: result[0],
        });
      })

    }
  })
});

/**
 * 新增文章
 */
router.post('/addArt', (req, res) => {
  let params = req.body;
  let sql = '';
  let data = [];
  // console.log(req.cookies["user"],1111);
  if (isLogined(req, params.author)) {
    params.art_author = req.cookies.user.user;
    params.art_edit_time = new Date().toLocaleString();
    if (params.id) {
      sql = $sql.art.upDataArt;
      data = [params.art_title, params.art_edit_time, params.art_contant, params.id]
    } else {
      sql = $sql.art.addArt;
      data = [params.art_title, params.art_author, params.art_contant, params.art_edit_time]
    }
    conn.query(sql, data, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        backJson(res, result, function () {
          res.json({
            code: '0',
            msg: '成功',
            // data: result,
          });
        })

      }
    })
  } else {
    console.log('shibai')
  }

});

/**
 * 删除一个文章
 */

router.post('/delArt', (req, res) => {
  let sql = $sql.art.delArt;
  let params = req.body;
  conn.query(sql, [params.id], function (err, result) {
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