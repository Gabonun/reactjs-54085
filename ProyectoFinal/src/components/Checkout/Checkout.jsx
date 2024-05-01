import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../db/db";
import CheckOutForm from "./CheckoutForm";
import "./Checkout.css";


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const [idOrder, setIdOrder] = useState(null);
    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        const order = {
            user: {...dataForm},
            products: [...cart],
            total: totalPrice(),
        };

        uploadOrder(order);
    };

    const uploadOrder = async(order) => {
        const ordersRef = collection(db, "orders");
        const response = await addDoc(ordersRef, order);

        setIdOrder(response.id);
        clearCart()
    };

    return (
        <div>
            {
            idOrder ? (
                <div className="order">
                    <h2>Compra realizada correctamente</h2>
                    <p>El ID de la compra es el siguiente: {idOrder}</p>
                    <Link to="/" className="button-return">Volver al Inicio</Link>
                </div>
                ) : (
                    <CheckOutForm dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmit={handleSubmit}/>
            )}
        </div>
    );
};

export default Checkout