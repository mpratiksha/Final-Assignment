import React from 'react'
import Home from './Components/Home';
import Navbar from './Components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Shortcode from './Components/Shortcode';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Login from './Components/Login';
import Groceries from './Components/Groceries';
import Household from './Components/Household';
import PersonalCare from './Components/PersonalCare';
import PackagedFood from './Components/PackagedFood';
import Beverages from './Components/Beverages';
import Specialprod from './Components/Specialprod';
import Products from './Components/Products';
import Gourmet from './Components/Gourmet';
import Offers from './Components/Offers';


const myroute = () => {
    return (
        <BrowserRouter>
        <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/nav" element={<Navbar/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shortcode" element={<Shortcode/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/specialprod" element={<Specialprod/>}/>
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path="/household" element={<Household/>}/>
        <Route path="/personalcare" element={<PersonalCare/>}/>
        <Route path="/packagedfood" element={<PackagedFood/>}/>
        <Route path="/gourmet" element={<Gourmet/>}/>
        <Route path="/beverages" element={<Beverages/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/products" element={<Products/>}/>
        
        
        
     
        </Routes>
        </BrowserRouter>
      
     )
    }
    
    export default myroute