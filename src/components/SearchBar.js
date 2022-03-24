export const SearchBar = ({
  handleSubmit,
  textSearchTerm,
  setTextSearchTerm,
  noMatchesFromTextSearch,
  isLoading,
  error,
}) => {
  return (
    <div style={{ marginBottom: '25px' }}>
      <form onSubmit={handleSubmit}>
        <span>Search: </span>
        <input
          type='text'
          value={textSearchTerm}
          onChange={(e) => setTextSearchTerm(e.target.value)}
          style={{ padding: '5px 5px' }}
        />
      </form>

      {noMatchesFromTextSearch && !isLoading && !error && (
        <p>Nenhum resultado encontrado para "{textSearchTerm}"</p>
      )}
    </div>
  )
}
