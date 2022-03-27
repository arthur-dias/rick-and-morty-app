import React from 'react'

// CSS
import styles from './CharacterDetails.module.css'

const CharacterDetails = ({ character }) => {
  const { image, name, species, created, gender } = character

  return (
    <div className={styles.characterdetails}>
      <img src={image} alt={name} />
      <h1 className={styles.characterdetails_name}>{name}</h1>
      <div className={styles.characterdetails_info}>
        <p>
          <strong>Espécie:</strong> {species}
        </p>
        <p>
          <strong>Gênero:</strong> {gender}
        </p>
        <p>
          <strong> Data de criação: </strong>
          {new Date(created).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

export default CharacterDetails
