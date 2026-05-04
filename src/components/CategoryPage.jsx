import { Link, useParams } from 'react-router-dom'
import ProductList from './ProductList'
import products from '../data/products'

const CategoryPage = ({ searchTerm = '' }) => {
  const { category } = useParams()
  const decodedCategory = category ? decodeURIComponent(category) : ''
  const normalizedCategory = decodedCategory.toLowerCase()
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === normalizedCategory,
  )
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredProducts = normalizedSearch
    ? categoryProducts.filter((product) => {
        const content = `${product.name} ${product.description} ${product.category}`
        return content.toLowerCase().includes(normalizedSearch)
      })
    : categoryProducts

  const subtitle = normalizedSearch
    ? `${filteredProducts.length} result${
        filteredProducts.length === 1 ? '' : 's'
      } in ${decodedCategory}`
    : `${categoryProducts.length} item${
        categoryProducts.length === 1 ? '' : 's'
      } in this category.`

  return (
    <section className="qc-page">
      <div className="qc-page__header">
        <div>
          <p className="qc-page__eyebrow">Category</p>
          <h2 className="qc-page__title">
            {decodedCategory || 'Category'}
          </h2>
          <p className="qc-page__subtitle">{subtitle}</p>
        </div>
        <Link className="qc-link" to="/">
          Back to home
        </Link>
      </div>
      <ProductList
        products={filteredProducts}
        showSort={false}
        showHeader={false}
        emptyMessage={`No products found in ${
          decodedCategory || 'this category'
        }.`}
      />
    </section>
  )
}

export default CategoryPage
