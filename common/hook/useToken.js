import Cookie from 'js-cookie'
export const access_token = 'access_token'
const getToken = () => {
  return Cookie.get(access_token) || null
}
const setToken = (token_, opt = {}) => {
  // opt = { expires: 7, path: '' }
  if (token_) {
    Cookie.set(access_token, token_, opt)
  } else {
    Cookie.remove(access_token)
  }
  return token_
}
const useToken = () => {
  const token = getToken()
  return { token, setToken }
}
export { getToken, setToken }
export default useToken