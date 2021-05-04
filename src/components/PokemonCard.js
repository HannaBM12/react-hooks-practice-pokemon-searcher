import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  
  const [isFront, setIsFront] = useState(true)

  console.log(pokemon)
  function handleClick(){
    setIsFront((isFront) => !isFront)

  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
        {isFront? (
          <img src={pokemon.sprites.front} alt={pokemon.name} />
        ) : (<img src={pokemon.sprites.back} alt={pokemon.name} />)
        }
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
