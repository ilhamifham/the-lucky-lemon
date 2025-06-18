import "./ButtonAddToCart.css";
import Add from "/src/assets/add.svg";
import Minus from "/src/assets/minus.svg";
import Trash from "/src/assets/trash.svg";
import { useCartContext } from "/src/contexts/useCartContext.js";

function ButtonAddToCart({ item }) {
    const { cartItems, addToCart, removeFromCart } = useCartContext();
    const currentCartItem = cartItems.find(cartItem => cartItem.title === item.title) || 0;

    return (
        <>
            {currentCartItem === 0 ? (
                <button className="button__ui" onClick={() => { addToCart(item) }}>Add to Cart</button>
            ) : (
                <div>
                    <button onClick={() => { removeFromCart(item) }}>
                        {currentCartItem.quantity === 1 ? <img src={Trash} alt="delete item" width={40} height={40} /> : <img src={Minus} alt="decrease item" width={40} height={40} />}
                    </button>
                    <div>{currentCartItem.quantity}</div>
                    <button
                        onClick={() => { addToCart(item) }}
                        disabled={currentCartItem.quantity === 10}
                    >
                        <img src={Add} alt="increase item" />
                    </button>
                </div>
            )}
        </>
    );
}

export default ButtonAddToCart;
