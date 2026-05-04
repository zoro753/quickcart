import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const CartPage = () => {
  const {
    cart,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart()

  if (cart.length === 0) {
    return (
      <section className="qc-cart-page">
        <div className="qc-cart-page__empty">
          <h2>Your cart is empty</h2>
          <p>Browse the catalog to find something you love.</p>
          <Link className="qc-button qc-button--primary" to="/">
            Continue shopping
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="qc-cart-page">
      <div className="qc-cart-page__header">
        <div>
          <h2>Your cart</h2>
          <p>{totalItems} items</p>
        </div>
        <button type="button" className="qc-button qc-button--ghost" onClick={clearCart}>
          Clear cart
        </button>
      </div>
      <div className="qc-cart-page__grid">
        <div className="qc-cart-page__items">
          {cart.map((item) => (
            <div className="qc-cart-page__item" key={item.id}>
              <img
                className="qc-cart-page__thumb"
                src={item.image}
                alt={item.name}
              />
              <div className="qc-cart-page__details">
                <p className="qc-cart-page__name">{item.name}</p>
                <p className="qc-cart-page__price">
                  {priceFormatter.format(item.price)}
                </p>
                <div className="qc-cart-page__qty">
                  <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="qc-cart-page__summary">
                <p className="qc-cart-page__subtotal">
                  {priceFormatter.format(item.price * item.quantity)}
                </p>
                <button
                  type="button"
                  className="qc-cart-page__remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <aside className="qc-cart-page__summary-card">
          <div>
            <p className="qc-cart-page__total-label">Order total</p>
            <p className="qc-cart-page__total-value">
              {priceFormatter.format(totalPrice)}
            </p>
          </div>
          <button type="button" className="qc-button qc-button--primary">
            Checkout
          </button>
          <Link className="qc-link" to="/">
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default CartPage
