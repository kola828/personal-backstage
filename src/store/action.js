/*------vuex的actions------*/
/**
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */


import {
  addArt
} from './getdata'

import {
  TEST,
} from './mutations'


export default {
  async test({commit, state}) {
    await addArt()
        .then((response) => {
          console.log('response',response);
          commit(TEST, response.data)
        })

  },

  /**
   * 获取个人信息
   * @param commit
   * @param state
   * @returns {Promise.<void>}
   */

  // async getUser({commit, state}) {
  //   await getUser(state.name)
  //       .then((response) => {
  //         commit(USER_INFO, response);//commit的时候执行ARTICLE_INFO
  //       });
  // },

}