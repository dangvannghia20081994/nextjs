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
    const inSystem = (banner) => {
      if (!banner) {
        return false;
      }
      const url = banner.url;
      switch (url) {
        case "#login":
        case "#register":
        case "#question":
          return true;
        default:
          return false;
      }
    };
    const banner = banners.find((item) => item.code === type);
    setActive(banner);
    setIsSystem(inSystem(banner));
  }, [banners])
  const handerClick = () => {
    const url = active.url;
    if (!url) return
    switch (url) {
      case '#login':
        dispatch(setShowModalLogin(true));
        if (!user) {
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
        <a href={active.url} title={active.name} target="_blank" rel="noreferrer">
          <img src={active.link} alt={active.name} />
        </a>
      )}
    </div>
  );
}

export default Banner