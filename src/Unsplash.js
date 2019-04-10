import React, { Component } from 'react';
import Clock from './Clock';
import Logo from './Logo';
import Image from './Image'

export class Unsplash extends Component {


  render() {
  
    return (
      <React.Fragment>
         <Image />
         <Logo />
        <Clock />
        
      </React.Fragment>


    )
  }
}

export default Unsplash
