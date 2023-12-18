import EventEmitter from 'eventemitter3'
import {io} from 'socket.io-client'

export const socketEventEmitter = new EventEmitter()

let token = null
let socket = null

connect()

function connect() {
  if (socket) {
    socket.off('new-messages', onNewMessage)
    socket.off('disconnect', onDisconnect)
    socket.disconnect()
  }

  socket = io('http://localhost:3001', {
    transports: ['websocket'],
  })

  socket.on('new-messages', onNewMessage)
  socket.on('disconnect', onDisconnect)

  if (token) {
    socket.emit('connect-to-server', {token})
  }
}

function onNewMessage(data) {
  socketEventEmitter.emit('new-messages', data)
}

function onDisconnect() {
  setTimeout(connect, 1000)
}

export function sendMessage(data) {
  socket.emit('send-message', data)
}

export function connectToServer(data) {
  token = data.token
  socket.emit('connect-to-server', data)
}
