import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation } from '../nav/nav.js';
import { Footer } from '../footer/footer.js';
import "./index.css"


export function Index_login() { 
	
	document.title = 'Authorization'
	
	return (<>
	<Navigation />
	
	
	<div className="qz_wh1">
	
		authorization
	
	
	</div>
	
	
	
	
	
	<Footer />	
	
	</>)
	
	
	
}
