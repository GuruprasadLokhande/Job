import React from 'react'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Teximonials from '../LandingPage/Teximonials'
import Subscribe from '../LandingPage/Subscribe'

const HomePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"]'>
      <DreamJob/>
      <Companies/>
      <JobCategory/>
      <Working/>
      <Teximonials/>
      <Subscribe/>
    </div>
  )
}

export default HomePage
