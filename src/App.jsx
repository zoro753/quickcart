import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CartSidebar from './components/CartSidebar'
import products from './data/products'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...prevCart, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0)

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="qc-shell">
      <Header cartItemCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      <main className="qc-main">
        <ProductList products={products} onAddToCart={addToCart} />
      </main>
      <CartSidebar
        isOpen={isCartOpen}
        cart={cart}
        itemCount={getTotalItems()}
        totalPrice={getTotalPrice()}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  )
}

// QuickCart UI implementation

export default App
