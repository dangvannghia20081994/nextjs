import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { ReactComponent as Question } from 'assets/icons/header/profile/question.svg'
import { ReactComponent as ClassRoom } from 'assets/icons/header/profile/class.svg'
import { ReactComponent as Library } from 'assets/icons/header/profile/library.svg'
import { ReactComponent as UserInfo } from 'assets/icons/header/profile/user-info.svg'
import { ReactComponent as Payment } from 'assets/icons/header/profile/payment.svg'
import { ReactComponent as Logout } from 'assets/icons/header/profile/logout.svg'
const Notify = () => {
  const routes = [
    { url: '/', icon: Question, name: 'Hỏi bài của tôi'},
    { url: '/', icon: ClassRoom, name: 'Lớp học của tôi'},
    { url: '/', icon: Library, name: 'Thư viện của tôi'},
    { url: '/', icon: UserInfo, name: 'Thông tin cá nhân'},
    { url: '/', icon: Payment, name: 'Lịch sử thanh toán'},
    { url: '/', icon: Logout, name: 'Đăng xuất'},
  ]
  return (
    <div className='mr-6 relative py-2 flex group items-center'>
      <span className='user-name mr-2 max-w-[120px] truncate'>Lê Khánh An</span>
      <Image src='https://static.colearn.vn:8413/v1.0/upload/qa/image/11112021/c28dcd67-e6f5-4dca-a6e4-f539cfc36380.jpg' loading='lazy' width={40} height={40} alt="avatar" className='cursor-pointer rounded-full' />
      <div className='list-data absolute top-full right-0 w-52 rounded-xl border border-opacity-10 border-[#000] bg-white text-body px-3 py-1 invisible group-hover:visible'>
        {
          routes.map((route, ind) => (
            <Link key={ind} href={route.url}>
              <a>
                <div className='item py-1 flex items-center'>
                  <div className="flex-none w-7 h-7 mr-1">
                    <route.icon/>
                  </div>
                  <div className="grow">
                    {route.name}
                  </div>
                </div>
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default Notify