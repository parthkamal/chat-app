import React from 'react';
import { MdOnlinePrediction } from 'react-icons/md';
// import { FaBeer } from 'react-icons/fa';

import onlineIcon from '../images/online.png';
import closeIcon from '../images/close.png';

import '../style/InfoBar.css';




const InfoBar = ({ room }) => (
  <div className="info-bar">
    <div className="left-inner-container">
      <img className="online-icon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="right-inner-container">
      <a href="/"><img className='online-icon' src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;