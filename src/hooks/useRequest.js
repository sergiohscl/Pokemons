import axios from 'axios';
import { useState } from 'react';

const useRequest = () => {

    const [isLoading, setIsLoading] = useState(false);
    const requestData = async (url) => {
        let data;
       setIsLoading(true);
       try{
           const res = await axios(url);
           setIsLoading(false);
           data = res.data;
       } 
       catch(err) {
           setIsLoading(false);
           console.log(err.response) 
       }
       finally { 
           return data;
       }
    };

  return [requestData, isLoading]  
  
}
export default useRequest;