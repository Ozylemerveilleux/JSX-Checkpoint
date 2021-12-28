import React from 'react';
import './App.css';
import "./style.css";
import image from './ozy.jpeg';


function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className="title">My name is Ozylemerveilleux</h1>
        <br/>
      </div>
        <div >
          <img className="red" src={"/hn.webp"} alt='hn'/>
          <br/>
          <img className="red" src={image} alt='ozy'/>
        </div>
          <vidéo width="320" height="240" contrôles>
          <source src={"./maVidéo.mp4"} type="video/mp4" />
          </vidéo>
    </div>
  );
}

export default App;
