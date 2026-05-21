import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

function CartProvider({ children }) {

  /* =========================
     LOAD CART FROM LOCALSTORAGE
  ========================== */

  const [cartItems, setCartItems] = useState(() => {

    const savedCart =
      localStorage.getItem("cartItems");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });


  /* =========================
     SAVE CART TO LOCALSTORAGE
  ========================== */

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);


  /* =========================
     ADD TO CART
  ========================== */

  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCartItems(

        cartItems.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity: item.quantity + 1
              }

            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };


  /* =========================
     REMOVE ITEM
  ========================== */

  const removeFromCart = (id) => {

    setCartItems(

      cartItems.filter(
        (item) => item.id !== id
      )
    );
  };


  /* =========================
     INCREASE QTY
  ========================== */

  const increaseQty = (id) => {

    setCartItems(

      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item
      )
    );
  };


  /* =========================
     DECREASE QTY
  ========================== */

  const decreaseQty = (id) => {

    setCartItems(

      cartItems.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1
            }

          : item
      )
    );
  };


  /* =========================
     CLEAR CART
  ========================== */

  const clearCart = () => {

    setCartItems([]);

    localStorage.removeItem("cartItems");
  };


  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;