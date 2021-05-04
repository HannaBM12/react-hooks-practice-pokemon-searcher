import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {


  const updatedPoke = pokemon.filter(poke => 
    poke.name.toLowerCase().includes(search.toLowerCase())
    )

  const pokeData = updatedPoke.map(poke => 
    <PokemonCard key={poke.id} pokemon={poke} />)

  return (
    <Card.Group itemsPerRow={6} pokemon>
      {/* <h1>Hello From Pokemon Collection</h1> */}
       {pokeData}
     
    </Card.Group>
  );
}

export default PokemonCollection;
