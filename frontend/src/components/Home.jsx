import React from 'react'
import ReactDOM from 'react-dom/client'
import MyNavbar from './Navbar.jsx'
import Carousel from './Carousel.jsx'
import Collection from './Collections.jsx'
import InfoSection from './InfoSection.jsx'
import Footer from './Footer.jsx'



function Home() {
  return (
    <div className="App">
     <MyNavbar/>
     <Carousel/>
     <Collection/>
     <InfoSection/>
     <Footer/>
    </div>
  )
}

export default Home