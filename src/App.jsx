import React, {useState} from 'react'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import './App.css'


const App = () => {
  const [messages, setMessages] = useState([
    // {text: 'message1', unix: 1699953888, left: true},
    // {text: 'message2', unix: 1699953898, left: false},
    // {text: 'message3', unix: 1699956888, left: true},
  ])

  return (
    <div className="wrapper">
      <Header/>
      <Content messages={messages}/>
      <Footer setMessages={setMessages}/>
    </div>
  )
}

export default App
