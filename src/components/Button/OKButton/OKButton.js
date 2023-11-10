import React from 'react';
import './OKButton.scss';

const OKButton = ({ text, onClick }) => {
    return(
            <button className="ok-button" onClick={onClick}>{text}</button>
    );

};

export default OKButton;