import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation } from '../nav/nav.js';
import { Footer } from '../footer/footer.js';


export function Index_login() { 
	
	document.title = 'Authorization'
	
	return (<>
	<Navigation />
	
	
		<div className="Forms">
				<div className="Forms2">
					
					<div className="forms3 forms4">Login</div>
					
					<div class="forms5">
						<form className="ccl1_fr1m">
								<div> <input placeholder="Email" className="input" value="" type="text"/></div>
								<div> <input placeholder="Password" className="input" value="" type="text"/></div>
								<div> <button className="Button"> Enter </button> </div>
						</form>
					
					</div>
					
				</div>
		</div>
	
	
	
	<Footer />	
	
	</>)
	
	
	
}
