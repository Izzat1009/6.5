import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
        <div className='header__collection'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Service</a></li>
        </div>
    </div>
  )
}

export default Header