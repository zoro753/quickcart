import { useCart } from '../context/CartContext'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <article className="qc-card">
      <div className="qc-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="qc-card__badge">{product.category}</span>
      </div>
      <div className="qc-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="qc-card__footer">
          <span className="qc-card__price">
            {priceFormatter.format(product.price)}
          </span>
          <button
            type="button"
            className="qc-button qc-button--small"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
