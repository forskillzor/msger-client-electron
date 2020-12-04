import ChatService from '../services/chat-service'
export default {
  namespaced: true,
  state: () => ({
    chats : [
      {
        from: '1',
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
        from: '2',
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
    getMessages: state => user => state.chats.find(item => item.from == user),
    getChats: state => state.chats,
  },
  mutations: {
    addMessage(state, payload) {
      const chat = state.chats.find(item => item.from == payload.from);
      chat.messages.push(payload.payload);
    },
    createChat(state, payload) {
      state.chats.push({from: payload.from, messages: []});
    },
  },
  actions: {
    send({dispatch}, payload) {
      dispatch('receiveMessage', payload);
      const from = payload.from;
      const user = payload.user;
      payload.from = user;
      payload.user = from;
      const str = JSON.stringify(payload);
      ChatService.send(str);
    },
    receiveMessage(context, payload) {
      console.log(payload)
      if (context.rootGetters['messages/getMessages'](payload.from)) {
        context.commit('addMessage', payload);
      } else {
        context.commit('createChat', payload);
        context.commit('addMessage', payload);
      }
    }
  },
}
