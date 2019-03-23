import React from 'react';


const About=({isClicked,about})=>{
	
	if(about==='about')
	{

  console.log('isClicke')
return(
	<div >
<article class="bg-white br4 pa1 mt2 ba b--black-10 shadow-4"
style={{float:'left'}}
>
 
  <p class="f6 black-70">
    Quite affectionate and outgoing.
   
  </p>
</article>


	</div>
	);
	}
	else
	{
return(
	<div >
	
	</div>
	);
	}


}

export default About;