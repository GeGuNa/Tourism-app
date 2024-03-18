import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation } from '../nav/nav.js';
import { Footer } from '../footer/footer.js';
import './teams.css';

export function Teams() {
	
	
const qt1 = [
	{ name: 'Koko koberidze', pic: '/pics/14x20.webp', position: 'Designation'},
	{ name: 'Koko koberidze', pic: '/pics/14x20.webp', position: 'Site owner'},
	{ name: 'Koko koberidze', pic: '/pics/14x20.webp', position: 'Developer  & Programmer'},
	{ name: 'Koko koberidze', pic: '/pics/14x20.webp', position: 'Technical support'},
]	
	
	
	return (<>
		<Navigation />
	

<div className="mrtopq_1"></div>

<div className="text-center">


	<h3 className="section-title">
			OUR TEAMS
	</h3>
	
	<p> Explore Our STAFFS </p>
	
	
<div className="fl_xw1">


{(qt1.map((val,key)=>
	
<div className="slice1" key={key}>

<div className="bck1zq team-item">
		<div> <img src={val.pic} /> </div>
		
		
		<div className="kl_pm1"> 
			<h5 className="ht115"> {val.name}</h5> 
			<small> {val.position}</small>  
		</div>
		
		
	</div>		
	</div>	
))}
	

</div>	
	
	

</div>

	
<div className="mrtopqq_1"></div>	
	
	<Footer />	
	
	</>)
}
