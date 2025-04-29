import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return(
    <div
  className={`border border-gray-300 bg-white shadow-lg h-screen w-[14%] z-50 fixed `}
>
      <div className='flex mt-1'>
        <i class="fa-solid fa-house text-lg mt-1 ml-6 mb-5 opacity-85"></i>
        <p className='text-md font-sans text-center font-normal mt-[1px] ml-5'>Home</p>
      </div>
      <div className='flex -mt-4'>
        <img alt="shorts" className="ml-3 my-4 p-1 w-10" src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"></img>
        <p className='text-md font-sans mt-6 ml-3 font-normal'>Shorts</p>
      </div>
      <div className='flex -mt-4'>
        <i class="fa-brands fa-youtube text-xl ml-6 my-5 opacity-85"></i>
        <p className='text-md font-sans text-center font-normal mt-[16px] ml-4'>Subscriptions</p>
      </div>
      <hr className='mx-3 '></hr>
      <div>
          <h1 className='font-medium ml-5 text-lg'>You<i class="fa-solid fa-angle-right text-xs"></i> </h1>
          <div className='space-y-7 space-x-6'>
            <div className='flex'>
              <i class="fa-solid fa-clock-rotate-left text-xl ml-6 mt-3"></i>
              <p className='mt-2 ml-4'>History</p>
            </div>
            <div className='flex'>
              <i class="fa-regular fa-folder-open text-xl"></i>
              <p className='-mt-1 ml-4'>Playlists</p>
            </div>
            <div className='flex'>
              <i class="fa-solid fa-play text-xl"></i>
              <p className='-mt-1 ml-5'>Your Videos</p>
            </div>
            <div className='flex'>
              <i class="fa-regular fa-clock text-xl "></i>
              <p className='-mt-1 ml-4'>Watch Later</p>
            </div>
            <div className='flex'>
              <i class="fa-regular fa-thumbs-up text-xl"></i>
              <p className='-mt-1 ml-4'>Liked Videos</p>
            </div>
            <div className='flex'>
              <i class="fa-solid fa-arrow-down text-xl"></i>
              <p className='-mt-1 ml-4'>Downloads</p>
            </div>
          </div>
      </div>
    </div>
  ); // This type of coding pattern is known as Early Return Pattern
  //we can aslo use a ternary operator return !isMenuOpen ? null : (///)

  return (
    <div className='w-[6%] h-screen'>
       <i class="fa-solid fa-house text-xl mt-1 ml-6 mb-5 opacity-85"><p className='text-xs font-sans text-center font-extralight'>Home</p></i>
       <img alt="shorts" className="ml-3 my-5 p-1 w-12" src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"></img><p className='text-xs font-sans mb-5 ml-5 -mt-7 font-extralight'>Shorts</p>
       <div className=''>
          <i class="fa-brands fa-youtube text-xl ml-6 my-5 opacity-85"><p className='text-xs font-sans -ml-4 font-extralight'>Subscriptions</p></i>
       </div>
       <div>
          <i class="fa-regular fa-user text-xl ml-6 my-6 opacity-80"><p className='text-xs font-sans text-center font-extralight'>You</p></i>
       </div>
       <div>
          <i class="fa-solid fa-arrow-down text-xl ml-6 my-7 opacity-80"><p className='text-xs text-center font-sans font-extralight -ml-4'>Downloads</p></i>
       </div>
    </div>
  )
}

export default Sidebar;