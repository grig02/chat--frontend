import React, {useState} from 'react'
import Message from '../Message/Message'
import './Content.css'

const Content = () => {
  const [messages, setMessages] = useState([
    {text: 'message1', unix: 1699953888, left: true},
    {text: 'message2', unix: 1699953898, left: false},
    {text: 'message3', unix: 1699956888, left: true},
  ])
  return (
    <div className="content">{
      messages.map(message => (
        <Message message={message}/>
      ))
    }</div>
  )
}

export default Content
