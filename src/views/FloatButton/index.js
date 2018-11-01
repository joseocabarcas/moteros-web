import React from 'react';
import './float_button.scss';

function FloatButton(props) {
  return (
    <a className={`fab-circle fab-normal ${props.nameClass}`} onClick={props.handleClick}>
      <i className={`icon ${props.icon}`}/>
    </a>
  );
};

export default FloatButton;