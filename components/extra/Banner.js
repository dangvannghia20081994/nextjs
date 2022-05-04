import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setShowModalQuestion } from '~/store'
const Banner = ({ type = 'BANNER_HOME', width = 1920, height = 500, className='', ...props }) => {
  type = type.toUpperCase()
  const banners = useSelector(state => state.app.banners);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch()
  const [active, setActive] = useState(null);
  const [isSystem, setIsSystem] = useState(false)
  useEffect(() => {
    const inSystem = () => {
      if (!active) {
        return false;
      }
      const url = active.url;
      switch (url) {
        case '#login':
        case '#register':
        case '#question':
          return true
        default:
          return false
      }
    }
    setActive(banners.find((item) => item.code === type))
    setIsSystem(inSystem())
  }, [banners])
  const handerClick = () => {
    console.log(active)
    if (!active.url) return
    const url = active.url;
    switch (url) {
      case '#login':
        if (!user) {
          // this.$bvModal.show('login')
        }
        break
      case '#register':
        if (!user) {
          // this.$bvModal.show('register')
        }
        break
      case '#question':
        if (!user) {
          // this.$bvModal.show('login')
        } else {
          dispatch(setShowModalQuestion(true))
        }
        break
      default:
        break
    }
  }
  return (
    <div className={`${className}`} onClick={handerClick}>{ JSON.stringify(active)}</div>
  )
}

export default Banner