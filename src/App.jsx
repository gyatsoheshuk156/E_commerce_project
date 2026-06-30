import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Cart from './pages/Cart'
import './css/app.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.title === product.title)
      if (existing) {
        return current.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const handleQuantityChange = (title, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.title === title
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const handleRemoveItem = (title) => {
    setCartItems((current) => current.filter((item) => item.title !== title))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          cartCount={cartCount}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home searchTerm={searchTerm} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/products"
            element={
              <Products searchTerm={searchTerm} onAddToCart={handleAddToCart} />
            }
          />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
