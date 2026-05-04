const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const CartSidebar = ({
  isOpen,
  cart,
  itemCount,
  totalPrice,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  return (
    <div className={`qc-cart ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="qc-cart__overlay"
        aria-label="Close cart"
        onClick={onClose}
      />
      <aside className="qc-cart__panel" aria-hidden={!isOpen}>
        <div className="qc-cart__header">
          <div>
            <p className="qc-cart__title">Your cart</p>
            <p className="qc-cart__count">{itemCount} items</p>
          </div>
          <button type="button" className="qc-cart__close" onClick={onClose}>
            Close
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="qc-cart__empty">Your cart is empty.</p>
        ) : (
          <div className="qc-cart__items">
            {cart.map((item) => (
              <div className="qc-cart__item" key={item.id}>
                <img
                  className="qc-cart__thumb"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
                <div className="qc-cart__details">
                  <p className="qc-cart__name">{item.name}</p>
                  <p className="qc-cart__price">
                    {priceFormatter.format(item.price)}
                  </p>
                  <div className="qc-cart__qty">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="qc-cart__summary">
                  <p className="qc-cart__subtotal">
                    {priceFormatter.format(item.price * item.quantity)}
                  </p>
                  <button
                    type="button"
                    className="qc-cart__remove"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="qc-cart__footer">
          <div>
            <p className="qc-cart__total-label">Total</p>
            <p className="qc-cart__total-value">
              {priceFormatter.format(totalPrice)}
            </p>
          </div>
          <button type="button" className="qc-button qc-button--primary">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartSidebar
