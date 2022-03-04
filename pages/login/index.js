import { NextSeo } from 'next-seo';
import AuthLayout from 'layouts/auth'
import TestComponent from 'components/test'

const Login = ({posts}) => {
  const meta = {
    title: 'Login',
    description: 'description'
  }
  // console.log(props);
  return (
    <>
      <NextSeo {...meta} />
      <div>Login</div>
      {posts.map((it, ind) => (
        <TestComponent key={ind} />
      ))}
    </>
  )
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const posts = await res.json()
//   return {
//     props: { 
//       results: posts
//     }
//   }
// }
Login.Layout = AuthLayout
Login.getInitialProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  return { posts }
}
export default Login