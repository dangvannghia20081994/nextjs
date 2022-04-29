import { NextSeo } from 'next-seo';
import AuthLayout from '~/layouts/auth'
import Link from "next/link"
import styles from './Register.module.scss'
const Register = () => {
  const meta = {
    title: 'Register',
    description: 'Page register'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div className={`${styles.logo} m-auto d-flex align-items-center justify-content-center bg-white rounded-circle`}>
        <i className="fa-thin fa-star-christmas fa-spin"></i>
      </div>
      <div className={`${styles.title} my-4 text-uppercase text-center fw-bold`}>Register</div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='Email' name="email" />
        <span className={`${styles.label} ${styles.email}`}></span>
      </div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='UserName' name="username" />
        <span className={`${styles.label} ${styles.user}`}></span>
      </div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='Password' name="password" />
        <span className={`${styles.label} ${styles.password}`}></span>
      </div>
      <div className={`${styles.formInput} position-relative`}>
        <input type='text' placeholder='Re Password' name="repassword" />
        <span className={`${styles.label} ${styles.password}`}></span>
      </div>
      <div className={`text-center`}>
        <button className={`${styles.action}`}>Register</button>
      </div>
      <div className={`${styles.forgot} text-center`}>
        <Link href="/login"><a>Login</a></Link>
      </div>
    </>
  )
}
Register.Layout = AuthLayout
export default Register