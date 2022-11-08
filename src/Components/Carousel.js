import React from 'react'
import { Link } from 'react-router-dom'

function Carousel() {
  return (
    <>
       <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <Link to="/beverages"> <img className="first-slide" src="images/b1.jpg" alt="First slide"/></Link>
       
        </div>

        <div className="item">
         <Link to="/personalcare"> <img className="second-slide " src="images/b3.jpg" alt="Second slide"/></Link>
         
        </div>
        <div className="item">
          <Link to="household.html"><img className="third-slide " src="images/b1.jpg" alt="Third slide"/></Link>
          
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Carousel
