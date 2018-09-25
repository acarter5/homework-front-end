import React from 'react';
import GiphEntry from './GiphEntry.js';
import './List.css';

var List = (props) => {
  let headerText; 
  if (props.type === 'search') {
    headerText = 'Search Results:';
  } else if (props.type === 'trending') {
    headerText = 'Trending Giphs:';
  } else if (props.type === 'favorites') {
    headerText = 'Your Favorited Giphs:';
  }

  return (
    <div className='list-container'>
      <h3>{headerText}</h3>
      <div className='list'>
        {props.giphs.map(giph =>
          <GiphEntry giph={giph} key={giph.id} handleGiphClick={props.handleGiphClick}/>
        )}
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

export default List;