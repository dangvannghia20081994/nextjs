
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
const useSocket = (url) => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const options = {
      reconnectionDelayMax: 10000,
      withCredentials: true,
      extraHeaders: {
        "my-header": "abcd"
      },
      auth: {
        token: 'token'
      }
    }
    const socketIo = io(url, options)
    setSocket(socketIo)
    return () => {
      // socketIo.disconnect()
    }
  }, [])
  return socket
}
export default useSocket