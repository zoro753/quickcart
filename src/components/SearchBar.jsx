const SearchBar = ({ value, onChange }) => {
  return (
    <div className="qc-search">
      <label className="qc-search__label">
        <span className="qc-search__text">Search</span>
        <input
          type="search"
          placeholder="Search products"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-label="Search products"
        />
      </label>
    </div>
  )
}

export default SearchBar
