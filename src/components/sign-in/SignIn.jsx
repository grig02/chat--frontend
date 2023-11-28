import React, {useState} from 'react'
import './SignIn.css'

const SignIn = ({sendUsername}) => {
  const [username , setUsername] = useState('')

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username.trim() !== '') {
      sendUsername(username.trim())
      setUsername('')
    }
  }

  return (
    <div className="sign-in">
      <form className="chat-input-container" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          type="text"
          placeholder="Type your username..."
          value={username}
          onChange={handleInputChange}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>

  )
}

export default SignIn
