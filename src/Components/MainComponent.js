import React ,{Component}from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
function Main(){
    return(
        <div className="container">
            <Header/>
            <Footer/>
        </div>
    );
}

export default Main;