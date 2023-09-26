import React, { useState } from 'react'

const PlayButton = ({massage,children,onPlay,onPause}) => {
      let  [playing ,setPlaying] = useState(false);
    const handle = (e) =>{
        // console.log(e)
        e.stopPropagation();

        playing ? onPlay() : onPause()
        setPlaying(!playing)


    }
  return (
 
        <button onClick={handle}>{children} : {playing ? ">":"||"}</button>
  )
}

export default PlayButton;