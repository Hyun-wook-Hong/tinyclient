import { useState } from "react";
import axios from "axios";

/* 게시글 조회 Event 커스텀 Hook */
const useFetchPosts = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try{
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
        } catch (error){
            setError(error);   
        } finally {
            setLoading(false);
        }
    };
    return { data, error, loading, fetchPosts };
};

export default useFetchPosts;