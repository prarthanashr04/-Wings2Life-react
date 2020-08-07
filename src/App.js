import React,{ useState,Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar,NavbarBrand } from 'reactstrap';
import $ from 'jquery';
var level=1;
var configuration = {
	branding: {"name" : "SkillPill" },
	title: "Values",
	category: "Baselines",
	icon: "./skillpill.png",
	url: "https://ix61k6qun9.execute-api.ap-southeast-1.amazonaws.com/prod/lifetoolsdataset",
	levelDetails: [{count:24 ,rule: "minimum" }, 
				   {count:12, rule: "exact"},
                   {count:6, rule: "exact"}]
}
$("#favlogo").attr('href',configuration.icon);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };


    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  async getContacts() {
    try {
      this.setState({loading: true});
      let response = await fetch(this.props.api.apiUrl);
      let responseJson = [];
      try {
        responseJson = await response.json();
        this.setState({ 
          contacts: responseJson,
          selectedContact: this.emptyContact,
          loading: false
        });
      } catch (error) {
        console.log(error);
        responseJson = [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <div>
    <div className="Header" >
            <Navbar fixed="top" dark color ="dark" >
              <div className="container">
                <NavbarBrand ><img src={configuration.icon} height="70" width="70" />Select your {configuration.title}</NavbarBrand>
              </div>
            </Navbar>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><img src={configuration.icon} height="70" width="70" />{configuration.branding.name}</ModalHeader>
          <ModalBody>test</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div className="Footer">
            <Navbar fixed="bottom" dark color="dark" text="light">
                <Button variant="dark" type="submit" size="lg" block>Submit</Button>
            </Navbar>
        </div>
    </div>
  }
}

export default App;
