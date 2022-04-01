import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import AuthLayout from 'layouts/auth'
const NavLink = dynamic(() => import('components/link').then((mod) => mod.NavLink))
import styles from './Login.module.scss'
// https://colorlib.com/wp/html5-and-css3-login-forms/
// https://colorlib.com/etc/lf/Login_v4/index.html
// https://colorlib.com/etc/lf/Login_v3/index.html
const Login = ({ posts }) => {
  console.log(posts)
  const meta = {
    title: 'Login',
    description: 'Page login'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div className={`${styles.logo} m-auto d-flex align-items-center justify-content-center bg-white rounded-circle`}>
        <i className="fa-regular fa-star-shooting"></i>
      </div>
      <div className={`${styles.title} my-4 text-uppercase text-center fw-bold`}>Login</div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='UserName' name="username" />
        <span className={`${styles.label} `}></span>
      </div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='Password' name="password" />
        <span className={`${styles.label} ${styles.password}`}></span>
      </div>
      <div className={`text-center`}>
        <button className={`${styles.action}`}>Login</button>
      </div>
      <div className={`${styles.forgot} text-center`}>
        <NavLink href="/"><a>Forgot Password</a></NavLink>
      </div>
    </>
  )
}
Login.Layout = AuthLayout
Login.getInitialProps = async (ctx) => {
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
  return { posts }
}
export default Login