import React from 'react';
import './GiphEntry.css';

var GiphEntry = (props) => (
  <div className='giph-entry' onClick={() => props.handleGiphClick(props.giph)}>
    <img src={props.giph.images.fixed_width.url}/>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
GiphEntry.propTypes = {
  giph: React.PropTypes.object.isRequired
};

export default GiphEntry;