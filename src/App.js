import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Search from './Search.js';
import Modal from './Modal.js';
import ModalContent from './ModalContent.js';
import getTrending from './lib/getTrending.js';
import searchGiphy from './lib/searchGiphy.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      giphs: [],
      showModal: false,
      selectedGiph: {},
      favorites: [],
      type: 'trending',
    };
    
    this.loadTrending = this.loadTrending.bind(this);
    this.loadSearched = this.loadSearched.bind(this);
    this.handleGiphClick = this.handleGiphClick.bind(this);
    this.exit = this.exit.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.favoritePersist = this.favoritePersist.bind(this);
  }
  
  componentDidMount() {
    this.loadTrending();
    this.loadFavorites();
  }

  loadTrending() {
    getTrending((data) => {
      this.setState({giphs: data.data.data});
    });
  }

  loadFavorites() {
    const self = this;
    axios.get('http://localhost:8080/favorites')
      .then((data) => {
        self.setState({favorites: JSON.parse(data.data[0].giphs)});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  favoritePersist() {
    const self = this;
    axios.put('http://localhost:8080/favorites', {
      favorites: JSON.stringify(self.state.favorites)
    })
      .then((response) => { console.log(response); })
      .catch((err) => { console.error(err); });
  }

  loadSearched(q) {
    searchGiphy(q, (data)=> {
      this.setState({giphs: data.data.data, type: 'search'});
    });
  }

  handleGiphClick(giph) {
    this.setState({selectedGiph: giph}, () => {
      this.setState({showModal: true});
    });
  }

  handleFavorite(favorites, giph) {
    let giphIndex;
    if (favorites.includes(giph)) {
      giphIndex = favorites.indexOf(giph);
      favorites.splice(giphIndex, 1);
    } else {
      favorites.push(giph);
    }

    this.setState({favorites: favorites}, this.favoritePersist);
  }

  exit() {
    this.setState({showModal: false});
  }

  render() {

    let modal = null;
    if (this.state.showModal === true) {
      modal = (
        <Modal>
          <div className="modal-dark-black">
            <ModalContent giph={this.state.selectedGiph} favorites={this.state.favorites} exit={this.exit} handleFavorite={this.handleFavorite}/>
          </div>
        </Modal>
      );
    } else {
      modal = null;
    }


    return (
      <div className='app'>
        <Search handleSearch={this.loadSearched}/>
        <List giphs={this.state.giphs} handleGiphClick={this.handleGiphClick} type={this.state.type}/>
        <List giphs={this.state.favorites} handleGiphClick={this.handleGiphClick} type='favorites'/>
        {modal}
      </div>
    );
  }
}

export default App;



