import React from 'react';
import './close-btn.scss';

const CloseBtn = ({handleClose}) => {
    return <button onClick={handleClose} className='close-btn'>+</button>
}

export default CloseBtn;