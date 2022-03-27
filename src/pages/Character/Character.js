import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// CSS
import styles from './Character.module.css'

// Components
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails'

const axios = require('axios').default

const url = 'https://rickandmortyapi.com/api/character/'

const Character = () => {
  const [character, setCharacter] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const { id } = useParams()

  // Fetching data
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(url + id)
        setCharacter(response.data)

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
  }, [id])

  return (
    <div className={styles.character}>
      <Link to='/'>
        <span>&#8592;</span> Voltar para home
      </Link>

      {isLoading && <h1 className={styles.message}>Carregando...</h1>}

      {error && <h1 className={styles.message}>Erro carregando dados.</h1>}

      {character && !error && !isLoading && (
        <CharacterDetails character={character} />
      )}
    </div>
  )

  // if (isLoading) {
  //   return <h1 className={styles.message}>Carregando...</h1>
  // }

  // if (error) {
  //   return <h1 className={styles.message}>Erro carregando dados.</h1>
  // }

  // return <CharacterDetails character={character} />
}
export default Character
