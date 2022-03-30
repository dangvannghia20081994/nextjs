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
      {posts.map((it, ind) => (
        <TestComponent key={ind} />
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  return {
    props: {
      posts
    }
  }
}
About.Layout = AuthLayout
// Login.getInitialProps = async (ctx) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const posts = await res.json()
//   return { posts }
// }
export default About