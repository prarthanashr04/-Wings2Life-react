import React ,{Component}from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Body from './BodyComponent';
function Main(){
    return(
        <div className="container">
            <Header/>
            <Footer/>
            <Body />
        </div>
    );
}

export default Main;