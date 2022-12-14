import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <div className="agileits_header">
		<div className="container">
			<div className="w3l_offers">
				<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <Link to="products.html">SHOP NOW</Link></p>
			</div>
			<div className="agile-login">
				<ul>
					<li><Link to="/register"> Create Account </Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/contact">Help</Link></li>
					
				</ul>
			</div>
			<div className="product_list_header">  
        <form action="#" method="post" className="last"> 
          <input type="hidden" name="cmd" defaultValue="_cart" />
          <input type="hidden" name="display" defaultValue={1} />
          <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
        </form>  
      </div>
	  
	  <div className="clearfix"> </div>
		</div>
	</div>

    <div class="logo_products">
		<div class="container">
		<div class="w3ls_logo_products_left1">
				<ul class="phone_email">
					<li><i class="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>
					
				</ul>
			</div>
			<div class="w3ls_logo_products_left">
				<h1><Link to="/">Super Market</Link></h1>
			</div>

			<div className="w3l_search">
        <form action="#" method="post">
          <input type="search" name="Search" placeholder="Search for a Product..." required />
          <button type="submit" className="btn btn-default search" aria-label="Left Align">
            <i className="fa fa-search" aria-hidden="true"> </i>
          </button>
          <div className="clearfix" />
        </form>
      </div>
		
			
			<div class="clearfix"> </div>
		</div>
	</div>
    </>
  )
}

export default Header;
