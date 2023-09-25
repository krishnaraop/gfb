import React from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../../firebase';
const SignIn = () => {
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true)
        })
    }
  return (
    <>
        
     <p onClick={signInWithGoogle}> SignIn With Google </p>   
        
        </>
  )
}

export default SignIn