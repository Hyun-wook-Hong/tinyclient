import React from 'react';
import './CardUISub.scss';

const CardUISub = ({ subtitle, icon }) => {
    return (
        <div className="sub-card">
            <div className="subtitle">{subtitle}</div>
            <div className="action-icon">{icon}</div>
        </div>
    );

}

export default CardUISub;