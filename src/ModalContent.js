import React from 'react';
import './ModalContent.css';
import x_icon from './x_icon.png';
import heart_icon from './heart_icon.png';

var ModalContent = (props) => {
  let heart = null;
  let imgURL = props.giph.images.fixed_width_small.url;

  if (props.favorites.includes(props.giph)) {
    heart = <img src={heart_icon} className="favbutton"/>;
  }

  if (window.innerWidth > 200) {
    imgURL = props.giph.images.fixed_width.url;
  }

  if (window.innerWidth > Number(props.giph.images.downsized.width)) {
    imgURL = props.giph.images.downsized.url;
  }

  if (window.innerWidth > Number(props.giph.images.original.width)) {
    imgURL = props.giph.images.original.url;
  }

  const SubmittedBy = props.giph.user ? 
    (<li>
      Submitted By: {props.giph.user.display_name}
    </li>) :
    null;

  const title = props.giph.title ? 
    (<li>
      Title: {props.giph.title}
    </li>) :
    null;

  const rating = props.giph.rating ?
    (<li>
      Rating: {props.giph.rating}
    </li>) :
    null;

  return (
    <div className='modal-content'>
      <div className="xbutton-container">
        <img src={x_icon} className="xbutton" onClick={props.exit} />
      </div>
      <img src={imgURL} />
      <div className='info-box'>
        <ul>
          {SubmittedBy}
          {title}
          {rating}
        </ul>
      </div>
      <div className="favbutton-container" onClick={()=> { props.handleFavorite(props.favorites, props.giph); }}>
        Favorite
        {heart}
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


export default ModalContent;