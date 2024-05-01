import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    //Controlamos los duplicados
    const addToCart = (newProduct) => {
        const condition = isInCart(newProduct.id)

        if (condition){
            //Si es duplicado, sumamos el item
            const productsMod = cart.map((productCart)=> {
                if (productCart.id === newProduct.id){
                    return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
                }else{
                    return productCart
                }
            })

            setCart(productsMod)
        }else{
            setCart([...cart, newProduct])
        }
    }

    //Verificamos si un producto ya esta en el carrito
    const isInCart = (productId) => {
        const condition = cart.some((product)=> product.id === productId)
        return condition
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, product) => total + product.quantity, 0)
        return quantity
    }

    const clearCart = () => {
        setCart([])
    }

    const deleteProductById = (productId) => {
        const productsFilter = cart.filter((productCart)=> productCart.id !== productId)
        setCart(productsFilter)
    }

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
        return total
    }

    return(
        <CartContext.Provider value={{cart, addToCart, totalQuantity, clearCart, deleteProductById, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}