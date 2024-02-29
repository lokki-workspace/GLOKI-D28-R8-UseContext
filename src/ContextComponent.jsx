import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { data } from './data';

export const myContext = createContext();

const ContextComponent = ({children}) => {
    const [cartData, setCartData] = useState(data);
  return (
    <myContext.Provider value={{cartData, setCartData}}>
        {children}
    </myContext.Provider>
  )
}

export default ContextComponent