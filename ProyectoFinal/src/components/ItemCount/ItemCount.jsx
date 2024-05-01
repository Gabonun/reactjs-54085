import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({handleAddToCart, stock}) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock){
            setCount(count + 1);
        }
    };

    const handleSubstract = () => {
        if (count > 1){
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="edit">
                <div className="minus" onClick={handleSubstract}>-</div>
                <div className="count">{count}</div>
                <div className="plus" onClick={handleAdd}>+</div>
            </div>
            <button className="button-add" onClick={() => handleAddToCart(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount