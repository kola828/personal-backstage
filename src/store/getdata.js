import axios from 'axios';

// const addArt=(params)=>axios({
//   method: 'POST',
//   url: '/api/atr/test',
// });

/**
 * @description 登录
 * @param params
 */
const login=(params)=>axios({
  method: 'POST',
  url: '/api/user/login',
  data: params
});
/**
 * @description 新增/修改一篇文章
 * @param params
 */
const addOneArt=(params)=>axios({
  method: 'POST',
  url: '/api/atr/addArt',
  data: params
});
/**
 * @description 获取笔记列表
 */
const artList=(params)=>axios({
  method: 'POST',
  url: '/api/atr/artList',
  data: params
});

/**
 * @description 查询单篇文章
 * @param params
 */
const oneArtInfo=(params)=>axios({
  method: 'POST',
  url: '/api/atr/oneArt',
  data:params
});

const delArt=(params)=>axios({
  method: 'POST',
  url: '/api/atr/delArt',
  data:params
});



export {login,addOneArt,artList,oneArtInfo,delArt}