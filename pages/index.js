const Home = ({ results: data }) => {
  return (
    <>
    <div className='hahaha'>
      {data.map((d, idx) => (
        <li key={idx}>{d.id}</li>
      ))}
    </div>
    </>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await res.json()
  return {
    props: { 
      results: posts
    }
  }
}
export default Home