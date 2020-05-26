import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import invert from 'invert-color'
import analyze from 'rgbaster';


function App() {
  const [nasaData, setNasaData] = useState("")
  const [textColor, setTextColor] = useState("#FFFFFF");
  useEffect(()=>{
    
    let appData = axios.get("https://api.nasa.gov/planetary/apod?api_key=7UAcwN8x1uVges3J52DVhhSvWTkkXOfi3FxL08b3")
    .then(data => {
      console.log(data)
      
      return setNasaData(data.data)
    })
  }, [])
  return (
    <div className="App">
      <header>
        <h1>NASA Photo of the Day</h1>
      </header>
      <div className="img-container" alt={`"${nasaData.title}": by ${nasaData.copyright}. Photo taken ${nasaData.date}`}>
        <h2 color={textColor}>{nasaData.title}</h2>
        <p color={textColor}>{nasaData.explanation}</p>
        {getPhotoOfDay(nasaData.media_type, nasaData.url)}
      </div>
  <footer>Copyright {nasaData.copyright}</footer>
    </div>
  );
}

function getPhotoOfDay(type, url){
  console.log(type, url)
  if(type==="image"){
    return <img src={url}></img>
  }
  else if(type ==="video"){
    return (
      <iframe 
        src={`${url}&autoplay=1`} frameborder="0" 
allowfullscreen></iframe>
    )
  }
}

export default App;
