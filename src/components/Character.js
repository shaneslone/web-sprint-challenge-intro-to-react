// Write your Character component here
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
    let [filmList, setFilmList] = useState('')
    
    // console.log(films)
    let filmsString = "";

    useEffect(() => {
        // const newFilmArray = [];
        films.map(filmUrl => {
            axios.get(filmUrl)
            .then(res => {
                console.log(res)
            //    newFilmArray.push(res.data.title)
               setFilmList(filmList += ` ${res.data.title},`)
            //    console.log(newFilmArray)
            //    console.log(filmList)
            //    filmsString = filmList.join('')
            })
        })
    }, [])
    

    return (
    <StyledCharacter>
        <ul>
          <li><span>Name:</span> {name}</li>
          <li><span>Height:</span> {height}cm</li>
          <li><span>Weight:</span> {weight}kg</li>
        <li><span>Films:</span> {filmList}</li>
        </ul>
        <ul>

        </ul>
    </StyledCharacter>
    )


}