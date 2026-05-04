import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import CartSidebar from './components/CartSidebar'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import CartPage from './components/CartPage'
import products from './data/products'

const categories = Array.from(
  new Set(products.map((product) => product.category)),
).sort()

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="qc-shell">
      <Header
        categories={categories}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <main className="qc-main">
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route
            path="/category/:category"
            element={<CategoryPage searchTerm={searchTerm} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <CartSidebar />
    </div>
  )
}

// QuickCart UI implementation

export default App
