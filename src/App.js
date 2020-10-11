import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import { BASE_URL } from './constants'
import styled from 'styled-components'
import Pagination from './components/Pagination'

const StyledDiv = styled.div`
display: flex;
flex-wrap: wrap;
`;

const App = () => {
const [characters, setCharacters] = useState([]);
const [currentPage, setCurrentPage] = useState(BASE_URL);
const [nextPage, setNextPage] = useState();
const [previousPage, setPreviousPage] = useState();
const [loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(true)
  axios.get(currentPage)
  .then(res => {
    setCharacters(res.data.results)
    setNextPage(res.data.next)
    setPreviousPage(res.data.previous)
    setLoading(false)
  })
  .catch(err => {
    debugger
  })
}, [currentPage])

function goToNextPage(){
  setCurrentPage(nextPage);
}
function goToPreviousPage(){
  setCurrentPage(previousPage);
}

if(loading) return<h2>Loading...</h2>
  return (
    <>
    <Pagination goToNextPage={nextPage ? goToNextPage : null} goToPreviousPage={previousPage ? goToPreviousPage : null} />
    <StyledDiv>
      {characters.map(character => <Character name={character.name} height={character.height} weight={character.mass} films={character.films} />)}
    </StyledDiv>
    </>
  );
}

export default App;