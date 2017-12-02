import React, { Component } from 'react';
import  pokemonMetadata from 'pokemon-metadata'
import './App.css';

class App extends Component {
constructor(props) {
    super(props);
    this.state={
      searchTerm:'',
    };
  }

onChangeCallBack=(event)=>{
  this.setState({searchTerm: event.target.value});
}

render(){
  return(
      <div className="App">
        <input placeholder="input pokemon name"
          onChange={this.onChangeCallBack}

          />
<h3>{this,state.Searchterm}</h3>
{Object.keys(pokemonMetadata).map((pokemon)=>{pokemon=charmeleon
  return(
    <div>{pokemon}</div>
    .filter((pokemon)=>{
      </div>
  </div>{pokemon}</div>
  }
}

export default App;
