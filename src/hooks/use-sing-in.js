import {useEffect, useState} from 'react'
import axios from 'axios'

export function useSingIn() {
  const [token, setToken] = useState(localStorage.getItem('accessToken'))
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  function signInHandler(data) {
    axios.post('http://localhost:3001/api/sign-in', data)
      .then(resp => {
        setToken(resp.data.token)
        setError(null)
      })
      .catch(error => {
        if (error.response.status === 400) {
          setError(error.response.data.message)
          return
        }

        setError('something went wrong')
      })
  }

  function signOutHandler() {
    setToken(null)
  }

  useEffect(() => {
    if (!token) {
      setUser(null)
      localStorage.removeItem('accessToken')
    } else {
      localStorage.setItem('accessToken', token)
      axios.get('http://localhost:3001/api/me', {headers: {'Authorization': `Bearer ${token}`}})
        .then(resp => {
          setUser(resp.data.user)
        })
        .catch(error => {
          if (error.response.status === 401) {
            setToken(null)
            return
          }

          setUser(null)
        })
    }
  }, [token])

  return [error, user, token, signInHandler, signOutHandler]
}
