import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import Mathjax from 'components/extra/Mathjax'


import Number from '~/assets/icons/question/number.svg'
import NoAvatar from '~/assets/icons/no-avatar.svg'
import { ReactComponent as Typing } from '~/assets/icons/home/question/typing.svg'

import { relativeTime } from 'utils/helper'
const Item = ({ item, className = '', ...props }) => {
  
  return (
    <div className={`${className} position-relative`}>
      {item.status !== 4 && (
        <span className="text-success position-absolute end-0 pe-3">Hỏi lần đầu</span>
      )}
      <span className='text-secondary h5'>
        {item.class.name} &#8226; {item.category.name}
      </span>
      <div className='pt-2 d-flex'>
        <div className='flex-shrink-0'>
          <Image objectFit='cover' className='rounded-circle' src={item.owner.avatar || NoAvatar} width={45} height={45} alt="avatar" />
        </div>
        <div className='flex-grow-1 ms-2'>
          <div className='user-name fw-bold display-html'>{item.owner.fullName}</div>
          <div className='text-mute small text-secondary'>{relativeTime(item.created_at)}</div>
        </div>
      </div>
      {
        item.content && (
          <div className='content display-html'>
            <Mathjax>{item.content}</Mathjax>
          </div>
        )
      }
      {item.image && item.image.length > 0 ?
        (
        <div className='position-relative overflow-hidden text-center border mt-2 p-2' style={{ maxHeight: 300 }}>
          {
            item.image.map((it, ind) => (
              <img key={ind} src={it} alt="" height={260} width={400} className="auto-scroll" />
            ))
          }
        </div>
        )
        : (
          <div className='border-bottom pt-2'></div>
        )
      }
      <div className='d-flex align-items-center pt-3' style={{ '--size': '20px' }}>
        <Image src={Number} width={17} height={17} alt="Number" /> <span className='ms-1 me-2 lh-1'>1</span>
        <span className='user position-relative ms-1 d-flex'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
        </span>
        <span className='user position-relative ms-1 d-flex'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
          <div className='backdrop position-absolute top-0 end-0 bottom-0 start-0 bg-black rounded-circle'></div>
          <div className='number position-center text-white h6 mb-0'>+1</div>
        </span>
        <span className='user position-relative ms-1 d-flex'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
          <div className='backdrop position-absolute top-0 end-0 bottom-0 start-0 bg-black rounded-circle'></div>
          <div className='typing position-center'>
            <Typing width={20} height={20} />
          </div>
        </span>
        {/* <div className='action ms-auto'>
          <button className='btn btn-primary text-white py-1 px-4 rounded-4' onClick={() => console.log("Primary")}>Trả lời</button>
        </div> */}
      </div>
      <style jsx>{`
        .content{
          --line: 4;
        }
        .backdrop{
          --bs-bg-opacity: .6;
        }
      `}</style>
    </div>
  )
}

export default Item