import React, { Component } from 'react';
import { Navbar,Button } from "reactstrap";

function Footer() {
    return (
        <div className="Footer">
            <Navbar fixed="bottom" dark color ="dark" text ="light">
              Submit
            </Navbar>
            <div className="Footer">
            <Button color="primary" size="lg" block>Block level button</Button>
            </div>
        </div>
    );
}

export default Footer;