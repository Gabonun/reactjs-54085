import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react"
import {CartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetail = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const [clickAdd, setClickAdd] = useState(false)

  const handleAddToCart = (count) => {
    const productCart = {...product, quantity: count}
    addToCart(productCart)
    setClickAdd(true)
  }

  return (
    <div className="product-container">
      <div className="img-item">
        <img src={product.image} alt="imagen del producto"/>
      </div>
      <div className="detail-item">
        <h2 className="name-product">{product.name}</h2>
        <h2 className="description-product">{product.description}</h2>
        <div className="price-container">
          <h2 className="price-product">
            <span>$</span>{product.price}
          </h2>
        </div>
        {
          clickAdd ? <Link to="/cart" className="button-go-cart">Ir al Carrito</Link> : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>
        }
      </div>
    </div>
  );
};

export default ItemDetail;