import { auth, setHeaders } from './init'
import { rememberToken, getDecodedToken, getValidToken } from './token'


console.log("auth.baseURL:", auth.defaults.baseURL)

function extractToken(res) {
  return res.headers.authorization.split(' ')[1]
}

export function signIn(data) {
  setHeaders(getValidToken())
  return auth.post('/users/sign_in', data)
  .then((res) => {
    rememberToken(extractToken(res))
    return getDecodedToken()
  })
  .catch((error) => {
    if (/ 401/.test(error.message)) {
      error = new Error('The email/password combination was incorrect')
    }
    throw error
  })
}

export function signUp(data) {
  setHeaders(getValidToken())
  return auth.post('/users', data)
  .then((res) => {
    rememberToken(extractToken(res))
    return getDecodedToken()
  })
}

export function signOut() {
  setHeaders(getValidToken())
  return auth.delete('/users/sign_out')
  .then((res) => {
    rememberToken(null)
    return null
  })
}