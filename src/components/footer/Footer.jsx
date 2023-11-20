import React, {useState} from 'react'
import './Footer.css'

const Footer = ({setMessages}) => {
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (message.trim() !== '') {
      setMessages(state => [
        ...state,
        {
          text: message.trim(),
          unix: Math.floor(Date.now() / 1000),
          left: false
        },
      ])
      setMessage('')
    }
  }

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        className="chat-input"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
      />
      <button className="send-button" type="submit">
        Send
      </button>
    </form>
  )
}

export default Footer
