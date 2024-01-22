import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export function Navigation() {
	return (<>
	
	<div className="HeaderNavigation">
	
		<div> 
			<div className="LeftHdr1"> <div className="KTtl1">Go Trip</div> </div>
		 </div>
		 
		<div> 
		
				<div className="RightHdr1"> 
					<div><Link to="/"> Home </Link></div>
					<div><Link to="/"> Tours </Link></div>
					<div><Link to="/"> Packages </Link></div>
					<div><Link to="/"> Blog </Link></div>
					<div><Link to="/"> About </Link></div>
					<div><Link to="/"> Contact </Link></div>
				</div>
		
		</div>	
	
	</div>
	
	
	
	
	
	</>)
}
