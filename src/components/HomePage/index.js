import React from 'react'
import SignIn from '../signin'
import companyLogo from '../../Assets/autumn.jpg'

const HomePage = () => {
  return (
    <>
      <div className='flex my-5'>
      <img className='w-3/4' src={companyLogo} alt="BigCo Inc. logo"/>
      <div className='w-1/4 p-5'>
      <SignIn/>
      </div>
      </div>
    </>
  )
}

export default HomePage