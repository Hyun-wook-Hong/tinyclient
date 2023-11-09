import React, { useState, useEffect } from "react";
import OKButton from "../../../components/Button/OKButton/OKButton";
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
            <div>
                {loading ? (<p>Loading...</p> )
                : error ?  (<p>Error: {error.message}</p>)
                : data ? (
                    <ul style={{
                        width: "800px",
                        marginLeft: "-120px",
                        height: "auto",   
                    }}>
                      {data.map((post) => (
                        <li key={post.SERIAL_NO}>
                            <div style={{
                                display: "inline-block",
                                margin: "5px",
                                marginRight: "3px",
                                padding: "3px",
                            }}>
                                <a href={"http://localhost:18080/posts/"+post.SERIAL_NO}>{post.SERIAL_NO}&nbsp;</a>
                                <a>{post.REQ_CONTENTS}&nbsp;</a>
                                <a>{post.REQ_USER_NAME}&nbsp;</a>
                            </div>
                            </li>
                      ))}
                    </ul>
                  )
                : (<p>No Data.😪</p>)}
            </div>
        </div>
    );
};


export default PageEffort;