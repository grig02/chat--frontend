import React from 'react'
import Message from '../message/Message'
import './Content.css'

const Content = ({messages}) => {

  return (
    <div className="content">
      <div className="message-cnt">
        {
          messages.map(message => (
            <Message message={message}/>
          ))
        }
      </div>

    </div>
  )
}

export default Content
