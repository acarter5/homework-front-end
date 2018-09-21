import React from 'react';
import GiphEntry from './GiphEntry.js';
import './List.css';

var List = (props) => (


  <div className='list'>
    {props.giphs.map(giph =>
      <GiphEntry giph={giph} key={giph.id}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
List.propTypes = {
  giphs: React.PropTypes.array.isRequired
};

export default List;