import Cookie from 'js-cookie'
const access_token = 'access_token'
const useToken = () => {
  const token = Cookie.get(access_token) || null
  function setToken(token_, opt = {}) {
    // opt = { expires: 7, path: '' }
    if (token_) {
      Cookie.set(access_token, token_, opt)
    } else {
      Cookie.remove(access_token)
    }
    return token_
  }
  return { token, setToken }
}
export default useToken