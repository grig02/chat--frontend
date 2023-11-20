import React, {useState} from 'react'
import Message from '../Message/Message'
import './Content.css'

const Content = ({messages}) => {

  return (
    <div className="content">{
      messages.map(message => (
        <Message message={message}/>
      ))
    }</div>
  )
}

export default Content
