import { useContext } from "react";
import { CartContext } from "./CC";
import "./Cart.css";

const Cart = () => {
const { cart, removeFromCart } = useContext(CartContext);

const totalPrice = cart.reduce(
(total, item) => total + item.price * item.quantity,
0
);

return ( <div className="cart-page">

  <h2 className="cart-title">Your Cart</h2>

  {cart.length === 0 ? (
    <p className="empty-cart">Your cart is empty.</p>
  ) : (
    <>
      <div className="cart-items">

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </>
  )}

</div>

);
};

export default Cart;
