import React from 'react'
import Item from './Item'
const index = ({ className = 'bg-white', ...props}) => {
  return (
    <div className={`px-4 pb-3 shadow rounded-2 ${className} `}>index</div>
  )
}
export default index