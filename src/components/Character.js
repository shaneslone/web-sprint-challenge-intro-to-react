// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 25%;
    margin: 0 auto;
    color: black;
    background-color: white;
    border-radius: 5px;
`;

export default function Character(props){
    const { name, height, weight, films } = props;
    if(!name) return<h2>Loading...</h2>
    return (
    <StyledCharacter>
        <ul>
          <li>Name: {name}</li>
          <li>Height: {height}cm</li>
          <li>Weight: {weight}kg</li>
        </ul>
        <ul>

        </ul>
    </StyledCharacter>
    )


}