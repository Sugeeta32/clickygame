import React, { useState } from 'react';
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";


function App() {
  const [name, setName] = useState({
    images,
    score: 0,
    topScore: 0,
    message: "Click on..."


  })
  function handleClick(id, clicked) {
    const imageOrder = name.images;


    if (clicked) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].clicked = false;
      });
      return setName({
       image: imageOrder.sort(()=>Math.random()-0.5),
       message:"wrong",
       score:0

      })

    } else {
      imageOrder.forEach((image, index) => {
        if(id === image.id){
          imageOrder[index].clicked =true;
        }

      });



    }


  }

  return (
    <div>
      <Nav></Nav>
      <Wrapper>
        <Title>
          <div className="text-center">
            <h1 id="message-title">{name.message} </h1>
          </div>
          <div className="gameScore text-center">
            <p>Score :{name.score} | Top Score:{name.topScore}</p>
          </div>

        </Title>
        {name.images.map(images=>(
          <ImageCard
          id = {images.id}
          key ={images.id}
          image ={images.image}
          clicked={images.clicked}
          handleClick={handleClick}/>
        ))}
      </Wrapper>

    </div>
  );
}

export default App;
