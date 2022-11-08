import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'


function About() {
  return (
    <>
    <Header/>
    <Navigation/>
    <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li class="active">About</li>
			</ol>
		</div>
	</div>

	
    <div class="about">
		<div class="container">
			<h3 class="w3_agile_header">About Us</h3>
			<div class="about-agileinfo w3layouts">
				<div class="col-md-8 about-wthree-grids grid-top">
					<h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
					<p class="top">Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. 
                    atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga</p>
					<p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga. At vero eos 
                        et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
                        dolores et quas molestias excepturi sint occaecat atque corrupti quos dolores et quas molestias excepturi sint occaecat 
                        officia deserunt mollitia laborum et dolorum </p>		
					<div class="about-w3agilerow">
						<div class="col-md-4 about-w3imgs">
							<img src="images/p3.jpg" alt="" class="img-responsive zoom-img"/>
						</div>
						<div class="col-md-4 about-w3imgs">
							<img src="images/p4.jpg" alt=""  class="img-responsive zoom-img"/>
						</div>
						<div class="col-md-4 about-w3imgs">
							<img src="images/p3.jpg" alt=""  class="img-responsive zoom-img"/>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="col-md-4 about-wthree-grids">
					<div class="offic-time">
						<div class="time-top">
							<h4>Praesentium :</h4>
						</div>
						<div class="time-bottom">
							<h5>At vero eos </h5>
							<h5>Accusamus et</h5>
							<p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui accusamus et. </p>
						</div>
					</div>
					<div class="testi">
						<h3 class="w3_agile_header">Testimonial</h3>
						<script src="js/responsiveslides.min.js"></script>
						
						<div  id="top" class="callbacks_container">
							<ul class="rslides" id="slider5">
								<li>
									<div class="testi-slider">
										<h4>" I AM VERY PLEASED.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque semper.</p>
										<div class="testi-subscript">
											<p><Link to="#">John Doe,</Link>Adipiscing</p>
											<span class="w3-agilesub"> </span>
										</div>	
									</div>
								</li>
							</ul>	
						</div>
					</div>
				</div>	
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>

    <div class="about-slid agileits-w3layouts"> 
	<img src="images/44.jpg" alt=""/>
	</div>

    <div class="about-team"> 
		<div class="container">
			<h3 class="w3_agile_header">Meet Our Team</h3>
			<div class="team-agileitsinfo">
				<div class="col-md-3 about-team-grids">
					<img src="images/t4.jpg" alt=""/>
					<div class="team-w3lstext">
						<h4><span>ANDERSON,</span> Manager</h4>
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
							<li><Link to="#" class="fa fa-facebook facebook"> </Link></li>
							<li><Link to="#" class="fa fa-twitter twitter"> </Link></li>
							<li><Link to="#" class="fa fa-google-plus googleplus"> </Link></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class=" col-md-3 about-team-grids">
					<img src="images/t2.jpg" alt=""/>
					<div class="team-w3lstext">
						<h4><span>ELIFS,</span> Director</h4>
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
							<li><Link to="#" class="fa fa-facebook facebook"> </Link></li>
							<li><Link to="#" class="fa fa-twitter twitter"> </Link></li>
							<li><Link to="#" class="fa fa-google-plus googleplus"> </Link></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class="col-md-3 about-team-grids">
					<img src="images/t1.jpg" alt=""/>
					<div class="team-w3lstext">
						<h4><span>JESSICA,</span> Supervisior</h4>				
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
							<li><Link to="#" class="fa fa-facebook facebook"> </Link></li>
							<li><Link to="#" class="fa fa-twitter twitter"> </Link></li>
							<li><Link to="#" class="fa fa-google-plus googleplus"> </Link></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class="col-md-3 about-team-grids">
					<img src="images/t3.jpg" alt=""/>
					<div class="team-w3lstext">
						<h4><span>RACKHAM,</span> Staff</h4>
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
							<li><Link to="#" class="fa fa-facebook facebook"> </Link></li>
							<li><Link to="#" class="fa fa-twitter twitter"> </Link></li>
							<li><Link to="#" class="fa fa-google-plus googleplus"> </Link></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>

    <Footer/>
    </>

  )
}

export default About
