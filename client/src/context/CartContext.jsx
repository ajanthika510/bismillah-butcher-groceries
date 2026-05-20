import {
  createContext,
  useState,
  useEffect,
  useContext
} from "react";

import { toast } from "react-toastify";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(

    JSON.parse(
      localStorage.getItem("cartItems")
    ) || []

  );

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);


  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>

        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }

    toast.success("Item added to cart");
  };


  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };


  const increaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    setCartItems(updatedCart);
  };


  const decreaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>

      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1
          }
        : item
    );

    setCartItems(updatedCart);
  };


  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty
      }}
    >

      {children}

    </CartContext.Provider>
  );
}


/* ADD THIS PART */

export function useCart() {

  return useContext(CartContext);

}

export default CartProvider;