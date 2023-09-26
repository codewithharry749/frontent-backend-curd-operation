import React, { useState } from "react";

const Addvideo = ({addvideo}) => {
 
  const [video, setVideo] = useState({
    channel: "Coder Dost",
    time: "1 year ago",
    title:"",
    views: "",
    verified: true,
  });

  const handeChanges = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value});
    // console.log(video)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addvideo(video)

  
    // setVideo(initial)
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          onChange={handeChanges}
          placeholder="title"
          style={{margin:"5px",padding:"5px",fontSize:"20px",borderRadius:"10px",}}
        />
        <input
          type="text"
          name="views"
          onChange={handeChanges}
          placeholder="view"
          style={{margin:"5px",padding:"5px",fontSize:"20px",borderRadius:"10px"}}
        />

        <button onClick={handleSubmit}
        style={{margin:"5px",padding:"5px",fontSize:"20px",borderRadius:"10px"}}
        >ADD VIDEO</button>
      </form>
    </div>
  );
};

export default Addvideo;
