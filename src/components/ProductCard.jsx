import '../css/product-card.css'

function ProductCard({ title, price, label, image, small, onAdd }) {
  return (
    <article className={`product-card${small ? ' product-card--small' : ''}`}>
      <div className={`product-visual${image ? ' product-visual--image' : ''}`}>
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <div className="product-info">
        {label && <p className="product-label">{label}</p>}
        <h3>{title}</h3>
        <p className="product-price">{price}</p>
        {onAdd ? (
          <button
            type="button"
            className="product-add"
            onClick={() => onAdd({ title, price, label, image })}
          >
            Add to cart
          </button>
        ) : null}
      </div>
    </article>
  )
}

export default ProductCard
