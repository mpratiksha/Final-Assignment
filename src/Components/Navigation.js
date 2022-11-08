import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
   <div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
							
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li className="active"><Link to="/" className="act">Home</Link></li>	
									
									
									<li><Link to="/groceries">Groceries</Link></li>
									<li><Link to="/household">Household</Link></li>
									<li><Link to="/personalcare">Personal Care</Link></li>
									<li><Link to="/packagedfood">Packaged Foods</Link></li>
									<li><Link to="/beverages">Beverages</Link></li>
									<li><Link to="/gourmet">Gourmet</Link></li>
									<li><Link to="/offers">Offers</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
							</div>
							</nav>
			</div>
		</div>
    </>
  )
}

export default Navigation
