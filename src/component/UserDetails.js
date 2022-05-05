import React ,{useEffect , useState}from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const UserDetails = () => {
    const {id} = useParams()
    const [user , setUser]= useState()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>setUser( res.data))
        .catch(err=>console.log(err))
     },[])
  return (
    <div>
    {user && user.email} <br/>
    {user && user.phone} <br/>
    {
    user&&  user.address &&  user.address.street
    } <br/>
   <Link to={"/"}> <button> back to home</button> </Link>
    </div>
  )
}

export default UserDetails