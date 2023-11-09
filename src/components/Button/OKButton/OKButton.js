import React from 'react';

const OKButton = ({ text, onClick }) => {
    return(
            <button className="ok-button" onClick={onClick}>{text}</button>
    );

};

export default OKButton;