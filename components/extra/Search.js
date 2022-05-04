import React from 'react'
import { ReactComponent as SearchIcon } from '/assets/icons/search.svg'
import { CustomInput } from 'components/extra'
const Search = ({ className = '', handleSearch }) => {
  return (
    <div className={`${className} border border-secondary rounded-4 py-2 ps-2 pe-2 w-25 form-search d-flex align-items-center`} >
      <SearchIcon className="" />
      <CustomInput type="text" className='w-100 border-0 bg-transparent ps-2' placeholder='Tìm kiếm' handleEnter={handleSearch} />
      <style jsx>{`
        .form-search{
          min-width: 150px;
        }
      `}</style>
    </div>
  )
}

export default Search