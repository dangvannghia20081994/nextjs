import { NextSeo } from 'next-seo';
import AuthLayout from 'layouts/auth'
import TestComponent from 'components/test'
const About = ({ posts }) => {
  const meta = {
    title: 'About',
    description: 'Page About'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div>About</div>
      {posts.data.map((it, ind) => (
        <TestComponent key={ind} />
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
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
// About.Layout = AuthLayout
export default About