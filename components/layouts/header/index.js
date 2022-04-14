import React from 'react'
import styles from './Header.module.scss'
import NavLink from 'components/link'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={`header bg-blue text-white`}>
      <div className="container m-auto">
        <nav className='nav-menu flex items-center'>
          <NavLink href="/" className='nav-item'>
            <a>
              {/* <Image src='' loading='lazy' width={135} height={41} alt="logo" /> */}
            </a>
          </NavLink>
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
      </div>
    </div>
  )
}

export default Header