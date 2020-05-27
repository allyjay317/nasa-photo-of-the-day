import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import ImageContainer from './Image/ImageContainer'
import Header from './Header/Header'
import Footer from './Footer/Footer'


function App() {
  const [url, setUrl] = useState("https://api.nasa.gov/planetary/apod?api_key=7UAcwN8x1uVges3J52DVhhSvWTkkXOfi3FxL08b3")
  const [nasaData, setNasaData] = useState("")
  const [date, setDate] = useState("")
  const [changed, setChanged] = useState(true);
  const [newDate, setNewDate] = useState("");
  function newDateHandler(event){
    event.preventDefault();
    let newUrl = url.split("&")[0]
    newUrl = newUrl + "&date=" + newDate;
    setUrl(newUrl)
    setChanged(true);
  }
  function dateChangeHandler(event){
    setNewDate(event.target.value);
  }
  useEffect(()=>{
    if(changed){
      setChanged(false);
      let appData = axios.get(url)
      .then(data => {
        return setNasaData(data.data)
    })
  }
  }, [changed])
  return (
    <div className="App">
      <Header submitHandler={newDateHandler} changeHandler={dateChangeHandler}/>
      <ImageContainer data={nasaData}/>
      <Footer name={nasaData.copyright} />
    </div>
  );
}



export default App;
