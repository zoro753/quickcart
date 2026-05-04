import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <section className="qc-collection">
      <div className="qc-collection__header">
        <div>
          <h2>Featured products</h2>
          <p>Seasonal favorites picked by the QuickCart team.</p>
        </div>
        <label className="qc-filter">
          Sort by
          <select name="sort">
            <option>Trending</option>
            <option>Price: Low to High</option>
            <option>Newest</option>
          </select>
        </label>
      </div>
      <div className="qc-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductList
