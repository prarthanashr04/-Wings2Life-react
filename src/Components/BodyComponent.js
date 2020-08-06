import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import $ from 'jquery';

const Body = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    var buttonStyle = {
        margin: '10px 10px 10px 0'
    };
    $(document).ready(function() {
        $.ajax({
            url: "https://cn80zv9qg7.execute-api.ap-south-1.amazonaws.com/dev"
        }).then(function(data) {
            $("#btn").text("I am an  apple tree");
    
            }
        );
    });
    

    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div >
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button id="btn" color="primary" onClick={toggle}>Do Something</Button>{' '}
            </div>
        </>

    );
}



export default Body;