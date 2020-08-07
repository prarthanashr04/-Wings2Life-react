import React, { Component } from 'react';
import { Navbar, Button, Form } from "reactstrap";

function Footer() {
    return (
        <div className="Footer">
            <Navbar fixed="bottom" dark color="dark" text="light">
                <Button variant="dark" type="submit" size="lg" block>Submit</Button>
            </Navbar>
        </div>
    );
}

export default Footer;