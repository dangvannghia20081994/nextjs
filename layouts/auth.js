import { useRouter } from 'next/router'
import { useSocket, useToken } from 'common/hook'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'store'
import getData from '../utils/request'
import styles from './auth.module.scss'
import { useEffect } from 'react'
// https://colorlib.com/wp/html5-and-css3-login-forms/
// https://colorlib.com/etc/lf/Login_v4/index.html
// https://colorlib.com/etc/lf/Login_v3/index.html
const Default = ({ children }) => {
  const socket = useSocket('http://localhost:8080/auth')
  const router = useRouter()
  const { token } = useToken()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  useEffect(() => {
    if (!user) {
      if (token) {
        getData('https://api-dev.colearn.vn:8415/v1.0/profile/user', token)
          .then(user => {
            dispatch(setUser(user.data))
            router.push('/')
          })
      }
    } else {
      router.push('/')
    }
  }, [])

  useEffect(() => {
    if (socket) {
      window.socket = socket
      socket.on('SOME_EVENT', (data) => {
        console.log(data)
      })
    }
    return () => {
      if (socket) socket.disconnect()
    }
  }, [socket])
  return (
    <div className={`${styles.auth} flex min-h-screen w-full p-3 justify-center items-center relative flex-wrap bg-[url('/auth-bg.jpg')] bg-cover bg-center bg-no-repeat z-10`}>
      <div className={`${styles.wapper} overflow-hidden sm:w-96 md:w-128`}>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
export default Default