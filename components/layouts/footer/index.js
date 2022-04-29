import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { ReactComponent as Mobile } from '~/assets/icons/footer/mobile.svg'
import { ReactComponent as Email } from '~/assets/icons/footer/email.svg'
import Logo from '~/assets/icons/footer/logo.svg'
import Notify from '~/assets/icons/footer/notify.svg'
import Qrcode from '~/assets/icons/footer/qrcode.svg'
import Chplay from '~/assets/icons/footer/chplay.svg'
import Appstore from '~/assets/icons/footer/appstore.svg'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row gy-3'>
          <div className='col-lg-12 mt-0'>
            <Image src={Logo} width={210} height={65} loading="lazy" alt='' />
          </div>
          <div className="col-lg-6">
            <div className={`white-space-break des pb-2 ${styles.des}`}>
              <b>Công ty chủ quản:</b> Công ty Cổ phần Đầu tư Phát triển Công nghệ Điện tử Viễn thông (Elcom Corp){'\n'}
              <b>Trụ sở chính:</b> Tòa nhà ELCOM, phố Duy Tân,quận ​Cầu Giấy,thành phố Hà Nội, Việt Nam{'\n'}
              <b>Giấy chứng nhận ĐKKD:</b> số 0101435127 do Sở Kế hoạch & Đầu tư Thành phố Hà Nội.{'\n'}
              Cấp ngày 18/07/2003.{'\n'}
              Thay đổi lần thứ 24, ngày 28/05/2020
            </div>
            <Image src={Notify} width={170} height={65} loading="lazy" alt='' />
          </div>
          <div className="col-lg-2">
            <div className='title text-uppercase fw-bold'>Thông tin</div>
            <div className="list pt-3">
              <div className='item pb-2'>Giới thiệu</div>
              <div className='item pb-2'>Dịch vụ Colearn</div>
              <div className='item pb-2'>Điều khoản sử dụng</div>
              <div className='item pb-2'>Chính sách bảo mật</div>
              <div className='item'>Hướng dẫn sử dụng</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className='title text-uppercase fw-bold'>Dịch vụ</div>
            <div className="list pt-3">
              <div className='item pb-2'>Hỏi bài</div>
              <div className='item pb-2'>Lớp học</div>
              <div className='item'>Thư viện</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className='title text-uppercase fw-bold'>Hỗ trợ khách hàng</div>
            <div className="list pt-3">
              <div className='item pb-2'><Mobile className="me-2" />Hotline: 1900866648</div>
              <div className='item pb-2'><Email className="me-2" />support@colearn.com.vn</div>
            </div>
            <div className='title text-uppercase fw-bold'>Tải ứng dụng colearn</div>
            <div className="list pt-3">
              <div className='item d-flex'>
                <div className="flex-shrink-0">
                  <div className='bg-white p-1'>
                    <Image src={Qrcode} width={70} height={70} loading="lazy" alt='' />
                  </div>
                </div>
                <div className="flex-grow-1 ms-2">
                  <Image src={Chplay} width={110} height={32} loading="lazy" alt='' />
                  <Image src={Appstore} width={110} height={32} loading="lazy" alt='' />
                </div>
              </div>
              <div className='item pt-2 fst-italic small'>Quét mã QR code để cài đặt</div>
            </div>
          </div>
        </div>
        <div className='border-top my-3'></div>
        <div className='small'>© 2020 - Bản quyền thuộc về Công ty cổ phần Elcom</div>
      </div>
    </footer>
  )
}

export default Footer