import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const StyledCharacter = styled.div`
    width: 25%;
    margin: 1% auto;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 1%;
    span{
        font-weight: bold;
    }
    
    ul{
        width: 50%;
        margin: 0 auto;
    }
`;

export default function Character(props){
    const { name, height, weight, films } = props;
    const [filmList, setFilmList] = useState([]);
    
    useEffect(() => {
        films.map(filmUrl => {
            axios.get(filmUrl)
            .then(res => {
                setFilmList(filmList => [...filmList, res.data.title])
            })
        })
    }, [])

    return (
    <StyledCharacter key={name}>
        <ul>
          <li><span>Name:</span> {name}</li>
          <li><span>Height:</span> {height}cm</li>
          <li><span>Weight:</span> {weight}kg</li>
          <li><span>Films:</span>
          <ul>
            {filmList.map(film => <li>{film}</li>)}
          </ul>
          </li>
        </ul>
       
   
    </StyledCharacter>
    )


}