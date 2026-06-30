import heroImg from '../assets/hero.jpg'
import sofaImg from '../assets/sofa.jpg'
import chairImg from '../assets/chair.jpg'
import lampImg from '../assets/lamp.jpg'
import ProductCard from '../components/ProductCard'
import '../css/home.css'

const featuredCollections = [
  { title: 'Sofa', price: '$649', label: 'Minimal lounge', image: sofaImg },
  { title: 'Chair', price: '$649', label: 'Signature seating', image: chairImg },
  { title: 'Lamp', price: '$549', label: 'Soft lighting', image: lampImg },
  { title: 'Rug', price: '$849', label: 'Textured comfort', image: sofaImg },
]

const newArrivals = [
  { title: 'Sofa', price: '$649', image: sofaImg },
  { title: 'Chair', price: '$649', image: chairImg },
  { title: 'Lamp', price: '$549', image: lampImg },
  { title: 'Rug', price: '$849', image: sofaImg },
]

function Home({ searchTerm, onAddToCart }) {
  const filterItems = (items) => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return items
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        (item.label && item.label.toLowerCase().includes(query)),
    )
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
          <button className="primary-action">Shop New Arrivals</button>
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
