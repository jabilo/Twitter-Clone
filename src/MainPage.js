import React from 'react'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import './MainPage.css'

function MainPage() {
  return (
    <div className='mainpage'>
      <Left/>
      <Center/>
      <Right/>
    </div>
  )
}

export default MainPage
