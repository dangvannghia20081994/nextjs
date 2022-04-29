import { useRouter } from 'next/router'
import { useSocket } from '~/common/hook'
import { useSelector } from 'react-redux'
import styles from './auth.module.scss'
import { useEffect } from 'react'
// https://colorlib.com/wp/html5-and-css3-login-forms/
// https://colorlib.com/etc/lf/Login_v4/index.html
// https://colorlib.com/etc/lf/Login_v3/index.html
const Default = ({ children }) => {
  const socket = useSocket('http://localhost:8080/auth')
  const router = useRouter()
  const user = useSelector(state => state.user.user)
  if (user) {
    router.push('/')
  }
  
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
    <div className={`${styles.auth} d-flex min-vh-100 w-100 p-3 align-items-center justify-content-center position-relative flex-wrap`}>
      <div className={`${styles.wapper} overflow-hidden`}>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
export default Default