import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/Konami'

class App extends Component {

  constructor(){
    super();
    this.state = {
      activated: false,
      name: '',
      surprise: false
    };
    this.toggleActivation = this.toggleActivation.bind(this);
    {/* if calling toggleActivation function, bind 'this' to the function to keep the same context  */}
    this.handleChange = this.handleChange.bind(this);
    this.konami=this.konami.bind(this);
  }
  konami(){
    console.log('ah ha');
    this.setState({surprise : true})
  }
  toggleActivation(){
    if (this.state.activated === true){
      this.setState({activated : false})
    } else {
      this.setState({activated : true})
    }
  }
  handleChange(e){
    console.log(e.target.value);
    {/* e.target is the input box */}
    this.setState({name: e.target.value});
  }
  render() {
    let className = 'App-header';
    if (this.state.surprise){
      className += '-konami';
    }
    return (
      <div className="App">
        <header className={className}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Heyo{this.state.name.length > 1 ? `, ${this.state.name}` : ``}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input type='text' onChange={this.handleChange} placeholder='Your Name' />

          <div className='konami'>
            <button onClick={this.toggleActivation}>Toggle!</button>
            {/* use {} to put js with html */}
            {/* can pass in props with components */}
            {this.state.activated ? <Konami name={this.state.name} konami={this.konami}/> : <div>Deactivated</div>}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
