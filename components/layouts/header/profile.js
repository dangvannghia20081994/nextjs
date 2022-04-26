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
    <div className='me-5 position-relative py-2 d-flex group align-items-center'>
      <span className='user-name me-2 text-truncate'>Lê Khánh An</span>
      <Image src='https://static.colearn.vn:8413/v1.0/upload/qa/image/11112021/c28dcd67-e6f5-4dca-a6e4-f539cfc36380.jpg' loading='lazy' width={40} height={40} alt="avatar" className='pointer rounded-circle' />
      <div className='list-data position-absolute top-100 right-0 rounded-2 border bg-white text-body px-3 py-1'>
        {
          routes.map((route, ind) => (
            <Link key={ind} href={route.url}>
              <a>
                <div className='item py-2 d-flex align-items-center'>
                  <div className="icon text-center me-2">
                    <route.icon width="20" height="20"/>
                  </div>
                  <div className="flex-grow-1">
                    {route.name}
                  </div>
                </div>
              </a>
            </Link>
          ))
        }
      </div>
      <style jsx>{`
        .group .user-name{
          max-width:120px;
        }
        .group:hover .list-data{
          display:block;
        }
        .group .list-data{
          display: none;
          min-width: 200px;
          max-width: 100%;
        }
        .group .list-data .item .icon{
          width: 26px;
        }
      `}</style>
    </div>
  )
}
export default Notify