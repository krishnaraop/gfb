import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { auth, provider } from '../../firebase';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from './LoginForm';
import Alert from '@mui/material/Alert';
import toast from "react-hot-toast";
const SignIn = () => {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      localStorage.setItem("authData", JSON.stringify(result._tokenResponse))
      navigate('/dashboard')
      toast.success(`succesfully Signed in for ${result._tokenResponse.email}`);
    })
  }
  const initialState = { "email": "", "password": "" }
  const [loginData, setLoginData] = useState(initialState)
  const auth = getAuth();
  const createUser = () => {
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password).then((userCredential) => {
      const user = userCredential.user;
      console.log(loginData, 'signup', user)
      toast.success(`succesfully Signed up ${user.email}`);
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorMessage}`);
      })
  }
  const loginUser = () => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password).then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("isAuth", true)
      navigate('/dashboard')
      console.log(loginData, 'login', user)
      toast.success(`succesfully Signed in for ${user.email}`);
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorMessage}`);
      })
  }


  return (
    <>
      <LoginForm
        setLoginData={setLoginData}
        loginData={loginData}
        createUser={createUser}
        loginUser={loginUser}
      />
      <br />
      <p className='border border-indigo-600 rounded  flex p-1 italic font-semibold' onClick={signInWithGoogle}>
        <span>Continue with Google </span>
        <span><FcGoogle /> </span>
      </p>
    </>
  )
}

export default SignIn