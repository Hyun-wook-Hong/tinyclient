import React from 'react';
import './CardUIMain.scss';

/* CardUIMain 컴포넌트 */

const CardUIMain = ({ image, 
                      heading, 
                      description, 
                      //buttonLayout,
                    }) => {
    return(
        <div className="main-card">
            <div className="rich-media">
                {image /*props로 받은 image*/}
            </div>
            <h2>{heading}</h2>
            <p>{description}</p>
            {/*<div className="button-layout">{buttonLayout}</div>*/}
        </div>
    );
};

export default CardUIMain;