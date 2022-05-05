import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setShowModalLogin, setShowModalRegister, setShowModalQuestion } from "~/store";
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
    const url = active.url;
    console.log(url);
    if (!url) return
    switch (url) {
      case '#login':
        if (!user) {
          dispatch(setShowModalLogin(true));
        }
        break
      case '#register':
        if (!user) {
          dispatch(setShowModalRegister(true));
        }
        break
      case '#question':
        if (!user) {
          dispatch(setShowModalLogin(true));
        } else {
          dispatch(setShowModalQuestion(true))
        }
        break
      default:
        location.href = active.url
        break
    }
  }
  if (!active) return
  return (
    <div className={`${className}`}>
      {isSystem ? (
        <img src={active.link} alt={active.name} onClick={handerClick} />
      ) : (
        <a href={active.url} title={active.name} target="_blank">
          <img src={active.link} alt={active.name} />
        </a>
      )}
    </div>
  );
}

export default Banner