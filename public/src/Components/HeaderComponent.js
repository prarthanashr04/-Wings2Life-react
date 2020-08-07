import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import $ from 'jquery';

function Header(){
  var icon="./skillpill.png";
    
    return (
        <div className="Header" >
            <Navbar fixed="top" dark color ="dark" >
              <div className="container">
                <NavbarBrand ><img  id="logo" height="70" width="70" />SkillPill</NavbarBrand>
                
              </div>
              
            </Navbar>
        </div>
        
      );
    /*$("#logo").attr('src',icon);*/
}

export default Header;