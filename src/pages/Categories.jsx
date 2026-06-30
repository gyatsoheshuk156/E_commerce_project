import CategoryCard from '../components/CategoryCard'
import '../css/categories.css'

const categories = [
  { name: 'Furniture' },
  { name: 'Lighting' },
  { name: 'Decor' },
  { name: 'Textiles' },
  { name: 'Storage' },
]

function Categories() {
  return (
    <main className="page-categories">
      <div className="section-heading">
        <h2>Categories</h2>
      </div>
      <div className="category-grid-page">
        {categories.map((item) => (
          <CategoryCard key={item.name} {...item} />
        ))}
      </div>
    </main>
  )
}

export default Categories
