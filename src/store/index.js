import Vue from 'vue';
import Vuex from 'vuex';
import {
  setCookie,
  getUserCookie,
  removeUserCookie,
} from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于菜单切换的闭合状态 false:不闭合 true:闭合
    collapsed: false,
    // 用户信息
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({
      commit,
    }) {
      commit('changeCollapsed');
    },
    setUserInfo({
      commit,
    }, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({
      commit,
    }) {
      commit('logout');
      removeUserCookie();
    },
  },
  modules: {},
});
