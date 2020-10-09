import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import { BASE_URL } from './constants'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [characters, setCharacters] = useState(null);
const [nextPage, setNextPage] = useState(null)

useEffect(() => {
  axios.get(BASE_URL)
  .then(res => {
    setCharacters(res.data.results)
    setNextPage(res.data.next)
  })
  .catch(err => {
    debugger
  })
}, [])

useEffect(() => {
  if (nextPage != null){
    axios.get(nextPage)
    .then(res => {
      setCharacters(characters.concat(res.data.results))
      setNextPage(res.data.next)
    })
    .catch(err => {
      debugger
    })
 }
}, [nextPage])

if(!characters) return<h2>Loading...</h2>
  return (
    <StyledDiv>
      {characters.map(character => <Character name={character.name} height={character.height} weight={character.mass} films={character.films} />)}
      {/* <Character name={characters[0].name} height={characters[0].height} weight={characters[0].mass} films={characters[0].films}/> */}
    </StyledDiv>
  );
}

export default App;