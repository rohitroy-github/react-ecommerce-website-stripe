import React, { useState, useEffect } from 'react'
import Link from 'next/link'; 
import { BsBagCheckFill } from 'react-icons/bs'; 
import { useRouter } from 'next/router'; 

import { useStateContext } from '../context/StateContext';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext(); 

    const [order, setOrder] = useState(null); 
  return (
    <div className='success-wrapper'> 
    <div className='success'> 
    <p className='icon'> 
    <BsBagCheckFill />
    </p>
    </div>
    </div>
  )
}

export default success