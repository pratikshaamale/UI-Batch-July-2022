import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export const UserInfo = () => {

    
  return (

    <div>
        <h2>User Info</h2>
           <p>{firstName}</p>
        <p>{lastName}</p>

     {/* <button onClick={handleFirstNameClick}>First Name</button>
        <button onClick={handleLastNameClick}>Last Name</button> */}


    </div>
  )
}
