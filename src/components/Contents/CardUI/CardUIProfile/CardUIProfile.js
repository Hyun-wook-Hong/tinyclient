import React from 'react';
import './CardUIProfile.scss';

const CardUIProfile = ({ name, 
                         jobTitle,
                         jobDesc,
                         img }) => {

    const rootStyle = {
        display: "flex", 
        marginBottom: "25px",
    };
    
    return (
        <div style={rootStyle}>
            <div className="CardUIProfile">
                        <div className="profile-contents">
                            <span className="profile-contents name">{name}</span>
                        </div>
                        <div className="profile-contents">
                            <span className="profile-contents job-title">{jobTitle}</span>
                        </div>
                        <div className="profile-contents">
                        <p className="profile-contents job-desc">{jobDesc}</p>
                        </div>  
            </div>
            <div className='rich-media'>{img}</div>  
        </div>

    );

};

export default CardUIProfile;