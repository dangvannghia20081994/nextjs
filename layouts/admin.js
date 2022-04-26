import Link from "next/link"
const Default = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/login">
          <a>Login</a>
        </Link>{' '}
        |
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      {children}
      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}
export default Default