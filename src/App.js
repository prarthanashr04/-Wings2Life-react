import React,{ useState,Component } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Navbar,NavbarBrand } from 'reactstrap';
import $ from 'jquery';
var level=1,selected=0;
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
function DataButton(props) {
  return (
    <Button className="itemButton" id={props.idButton} onClick={props.onClick}>{props.value}</Button>
  );
}
class DataSet extends Component {
  renderButton(i){
    let item=this.props.item;
    let idButton="qual_"+i;
    return (
      <DataButton
          idButton={idButton}
          value={item[i].Meaning}
          onClick={() => this.props.onClick(i)}
        />
    )
  }
  render() {
    const rows = [];
    let i;
    let item=this.props.item;

    for (i=0;i<item.length;i++)
    {
      rows.push(
        this.renderButton(i)
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
      .then((data) => this.setState(this.item=data,console.log(data)));
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  updateSelection(i) {
    var property = document.getElementById('qual_'+i);
    if(configuration.levelDetails[level-1].rule=="exact" && this.item[i].Status==0 && configuration.levelDetails[level-1].count==selected)
    return;
    if(this.item[i].Status==0)
    {   property.style.backgroundColor="#00cc00"
        this.item[i].Status=1;
        selected++;
        //$("#currentCount").text(selected+levelCount());
    }
    else if(this.item[i].Status==1)
    {
        property.style.backgroundColor="#0000FF"
        this.item[i].Status=0;
        selected--;
        //$("#currentCount").text(selected+levelCount());
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
        <DataSet item={this.item} onClick={i => this.updateSelection(i)}/>
        <div className="Footer">
            <Navbar fixed="bottom" dark color="dark" text="light">
                <Button variant="dark" type="submit" size="lg" block>Submit</Button>
            </Navbar>
        </div>
    </div>
  }
}

export default App;
