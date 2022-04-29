import { useState, useEffect } from 'react'
import { ReactComponent as Icon } from '~/assets/icons/back-to-top.svg'
const BackToTop = () => {
  const [status, setStatus] = useState('hide')
  const handerScrollToTop = () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }
  useEffect(() => {
    const handerScroll = (e) => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 200) {
        setStatus('show')
      } else {
        setStatus('hide')
      }
    }
    handerScroll()
    window.addEventListener('scroll', handerScroll)
    return () => {
      window.removeEventListener('scroll', handerScroll)
    }
  }, [])
  
  return (
    <>
      <div onClick={handerScrollToTop} className={`start-auto rounded-2 fixed-bottom back-to-top bg-warning text-white d-flex align-items-center justify-content-center pointer ${ status }`}>
        <Icon />
      </div>
      <style jsx>{`
        .back-to-top{
          bottom: 30px;
          right: 80px;
          width: 36px;
          height: 36px;
          opacity: 0;
          transition: opacity .6s ease;
        }
        .back-to-top.show{
          opacity: 1;
        }
      `}</style>
    </>
  )
}

export default BackToTop