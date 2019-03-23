import React from 'react';
import './Home.css';

const Home=()=>{
return(
	<div >
	<div className='pv6'>
		<h1 className=' Home f-headline-l animated fadeInUp delay-2s center nt6-ns '>
		Hur Ali
		</h1>
		<strong className='tc f5 animated fadeInUp delay-3s center nt4 fw3-ns'>
		Front-End Developer
		</strong>
		{
	/*	<br></br>
			<ul className='a'> 
<li className='tc pl2-ns f4 b animated fadeInRight delay-4s center nt4'>HTML5</li>
<li className='tc pl2-l f4 b animated fadeInRight delay-5s center mt2'>CSS3</li>
			</ul>
		*/	}
		<strong className='tc f5 animated fadeInUp delay-4s center mt1 fw3-ns'>
		.Net Developer
		</strong>
</div>
	</div>
	);

}

export default Home;