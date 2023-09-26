import "./App.css";
import Video from "./Components/Video";
// import Resume from "./Components/Resume";
import MoviesDB from "./Components/MovieList";
import PlayButton from "./Components/PlayButton";
// import List from "./Components/List";
// import Counter from "./Components/Counter";
import { useState } from "react";
import Addvideo from './Components/Addvideo';

function App() {
  const object = {
    interest: "Interest",
    Photoshop: "Photoshop",
    Coding: "Coding",
    Programming: "Programming",
    Designing: "Designing",

    Skills: "Skills",
    webDesigning: "Web Designing with Html & CSS",

    education: "Education",
    high: "GSHSS Darupur Azamgarh",
    Inter: "Sadbhawana College",
    College: "REC Kannauj",

    Experience: "Experience",
    StudentTechnology: "Working as a proffetioal teacher",
    Freasher: "Freasher",
  }

    let items =['harikesh', 'aman', 'atul', 'pankaj'];

    const [Movie, setMovies] = useState(MoviesDB);

    function addvideo(video){
      setMovies([...Movie,
      { ...video, id: Movie.length + 1 }
      ]);
}



return (
  <div className="App" onClick={() => console.log("App")}>
    <Addvideo addvideo={addvideo}></Addvideo>
    <header className="App-header">
      {/* <button
          onClick={() => {
           setMovies([ ...Movie,
              {
                id: Movie.length+1,
                title: "Harry Js Tutorial",
                channel: "Coder Dost",
                views: "150k",
                time: "1 year ago",
                verified: true,
              }
            ]);
          }}
        >
          ADD videos
        </button> */}

      {/* videos.............................................................. */}

      {Movie.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          id={video.id}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}

        >
          <PlayButton
            // name="play"
            massage="play-msg"
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Paused", video.title)}
          >
            play
          </PlayButton>
        </Video>
      ))}
      {/* Resume ---------------------------------------------------------- */}

      {/* <Resume
          onClick={() => {
            // console("print",window.print())
            console("print", window.print());
          }}
          {...object} // Spread Operator are used.
        ></Resume> */}

    </header>

    <div style={{ clear: "Both", color: "red", fontSize: "20px" }}>
      {/* <PlayButton
      // name="Pause"
      massage="Pause-msg"
      onPlay={()=>console.log("Play")}
      onPause={()=>console.log("Pause")}
      >pause</PlayButton> */}
    </div>
    {/* <Counter>Click-Increament</Counter> */}
    {/* List-------------------------------------------------------------- */}
    {/* <List layout="numbered" items={items}></List>
      <List layout="alpha" items={items} ></List> */}
    
  </div>
);
}

export default App;
