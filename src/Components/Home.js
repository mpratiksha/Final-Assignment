import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
 import Topbrands from './Topbrands'
 import Carousel from './Carousel'
 import Banner from './Banner'
 import Brands from './Brands'
import Today from './Today'
import Slider from './Slider'



function Home() {
  return (
    <>
    <Header />
    <Navigation/>
    <Slider/>
    <Topbrands/>
    <Carousel/>
    <Banner/>
    <Brands/> 
    <Footer/> 
   
    </>
  )
}

export default Home;

