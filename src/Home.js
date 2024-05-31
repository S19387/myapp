import React from 'react'
import { Button } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom';


export default function Home() {
    const Navigate = useNavigate();
  return (

    <div>
      <h1>home page</h1>
      <Link to= "/Profile">Go to profile page</Link>
      <br></br>
      <Link to= "/About">Go to about page</Link><br/>
      <Button onClick={() => Navigate("/Profile")}>
        Profile
      </Button>
      
    </div>
  )
}
