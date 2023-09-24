import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Auth } from '../Firebase/firebase-config';


const UseAuth = () => {
    const[currentUser,setCurrentUser]=useState(null);
    useEffect(()=>{
      const unsubcribe=  onAuthStateChanged(Auth,(user)=>{
            if(user){
                setCurrentUser(user);
            }
            else{
                setCurrentUser(null)
            }
        })
        return unsubcribe;
    },[])
  return currentUser;
}

export default UseAuth
