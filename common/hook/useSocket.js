
import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const useSocket = (url) => {
  const [socket, setSocket] = useState(null)
  const user = useSelector(state=>state.user.user)
  useEffect(() => {
    if (!user) {return}
    const token = user?.token || "";
    const options = {
      reconnectionDelayMax: 10000,
      withCredentials: false,
      extraHeaders: {
        "my-header": "abcd",
      },
      auth: {
        token,
      },
      query: {
        token,
      },
    };
    const socketIo = io(url, options);
    setSocket(socketIo);
    return () => {
      socketIo.disconnect()
    };
  }, [user]);
  return socket
}
export default useSocket