import React, { Component } from 'react';
import Mousetrap from 'mousetrap'; //library to detect key commands

class Konami extends Component {
  constructor() {
    super();
    this.popUp = this.popUp.bind(this);
  }

  componentDidMount(){
    Mousetrap.bind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp); //konami code
  }

  componentWillUnmount(){
    Mousetrap.unbind([`1 2 3 4`, `up up down down left right left right b a`]); //konami code
  }
//need to unbind keyboard command

  popUp() {
    //ternary exp
    this.props.konami();
    //alert(`you inputted the konami code${this.props.name.length > 1 ? `, ${this.props.name}!` : `!`}`);
  }

  render() {
    return (
      <div>much wow, {this.props.name} :^)</div>
    );
  }
}

export default Konami;
