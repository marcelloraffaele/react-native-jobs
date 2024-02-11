import { useState, useEffect } from 'react';
import axios from 'axios';
//import { RAPID_API_KEY } from '@env';
//const rapidApiKey = RAPID_API_KEY;
const rapidApiKey = 'vRm7TcGLhRmshvmR8B6ghm27wuXmp1JcZGsjsnTWt10ATTY0TJ';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [error, setError] = useState([]);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        setError(false);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch( error ) {
            setError(true);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;