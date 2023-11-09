import { useState } from "react";
import "./PageAboutMes.scss";
//import styled from "styled-components";
//import Modal from "../../../../components/Modal/Modal";
import SelectBox from "../../../../components/SelectBox/SelectBox";
import GridComponent from "../../../../components/Grid/GridComponent";

const PageAboutMes = () => {
    /*const [isOpen, setIsOpen] = useState(false);*/

    /*const onClickButton = () => {
        setIsOpen(true);
    }*/  

    const OPTION = [
        { value: "apple", name: "사과"},
        { value: "banana", name: "바나나"},
        { value: "orange", name: "오렌지"}
    ];
    
    return (
        <div id="pageAboutMes">
            <p>MES 업무 소개🚀</p>
            {/*<button onClick={onClickButton}>Test</button>
            { isOpen && (<Modal 
                            open={isOpen}
                            onClose={() => { setIsOpen(false); }}
                            title="제목"
                            contents="내용212114142141414141411242"
                        />) }
            */}
            {/*<SelectBox options={OPTION}
                       defaultValue="banana" /> */}   
        </div>
    );
};


export default PageAboutMes;