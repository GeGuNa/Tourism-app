import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/nav/nav.js';
import { Footer } from './components/footer/footer.js';
import "./css/App.css";

function Erqqq() {
	return <span> Something is off </span>
}


function Signin() {
	return (<> In <br/>
	
<Link to="/"> Home </Link>	  

		
	
	
	
	 </>)
}


function Signout() {
	return (<> Out <br/>
	
<Link to="/"> Home </Link>	  

		
	
	
	
	 </>)
}



function Main() {
	return (<> 

<Navigation/>
	
<div className="kz_w1">	


	<div className="kz_w1q1">	

				<div className="kz_w1q13">	
						Discover A Brand Luxurious and Best places 
				</div>

	<div className="kz_w1q13">	
						<button className="btn">Check out the places</button>  
						<button className="btn2">Book a new tour</button>
				</div>


	</div>



	<img src="/pics/beach-1236581_1280.jpg" className="pMainImg" />
		
</div>



	
<Customers>

	<div> 
	
	
		<div className="klrowSizes">
			<div>
				<img src="/testimonals/testimonial-1.jpg" />
			</div>
			
			<div> 
			
				<span> Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor 
				</span> 
			
			</div>
			
			<div> 
				<b> Mary koberidze </b> 
			</div>
				 </div>
			
			
	 </div>
	
	
	
	
	<div> 
	
		<div className="klrowSizes">
			<div>
				<img src="/testimonals/testimonial-2.jpg" />
			</div>
			
			<div> 
			
				<span> Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor 
				</span> 
			
			</div>
			
			<div> 
				<b> Diana grace </b> 
			</div>
				 </div>
			
			
			
	 </div>
	 
	 
	 
	 
	 
	 	<div> 
	 	
	 	<div className="klrowSizes">
					<div>
						<img src="/testimonals/testimonial-3.jpg" />
					</div>
					
					<div> 
					
						<span> 
							Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor  Lorem ipsum dolor 
						</span> 
					
					</div>
					
					<div> <b> John snow </b> </div>
			 </div>	
			
			
	 </div>
	 
	 

</Customers>



	
	
<br/>	
<br/>	
<br/>		
	
<Link to="/sin"> Sign in </Link>	  <Link to="/sup"> Sign up </Link>
<br/>	
	
	
<Footer/>	
	
	</>)
}


function  Customers({ children }) {
	return (<>
	
	<div className="pcnt1">


<h2>Customer Testimonials</h2>

<div className="klz1"> Our clients are our partners and we can not imagine a better future for our company</div>


<div className="kwTestimonals">
	{children}
</div>


</div>	

	
	
	</>)
}


export default function App() {
  return (
  
<Routes>
	<Route path="/" element={<Main />} />
	<Route path="/sin" element={<Signin />} />
	<Route path="/sup" element={<Signout />} />
	<Route path="*" element={<Erqqq />} />
</Routes>


  );
}

