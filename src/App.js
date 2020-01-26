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
    clickedImages: [],
    score: 0,
    // topScore: 0,
    // message: "Click on a  character.."
  });


  function handleClick(event) {
    //console.log("working");
    //alert("working");
    const allImages = event.target.alt;
    const imagesAlreadyClicked = name.clickedImages.indexOf(allImages) > -1;
    //console.log( name.clickedImages);
    //console.log(name.id);
    if (imagesAlreadyClicked) {
      setName({
        images: name.images.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedImages: [],
        score: 0
      });

    } else {
      setName({
        images: name.images.sort(function (a, b) {
          return 0.5 - Math.random();

        }),
        clickedImages: name.clickedImages.concat(allImages),
        score: name.score + 1
      },


        () => {
          if (name.score === 12) {
            alert(" You win!");
            setName({
              fish: name.images.sort(function (a, b) {
                return 0.5 - Math.random()
              }),
              clickedImages: [],
              score: 0
            });
          }
        }

      );
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
          <div className="gameScores text-center">
            <p>Score : {name.score} </p>
            <p >The goal is to reach 12 points. Once you get to 12 points you win! Oh yeah dont click the same picture twice or you lose! Have fun!!</p>
          </div>

        </Title>
        {}
        {name.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            image={image.image}
            handleClick={handleClick} />
        ))}
      </Wrapper>

    </div>
  );

}

export default App;
