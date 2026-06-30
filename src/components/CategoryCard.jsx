import '../css/category-card.css'

function CategoryCard({ name }) {
  return (
    <div className="category-tile">
      <div className="category-thumb" />
      <span>{name}</span>
    </div>
  )
}

export default CategoryCard
