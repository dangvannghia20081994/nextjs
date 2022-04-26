import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import AuthLayout from 'layouts/auth'
const NavLink = dynamic(() => import('components/link'))
import styles from './Login.module.scss'
const Login = () => {
  const meta = {
    title: 'Login',
    description: 'Page login'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div className={`${styles.logo} flex items-center justify-center m-auto bg-white rounded-full`}>
        <i className="fa-light fa-star-of-david fa-spin"></i>
      </div>
      <div className={`text-4xl my-4 uppercase text-center font-bold text-white`}>Login</div>
      <div className={`${styles.formInput} relative border-b-2 border-b-[rgba(255,255,255,0.24)] mb-7`}>
        <input type='text' placeholder='UserName' name="username" className='text-[16px] pr-[5px] pl-[35px] h-11 text-white w-full bg-tranparent border-0 placeholder:text-white' />
        <span className={`${styles.label} ${styles.email} left-0 pointer-events-none`}></span>
      </div>
      <div className={`${styles.formInput} relative border-b-2 border-b-[rgba(255,255,255,0.24)] mb-7`}>
        <input type='text' placeholder='Password' name="password" className='text-[16px] pr-[5px] pl-[35px] h-11 text-white w-full bg-tranparent border-0 placeholder:text-white' />
        <span className={`${styles.label} ${styles.password} left-0 pointer-events-none`}></span>
      </div>
      <div className={`text-center`}>
        <button className={`${styles.action} rounded-3xl text-[#555555] text-[16px] relative transition-all z-20 font-bold w-28`}>Login</button>
      </div>
      <div className={`${styles.forgot} text-center relative mt-12`}>
        <NavLink href="/forgot"><a>Forgot Password</a></NavLink>
      </div>
      <div className={`${styles.forgot} text-center mt-2`}>
        <NavLink href="/register"><a>Register</a></NavLink>
      </div>
    </>
  )
}
Login.Layout = AuthLayout
export default Login