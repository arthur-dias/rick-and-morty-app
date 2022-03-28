import React from 'react'

// Components
import Character from '../Character/Character'

// CSS
import styles from './CharactersGrid.module.css'

const CharactersGrid = ({ characters }) => {
  return (
    <div className={styles.charactersGrid}>
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </div>
  )
}

export default CharactersGrid
