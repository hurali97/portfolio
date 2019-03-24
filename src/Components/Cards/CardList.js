import React from 'react';
import Cards from './Cards'


const CardList=({Fields})=>{
return(
	<div >
	
	<article class="mh7-l br4 pa3 pa4-ns mv3 animated fadeInUpBig delay-5s b--black-10 nt6-ns bg-linear shadow-4">

	<div className='center '>
{
Fields.map((user,i)=>{
	return (<Cards key={i}
	 tag={Fields[i].tag}
	 url={Fields[i].url}/>
);

})
}
</div>
</article>

	</div>
	);

}

export default CardList;