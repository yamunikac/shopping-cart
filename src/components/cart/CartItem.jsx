import { useContext } from "react";
import { CartContext } from "./CC";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Qty: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;