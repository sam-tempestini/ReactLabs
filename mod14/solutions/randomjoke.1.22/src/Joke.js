import React from "react";

const Joke = (props) => {
    const {displayColor, joke, handleClick} = props;
    const randomColor = displayColor();
    const body = document.body;
    body.style.backgroundColor = randomColor;
  return(
    
      <div style={{ backgroundColor: "white" }} className="jokebox">
        <div key={joke.id}
             className="fadeIn"
             style={{ color: randomColor }}>
          <h1 id="joke">"{joke.setup}"</h1>
          <h2 id="punchline">
            {joke.punchline}
          </h2>
        </div>
        <button style={{ backgroundColor: randomColor }}
                id="newjoke"
                onClick={handleClick}>
          New Joke
        </button>
      </div>
    );
  
}

export default Joke;
