import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Search from './Search.js';
import Modal from './Modal.js';
import getTrending from './lib/getTrending.js';
import searchGiphy from './lib/searchGiphy.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      giphs: [],
      showModal: false,
      selectedGiph: {}
    };
    
    this.loadTrending = this.loadTrending.bind(this);
    this.loadSearched = this.loadSearched.bind(this);
  }
  
  componentDidMount() {
    this.loadTrending();
  }

  loadTrending() {
    getTrending((data) => {
      this.setState({giphs: data.data.data});
    });
  }

  loadSearched(q) {
    searchGiphy(q, (data)=> {
      this.setState({giphs: data.data.data});
    });
  }

  render() {
    return (
      <div className='app'>
        <Search handleSearch={this.loadSearched}/>
        <List giphs={this.state.giphs}/>
      </div>
    );
  }
}

export default App;



