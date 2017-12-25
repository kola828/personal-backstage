// sql语句
const sqlMap = {
  // 用户
  user: {
    add: 'insert into user(user_id, user_name, user_age) values (0, ?, ?)',
    login: 'SELECT * FROM user WHERE user_name= ? ',
    artList: 'SELECT * FROM artinfo',
    // login:'SELECT user_password,user_id FROM user WHERE user_name= ? '
  },
  art: {
    addArt: 'INSERT INTO artinfo(art_title,art_author,art_contant,art_edit_time) VALUES(?,?,?,?)'
  }
};

module.exports = sqlMap;

