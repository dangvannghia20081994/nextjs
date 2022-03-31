import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import AuthLayout from 'layouts/auth'
// import { NavLink } from 'components/link'
const NavLink = dynamic(() => import('components/link').then((mod) => mod.NavLink))
import styles from './index.module.scss'
// https://colorlib.com/wp/html5-and-css3-login-forms/
// https://colorlib.com/etc/lf/Login_v4/index.html
// https://colorlib.com/etc/lf/Login_v3/index.html
const Login = () => {
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
// Login.getInitialProps = async (ctx) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const posts = await res.json()
//   return { posts }
// }
export default Login