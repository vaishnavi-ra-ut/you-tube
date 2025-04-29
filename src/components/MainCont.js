import React from 'react'
import ButtonList from './ButtonList.js'
import VideoCont from './VideoCont.js'

const MainCont = () => {
  return (
    <div className='h-screen relative'>
      <ButtonList/>
      <VideoCont/>
    </div>
  )
}

export default MainCont