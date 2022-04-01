import AuthLayout from 'layouts/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useToken } from 'common/hook'
const Home = ({ posts }) => {
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
        {posts.map((d, idx) => (
          <li key={idx}>{d.id}</li>
        ))}
      </div>
    </>
  )
}

// Home.Layout = AuthLayout
export async function getServerSideProps(ctx) {
  const res = await fetch(`https://api-dev.colearn.vn:8415/v1.0/category/subject`, {
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYTg0NjJhZi1kMDJjLTRhZGItOGI4NC0xZmNhZjZlMjljMWMiLCJpYXQiOjE2NDg3MTg1NzgsImV4cCI6MTY4MDI1NDU3OH0.ed2ajdbwkepQOF55NtDyL2a_Oyx8fGxgBt9DwvAMisimdSOs7YttHzzh5UQjFwD8PfK4gLqxBusIC_G4GknoBQ',
      'Nghiadv': 'aaaaa'
    },
  })
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}
export default Home