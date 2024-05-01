import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const {cart, clearCart, deleteProductById, totalPrice} = useContext(CartContext);

    //Cuando el carrito no tiene productos
    if (cart.length === 0){
        return <div className="empty-cart">
            <h2>No hay productos en el carrito</h2>
            <Link className="button-empty-cart" to="/">Buscar Productos</Link>
        </div>
    }

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            <div className="products-cart">
                {cart.map((product)=> (
                    <div key={product.id} className="product-cart">
                        <img className="image-product-cart" src={product.image} />
                        <div className="detail">
                            <span className="detail-brand">{product.name}</span>
                            <span className="detail-quantity">Cantidad: {product.quantity}</span>
                            <span className="detail-unitary-price">Precio Unitario $ {product.price}</span>
                        </div>
                        <div className="price">
                            <span className="peso-span">$</span>
                            <span className="price-span">{product.quantity * product.price}</span>
                            <span className="button-empty-icon" onClick={() => deleteProductById(product.id)}><FaRegTrashAlt/></span> 
                        </div>
                    </div>
                ))}
            </div>
            <div className="controls-cart">
                <div className="total-price">
                    <span className="left">Precio Total</span>
                    <span className="peso">$</span>
                    <span className="right">{totalPrice()}</span>
                </div>
                <div className="controls-buttons">
                    <Link to="/checkout" className="button-checkout">
                        Finalizar Compra
                    </Link>
                    <button className="button-empty" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart