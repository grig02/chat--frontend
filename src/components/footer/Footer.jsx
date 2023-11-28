import React, {useState} from 'react'
import './Footer.css'

const Footer = ({sendMessage}) => {
  const [message, setMessage] = useState('')

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (message.trim() !== '') {
      sendMessage(message.trim())
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
