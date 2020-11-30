import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '../views/Contacts'
import Messages from '../views/Messages'
import Calls from '../views/Calls'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'contacts'
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/calls',
    name: 'Calls',
    component: Calls
  }
]

const router = new VueRouter({
  routes
})

export default router
