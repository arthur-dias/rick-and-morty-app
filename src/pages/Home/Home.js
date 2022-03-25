import React, { useEffect, useState } from 'react'

// Componentes
import Header from '../../components/Header/Header'
import Character from '../../components/Character/Character'
import Filter from '../../components/Filter/Filter'
import SearchBar from '../../components/SearchBar/SearchBar'

const axios = require('axios').default

const url = 'https://rickandmortyapi.com/api/character'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [allCharacters, setAllCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [textSearchTerm, setTextSearchTerm] = useState('')
  const [noMatchesFromTextSearch, setNoMatchesFromTextSearch] = useState(false)

  // Fetching data
  useEffect(() => {
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

    setIsLoading(true)
    fetchCharacters()
  }, [])

  // Event handlers
  const handleFilter = (specie) => {
    const characterFilteredBySpecie = allCharacters.filter(
      (char) => char.species === specie
    )
    setCharacters(characterFilteredBySpecie)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Caixa de busca
  useEffect(() => {
    const searchCharacter = () => {
      if (textSearchTerm === '') {
        setCharacters(allCharacters)
        setNoMatchesFromTextSearch(false)
      } else {
        setTimeout(() => {
          const characterFilteredByName = allCharacters
            .filter((character) =>
              character.name
                .toLowerCase()
                .includes(textSearchTerm.toLowerCase())
            )
            .map((character) => character)

          if (characterFilteredByName.length === 0) {
            console.log(`Nenhum resultado encontrado para "${textSearchTerm}"`)
            setNoMatchesFromTextSearch(true)
          } else {
            setNoMatchesFromTextSearch(false)
            setCharacters(characterFilteredByName)
          }
        }, 200)
      }
    }

    searchCharacter()
  }, [textSearchTerm, allCharacters])

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (error) {
    return <h1>Erro carregando dados.</h1>
  }

  return (
    <div>
      <Header />
      <Filter handleFilter={handleFilter} />
      <SearchBar
        handleSubmit={handleSubmit}
        textSearchTerm={textSearchTerm}
        setTextSearchTerm={setTextSearchTerm}
        noMatchesFromTextSearch={noMatchesFromTextSearch}
        isLoading={isLoading}
        error={error}
      />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
        }}>
        {!noMatchesFromTextSearch &&
          characters.map((character) => (
            <Character character={character} key={character.id} />
          ))}
      </div>
    </div>
  )
}

export default Home
