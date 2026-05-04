import Header from './components/Header'
import ProductList from './components/ProductList'
import products from './data/products'

function App() {
  return (
    <div className="qc-shell">
      <Header />
      <main className="qc-main">
        <ProductList products={products} />
      </main>
    </div>
  )
}

export default App
