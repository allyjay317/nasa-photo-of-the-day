import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import ImageContainer from './Image/ImageContainer'
import Header from './Header/Header'
import Footer from './Footer/Footer'


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
      <Header />
      <ImageContainer data={nasaData}/>
      <Footer name={nasaData.copyright} />
    </div>
  );
}

export default App;
