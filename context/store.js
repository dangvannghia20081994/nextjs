import { createContext, useState } from "react";
const StoreContext = createContext()
const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(null)
  const value = { store, setStore }
  return (
    <StoreContext.Provider value={value}>
    { children }
    </StoreContext.Provider>
  )
}
export { StoreContext, StoreProvider }