import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setClassActive } from '~/store'
import { ReactComponent as AddQuestion } from '~/assets/icons/header/sub/add-question.svg'
import { ReactComponent as ArrowLeft } from '~/assets/icons/header/sub/arrow-left-black.svg'
import { ReactComponent as ArrowRight } from '~/assets/icons/header/sub/arrow-right-black.svg'
const Sub = () => {
  const menuRef = useRef()
  const subjects = useSelector(state => state.app.subjects) || []
  const [active, setActive] = useState(-1)
  const dispatch = useDispatch()
  const scrollToMenu = (ind) => {
    const menu = menuRef.current
    if (ind < -1) {
      ind = -1
    }
    if (ind > menu.children.length - 2) {
      ind = menu.children.length - 2
    }
    const active = subjects[ind] || null
    dispatch(setClassActive(active))
    setActive(ind)
    if (ind === '') {
      ind = 0
    }
    if (menu) {
      let left = (ind - 4) * 110
      if (window.innerWidth < 992) {
        left = ind * 110 - 50
      }
      menu.scrollTo({
        left,
        behavior: 'smooth'
      })
    }
  }
  return (
    <>
      <div className='bg-white text-body position-relative shadow' style={{ zIndex: 90 }}>
        <div className='container'>
          <div className='sub-global d-flex align-items-center overflow-auto text-nowrap'>
            <span className='py-3 me-4 pointer'>Xem trả lời</span>
            <span className='py-3 me-4 pointer'>Bảng xếp hạng</span>
            <span className='py-3 me-4 pointer'>Nội quy hỏi bài</span>
            <span className='py-3 pointer'>Cơ chế cộng điểm</span>
            <span className='ms-5 ms-lg-auto'>
              <button className='bg-warning rounded-4 text-white py-2 fw-bold px-4'>
                <AddQuestion className="me-2" />Đặt câu hỏi
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className='bg-white text-body position-relative shadow'>
        <div className='container'>
          <div className='py-2 position-relative'>
            <span style={{ minWidth: 25 }} className="pointer h-100 d-flex align-items-center position-y-center start-0 bg-gradient arrow-left" onClick={()=>scrollToMenu(active - 1)}>
              <ArrowLeft />
            </span>
            <div ref={menuRef} className='sub-home text-nowrap overflow-hidden d-flex align-items-center'>
              <span className={`transition px-3 mx-2 py-2 pointer rounded-4 ${active < 0 ? 'bg-primary text-white' : 'bg-light'}`} onClick={() => scrollToMenu(-1)}>Tất cả</span>
              {subjects.map((it, ind) => (
                <span key={ind} className={`transition px-3 mx-2 py-2 pointer rounded-4 ${ind === active ? 'bg-primary text-white' : 'bg-light'}`} onClick={() => scrollToMenu(ind)}>{it.name}</span>
              ))}
            </div>
            <span style={{ minWidth: 30 }} className="pointer h-100 d-flex align-items-center justify-content-end position-y-center end-0 bg-gradient arrow-right" onClick={()=>scrollToMenu(active + 1)}>
              <ArrowRight />
            </span>
          </div>
        </div>
        <style jsx>{`
          .arrow-left{
            --bs-gradient: linear-gradient(-90deg,  rgba(255, 255, 255, 0) 0%, #FFFFFF 66.36%);
          }
          .arrow-right{
            --bs-gradient: linear-gradient(90deg,  rgba(255, 255, 255, 0) 0%, #FFFFFF 66.36%);
          }
        `}</style>
      </div>
    </>
  )
}

export default Sub