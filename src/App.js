import { useEffect , useState } from 'react';
import axios from 'axios'
import './App.css';
import Navbarr from './component/Navbarr';
import UserList from './component/UserList';
import {Routes , Route} from 'react-router-dom'
import UserDetails from './component/UserDetails';
function App() {
  const [users , setUsers]= useState([])
  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>setUsers(res.data))
     .catch(err=>console.log(err))
  },[])

  return (
    <div className="App">
     <Navbarr />
     <Routes>
       <Route path='/' element={ <UserList users={users}/>}/>
       <Route path="/profile/:id" element={ <UserDetails/>} />
     </Routes>
    
    </div>
  );
}

export default App;
