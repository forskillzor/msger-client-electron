'use strict'

const socket = new WebSocket('ws://localhost:3000');

const service = {
  socket: socket,
  state: "closed",
  registerStore (store) { this.store = store },
  send (mess) { this.socket.send(mess) },
  receive (str) {
    const data = JSON.parse(str.data)
    this.store.dispatch('messages/receiveMessage', data)
  }
};

socket.onopen = () => {
  socket.state = 'open';
  const msg = {
    command: "register",
    user: service.store.getters['getUserId'],
    date: new Date().toLocaleTimeString(),
    message: "",
    side: "",
    sendTo: ""
  }
  const data = JSON.stringify(msg)
  service.send (data)
}

socket.onmessage = mess => {
  service.receive(mess)
}
socket.onerror = () => {
  socket.state = 'error'
}

socket.onclose = () => {
  socket.state = 'close';
}

export default service;