import AuthLayout from 'layouts/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useToken } from 'common/hook'
const Home = ({ results: data }) => {
  const { token } = useToken()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  // console.log(token)
  // console.log(user)
  const sendSocket = () => {
    socket.emit('haha', 'haha')
  }
  return (
    <>
      <button onClick={sendSocket}>sendSocket</button>
      <div className='hahaha'>
        {data.map((d, idx) => (
          <li key={idx}>{d.id}</li>
        ))}
      </div>
    </>
  )
}

// Home.Layout = AuthLayout

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  return {
    props: {
      results: posts
    }
  }
}
export default Home