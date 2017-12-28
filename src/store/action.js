/*------vuex的actions------*/
/**
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */


import {
  login,
  addOneArt,
  artList,
  oneArtInfo
} from './getdata'

import {
  TEST,ALL_ART,ONE_ART
} from './mutations'


export default {

  // async login({commit, state}) {
  //   let params=state.addOneArt;
  //   await login(params)
  //       .then((response) => {
  //         console.log('response',response);
  //         // commit(ONE_ART, response.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       });
  // },

  /**
   * @description 新增文章
   * @param commit
   * @param state
   * @returns {Promise.<void>}
   */
  async addArt({commit, state}) {
    let params=state.addOneArt;
    await addOneArt(params)
        .then((response) => {
          console.log('response',response);
          // commit(ONE_ART, response.data)
        })
        .catch((error) => {
          console.log(error)
        });
  },
  /**
   * @description 获取所有文章列表
   * @param commit
   * @param state
   * @returns {Promise.<void>}
   */
  async getArtList({commit, state}) {
    let params={
      page:state.page
    };
    await artList(params)
        .then((response) => {
          commit(ALL_ART, response.data)
        })
        .catch((error) => {
          console.log(error)
        });
  },

  async getOneArt({commit, state}) {

    let params={
      id:state.artId
    };
    await oneArtInfo(params)
        .then((response) => {
          commit(ONE_ART, response.data);
        })
        .catch((error) => {
          console.log(error)
        });

  }

}