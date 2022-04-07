import AuthLayout from 'layouts/auth'
import { NextSeo } from 'next-seo'
import { useSelector, useDispatch } from 'react-redux'
import { useToken } from 'common/hook'
import Image from 'next/image'
const Home = ({ posts }) => {
  const { token } = useToken()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  // console.log(token)
  // console.log(user)
  const sendSocket = () => {
    const socket = window.socket
    if (socket) {
      socket.emit('haha', 'haha')
    }
  }
  const meta = {
    title: 'Login',
    description: 'Page login'
  }
  return (
    <>
      <NextSeo {...meta} />
      <button className='text-3xl font-bold underline' onClick={sendSocket}><i className="fa-duotone fa-browser"></i> sendSocket</button>
      <div className='hahaha'>
        {posts.data.map((d, idx) => (
          <Image key={idx}
            src={`https://img.ophim.tv/uploads/movies/cong-chua-cua-anh-de-thumb.jpg?t=${idx}`}
            width={400}
            height={555}
            loading='lazy'
            layout='intrinsic'
            alt="cong-chua-cua-anh-de-thumb"
          />
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