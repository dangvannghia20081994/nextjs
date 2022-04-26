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
    <div className={`bg-blue text-white sticky top-0 z-50 shadow shadow-gray`}>
      <div className="container m-auto">
        <nav className='flex items-center'>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className='flex ml-14'>
            {listMenu.map((it, ind) => (
              <Link key={ind} href={it.url}>
                <a className={`p-5 ${router.asPath === it.url ? "bg-yellow" : ""}`}>{ it.name }</a>
              </Link>
            ))}
          </div>
          <div className='ml-auto flex items-center'>
            <Notify />
            <Profile/>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header