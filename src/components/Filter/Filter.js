// CSS
import styles from './Filter.module.css'

const Filter = ({ handleFilter }) => {
  return (
    <div className={styles.filter}>
      <p>Filtrar por espécie:</p>
      <button type='button' onClick={() => handleFilter('Human')}>
        Humano
      </button>
      <button type='button' onClick={() => handleFilter('Alien')}>
        Alien
      </button>
      <button type='button' onClick={() => handleFilter('')}>
        Todos
      </button>
    </div>
  )
}

export default Filter
