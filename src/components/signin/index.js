import React from 'react'
import {useNavigate} from 'react-router-dom'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../../firebase';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from './LoginForm';

const SignIn = () => {
  const navigate = useNavigate()
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then((result)=>{console.log(result,"7",result._tokenResponse,result._tokenResponse.displayName)
        localStorage.setItem("isAuth",true)
        localStorage.setItem("authData", JSON.stringify(result._tokenResponse))
         navigate('/dashboard')
        })
    }
  return (
    <>      
    <LoginForm/>
    <br/>
    <p className='border border-indigo-600 rounded p-1 text-justify'>
     <button type='button'  onClick={signInWithGoogle}><FcGoogle/> </button> &nbsp;   
      <bold className="italic font-semibold"> Continue with Google </bold>
     </p>
    </>
  )
}

export default SignIn