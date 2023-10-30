import { useEffect } from "react";
import { useState } from "react";
import Tours from "./components/Tours";


const url = "https://course-api.com/react-tours-project";

const App = () => {
  
    const [tours, setTours] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    const removeTour = (id)=>setTours((old)=>{
      return old.filter((single)=>single.id !== id)
    }) 

    useEffect(() => {
      async function getData() {
        
        try {
          const res = await fetch(url);
            const data = await res.json();
            setTours(data);
          
          setIsLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      getData()
    }, []);

  if(isLoading){
    return <>Is Loading</>
  }
  
  return <div>
  
    <Tours tours={tours} removeTour={removeTour}/>
  </div>;
};
export default App;
