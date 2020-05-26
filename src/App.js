import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const [nasaData, setNasaData] = useState("")

  useEffect(()=>{
    let appData = axios.get("https://api.nasa.gov/planetary/apod?api_key=7UAcwN8x1uVges3J52DVhhSvWTkkXOfi3FxL08b3")
    .then(data =>
      console.log(data)
    )
  }, [nasaData, setNasaData])
  return (
    <div className="App">
      <header>
        <h1>NASA Photo of the Day</h1>
      </header>
      <div className="img-container">
        <p>{/*title of the image*/}</p>
        <img src="#"></img>
      </div>
      <footer>copyright nasa</footer>
    </div>
  );
}

export default App;
