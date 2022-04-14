import React from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import Image from 'next/image'
import Logo from 'assets/icons/header/logo.svg'
import Notify from './notify'
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
    <div className={`bg-blue text-white sticky top-0 z-50`}>
      <div className="container m-auto">
        <nav className='flex items-center'>
          <Link href="/">
            <a>
              <Image src={Logo} loading='lazy' width={135} height={41} alt="logo" />
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
            <span>Lê Khánh An</span>
            <Image src='https://static.colearn.vn:8413/v1.0/upload/qa/image/11112021/c28dcd67-e6f5-4dca-a6e4-f539cfc36380.jpg' loading='lazy' width={40} height={40} alt="avatar" className='cursor-pointer rounded-full' />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header