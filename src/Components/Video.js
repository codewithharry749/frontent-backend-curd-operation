import React from 'react'


const Video = ({title,id,channel,views,time,verified,children}) => {
  // let verifiedChannel;
  // if(verified){
  //         verifiedChannel=<div className='channel'>{channel} ✔️</div>
  // }else{
  //     verifiedChannel=<div className='channel'>{channel}</div>
  // }

  return (
    <div className='main'>
  
         <img src={`https://picsum.photos/id/${id}/300/200`} alt='image not find' />
         {/* <img src='https://loremflickr.com/300/200' alt='error'/> */}
         <div className='title'>{title}</div>
         <div className='channel'>  {channel}{verified ?'✔️':'null'}</div>
         {/* {verified?<div className='channel'>{channel} ✔️</div>:<div className='channel'>{channel}</div>} */}
         <div className='views'>{views} views<span>.</span> {time}</div>
        <div>{children}</div>
    </div>
  )
}

export default Video;