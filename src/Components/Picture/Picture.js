import React from 'react';
import profile from './profile.jpg'


const Picture=()=>{
return(
	<div >
	<img className='br-100 h4 w4 mt4 shadow-5 center animated fadeInDown delay-1s' alt='profile' src={profile} />
	</div>
	);

}

export default Picture;