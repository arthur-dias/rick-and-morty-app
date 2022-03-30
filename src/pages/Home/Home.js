import React, { useEffect, useState } from 'react'

// CSS
import styles from './Home.module.css'

// Componentes
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import SearchBar from '../../components/SearchBar/SearchBar'
import CharactersGrid from '../../components/CharactersGrid/CharactersGrid'

const axios = require('axios').default

const url = 'https://rickandmortyapi.com/api/character/'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [allCharacters, setAllCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [textSearchTerm, setTextSearchTerm] = useState(null)
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
    const searchCharacter = async () => {
      if (textSearchTerm === null) {
        return
      }

      if (textSearchTerm === '') {
        try {
          const response = await axios.get(url)
          setCharacters(response.data.results)

          setAllCharacters(response.data.results)

          setNoMatchesFromTextSearch(false)
          setIsLoading(false)
          setError(false)
        } catch (error) {
          setError(true)
          setIsLoading(false)
          console.log(error.message)
        }
      }

      if (textSearchTerm !== '') {
        try {
          const response = await axios.get(
            url + '?name=' + textSearchTerm.toLowerCase()
          )

          setCharacters(response.data.results)

          setAllCharacters(response.data.results)

          setNoMatchesFromTextSearch(false)
          setIsLoading(false)
          setError(false)
        } catch (error) {
          setNoMatchesFromTextSearch(true)
          setIsLoading(false)
          console.log(error.message)
        }
      }
    }

    searchCharacter()
  }, [textSearchTerm])

  if (isLoading) {
    return <h1 className={styles.message}>Carregando...</h1>
  }

  if (error) {
    return <h1 className={styles.message}>Erro carregando dados.</h1>
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
      <div>
        {!noMatchesFromTextSearch && <CharactersGrid characters={characters} />}
      </div>
    </div>
  )
}

export default Home
