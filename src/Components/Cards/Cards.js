import React from 'react';
import './Cards.css';



const Cards=({tag,url})=>{
return(
	<div >
{//	br-100 h4 w4 dib ba b--black-05 tj-ns pa2
}
	<article class="mw5 mh3-l tc bg-child br4 pa3 pa4-ns mv3 ba b--black-10 grow rowcards nt6-l ">

<div class="hvrbox">
	<img src={url} style={{ height: 100, width: 100 }}  alt="cards" class="hvrbox-layer_bottom"/>
	<div class="hvrbox-layer_top  tc pl6-ns pa3 ">
		<div class="hvrbox-text ">
		<div className=' br4 shadow-4 nb4-ns bg-inherit b--black-10'>
		<p className='f5'>{tag}</p>
		</div>
		</div>
		</div>
</div>
</article>
</div>
	);

}

export default Cards;