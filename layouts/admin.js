import NavLink from 'components/link'
const Default = ({ children }) => {
  return (
    <div>
      <nav>
        <NavLink href="/login">
          <a>Login</a>
        </NavLink>{' '}
        |
        <NavLink href="/">
          <a>Home</a>
        </NavLink>{' '}
        |
        <NavLink href="/about">
          <a>About</a>
        </NavLink>{' '}
        |
        <NavLink href="/contact">
          <a>Contact</a>
        </NavLink>
      </nav>
      {children}
      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}
export default Default