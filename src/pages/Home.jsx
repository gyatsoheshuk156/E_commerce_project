import { useNavigate } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import sofaImg from '../assets/sofa.jpg'
import chairImg from '../assets/chair.jpg'
import lampImg from '../assets/lamp.jpg'
import lamp2Img from '../assets/lamp2.jpg'
import rug1Img from '../assets/rug1.jpg'
import rug2Img from '../assets/rug2.jpg'
import tableImg from '../assets/table.jpg'
import ProductCard from '../components/ProductCard'
import '../css/home.css'

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

const featuredCollections = [
  { title: 'Sofa', price: '₹64,967', label: 'Minimal lounge', image: sofaImg },
  { title: 'Chair', price: '₹53,867', label: 'Signature seating', image: chairImg },
  { title: 'Lamp', price: '₹54,967', label: 'Soft lighting', image: lampImg },
  { title: 'Rug', price: '₹84,967', label: 'Textured comfort', image: rug1Img },
  { title: 'Accent Table', price: '₹29,567', label: 'Crafted detail', image: tableImg },
  { title: 'Floor Lamp', price: '₹37,867', label: 'Warm glow', image: lamp2Img },
  { title: 'Layered Rug', price: '₹44,567', label: 'Soft texture', image: rug1Img },
  { title: 'Sculptural Rug', price: '₹42,167', label: 'Modern finish', image: rug2Img },
]

const newArrivals = [
  { title: 'Sofa', price: '₹64,967', image: sofaImg },
  { title: 'Chair', price: '₹53,867', image: chairImg },
  { title: 'Lamp', price: '₹54,967', image: lampImg },
  { title: 'Rug', price: '₹84,967', image: rug1Img },
  { title: 'Accent Table', price: '₹29,567', image: tableImg },
  { title: 'Floor Lamp', price: '₹37,867', image: lamp2Img },
  { title: 'Layered Rug', price: '₹44,567', image: rug1Img },
  { title: 'Sculptural Rug', price: '₹42,167', image: rug2Img },
]

function Home({ searchTerm, onAddToCart }) {
  const navigate = useNavigate()

  const filterItems = (items) => {
    const query = normalizeSearch(searchTerm)
    if (!query) return items
    return items.filter((item) => matchesSearch(item, query))
  }

  const featured = filterItems(featuredCollections)
  const newArrivalsFiltered = filterItems(newArrivals)

  return (
    <main className="page-home">
      <section className="hero-section">
        <div
          className="hero-card"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div className="hero-copy">
          <p className="eyebrow">Minimal Living.</p>
          <h1>Beautifully Curated.</h1>
          <p className="hero-text">
            Discover thoughtfully selected furniture and decor for calm modern homes.
          </p>
          <button className="primary-action" onClick={() => navigate('/products')}>Collection</button>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Featured Collections</h2>
        </div>
        <div className="featured-grid">
          {featured.length > 0 ? (
            featured.map((item) => (
              <ProductCard key={item.title} {...item} onAdd={onAddToCart} />
            ))
          ) : (
            <p>No matching featured products.</p>
          )}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>New Arrivals</h2>
        </div>
        <div className="featured-grid">
          {newArrivalsFiltered.length > 0 ? (
            newArrivalsFiltered.map((item) => (
              <ProductCard key={item.title} {...item} small onAdd={onAddToCart} />
            ))
          ) : (
            <p>No matching new arrivals.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Home
