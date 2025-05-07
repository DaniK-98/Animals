import { useState } from 'react'
import './App.css'

import animalshow from './animalshow'

function getRandomAnimal(){
  const animals = ['cat','bird','cow','dog','gator','react']

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() { 

  const [animals, setAnimals] =useState ([])

  const handleClick = () => {
    setAnimals([...animals,getRandomAnimal])
  }

  const getRandomAnimal = animals.map((animal,index) => {
    return <animalshow type={animal} key={index} />
  })
  

  return (
    <div className='app'>
    <button onClick={handleClick}>Add animal</button>
    <div className='animals-list'>
      {renderedAnimals}
    </div>
    </div>
    
  )
}

export default App 