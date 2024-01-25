import React from 'react';

export function PHotlist({children}) {
	
	return (<>
	
	<div className="fxlforPhotos abovePHodivision">
	
		{children}
	
	</div>
	
	</>)
}




export function PHot({Where, Pic}) {
	
	return (<>
	
		<div className="flAbs12">
	
				<div className="hovrq"> </div>
				
				<div className="hovrq2"> {Where} </div>
			
				<img src={Pic} /> 

		</div>
	
	
	</>)
}
