import "./Cart.css";
import EmptyCart from "./EmptyCart.jsx";
import { useCartContext } from "/src/contexts/useCartContext.js";
import CartItem from "./CartItem.jsx";
import Add from "/src/assets/add.svg";

function Cart() {
    const { cartItems, cartItemsPrice } = useCartContext();

    return (
        <section className="section__cart">
            <div>
                <h2>Cart</h2>
                {cartItems.length !== 0 ? (
                    <div>
                        <ul>
                            {cartItems.map((item, index) => {
                                return <CartItem key={index} item={item} />;
                            })}
                        </ul>
                        <div className="cart__total">
                            <div>
                                <div>Subtotal:</div>
                                <div>RS. {cartItemsPrice}</div>
                            </div>
                            <div>
                                <div>Delivery Charge:</div>
                                <div>Rs. 150</div>
                            </div>
                            <div>
                                <div>Total:</div>
                                <div>Rs. {cartItemsPrice + 150}</div>
                            </div>
                            <button className="button__ui">Checkout</button>
                        </div>
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </section>
    );
}

export default Cart;
