import React from 'react';
import './OKButton.scss';

const OKButton = ({ text, onClick, type, variant }) => {
    return(
            <button className="ok-button" 
                    onClick={onClick}
                    //type={type}
                    //variant={variant}
            >{text}</button>
    );

};

export default OKButton;