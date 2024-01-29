import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation } from '../nav/nav.js';
import { Footer } from '../footer/footer.js';
import "./contact.css"


export function Contact() { 
	
	document.title = 'Contact us'
	
	
	return (<>
	<Navigation />
	
	
	<div className="qz_wh1">
	
	
	<div className="qz_wh4">
	
			<div> <h1> CONTACT WITH US </h1> </div>
			<div> </div>
	
	</div>
	
	

	
	<div className="qz_wh5">
	
		<div> 
			<h4> BOOKING </h4> 
			<span>	<i class="fa-regular fa-envelope-open"></i> book@example.com </span>
		</div>
		
		<div> 
			<h4> GENERAL </h4> 
			<span>	<i class="fa-regular fa-envelope-open"></i> info@example.com </span>
		</div>
		
		
		
		<div> 
			<h4> TECHNICAL </h4> 
			<span>	<i class="fa-regular fa-envelope-open"></i> tech@example.com </span>
		</div>
		
		
	</div>
		
		
	
	
		<div className="qz_wh2">
		
		
			<div className="div1">
			
					<div>
					<h3>Want to ask or just have some questions? then ...</h3>
					<ul className="kzlist2">
					
					<li>Don't hesitate to contact us by texting</li><li>Don't hesitate to call us</li>
					
					<li>Please don't text us some nonsense</li><li>When we are capable we will answer you</li>
					
					<li>Good luck !!!</li>
					
					</ul>
					
					<div>
					
					<div className="clflwus2"><div><i class="fa-solid fa-location-dot"></i><span> Georgia, Tbilisi </span>  
					</div>
					
					<div><i className="fa-solid fa-phone"></i><span> (+995 000 111 222) </span></div>
					
					
					</div><h2>Follow us On Social Media</h2>
					
					<div className="clflwus"><i className="fa-brands fa-instagram"></i><i class="fa-brands fa-facebook"></i><i className="fa-brands fa-twitter"></i><i class="fa-brands fa-pinterest"></i><i className="fa-brands fa-tiktok"></i><i class="fa-brands fa-linkedin"></i><i className="fa-brands fa-behance"></i></div>
					
					</div>
					
					</div>
			
			
			
			</div>
			
			
			
			<div className="div2">
			
					<form><div> <input type="text" placeholder="Name"/> </div><div> <input type="number" placeholder="Number"/> </div><div> <input type="email" placeholder="Email"/> </div><div><select><option value="" disabled="">Category</option><option value="">Support</option><option value="">Technical stuff</option></select></div><div><button class="btn3"> Submit </button></div></form>
			
			
			</div>	 
		 
		 </div>
		 
		 
	
	</div>
	
	
	
	
	
	
	<Footer />	
	
	</>)
	
	
	
}
