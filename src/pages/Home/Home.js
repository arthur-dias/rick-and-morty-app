import React, { useEffect, useState } from 'react'
import { Character } from '../../components/Character'
import { Filter } from '../../components/Filter'
const axios = require('axios').default

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [allCharacters, setAllCharacters] = useState([])

  const url = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(url)
      setCharacters(response.data.results)

      setAllCharacters(response.data.results)

      setIsLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setIsLoading(false)
      console.log(error.message)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchCharacters()
  }, [])

  if (isLoading) {
    return <h1>Loading data...</h1>
  }

  if (error) {
    return <h1>Error fetching the data.</h1>
  }

  const handleFilter = (specie) => {
    const characterFilteredBySpecie = allCharacters.filter(
      (char) => char.species === specie
    )

    setCharacters(characterFilteredBySpecie)
  }

  return (
    <div>
      <Filter handleFilter={handleFilter} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
        }}>
        {characters.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
