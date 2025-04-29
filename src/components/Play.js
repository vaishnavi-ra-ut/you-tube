import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Play = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const title = searchParams.get("title");

  return (
    <div>
      <div className='px-2 py-1'>
        <iframe 
          width="700" 
          height="385" 
          className='rounded-3xl' 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
      </div>
    </div>
  )
}

export default Play