import React from 'react'
import {Card , Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
const UserCard = ({el}) => {
  return (
    <div style={{margin:'15px'}}> 
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{el.username}</Card.Title>
    <Card.Text>
    website : {el.website} <br/>
    number :  {el.phone}
    </Card.Text>
   <Link to={`/profile/${el.id}`}><Button variant="primary">More Details</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard