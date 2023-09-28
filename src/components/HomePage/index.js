import React from 'react'
import SignIn from '../signin'
import companyLogo from '../../Assets/autumn.jpg'

const HomePage = () => {
  return (
    <>
      <div className='flex'>
      <img className='w-3/4' src={companyLogo} alt="bgimage"/>
      <div className='w-1/4 p-5'><SignIn/></div>
      </div>
      <footer className='h-1/6'>
        Footer section is coming up here 
        <p>Contact Admin <b>punugotikrishnarao@gmail.com</b></p> 
        Please be patient
      </footer>
    </>
  )
}

export default HomePage