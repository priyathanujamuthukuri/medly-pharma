import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{height:"50px"}} >Contact us</button>
        </div>
        <p style={{color:"white"}}>The Medly-Pharma one step solution for all paramedical products💊</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 9876543210</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Customer care: 2222-4444-6666📞</p>
      <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()} By AIML-A <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer