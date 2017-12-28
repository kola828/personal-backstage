/*------vuex的mutations------*/
/**
 * mutation 必须是同步函数
 * 需要注意的是只能通过mutations改变store的state的状态，
 * 不能直接更改（其实可以更改，不建议这么做，不通过mutations改变state，状态不会被同步）。
 */
const TEST="TEST";
const USER="USER";
const ONE_ART="ONE_ART";
const ALL_ART="ALL_ART";
const ART_ID="ART_ID";
const PAGE='PAGE';

import {
  timeFormat,
} from './common'

export default {

  [TEST](state, info){
    console.log('state2',state);
    console.log('info', info)
    // state.test=info.test
  },

  [USER](state, info){
    state.user=info.user
  },
  [ART_ID](state,info){
    state.artId=info.artId
  },
  [ONE_ART](state, data){
    state.addOneArt=data.data
  },
  [ALL_ART](state, data){

    state.artList=data.data;
    state.artList.result.map(function (item) {
      item.art_edit_time=timeFormat(Date.parse(item.art_edit_time));
      return item
    })
  },
  [PAGE](state, data){
    state.page=data.page
  }
}

export {TEST,USER,ONE_ART,ALL_ART,ART_ID,PAGE}