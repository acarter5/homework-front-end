import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import getTrending from './lib/getTrending.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      giphs: []
    };
    
    this.loadTrending = this.loadTrending.bind(this);
    
  }
  
  componentDidMount() {
    this.loadTrending();
  }

  loadTrending() {
    getTrending((data) => {
      this.setState({giphs: data.data.data});
    });
  }

  render() {
    return (
      <List giphs={this.state.giphs}/>
    );
  }
}

export default App;



