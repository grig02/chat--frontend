import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import './App.css'
import SignIn from './components/sign-in/SignIn.jsx'
import {useSingIn} from './hooks/use-sing-in.js'
import {connectToServer, sendMessage, socketEventEmitter} from './socket-connection.js'

const App = () => {
  const [messages, setMessages] = useState([])
  const [error, user, token, signInHandler, signOutHandler] = useSingIn()

  function onMessage(data) {
    setMessages(state => [...state, ...data])
  }

  useEffect(() => {
    if (token) {
      setMessages([])
      connectToServer({token})
      socketEventEmitter.on('new-messages', onMessage)
    }

    return () => {
      socketEventEmitter.off('new-messages', onMessage)
    }
  }, [token])

  return (
    <div className="wrapper">
      {user ? (<>
        <Header username={user.username} logout={signOutHandler}/>
        <Content messages={messages}/>
        <Footer sendMessage={(text) => {
          sendMessage({text})
        }}/>
      </>) : <SignIn error={error} signIn={signInHandler}/>}
    </div>
  )
}

export default App
