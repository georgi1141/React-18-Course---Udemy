import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {

  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try { 
      const response = axios(url,{
        headers: {
          accept:'application/json'
        }
      }).then(res=>{
        const data = res.data.joke
        setJoke(data)
      })
      
    } catch (error) {
      console.log(error.response)
      
    }
    console.log('fetch dad joke');
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
