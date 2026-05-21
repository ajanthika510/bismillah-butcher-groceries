// src/components/CartSidebar.jsx

import {
  FaShoppingCart,
  FaTrash,
  FaMinus,
  FaPlus,
  FaTimes,
  FaWhatsapp
} from "react-icons/fa";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import { useState } from "react";

import { useCart }
from "../context/CartContext";

function CartSidebar() {

  const {

    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    total,

    customer,
    setCustomer,

    generateWhatsAppMessage

  } = useCart();

  const [open, setOpen] =
    useState(false);

  /* =========================
     WHATSAPP ORDER
  ========================== */

  const handleWhatsAppOrder = () => {

    if (cartItems.length === 0) {

      alert("Cart is empty");

      return;
    }

    const phoneNumber =
      "447404943400";

    const message =
      generateWhatsAppMessage();

    const url =
      `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (

    <>

      {/* FLOATING BUTTON */}

      <motion.button

        whileHover={{
          scale: 1.1
        }}

        whileTap={{
          scale: 0.95
        }}

        onClick={() =>
          setOpen(!open)
        }

        className="
          fixed
          bottom-4
          left-4
          sm:bottom-6
          sm:left-6
          z-50
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-green-500
          text-white
          shadow-2xl
          flex
          items-center
          justify-center
        "
      >

        <FaShoppingCart
          className="
            text-xl
            sm:text-2xl
          "
        />

        {cartItems.length > 0 && (

          <div
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              min-w-[26px]
              h-[26px]
              px-1
              rounded-full
              flex
              items-center
              justify-center
              text-xs
              sm:text-sm
              font-bold
            "
          >
            {cartItems.length}
          </div>

        )}

      </motion.button>


      {/* SIDEBAR */}

      <AnimatePresence>

        {open && (

          <>

            {/* OVERLAY */}

            <motion.div

              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              exit={{
                opacity: 0
              }}

              onClick={() =>
                setOpen(false)
              }

              className="
                fixed
                inset-0
                bg-black/50
                backdrop-blur-sm
                z-40
              "
            />


            {/* PANEL */}

            <motion.div

              initial={{
                x: "100%"
              }}

              animate={{
                x: 0
              }}

              exit={{
                x: "100%"
              }}

              transition={{
                type: "spring",
                damping: 22
              }}

              className="
                fixed
                top-0
                right-0
                z-50
                h-screen
                w-full
                sm:max-w-md
                bg-white
                shadow-2xl
                flex
                flex-col
              "
            >

              {/* HEADER */}

              <div
                className="
                  p-4
                  sm:p-5
                  border-b
                  flex
                  justify-between
                  items-center
                "
              >

                <div>

                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      font-black
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <FaShoppingCart />
                    Your Cart
                  </h2>

                  <p className="text-gray-500 text-sm sm:text-base">
                    {cartItems.length} items
                  </p>

                </div>

                {/* CLOSE BUTTON */}

                <button
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-zinc-100
                    hover:bg-zinc-200
                    transition
                    flex
                    items-center
                    justify-center
                  "
                >

                  <FaTimes
                    className="
                      text-lg
                      sm:text-xl
                    "
                  />

                </button>

              </div>


              {/* ITEMS */}

              <div
                className="
                  flex-1
                  overflow-y-auto
                  p-4
                  sm:p-5
                  space-y-5
                "
              >

                {cartItems.length === 0 ? (

                  <div
                    className="
                      h-full
                      flex
                      flex-col
                      items-center
                      justify-center
                      text-center
                    "
                  >

                    <FaShoppingCart
                      className="
                        text-5xl
                        sm:text-6xl
                        text-gray-300
                      "
                    />

                    <h3
                      className="
                        mt-4
                        text-xl
                        sm:text-2xl
                        font-bold
                      "
                    >
                      Cart is Empty
                    </h3>

                  </div>

                ) : (

                  cartItems.map((item) => (

                    <div

                      key={item.id}

                      className="
                        bg-zinc-100
                        rounded-3xl
                        p-4
                      "
                    >

                      <div
                        className="
                          flex
                          gap-3
                          sm:gap-4
                        "
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            w-20
                            h-20
                            sm:w-24
                            sm:h-24
                            object-cover
                            rounded-2xl
                          "
                        />

                        <div className="flex-1">

                          <h3
                            className="
                              font-black
                              text-base
                              sm:text-lg
                            "
                          >
                            {item.name}
                          </h3>

                          <p
                            className="
                              text-gray-500
                              mt-1
                              text-sm
                            "
                          >
                            {item.category}
                          </p>

                          {item.portion && (

                            <p
                              className="
                                text-sm
                                mt-1
                                text-gray-500
                              "
                            >
                              Portion:
                              {" "}
                              {item.portion}
                            </p>

                          )}

                          <p
                            className="
                              mt-2
                              text-xl
                              sm:text-2xl
                              font-black
                              text-green-500
                            "
                          >
                            £{item.price}
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
                          }
                        >
                          <FaTrash
                            className="
                              text-red-500
                              text-lg
                            "
                          />
                        </button>

                      </div>


                      {/* QUANTITY */}

                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <p
                          className="
                            font-semibold
                            text-sm
                            sm:text-base
                          "
                        >
                          Quantity
                        </p>

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >

                          <button

                            onClick={() =>
                              decreaseQty(
                                item.id
                              )
                            }

                            className="
                              w-9
                              h-9
                              sm:w-10
                              sm:h-10
                              rounded-full
                              bg-black
                              text-white
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <FaMinus />
                          </button>

                          <span
                            className="
                              text-lg
                              font-bold
                            "
                          >
                            {item.quantity}
                          </span>

                          <button

                            onClick={() =>
                              increaseQty(
                                item.id
                              )
                            }

                            className="
                              w-9
                              h-9
                              sm:w-10
                              sm:h-10
                              rounded-full
                              bg-green-500
                              text-white
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <FaPlus />
                          </button>

                        </div>

                      </div>

                    </div>

                  ))

                )}

              </div>


              {/* FOOTER */}

              {cartItems.length > 0 && (

                <div
                  className="
                    border-t
                    p-4
                    sm:p-5
                    space-y-4
                  "
                >

                  {/* FORM */}

                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customer.name}
                    onChange={(e) =>
                      setCustomer({

                        ...customer,

                        name:
                          e.target.value
                      })
                    }
                    className="
                      w-full
                      border
                      rounded-2xl
                      px-4
                      py-3
                      outline-none
                      text-sm
                      sm:text-base
                    "
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={customer.phone}
                    onChange={(e) =>
                      setCustomer({

                        ...customer,

                        phone:
                          e.target.value
                      })
                    }
                    className="
                      w-full
                      border
                      rounded-2xl
                      px-4
                      py-3
                      outline-none
                      text-sm
                      sm:text-base
                    "
                  />

                  <textarea
                    rows="3"
                    placeholder="Address"
                    value={customer.address}
                    onChange={(e) =>
                      setCustomer({

                        ...customer,

                        address:
                          e.target.value
                      })
                    }
                    className="
                      w-full
                      border
                      rounded-2xl
                      px-4
                      py-3
                      outline-none
                      resize-none
                      text-sm
                      sm:text-base
                    "
                  />


                  {/* TOTAL */}

                  <div
                    className="
                      flex
                      justify-between
                      items-center
                    "
                  >

                    <h3
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                      "
                    >
                      Total
                    </h3>

                    <h3
                      className="
                        text-2xl
                        sm:text-3xl
                        font-black
                        text-green-500
                      "
                    >
                      £{total.toFixed(2)}
                    </h3>

                  </div>


                  {/* WHATSAPP */}

                  <button

                    onClick={
                      handleWhatsAppOrder
                    }

                    className="
                      w-full
                      bg-green-500
                      hover:bg-green-600
                      transition
                      duration-300
                      py-3
                      sm:py-4
                      rounded-2xl
                      text-white
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-3
                      text-sm
                      sm:text-base
                    "
                  >

                    <FaWhatsapp
                      className="text-xl sm:text-2xl"
                    />

                    Order via WhatsApp

                  </button>


                  {/* CLEAR */}

                  <button

                    onClick={clearCart}

                    className="
                      w-full
                      py-3
                      rounded-2xl
                      bg-red-500
                      text-white
                      font-semibold
                      text-sm
                      sm:text-base
                    "
                  >
                    Clear Cart
                  </button>

                </div>

              )}

            </motion.div>

          </>

        )}

      </AnimatePresence>

    </>
  );
}

export default CartSidebar;