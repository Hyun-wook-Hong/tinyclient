import { useState } from "react";
import "./PageAboutMes.scss";
//import styled from "styled-components";
import Modal from "../../../../components/Modal/Modal";

const PageAboutMes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickButton = () => {
        setIsOpen(true);
    }   
    
    return (
        <div id="pageAboutMes">
            <p>MES 업무 소개🚀</p>
            <button onClick={onClickButton}>Test</button>
            { isOpen && (<Modal 
                            open={isOpen}
                            onClose={() => { setIsOpen(false); }}
                            title="제목"
                            contents="내용212114142141414141411242"
                        />) }
        </div>
    );
};


export default PageAboutMes;