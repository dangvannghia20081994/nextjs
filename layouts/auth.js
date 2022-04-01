import {useSocket} from 'common/hook'
import styles from './auth.module.scss'
import { useEffect } from 'react'
const Default = ({ children }) => {
  const socket = useSocket('http://localhost:8080/auth')
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
    <div className={`${styles.auth} d-flex min-vh-100 w-100 p-3 justify-content-center align-items-center position-relative flex-wrap`}>
      <div className={`${styles.wapper} overflow-hidden`}>
        <div className={`w-100`}>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Default