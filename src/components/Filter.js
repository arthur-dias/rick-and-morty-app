export const Filter = ({ handleFilter }) => {
  return (
    <div style={{ marginBottom: '25px' }}>
      <h1>Filter</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <button type='button' onClick={() => handleFilter('Human')}>
          Human
        </button>
        <button type='button' onClick={() => handleFilter('Alien')}>
          Alien
        </button>
      </div>
    </div>
  )
}
