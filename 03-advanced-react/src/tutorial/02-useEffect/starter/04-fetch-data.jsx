import { useEffect,useState } from "react";

const url = 'https://api.github.com/users';



const FetchData = () => {

  const [users,setUsers] = useState([])


  useEffect(() => {
    async function getUsers(){
      try {

        const response = await fetch(url);
          const data = await response.json();
          setUsers(data);
      } catch (error) {
        console.log(error)
      }
    };
    getUsers()
}, []);




  return <div style={{display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
    <h4 >github users</h4>
    {users.map((user,index)=>{
      return <div key={index} >
      <img style={{display:'block', width:'10em',}} src={user.avatar_url} alt="pic"/>
      <p key={index}>{user.login}</p>
      </div>


    })}
  </div>
};
export default FetchData;
