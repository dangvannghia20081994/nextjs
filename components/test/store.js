import React, { useContext } from 'react'
import { StoreContext } from '~/context/store'
const Test = () => {
  const context = useContext(StoreContext)
  return (
    <div>
      {item.name}
      <button onClick={() => context.setStore({ a: 'a' })}>Click</button>
    </div>
  )
}

export default Test