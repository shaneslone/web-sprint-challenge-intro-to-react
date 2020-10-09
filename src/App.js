import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import { BASE_URL } from './constants'

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

// console.log(characters)
if(!characters) return<h2>Loading...</h2>
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character => <Character name={character.name} height={character.height} weight={character.mass} films={character.films} />)}
    </div>
  );
}

export default App;