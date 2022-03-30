import { NextSeo } from 'next-seo';
import AuthLayout from 'layouts/auth'

const Login = () => {
  const meta = {
    title: 'Login',
    description: 'Page login'
  }
  return (
    <>
      <NextSeo {...meta} />
      <div>Login</div>
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