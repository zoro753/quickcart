import ProductList from './ProductList'
import products from '../data/products'

const HomePage = ({ searchTerm = '' }) => {
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredProducts = normalizedSearch
    ? products.filter((product) => {
        const content = `${product.name} ${product.description} ${product.category}`
        return content.toLowerCase().includes(normalizedSearch)
      })
    : products

  const title = normalizedSearch ? 'Search results' : 'Featured products'
  const subtitle = normalizedSearch
    ? `${filteredProducts.length} result${
        filteredProducts.length === 1 ? '' : 's'
      } for "${searchTerm}"`
    : 'Seasonal favorites picked by the QuickCart team.'

  return (
    <section className="qc-page">
      <ProductList
        products={filteredProducts}
        title={title}
        subtitle={subtitle}
        emptyMessage={`No products match "${searchTerm}".`}
      />
    </section>
  )
}

export default HomePage
