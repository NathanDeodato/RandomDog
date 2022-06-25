import React, { useState } from "react";

import Axios from "axios";

import { ImgDogsBox, DogBox, DogTitle, Img, DogImage, Button } from "./Style";
import "./App.css";

import { Dog, DogPatinha } from "./assets/index";

export default function HappyDog() {
  const [Dogs, setDogs] = useState([]);

  const DogAPI = () => {
    Axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      console.log(response);
      setDogs(response.data.message);
    });
  };

  const DogRandom = () => {setInterval(DogAPI(), 1000)}

  return (
    <div className="divGlobal">
      <ImgDogsBox>
        <Img src={DogPatinha} />
        <Img src={Dog} />
      </ImgDogsBox>
      <DogBox>
        <DogTitle>Web - RandomDog</DogTitle>
        <DogImage src={Dogs} />
      </DogBox>
      <Button
        onClick={() => {DogRandom()}}
      >
        Let´s Go!
      </Button>
      <ImgDogsBox>
        <Img src={Dog} />
        <Img src={DogPatinha} />
      </ImgDogsBox>
    </div>
  );
}
