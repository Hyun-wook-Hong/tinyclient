import React, { useState, useEffect } from "react";
import OKButton from "../../../components/Button/OKButton/OKButton";
import BoardTable from "../../../components/Board/BoardTable/BoardTable";
import useFetchPosts from "../../../hooks/useFetchPosts";
import "./PageEffort.scss";

const PageEffort = () => {
    const { data, error, loading, fetchPosts } = useFetchPosts('http://localhost:18080/posts');

    return (
        <div id="pageEffort">
            <p>API Get 호출 테스트✅</p>
            <OKButton text="조회" 
                      onClick={fetchPosts} 
            />
            <div style={{ marginLeft: "-250px" }}>
                {loading ? (<p>Loading...</p> )
                : error ?  (<p>Error: {error.message}</p>)
                : data ? 
                  <BoardTable data={data}/>
                : (<p>No Data.😪</p>)}
            </div>
        </div>
    );
};


export default PageEffort;