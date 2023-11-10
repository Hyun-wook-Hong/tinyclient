import React from 'react';

const CancelButton = ({ text, onClick }) => {
    return(
        <div className="cancel-button">
            <button onClick={onClick}>{text}</button>
        </div>
    );

};

export default CancelButton;