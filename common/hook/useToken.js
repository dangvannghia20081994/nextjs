import Cookie from 'js-cookie'
export const accessToken = 'access_token'
const getToken = () => {
  return Cookie.get(accessToken) || null
}
const setToken = (token_, opt = {}) => {
  // opt = { expires: 7, path: '' }
  if (token_) {
    Cookie.set(accessToken, token_, opt)
  } else {
    Cookie.remove(accessToken)
  }
  return token_
}
const useToken = () => {
  const token = getToken()
  return { token, setToken }
}
export { getToken, setToken }
export default useToken