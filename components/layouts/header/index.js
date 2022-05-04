import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '~/assets/icons/header/logo.svg'
import Notify from './Notify'
import Profile from './Profile'
import Sub from './Sub'
const Header = (props) => {
  const listMenu = [
    { url: '/', name: 'Trang chủ' },
    { url: '/hoi-bai', name: 'Hỏi bài' },
    { url: '/lop-hoc-truc-tuyen', name: 'Lớp học' },
    { url: '/thu-vien', name: 'Thư viện' },
    { url: '/blog', name: 'Blog' },
  ]
  const router = useRouter()
  const user = useSelector(state => state.user.user)
  return (
    <div className={`sticky-top`}>
      <div className='position-relative bg-primary text-white shadow' style={{ zIndex: 99 }}>
        <div className="container">
          <nav className='d-flex align-items-center'>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <div className='d-none d-lg-flex ms-lg-4 list-menu'>
              {listMenu.map((it, ind) => (
                <Link key={ind} href={it.url}>
                  <a className={`item ${router.asPath === it.url ? "bg-warning fw-bold" : ""}`}>{ it.name }</a>
                </Link>
              ))}
            </div>
            <div className='ms-auto d-flex align-items-center'>
              {user ? (
                <>
                  <Notify />
                  <Profile />
                </>
              ) : (
                <>
                  <span className='lh-lg py-2 pointer'><i className="fa-solid fa-user"></i> Đăng ký</span><span className='mx-2'>|</span><span className='py-2 lh-lg pointer'><i className="fa-solid fa-arrow-right-from-bracket"></i> Đăng nhập</span>
                </>
              )}

            </div>
          </nav>
        </div>
      </div>
      <Sub />
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