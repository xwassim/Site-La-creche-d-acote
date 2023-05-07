import React from 'react'
import merci from '../../Assets/MERCI.svg'
import Navbar from '../../Navigation/Navbar'
import Footer from '../../HomePage/Footer'

const MailSent = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className="mx-[20%] my-10">
        <img src={merci} alt='/'></img>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default MailSent