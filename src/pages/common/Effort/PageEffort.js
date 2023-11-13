import React, { useState, useEffect } from "react";
import OKButton from "../../../components/Button/OKButton/OKButton";
import BoardPost from "../../../components/Board/BoardPost/BoardPost";
import BoardTable from "../../../components/Board/BoardTable/BoardTable";
import useFetchPosts from "../../../hooks/useFetchPosts";
import "./PageEffort.scss";

const PageEffort = () => {
    const { data, error, loading, fetchPosts } = useFetchPosts('http://localhost:18080/posts');
    const [viewedEnrollForm, setViewedEnrollForm] = useState(false);
    const [txtEnrollBtn, setTxtEnrollBtn] = useState('등록');

    const onClickInquiryBtnHandler = () => {
        setViewedEnrollForm(false);
        setTxtEnrollBtn('등록');

        fetchPosts();
    }

    const onClickEnrollBtnHandler = () => {
        fetchPosts();
        
        viewedEnrollForm ? setViewedEnrollForm(false) : setViewedEnrollForm(true);
        viewedEnrollForm ? setTxtEnrollBtn('등록') : setTxtEnrollBtn('취소');
    }


    return (
        <div id="pageEffort">
                <div>
                <div style={{ marginLeft: "-250px" }}>
                    <div style={{ float: "right",
                              marginLeft: "100px",
                              marginBottom: "10px",
                              borderWitdh: "0 0 1px",
                               }}>
                        <OKButton text="조회" 
                                onClick={onClickInquiryBtnHandler} 
                        />
                        <OKButton text={txtEnrollBtn} 
                                onClick={onClickEnrollBtnHandler} 
                        />
                    </div>
                    <div style={{ marginLeft: "320px", }}>
                        {/*등록 폼*/}
                        {viewedEnrollForm ? <BoardPost /> : <></>}
                    </div>     
                    <div>
                    {loading ? (<p>Loading...</p> )
                    : error ?  (<p>Error: {error.message}</p>)
                    : data ? 
                    <BoardTable data={data}/>
                    : (<p>No Data.😪</p>)}                    
                    </div>  
                </div>

            </div>
        </div>
    );
};


export default PageEffort;