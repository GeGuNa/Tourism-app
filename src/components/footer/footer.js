import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './footer.css';

export function Footer() {
	return (<>
	
	
	<div className="footerWlinks">
	
	<div>
		<p className="p">CONTACT</p>
		
		<p><i className="fa fa-map-marker-alt me-3"></i> 123 Street, New York, USA</p>
		<p><i className="fa fa-phone-alt me-3"></i> +012 345 67890</p>
		<p><i className="fa fa-envelope me-3"></i> info@example.com</p>
		
			<div className="ftr1">
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-youtube"></i></a>
					<a href=""><i className="fab fa-linkedin-in"></i></a>	
				</div>
		
		
	
	</div>
	
	
	<div>
	
		<p className="p">COMPANY</p>
		
			
		<div className="KZl1">
			<a href="">About us</a>
			<a href="">Contact us</a>
			<a href="">Support</a>
			<a href="">FAQ</a>
			<a href="">Terms & Conditions</a>
		</div>
		
	
	
	</div>
	
	
	
	<div>
	
			<p className="p">SERVICES</p>
			
			<div className="KZl1">
				<a href="">Foods</a>
				<a href="">Restaurants</a>
				<a href="">Fitness & SPA</a>
				<a href="">Events & Parties</a>
				<a href="">GYM</a>
			</div>
		
	
	
	</div>
	
	
	<div></div>	
	
	
	</div>	
	
	
	
	
	<div className="Divider">  </div>
	
	
	<div className="footer">
	
	<div> © Designed by Phantom</div>
	
			<div>
				<div className="ftr1">
					<a href="">Home</a>
					<a href="">About</a>
					<a href="">Help</a>
					<a href="">Contact</a>	
				</div>	
			</div>
	
	
	</div>
	
	
	
	</>)
}
