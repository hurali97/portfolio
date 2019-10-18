import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Picture from './Components/Picture/Picture';
import CardList from './Components/Cards/CardList';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import {Fields} from './Components/Cards/Fields';
import './App.css';
import './animate.css';
import 'tachyons';
import {
  FloatingMenu,
  MainButton,
    ChildButton,
} from 'react-floating-button-menu';
import Tilt from 'react-tilt';
import skills from './skills.png'




class App extends Component {
  constructor(){
super();
this.state = {
  isOpen: false,
icClicked:false,
about:'',
}
  }

onButtonClick=(about)=>{

if(about==='about')
{
  this.setState({icClicked:true})
this.setState({about:'about'})
}else
{
    this.setState({icClicked:false})
    this.setState({about:'xyz'})
}

}

  render() {
    return (
      <div >
      <div className='first' >
   <div  className='right'>
    <FloatingMenu

    slideSpeed={500}
    direction="down"
    spacing={8}
    isOpen={this.state.isOpen}
  >

    <MainButton
    className='grow hover-bg-light-pink:focus mh3 mt4-ns back animated fadeInLeftBig delay-5s'
      onClick={() => {
        return (
          this.setState({ isOpen: !this.state.isOpen }),
this.onButtonClick('xyz')
          );}
      }
      size={56}
    />
 
  <ChildButton
      className='grow hover-bg-light-pink:focus mh3 mt4-ns about'
      backgroundColor="white"
      size={40}
      onClick={()=>{ this.onButtonClick('about')}}
    />
  
     {/* <ChildButton
      icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
    />
    <ChildButton
      icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
    />
  */}
{/*
  <About isClicked={this.state.isClicked} about={this.state.about}/>
  */}
  </FloatingMenu>
</div>
       <Picture />
       <Home />
       </div>
    <div className='second br4 mt2-l animated fadeInUpBig delay-5s'>
      <div style={{display:'flex', flexDirection:'row' , justifyContent: 'space-around', alignItems:'center'}}>

     
  <Tilt className="Tilt ma4 " options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"><img className='br-100 h4 w4  shadow-5 tilt-bg' alt='profile' src={skills} /> 

 </div>
<p className='tc f3 nl3 i b'>Skills</p>
</Tilt>

      <CardList Fields={Fields}/>
      </div>
  <Footer />
      </div>
      </div>
    );
  }
}

export default App;
