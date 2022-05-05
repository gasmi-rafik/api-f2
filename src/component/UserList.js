import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
  return (
    <div style={{ display:'flex' , justifyContent:"space-around" , flexWrap:"wrap"}}>
        {
            users.map(el=><UserCard el={el} />)
        }
    </div>
  )
}

export default UserList