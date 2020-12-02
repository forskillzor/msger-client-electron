import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Contacts from './contacts'
import Messages from './messages'
export default new Vuex.Store({
  modules: {
    contacts: Contacts,
    messages: Messages,
  },
  state: {
    userid: "skillzor"
  },
  getters: {
    getUserId: state => state.userid,
  },
  mutations: {
  },
  actions: {
  },
})
