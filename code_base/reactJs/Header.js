import React from 'react'
import {NavBar} from './NavBar';
import { Image } from './Image';
import logo from './images/logo.jpeg';

export const Header = ({heading}) => {
  return (
    <div>
        <Image imgRef={logo} altText={'company logo'}></Image>

    <h1 style={{color:'yellow'}}>{heading}</h1>
    <NavBar></NavBar>

     </div>
    

    )
}
