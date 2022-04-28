import React from 'react'
import Image from 'next/image'
import Comment from '~/assets/icons/home/question/comment.svg'
const Home = () => {
  return (
    <div className='question-item border-bottom pt-3 px-3 pb-2'>
      <div className='user-info d-flex'>
        <div className='flex-shrink-0'>
          <Image objectFit='cover' className='rounded-circle' src="https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg" width={64} height={64} alt="avatar" />
        </div> 
        <div className='flex-grow-1 ms-3 position-relative'>
          <div className='user-name fw-bold display-html'>Nguyễn Anh Quân</div>
          <div className='text-mute small text-secondary'>5 phút trước</div>
          <span className='class-info position-absolute bg-warning text-warning py-2 px-3 lh-1 top-0 end-0'>
            Lớp 12 &#8226; Vật lý
          </span>
        </div> 
      </div>
      <div className='mx-5 my-3 px-3 pb-3 border rounded-3 text-center'>
        <div className='content text-start display-html pt-3'>a ta có ƯCLN18;30=6 . Hãy viết tập hợp A các ước của 6 . Nêu nhận xét về tập hợp ƯC18;30 và tập hợp A ta có thể tìm tập hợp các ước của ƯCLNa,b a ta có ƯCLN18;3=6 . Hãy viết tập hợp A các ước của 6 . Nêu nhận xét về tập hợp ƯC18;30 và tập hợp A ta có thể tìm tập hợp các ước của ƯCLNa,b a ta có ƯCLN18;30=6 . Hãy viết tập hợp A các ước của 6 . Nêu nhận xét về tập hợp ƯC18;30 và tập hợp A ta có thể tìm tập hợp các ước của ƯCLNa,b a ta có ƯCLN18;30=6 . Hãy viết tập hợp A các ước của 6 . Nêu nhận xét về tập hợp ƯC18;30 và tập hợp A ta có thể tìm tập hợp các ước của ƯCLN(a,b)</div>
        <Image src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/25032022/colearn-MozGEd.jpg' objectFit='cover' width={450} height={200} alt="image" className='pt-3' />
      </div>
      <div className='comment d-flex align-items-center'>
        <Image src={Comment} width={30} height={30} alt="comment" /> <span className='mx-1'>1</span>
        <span className='user position-relative ms-1'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
        </span>
        <span className='user position-relative ms-1'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
        </span>
        <span className='user position-relative ms-1'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
          <div className='backdrop position-absolute top-0 end-0 bottom-0 start-0 bg-black rounded-circle'></div>
          <div className='number position-center text-white small'>+1</div>
        </span>
        <span className='user position-relative ms-1'>
          <img src='https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg' className='avatar' alt='avatar' />
          <div className='backdrop'></div>
          <img src={require('~/assets/icons/home/question/typing.gif')} className='avatar' alt='avatar' />
        </span>
      </div>
      <style jsx>{`
        .class-info{
          --bs-bg-opacity: .1;
          border-radius: 20px;
        }
        .content{
          --line: 4
        }
        .backdrop{
          --bs-bg-opacity: .6
        }
      `}</style>
    </div>
  )
}

export default Home