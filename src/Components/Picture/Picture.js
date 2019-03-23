import React from 'react';
import profile from './profile.jpg'
import Tilt from 'react-tilt';

const Picture=()=>{
return(
	<div >
	
	<Tilt className="Tilt  center mt1-ns " options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"><img className='br-100 h4 w4  shadow-5 animated fadeInDown delay-1s' alt='profile' src={profile} /> </div>
</Tilt>
	</div>
	);

}

export default Picture;