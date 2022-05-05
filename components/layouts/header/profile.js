import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Dropdown from 'react-bootstrap/Dropdown'
import { useSelector } from 'react-redux'
import { ReactComponent as Question } from '~/assets/icons/header/profile/question.svg'
import { ReactComponent as ClassRoom } from '~/assets/icons/header/profile/class.svg'
import { ReactComponent as Library } from '~/assets/icons/header/profile/library.svg'
import { ReactComponent as UserInfo } from '~/assets/icons/header/profile/user-info.svg'
import { ReactComponent as Payment } from '~/assets/icons/header/profile/payment.svg'
import { ReactComponent as Logout } from '~/assets/icons/header/profile/logout.svg'
import NoAvatar from '~/assets/icons/no-avatar.svg'
const Profile = () => {
  const user = useSelector(state => state.user.user)
  const routes = [
    { url: '/', icon: Question, name: 'Hỏi bài của tôi'},
    { url: '/', icon: ClassRoom, name: 'Lớp học của tôi'},
    { url: '/', icon: Library, name: 'Thư viện của tôi'},
    { url: '/', icon: UserInfo, name: 'Thông tin cá nhân'},
    { url: '/', icon: Payment, name: 'Lịch sử thanh toán'},
    { url: '/', icon: Logout, name: 'Đăng xuất'},
  ]
  return (
    <div className='position-relative d-flex group align-items-center'>
      <Dropdown align='end' className='py-2' id="dropdown-profile-header">
        <Dropdown.Toggle as={"div"} variant='transparent' className="no-caret d-flex align-items-center">
          <span className='d-none d-lg-block user-name me-2 text-truncate pointer'>{ user.fullName }</span>
          <Image src={ user.avatar || NoAvatar} objectFit='cover' loading='lazy' width={40} height={40} alt="avatar" className='pointer rounded-circle' />
        </Dropdown.Toggle>
        <Dropdown.Menu className="list-data rounded-1 scrollbar top-100">
          {
            routes.map((Route, ind) => (
              <Dropdown.Item as="div" key={ind} className="px-3 py-2">
                <Link href={Route.url}>
                  <a>
                    <div className='item d-flex align-items-center bg-transparent'>
                      <div className="icon text-center me-2">
                        <Route.icon width="20" height="20"/>
                      </div>
                      <div className="flex-grow-1">
                        {Route.name}
                      </div>
                    </div>
                  </a>
                </Link>
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
      <style jsx global>{`
        #dropdown-profile-header .user-name{
          max-width:120px;
        }
        #dropdown-profile-header .list-data{
          min-width: 200px;
          transform: unset !important;
        }
        #dropdown-profile-header .list-data .item .icon{
          width: 26px;
        }
      `}</style>
    </div>
  )
}
export default Profile