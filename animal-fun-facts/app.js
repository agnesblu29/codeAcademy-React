import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const images = [];
const showBackground = true;
const title = "";

const background = (
  <div>
    <img class="background" alt="ocean" src="/images/ocean.jpg" />
  </div>
);

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">
      {images}
      <p id="fact"></p>
    </div>
    
  </div>
);

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  //get the name of  the animal that was clicked
  const xAnimal= animals[e.target.alt].facts;
  //generate a random index
  const optionIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  const xFact = xAnimal[optionIndex];
  document.getElementById('fact').innerHTML = xFact;
}




root.render(animalFacts, document.getElementById("root"));
