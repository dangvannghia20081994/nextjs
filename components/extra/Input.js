import React, { useState } from 'react'
const CustomInput = ({ handleEnter, handleChange, value = '', ...props }) => {
  const [keyword, setKeyword] = useState(value)
  const checkHandleKeyUp = (e) => {
    if (typeof handleEnter === 'function') {
      const keyCode = e.keyCode || e.which
      if (keyCode === 13) {
        handleEnter(e.target.value)
      }
    }
  }
  const checkHandleChange = (e) => {
    setKeyword(e.target.value)
    if (typeof handleChange === 'function') {
      handleChange(e.target.value)
    }
  }
  return (
    <input {...props} value={keyword} onKeyUp={checkHandleKeyUp} onChange={checkHandleChange}/>
  )
}

export default CustomInput