import React, { useEffect, useState } from 'react'
import { G_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoCont = () => {

  const[videos , setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos= async()=>{
    const data = await fetch(G_API);
    const json = await data.json();
   // console.log(json.items);
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
        {videos.map(video => (<Link to={"/playVideo?v=" + video.id} key={(video.id)}><VideoCard  info={video}/></Link>))}
    </div>
  )
}

export default VideoCont