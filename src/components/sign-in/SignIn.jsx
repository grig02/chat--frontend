import React, {useState} from 'react'
import './SignIn.css'
import classnames from 'classnames'

const SignIn = ({error, signIn}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginInputChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

      signIn({login, password})
      setLogin('')
      setPassword('')
  }

  return (
    <div className="sign-in">
      <form className="chat-input-container" onSubmit={handleSubmit}>
        <input
          required
          className="chat-input"
          type="text"
          placeholder="Login..."
          value={login}
          onChange={handleLoginInputChange}
        />
        <input
          required
          className="chat-input"
          type="password"
          placeholder="*********"
          value={password}
          onChange={handlePasswordInputChange}
        />
        <p className={classnames('form-error', {
          'form-error-hide': !error
        })}>Error: {error}</p>
        <button className="send-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default SignIn
