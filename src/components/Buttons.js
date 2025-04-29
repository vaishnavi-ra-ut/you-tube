import React from 'react'

const Buttons = ({name}) => {
  return (
    <div className='-mt-3'>
        <button className='px-3 py-1 m-2 rounded-lg font-medium text-sm bg-gray-200 bg-opacity-35'>{name}</button>
    </div>
  )
}

export default Buttons