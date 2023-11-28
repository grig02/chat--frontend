import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import './App.css'
import {io} from 'socket.io-client'
import SignIn from './components/sign-in/SignIn.jsx'

const socket = io('http://localhost:3001', {
  transports: ['websocket'],
})

const App = () => {
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState(localStorage.getItem('username'))

  function onMessage(data) {
    setMessages(state => [...state, ...data])
  }

  useEffect(() => {
    if (username) {
      setMessages([])
      socket.emit('connect-to-server', {username: localStorage.getItem('username')})
      socket.on('new-messages', onMessage)
    }

    return () => {
      socket.off('new-messages', onMessage)
    }
  }, [username])

  return (
    <div className="wrapper">
      {username ? (<>
        <Header username={username}/>
        <Content messages={messages}/>
        <Footer sendMessage={(text) => {
          socket.emit('send-message', {text})
        }}/>
      </>) : <SignIn sendUsername={(data) => {
        setUsername(data)
        localStorage.setItem('username', data)
      }}/>}

    </div>
  )
}

export default App
