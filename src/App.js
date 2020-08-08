import React,{ useState,Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar,NavbarBrand } from 'reactstrap';
import $ from 'jquery';
const green = '#39D1B4';
const blue = '#61dafb';
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


class ItemButton extends Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color == blue ? green : blue;
    this.setState({ color: newColor });
  };
  render() {
    const meaning=this.props.Meaning;
    return (
      <Button className="itemButton"  style={{background: this.state.color}} onClick={this.changeColor} color='primary'>{meaning}</Button>
    )
  }
}
class DataSet extends Component {
  render() {
    const rows = [];
    let i;
    let item=this.props.item;
    for (i=0;i<item.length;i++)
    {
      rows.push(
      <ItemButton Meaning={item[i].Meaning} />

      );
    }
    return <div className="itemGroup">{rows}</div>
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
    this.toggle = this.toggle.bind(this);
    this.item=[];
  }

  
  componentDidMount() {
    const apiUrl = this.props.api.apiUrl;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState(this.item=data));
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
        <DataSet item={this.item} />
        <div className="Footer">
            <Navbar fixed="bottom" dark color="dark" text="light">
                <Button variant="dark" type="submit" size="lg" block>Submit</Button>
            </Navbar>
        </div>
    </div>
  }
}

export default App;
