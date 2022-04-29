import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '/assets/icons/search.svg'
const Search = ({ className = '', handerSearch }) => {
  const [keyword, setKeyword] = useState('')
  const handerSetKeyword = (event) => {
    setKeyword(event.target.value)
  }
  const handleKeyUp = (event) => {
    const keyCode = event.keyCode || event.which
    if(keyCode === 13) {
      handerSearch(keyword)
    }
  }
  return (
    <div className={`${className} border border-secondary rounded-4 py-2 ps-2 pe-2 w-25 d-flex align-items-center`}>
      <SearchIcon className="" />
      <input type="text" className='w-100 border-0 bg-transparent ps-2' placeholder='Tìm kiếm' value={keyword} onChange={handerSetKeyword} onKeyUp={handleKeyUp} />
    </div>
  )
}

export default Search