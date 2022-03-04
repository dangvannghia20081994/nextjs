import { NavLink } from 'components/link'
const Default = ({ children }) => {
  return (
    <div>
      <nav>
        <NavLink exact href="/login">
          <a>Login</a>
        </NavLink>{' '}
        |
        <NavLink exact href="/">
          <a>Home</a>
        </NavLink>{' '}
        |
        <NavLink href="/about">
          <a>About</a>
        </NavLink>{' '}
      </nav>
      {children}
      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}
export default Default