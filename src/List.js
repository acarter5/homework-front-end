import React from 'react';
import GiphEntry from './GiphEntry.js';
import './List.css';

var List = (props) => (


  <div className='list'>
    {props.giphs.map(giph =>
      <GiphEntry giph={giph} key={giph.id} handleGiphClick={props.handleGiphClick}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


export default List;