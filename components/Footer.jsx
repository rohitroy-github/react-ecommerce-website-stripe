import React from 'react'; 

import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'; //Importing 'Instagram" & "Twitter" icons

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Smart Store | 2022 |  All Rights Reserved</p>
        <p className='icons'> 
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
        </p>
    </div>
  )
}

export default Footer;