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
	
	
<img src="/pics/beach-1236581_1280.jpg" className="pMainImg" />
		
	
	
	
	
<br/>	
<br/>	
<br/>		
	
<Link to="/sin"> Sign in </Link>	  <Link to="/sup"> Sign up </Link>
<br/>	
	
	
<Footer/>	
	
	</>)
}


function App() {
  return (
  
<Routes>
	<Route path="/" element={<Main />} />
	<Route path="/sin" element={<Signin />} />
	<Route path="/sup" element={<Signout />} />
	<Route path="*" element={<Erqqq />} />
</Routes>


  );
}

export default App;
