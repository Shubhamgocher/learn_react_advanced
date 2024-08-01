import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const userData=useSelector((state)=>state.userData);
  console.log("userData",userData)
  return (
    <div>
      {/* {userData.email} || found here */}
      i am here
    </div>
  )
}

export default Home
