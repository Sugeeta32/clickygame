import React, { useState } from 'react';
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
//import { render } from '@testing-library/react';


function App() {
  const [name, setName] = useState({
    images,
    score: 0,
    topScore: 0,
    message: "Click on a  character.."


  })
  function handleClick(id, clicked) {
    const imageOrder = name.images;


    if (clicked) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].clicked = false;
      });
      return setName({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "wrong",
        score: 0

      })

    } else {
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          imageOrder[index].clicked = true;
        }

      });
      const { topScore, score } = name;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return setName({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "Going Good",
        score: newScore,
        topScore: newTopScore
      })

    }
  };

 
    return (
      <div>
        <Nav></Nav>
        <Wrapper>
          <Title>
            <div className="text-center">
              <h1 id="message-title">{name.message} </h1>
            </div>
            <div className="gameScores text-center">
              <p>Score {name.score} | Top Score{name.topScore}</p>
            </div>

          </Title>
          {name.images.map(image => (
            <ImageCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              clicked={image.clicked}
              handleClick={handleClick} />
          ))}
        </Wrapper>

      </div>
    );
  
}

export default App;
