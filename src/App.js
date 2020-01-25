import React, { useState } from 'react';
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from  "./images.json";
import { render } from '@testing-library/react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const[name, setName]= useState({
    icons:"",
    score:0,
    topScore:0,
    message:"Click on..."


  })
  function handleClick(){

  }
  
  return (
    <div>
      <Nav></Nav>
      <Wrapper>
        <Title>
          <div className="text-center">
            <h1 id = "message-title"> </h1>
          </div>
          <div className ="gameScore text-center">
<p>Score</p>
          </div>

        </Title>
      </Wrapper>
      
    </div>
  );
}

export default App;
