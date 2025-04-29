import React from 'react';
import { useNavigate } from "react-router-dom";

function VideoCard({ info = {} }) {
    //console.log(info)
  const { snippet = {}, statistics = {} } = info;
  const { channelTitle , thumbnails = {}, title } = snippet;
  const thumbnailUrl = thumbnails.medium?.url ;
  const navigate = useNavigate();

  const handlePlay = () => {
    // Navigate to the Play component with the title as a query parameter
    navigate(`/play?v=${info.id?.videoId}&title=${encodeURIComponent(title)}`);
  };

  return (
    <div className='w-[23rem] font-sans m-2' onClick={handlePlay}>
      <img alt="thumbnail" src={thumbnailUrl || "https://via.placeholder.com/150"} className='w-[23rem] rounded-3xl p-1'></img>
      <div className='ml-3'>
            <p className='font-semibold text-sm'>{title}</p>
            <p className='text-gray-600'>{channelTitle}</p>
            <p className='text-gray-500 text-[13px]'>{statistics.viewCount}</p>
      </div>
    </div>
  );
}

export default VideoCard;
