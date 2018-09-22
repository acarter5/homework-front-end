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
    this.handleGiphClick = this.handleGiphClick.bind(this);
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

  handleGiphClick(giph) {
    this.setState({selectedGiph: giph}, () => {
      this.setState({showModal: true});
    });
  }

  render() {

    let modal = null;
    if (this.state.showModal === true) {
      modal = (
        <Modal>
          <div className="modal-dark-black">
            <p>HELLO</p>
          </div>
        </Modal>
      );
    } else {
      modal = null;
    }


    return (
      <div className='app'>
        <Search handleSearch={this.loadSearched}/>
        <List giphs={this.state.giphs} handleGiphClick={this.handleGiphClick}/>
        {modal}
      </div>
    );
  }
}

export default App;



