import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer__collection'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Service</a></li>
        </div>
        <div className='footer__collection2'>
        <li><a href="#">Accaunt</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Service</a></li>
        </div>
    </div>    
  )
}

export default footer