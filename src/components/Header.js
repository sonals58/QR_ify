import React from 'react'
import  './header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <Link to='/' className='logo'><div></div><h1>GenerateQr</h1></Link>
    </div>
  )
}

export default Header