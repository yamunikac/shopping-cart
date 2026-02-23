import { useContext } from "react";
import { CartContext } from "./CC";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h4>{item.title}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;