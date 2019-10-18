import React from 'react';
import Cards from './Cards'


const CardList=({Fields})=>{
return(
	<div >
	
	<article class=" br4 pa3  mv3 animated fadeInUpBig delay-5s b--black-10  bg-linear shadow-4"
	style={{height:200, marginRight: '10vw'}}
	>

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