import { NextSeo } from 'next-seo';
import AuthLayout from 'layouts/auth'
import Link from "next/link"
import styles from './Forgot.module.scss'
const Register = () => {
  const meta = {
    title: 'Forgot',
    description: 'Page forgot'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div className={`${styles.logo} m-auto d-flex align-items-center justify-content-center bg-white rounded-circle`}>
        <i className="fa-thin fa-star-christmas fa-spin"></i>
      </div>
      <div className={`${styles.title} my-4 text-uppercase text-center fw-bold`}>Forgot</div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='UserName' name="username" />
        <span className={`${styles.label} `}></span>
      </div>
      <div className={`text-center`}>
        <button className={`${styles.action} text-center`}>Get pass</button>
      </div>
      <div className={`${styles.forgot} text-center relative mt-12`}>
        <Link href="/login"><a>Login</a></Link>
      </div>
    </>
  )
}
Register.Layout = AuthLayout
export default Register