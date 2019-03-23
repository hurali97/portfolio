import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Picture from './Components/Picture/Picture';
import CardList from './Components/Cards/CardList';
import Footer from './Components/Footer/Footer';
import {Fields} from './Components/Cards/Fields';
import './App.css';
import './animate.css';
import 'tachyons';
import {
  FloatingMenu,
  MainButton,
    ChildButton,
} from 'react-floating-button-menu';

 


class App extends Component {
  constructor(){
super();
this.state = {
  isOpen: false,

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
    className='grow hover-bg-light-pink:focus mh3 mt4-ns back'
      onClick={() => this.setState({ isOpen: !this.state.isOpen })}
      size={56}
    />
 
  <ChildButton
      className='grow hover-bg-light-pink:focus mh3 mt4-ns about'
      backgroundColor="white"
      size={40}
      onClick={()=>console.log('clicked')}
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
  </FloatingMenu>
</div>
       <Picture />
       <Home />
       </div>
    <div className='second br4 mt6-l'>
  
      <CardList Fields={Fields}/>
  <Footer />
      </div>
      </div>
    );
  }
}

export default App;