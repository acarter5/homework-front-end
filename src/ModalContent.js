import React from 'react';
import './ModalContent.css';
import x_icon from './x_icon.png';

var ModalContent = (props) => (
  <div className='modal-content'>
    <div className="xbutton-container">
      <img src={x_icon} className="xbutton" onClick={props.exit} />
    </div>
    <img src={props.giph.images.fixed_width.url} />
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


export default ModalContent;