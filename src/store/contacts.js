export default {
  namespaced: true,
  state: () => ({
    contacts: [
      {
        name: "Badik E",
        email: "skillzor@gmail.com",
        position: "friend",
        status: "online",
        id: 'badik',
        photo: ""
      },
      {
        name: "Chat Server",
        email: "server@server.com",
        position: "Main Chat Server",
        status: "online",
        id: 'server',
        photo: ""
      },
      {
        name: "Natalia Raikova",
        email: "natalia.raikova@gmail.com",
        position: "Accountant",
        photo: "https://uifaces.co/our-content/donated/3799Ffxy.jpeg",
        status: "online",
        id: '1',
      },
      {
        name: "Dylan Ambrose",
        email: "dylan.ambrose@gmail.com",
        position: "Sales Manager",
        photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
        status: "online",
        id: '2',
      },
      {
        name: "Reina Brooks",
        email: "reina.brooks@gmail.com",
        position: "Marketing",
        photo: "https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        status: "online",
        id: '3',
      },
      {
        name: "Robin Wright",
        email: "robin.wright@gmail.com",
        position: "Receptionist",
        photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_UY256_CR3,0,172,256_AL_.jpg",
        status: "online",
        id: '4',
      },
      {
        name: "Sergey Bezrykov",
        email: "bezrykov@gmail.com",
        position: "Actor",
        status: "online",
        id: '5',
      },
      {
        name: "Alexandr Betin",
        email: "bezrykov@gmail.com",
        position: "Actor",
        status: "online",
        id: '6',
      },
      {
        name: "Anton Vasilev",
        email: "bezrykov@gmail.com",
        position: "Actor",
        status: "online",
        id: '7',
      },
      {
        name: "Danila Tokarenko",
        email: "bezrykov@gmail.com",
        position: "Actor",
        status: "online",
        id: '8',
      },
      {
        name: "Sergey Ivanov",
        email: "bezrykov@gmail.com",
        position: "Actor",
        status: "online",
        id: '9',
      },
      {
        name: "Vladimir Seleznev",
        email: "bezrykov@gmail.com",
        position: "Actor",
        status: "online",
        id: '10',
      },
    ],

  }),
  getters: {
    getContacts: state => state.contacts,
    getContactById: state => userid => state.contacts.find(user => user.id == userid)
  },
  mutations: {},
  actions: {},
}
