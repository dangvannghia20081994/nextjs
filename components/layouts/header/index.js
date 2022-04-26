import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactComponent as Logo } from 'assets/icons/header/logo.svg'
import Notify from './notify'
import Profile from './profile'
const Header = () => {
  const listMenu = [
    { url: '/', name: 'Trang chủ' },
    { url: '/hoi-bai', name: 'Hỏi bài' },
    { url: '/lop-hoc-truc-tuyen', name: 'Lớp học' },
    { url: '/thu-vien', name: 'Thư viện' },
    { url: '/blog', name: 'Blog' },
  ]
  const router = useRouter()
  return (
    <div className={`bg-primary text-white sticky-top shadow`}>
      <div className="container">
        <nav className='d-flex align-items-center'>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className='d-flex ms-4 list-menu'>
            {listMenu.map((it, ind) => (
              <Link key={ind} href={it.url}>
                <a className={`item ${router.asPath === it.url ? "bg-warning" : ""}`}>{ it.name }</a>
              </Link>
            ))}
          </div>
          <div className='ms-auto d-flex align-items-center'>
            <Notify />
            <Profile/>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .list-menu .item{
          padding:1.5rem 1.25rem 1rem;
        }
      `}
      </style>
    </div>
  )
}

export default Header