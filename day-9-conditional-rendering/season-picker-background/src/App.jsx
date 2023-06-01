import React, { Component } from 'react'
import { useState } from 'react'

import { seasons } from './assets/data'

export default function App(){
  const [index, setIndex] = useState(0);

  let hasNext = index < seasons.length - 1;
  let hasPrevious = index > 0;

  function handleNextClick(){
    setIndex(index + 1)
  }
  function handlePreviousClick(){
    setIndex(index - 1);
  }
  
  let renderedSeason = seasons[index];

  return (
    <main style={{background : renderedSeason.background}}>
      <h1>{renderedSeason.name}</h1>
      <p>{renderedSeason.text}</p>
      <button onClick={handlePreviousClick} disabled={!hasPrevious}> change to previous season</button>
      <button onClick={handleNextClick} disabled={!hasNext}> change to next season</button>
    </main>
  )
}