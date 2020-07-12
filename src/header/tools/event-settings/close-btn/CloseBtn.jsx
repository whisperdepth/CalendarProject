import React from 'react';
import './close-btn.css';

const CloseBtn = ({handleClose}) => {
    return <button onClick={handleClose} className='close-btn'>+</button>
}

export default CloseBtn;