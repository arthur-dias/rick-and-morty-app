import React from 'react'

export const Character = ({ character }) => {
  const { name, species, image } = character

  return (
    <div style={{ border: '1px solid #000' }}>
      <img src={image} alt={name} />
      <p>
        {name} - {species}
      </p>
    </div>
  )
}
