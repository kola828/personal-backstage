/*------vuex的state------*/
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);


const state = {
  test:[],
  user:'',
  artList:[],
  artId:'',
  addOneArt:{},
  page:1
};





export default new Vuex.Store({
  state,
  actions,
  mutations,
})