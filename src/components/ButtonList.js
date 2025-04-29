import React from 'react'
import Buttons from './Buttons';

const List = ["All" , "Live", "Cricket" , "Movies" , "Songs" , "Latest" , "Famous" , "Web Series" , "Hollywood" , "Bollywood" , "DSA" , "React" , "Podcasts"]
const ButtonList = () => {
  return (
    <div className='flex p-1 overflow-auto'>
        {List.map((item , index) =>(
            <Buttons key={index} name={item}/>
        ))}
    </div>
  )
}

export default ButtonList;