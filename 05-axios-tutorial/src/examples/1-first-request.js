import { useEffect } from 'react';
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  useEffect(() => {
    try {
      const response = axios(url)
      .then(res=>{
      const data = res.data
      console.log(data)
      return data

    })
 
      
    } catch (error) {
   
      console.log(error.response)
    }
    console.log('first axios request');
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
