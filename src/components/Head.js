import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleBar=()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='flex -mt-[5px] col-span-1 h-[4.5rem] '>
        <div className='left-div flex ml-1 '>
            <i className="fa-solid fa-bars m-5 mr-6 text-xl opacity-65 cursor-pointer" onClick={()=>toggleBar()}></i>
            <a href='/'><img
                  src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                  className="w-32 h-16 pt-1 -mt-1"
                  alt="Logo"/></a>          
        </div>
        <div className="centre-div mt-3 ml-[123px] flex col-span-10">
          <div className='flex '>
            <input type="text" placeholder='Search' className='w-[34rem] h-10 border shadow-inner    border-gray-200 rounded-l-full placeholder-gray-700 pl-4 pb-1 placeholder:text-md'></input>
            <div className='border rounded-r-full w-16 h-10 bg-gray-200 bg-opacity-35 border-gray-300'>
              <button><i class="fa-solid fa-magnifying-glass text-xl mt-2 ml-5 "></i></button>
            </div>
            </div>
            <div className='bg-gray-200 bg-opacity-35 rounded-full w-10 h-10 mx-2 pl-[12.5px] pt-[5px] text-xl'>
              <i className="fa-solid fa-microphone"></i>
          </div>
        </div>
        <div className='right-div flex mt-3 ml-2 col-span-1'>
        
          <div className='bg-gray-200 bg-opacity-35 rounded-full w-[6.8rem] h-10 mx-8 pl-[14px] pt-[5px] text-lg'>
            <button><i class="fa-solid fa-plus"></i> Create</button>
          </div>
          
            <i className="fa-regular fa-bell w-10 h-10  pl-[11.8px] pt-[10px] text-2xl"></i>
            <i className="fa-regular fa-user ml-6 mr-2 bg-gray-200 bg-opacity-35 rounded-full w-10 h-10 pl-[11.6px] pt-[10px] text-xl"></i>
         
        </div>
    </div>
  )
}

export default Head