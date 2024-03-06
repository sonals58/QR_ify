import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
function home() {
  return (
    <div>
        <div className='intro'>
          <ul>
            <li>Welcome to</li>
            <li style={{color:'rgba(9, 5, 108, 0.88)', cursor:'pointer'}}>GenerateQr</li>
          </ul> 
          
          <p>Welcome to our user-friendly QR code generator! Say hello to a hassle-free way of creating personalized QR codes for all your needs. Whether it's sharing contact information, website URLs, or event details, our platform simplifies the process with just a few clicks. Embrace the power of QR codes for seamless data sharing, and experience the convenience of instant connectivity like never before. Get ready to generate QR codes effortlessly and efficiently with our cutting-edge website!</p>
        </div>
        <div className='buttons'>
            <Link to="/generateQr"><button className='button'>Generate QR</button></Link>
        </div>
    </div>
  )
}

export default home