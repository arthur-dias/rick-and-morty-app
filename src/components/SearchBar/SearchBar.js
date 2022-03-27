// CSS
import styles from './SearchBar.module.css'

const SearchBar = ({
  handleSubmit,
  textSearchTerm,
  setTextSearchTerm,
  noMatchesFromTextSearch,
  isLoading,
  error,
}) => {
  return (
    <div className={styles.searchbar}>
      <form onSubmit={handleSubmit}>
        <span>Buscar: </span>
        <input
          type='text'
          value={textSearchTerm}
          onChange={(e) => setTextSearchTerm(e.target.value)}
        />
      </form>

      {noMatchesFromTextSearch && !isLoading && !error && (
        <p>Nenhum resultado encontrado para "{textSearchTerm}"</p>
      )}
    </div>
  )
}

export default SearchBar
