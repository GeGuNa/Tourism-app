import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export function Navigation() {
	return (<>
	
	
	<div className="clhdmn1">
	
		<div style={{paddingLeft: '10px'}}> 
		<div className="clmnhAbt">
			<div> <i className="fa-regular fa-envelope"></i> admin@example.com </div>
			<div> <i className="fa-solid fa-phone"></i> (723)-700-1183 </div>
		</div>
		
			
			
		 </div>
		 
		
		 
			<div style={{paddingRight: '10px'}}>  
					<div className="clmnhlinks">
						<Link to="/login">My account</Link>
						<Link to="/register">Sign up</Link>
						<Link to="/">Currency</Link>
						<Link to="/">Language</Link>
					</div>
			</div>
	
	</div>
	
	
	
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
					<div><Link to="/about"> About </Link></div>
					<div><Link to="/Contact"> Contact </Link></div>
				</div>
		
		</div>	
	
	</div>
	
	
	
	
	
	</>)
}
