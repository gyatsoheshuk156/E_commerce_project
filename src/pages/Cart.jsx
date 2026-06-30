import '../css/cart.css'

function Cart({ cartItems, onQuantityChange, onRemoveItem }) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity,
    0,
  )

  return (
    <main className="page-cart">
      <div className="section-heading">
        <h2>Your Shopping Cart</h2>
        <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty.</div>
      ) : (
        <div className="cart-card">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.title}>
              <div className="cart-thumb">
                {item.image ? <img src={item.image} alt={item.title} /> : null}
              </div>
              <div className="cart-info">
                <strong>{item.title}</strong>
                {item.label && <span>{item.label}</span>}
                <span className="cart-price">{item.price}</span>
                <button type="button" className="cart-remove" onClick={() => onRemoveItem(item.title)}>
                  Remove
                </button>
              </div>
              <div className="cart-quantity">
                <button type="button" onClick={() => onQuantityChange(item.title, -1)}>
                  −
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => onQuantityChange(item.title, 1)}>
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <strong>₹0</strong>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>
          </div>

          <button className="primary-action">Proceed to Checkout</button>
        </div>
      )}
    </main>
  )
}

export default Cart
