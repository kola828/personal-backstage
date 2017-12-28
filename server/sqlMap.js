// sql语句
const sqlMap = {
  // 用户
  user: {
    add: 'insert into user(user_id, user_name, user_age) values (0, ?, ?)',
    login: 'SELECT * FROM user WHERE user_name= ? ',
    // login:'SELECT user_password,user_id FROM user WHERE user_name= ? '
  },
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

