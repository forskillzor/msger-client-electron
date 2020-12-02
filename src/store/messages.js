import ChatService from '../services/chat-service'
export default {
  namespaced: true,
  state: () => ({
    chats : [
      {
        user: '1',
        messages : [
          {
            date: new Date().toLocaleTimeString(),
            message: "Hi! I'm Natalia!",
            side: 'income'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: "hello, I'm Sergey! this is a message to your, that told to you that i'm miss you. ",
            side: 'outcome'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: "Hi! I'm Natalia!",
            side: 'income'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: "hello, I'm Sergey!",
            side: 'outcome'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: "Are you here?",
            side: 'outcome'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: ":(",
            side: 'outcome'
          },
        ],
      },
      {
        user: '2',
        messages : [
          {
            date: new Date().toLocaleTimeString(),
            message: "Hi! My name is Dylan!",
            side: 'income'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: "Hi I'm Sergey",
            side: 'outcome'
          },
          {
            date: new Date().toLocaleTimeString(),
            message: "How are you?",
            side: 'income'
          },
        ]
      }
    ],
  }),
  getters: {
    getMessages: state => user => state.chats.find(item => item.user == user),
    getChats: state => state.chats,
  },
  mutations: {
    addMessage(state, payload) {
      const chat = state.chats.find(item => item.user == payload.user);
      chat.messages.push(payload.payload);
    },
    createChat(state, payload) {
      state.chats.push({user: payload.user, messages: []});
    },
  },
  actions: {
    send({dispatch}, payload) {
      dispatch('receiveMessage', payload);
      const str = JSON.stringify(payload);
      ChatService.send(str);
    },
    receiveMessage(context, payload) {
      if (context.rootGetters['messages/getMessages'](payload.user)) {
        context.commit('addMessage', payload);
        console.log('server exists messages');
      } else {
        context.commit('createChat', payload);
        context.commit('addMessage', payload);
        // console.log('payload: ', payload);
        // console.log('commited message: ', payload.payload);
        // console.log('no server in messages');
      }
    }
  },
}
