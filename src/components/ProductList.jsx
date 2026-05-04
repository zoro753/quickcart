import ProductCard from './ProductCard'

const ProductList = ({
  products,
  title = 'Featured products',
  subtitle = 'Seasonal favorites picked by the QuickCart team.',
  showSort = true,
  showHeader = true,
  emptyMessage = 'No products found.',
}) => {
  return (
    <section className="qc-collection">
      {showHeader && (
        <div className="qc-collection__header">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          <div className="qc-collection__actions">
            <span className="qc-collection__meta">
              {products.length} items
            </span>
            {showSort && (
              <label className="qc-filter">
                Sort by
                <select name="sort">
                  <option>Trending</option>
                  <option>Price: Low to High</option>
                  <option>Newest</option>
                </select>
              </label>
            )}
          </div>
        </div>
      )}
      {products.length === 0 ? (
        <p className="qc-empty-state">{emptyMessage}</p>
      ) : (
        <div className="qc-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductList
