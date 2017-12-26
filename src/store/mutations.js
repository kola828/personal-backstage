/*------vuex的mutations------*/
/**
 * mutation 必须是同步函数
 * 需要注意的是只能通过mutations改变store的state的状态，
 * 不能直接更改（其实可以更改，不建议这么做，不通过mutations改变state，状态不会被同步）。
 */
const TEST="TEST";


// import {
//   getDate,
// } from '../config/mUtils'

export default {

  [TEST](state, info){
    console.log('state2',state);
    console.log('info', info)
    // state.test=info.test
  },

}

export {TEST,}