import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [nasaData, setNasaData] = useState("")
  
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
      <div className="img-container" alt={nasaData.explanation}>
        <h2>{nasaData.title}</h2>
        <p>{nasaData.explanation}</p>
        <img src={nasaData.hdurl}></img>
      </div>
  <footer>Copyright {nasaData.copyright}</footer>
    </div>
  );
}

export default App;
