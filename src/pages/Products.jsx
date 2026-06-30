import ProductCard from '../components/ProductCard'
import sofaImg from '../assets/sofa.jpg'
import chairImg from '../assets/chair.jpg'
import lampImg from '../assets/lamp.jpg'
import '../css/products.css'

const productItems = [
  { title: 'Aura Lounge Chair', price: '$649', label: 'Featured', image: chairImg },
  { title: 'Minimal Sofa', price: '$849', label: 'New', image: sofaImg },
  { title: 'Woven Lamp', price: '$549', label: 'Best Seller', image: lampImg },
  { title: 'Textured Rug', price: '$749', label: 'Popular', image: sofaImg },
]

function Products({ searchTerm, onAddToCart }) {
  const query = searchTerm.trim().toLowerCase()
  const filteredProducts = query
    ? productItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          (item.label && item.label.toLowerCase().includes(query)),
      )
    : productItems

  return (
    <main className="page-products">
      <div className="section-heading">
        <h2>Products Collections</h2>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.title} {...item} onAdd={onAddToCart} />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </main>
  )
}

export default Products
