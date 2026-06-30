import ProductCard from '../components/ProductCard'
import sofaImg from '../assets/sofa.jpg'
import chairImg from '../assets/chair.jpg'
import lampImg from '../assets/lamp.jpg'
import lamp2Img from '../assets/lamp2.jpg'
import rug1Img from '../assets/rug1.jpg'
import rug2Img from '../assets/rug2.jpg'
import tableImg from '../assets/table.jpg'
import '../css/products.css'

const normalizeSearch = (value = '') => value.toLowerCase().trim()

const matchesSearch = (item, query) => {
  const searchableText = [item.title, item.label, item.price]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  return query
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => searchableText.includes(term))
}

const productItems = [
  { title: 'Aura Lounge Chair', price: '₹53,867', label: 'Featured', image: chairImg },
  { title: 'Minimal Sofa', price: '₹70,467', label: 'New', image: sofaImg },
  { title: 'Woven Lamp', price: '₹45,567', label: 'Best Seller', image: lampImg },
  { title: 'Textured Rug', price: '₹62,167', label: 'Popular', image: sofaImg },
  { title: 'Accent Table', price: '₹29,567', label: 'New', image: tableImg },
  { title: 'Floor Lamp', price: '₹37,867', label: 'Best Seller', image: lamp2Img },
  { title: 'Layered Rug', price: '₹44,567', label: 'Popular', image: rug1Img },
  { title: 'Sculptural Rug', price: '₹42,167', label: 'Featured', image: rug2Img },
]

function Products({ searchTerm, onAddToCart }) {
  const query = normalizeSearch(searchTerm)
  const filteredProducts = query
    ? productItems.filter((item) => matchesSearch(item, query))
    : productItems

  return (
    <main className="page-products">
      <div className="section-heading">
        <h2>Products Collections</h2>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item.title}
              title={item.title}
              price={item.price}
              label={item.label}
              image={item.image}
              onAdd={onAddToCart}

            />
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </main>
  )
}

export default Products
