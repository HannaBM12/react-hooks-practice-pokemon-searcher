import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokeData => {
      setPokemon(pokeData)
    })
  }, [])

    function handleFormSubmit(newPoke){
      setPokemon([...pokemon, newPoke])
    }
    
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={handleFormSubmit}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon ={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
