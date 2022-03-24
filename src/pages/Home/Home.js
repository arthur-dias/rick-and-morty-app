import React, { useEffect, useState } from 'react'
const axios = require('axios').default

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const url = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(url)
      setCharacters(response.data.results)

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

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </div>
  )
}

const Character = ({ character }) => {
  const { name, species, image } = character

  return (
    <div>
      <img src={image} alt={name} />
      <p>
        {name} - {species}
      </p>
    </div>
  )
}

export default Home
