import { NextSeo } from 'next-seo';
import AuthLayout from '~/layouts/auth'
import Link from "next/link"
import styles from './Login.module.scss'
const Login = () => {
  const meta = {
    title: 'Login',
    description: 'Page login'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div className={`${styles.logo} m-auto d-flex align-items-center justify-content-center bg-white rounded-circle`}>
        <i className="fa-light fa-star-of-david fa-spin"></i>
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
        <Link href="/forgot"><a>Forgot Password</a></Link>
      </div>
      <div className={`${styles.forgot} text-center mt-2`}>
        <Link href="/register"><a>Register</a></Link>
      </div>
    </>
  )
}
Login.Layout = AuthLayout
export default Login