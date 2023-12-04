import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import './App.css'
import {io} from 'socket.io-client'
import SignIn from './components/sign-in/SignIn.jsx'
import {useSingIn} from './hooks/use-sing-in.js'

const socket = io('http://localhost:3001', {
  transports: ['websocket'],
})

const App = () => {
  const [messages, setMessages] = useState([])
  const [error, user, signInHandler, signOutHandler] = useSingIn()

  function onMessage(data) {
    setMessages(state => [...state, ...data])
  }

  useEffect(() => {
    if (user) {
      setMessages([])
      socket.emit('connect-to-server', {username: user.username})
      socket.on('new-messages', onMessage)
    }

    return () => {
      socket.off('new-messages', onMessage)
    }
  }, [user])

  return (
    <div className="wrapper">
      {user ? (<>
        <Header username={user.username} logout={signOutHandler}/>
        <Content messages={messages}/>
        <Footer sendMessage={(text) => {
          socket.emit('send-message', {text})
        }}/>
      </>) : <SignIn error={error} signIn={signInHandler}/>}
    </div>
  )
}

export default App
