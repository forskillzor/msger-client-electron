import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '../views/Contacts'
import ChatList from '../views/ChatList'
import Calls from '../views/Calls'
import UserDetails from '../views/UserDetails'
import Chat from '../views/Chat'

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
    path: '/contacts/:id',
    component: UserDetails
  },
  {
    path: '/chats',
    name: 'Chats',
    component: ChatList
  },
  {
    path: '/chats/:id',
    name: 'Chats',
    component: Chat
  },
  {
    path: '/calls',
    name: 'Calls',
    component: Calls
  },
]

const router = new VueRouter({
  routes
})

export default router
