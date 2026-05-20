import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {

    cartItems,

    removeFromCart,

    increaseQty,

    decreaseQty

  } = useContext(CartContext);


  const total = cartItems.reduce(

    (sum, item) =>

      sum + item.price * item.quantity,

    0
  );


  return (

    <div className="bg-zinc-100 min-h-screen p-10">

      <h1
        className="
          text-4xl
          font-extrabold
          mb-10
          text-center
          text-green-600
        "
      >
        Your Cart
      </h1>


      {cartItems.length === 0 ? (

        <div
          className="
            text-center
            bg-white
            p-16
            rounded-2xl
            shadow-lg
          "
        >

          <h2 className="text-3xl font-bold mb-4">
            Cart is Empty
          </h2>

          <p className="text-gray-500">
            Add fresh halal products to continue shopping.
          </p>

        </div>

      ) : (

        <div className="grid gap-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-6
                flex
                flex-col
                md:flex-row
                justify-between
                items-center
                gap-6
              "
            >

              {/* LEFT */}

              <div className="flex items-center gap-6">

                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/150"
                  }
                  alt={item.name}
                  className="
                    w-32
                    h-32
                    object-cover
                    rounded-xl
                  "
                />

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.category}
                  </p>

                  <p
                    className="
                      text-green-600
                      font-bold
                      text-xl
                      mt-3
                    "
                  >
                    Rs. {item.price}
                  </p>

                </div>

              </div>


              {/* RIGHT */}

              <div className="flex flex-col items-center gap-4">

                {/* QUANTITY */}

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    className="
                      bg-zinc-300
                      hover:bg-zinc-400
                      px-4
                      py-2
                      rounded-lg
                      text-xl
                    "
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    className="
                      bg-zinc-300
                      hover:bg-zinc-400
                      px-4
                      py-2
                      rounded-lg
                      text-xl
                    "
                  >
                    +
                  </button>

                </div>


                {/* REMOVE */}

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="
                    bg-red-500
                    hover:bg-red-600
                    transition
                    duration-300
                    text-white
                    px-6
                    py-2
                    rounded-xl
                  "
                >
                  Remove
                </button>

              </div>

            </div>

          ))}


          {/* TOTAL */}

          <div
            className="
              bg-black
              text-white
              rounded-2xl
              p-8
              mt-8
              shadow-xl
            "
          >

            <div
              className="
                flex
                justify-between
                items-center
              "
            >

              <h2 className="text-xl font-semibold">
                    Total
                  </h2>

                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-green-400
                    "
                  >
                    Rs. {total.toFixed(2)}
                  </h2>
            </div>


            <button
              className="
                w-full
                mt-6
                bg-green-500
                hover:bg-green-600
                transition
                duration-300
                text-white
                py-3
                rounded-xl
                text-base
                font-semibold
              "
            >
              Proceed Order
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;