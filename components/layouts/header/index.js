import React from 'react'
import styles from './Header.module.scss'
import NavLink from 'components/link'
const Header = () => {
  return (
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
    </nav>
  )
}

export default Header