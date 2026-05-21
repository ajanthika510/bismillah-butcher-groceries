import {
  useContext
} from "react";

import {
  CartContext
} from "../context/CartContext";

import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaWhatsapp
} from "react-icons/fa";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart
  } = useContext(CartContext);

  // TOTAL
  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  // WHATSAPP ORDER
  const handleProceedOrder = () => {

  if (cartItems.length === 0) return;

  const phoneNumber = "447404943400";

  let message =
    `🛒 New Order - Bismillah Butcher & Grocery\n\n`;

  cartItems.forEach((item, index) => {

    message +=
      `${index + 1}. ${item.name}\n` +
      `Quantity: ${item.quantity}\n` +
      `Price: Rs. ${item.price}\n` +
      `Subtotal: Rs. ${
        item.price * item.quantity
      }\n\n`;
  });

  message +=
    `Total: Rs. ${total.toFixed(2)}`;

  // ENCODE MESSAGE PROPERLY
  const encodedMessage =
    encodeURIComponent(message);

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(
    whatsappURL,
    "_blank"
  );

  // CLEAR CART AFTER ORDER
  clearCart();
};


  return (

    <div
      className="
        min-h-screen
        bg-zinc-100
        px-4
        sm:px-6
        lg:px-10
        py-8
        sm:py-10
      "
    >

      {/* TITLE */}

      <h1
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-extrabold
          text-center
          text-green-600
          mb-10
        "
      >
        Your Cart
      </h1>


      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-10
            sm:p-16
            text-center
          "
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-black
            "
          >
            Cart is Empty
          </h2>

          <p
            className="
              text-gray-500
              mt-4
              text-sm
              sm:text-base
            "
          >
            Add fresh halal products
            to continue shopping.
          </p>

        </div>

      ) : (

        <div
          className="
            grid
            gap-6
          "
        >

          {/* CART ITEMS */}

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-4
                sm:p-6
                flex
                flex-col
                lg:flex-row
                justify-between
                gap-6
              "
            >

              {/* LEFT */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-5
                  items-center
                  sm:items-start
                "
              >

                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/150"
                  }
                  alt={item.name}
                  className="
                    w-28
                    h-28
                    sm:w-32
                    sm:h-32
                    object-cover
                    rounded-2xl
                  "
                />

                <div
                  className="
                    text-center
                    sm:text-left
                  "
                >

                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-black
                    "
                  >
                    {item.name}
                  </h2>

                  <p
                    className="
                      text-gray-500
                      mt-2
                    "
                  >
                    {item.category}
                  </p>

                  <p
                    className="
                      text-green-600
                      font-bold
                      text-lg
                      sm:text-xl
                      mt-3
                    "
                  >
                    Rs. {item.price}
                  </p>

                </div>

              </div>


              {/* RIGHT */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                "
              >

                {/* QUANTITY */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  {/* DECREASE */}

                  <button
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                    className="
                      bg-zinc-300
                      hover:bg-zinc-400
                      transition
                      px-3
                      sm:px-4
                      py-2
                      rounded-lg
                      text-lg
                      sm:text-xl
                    "
                  >
                    <FaMinus />
                  </button>

                  {/* QTY */}

                  <span
                    className="
                      text-lg
                      sm:text-xl
                      font-bold
                      min-w-[30px]
                      text-center
                    "
                  >
                    {item.quantity}
                  </span>

                  {/* INCREASE */}

                  <button
                    onClick={() =>
                      increaseQty(item.id)
                    }
                    className="
                      bg-zinc-300
                      hover:bg-zinc-400
                      transition
                      px-3
                      sm:px-4
                      py-2
                      rounded-lg
                      text-lg
                      sm:text-xl
                    "
                  >
                    <FaPlus />
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
                    px-5
                    py-2
                    rounded-xl
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FaTrash />

                  Remove
                </button>

              </div>

            </div>

          ))}


          {/* TOTAL SECTION */}

          <div
            className="
              bg-black
              text-white
              rounded-3xl
              p-6
              sm:p-8
              mt-4
              shadow-xl
            "
          >

            <div
              className="
                flex
                justify-between
                items-center
                mb-6
              "
            >

              <h2
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                "
              >
                Total
              </h2>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-green-400
                "
              >
                Rs. {total.toFixed(2)}
              </h2>

            </div>


            {/* BUTTONS */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >

              {/* CLEAR CART */}

              <button
                onClick={clearCart}
                className="
                  flex-1
                  bg-red-500
                  hover:bg-red-600
                  transition
                  duration-300
                  py-3
                  rounded-xl
                  text-white
                  font-semibold
                "
              >
                Clear Cart
              </button>


              {/* PROCEED ORDER */}

              <button
                onClick={handleProceedOrder}
                className="
                  flex-1
                  bg-green-500
                  hover:bg-green-600
                  transition
                  duration-300
                  py-3
                  rounded-xl
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >

                <FaWhatsapp className="text-xl" />

                Proceed Order

              </button>

            </div>

          </div>

        </div>

      )}

      <footer
  className="
    bg-black
    text-white
    pt-14
    pb-8
    mt-20
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8
    "
  >

    {/* TOP SECTION */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        justify-between
        items-start
        gap-12
        border-b
        border-zinc-800
        pb-10
      "
    >

      {/* LEFT */}

      <div
        className="
          w-full
          lg:w-1/2
        "
      >

        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-black
            leading-tight
          "
        >
          Bismillah
          <span className="text-green-400">
            {" "}Butcher & Grocery
          </span>
        </h2>

        <p
          className="
            mt-5
            text-gray-400
            leading-relaxed
            text-sm
            sm:text-base
            max-w-lg
          "
        >
          Premium halal meat, fresh vegetables,
          groceries and frozen foods delivered
          with quality, freshness and trust.
        </p>

      </div>


      {/* SOCIALS */}

      <div
        className="
          w-full
          lg:w-auto
        "
      >

        <h3
          className="
            text-lg
            font-bold
            mb-5
          "
        >
          Follow Us
        </h3>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* FACEBOOK */}

          <a
            href="https://facebook.com/bismillahbutchers"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-zinc-900
              hover:bg-blue-600
              transition
              duration-300
              flex
              items-center
              justify-center
              text-lg
              sm:text-xl
            "
          >
            <FaFacebookF />
          </a>


          {/* INSTAGRAM */}

          <a
            href="https://instagram.com/bismillahbutchers"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12
              h-12
              sm:w-14
              sm:h-14
              rounded-2xl
              bg-zinc-900
              hover:bg-pink-600
              transition
              duration-300
              flex
              items-center
              justify-center
              text-lg
              sm:text-xl
            "
          >
            <FaInstagram />
          </a>

        </div>

      </div>

    </div>


    {/* BOTTOM SECTION */}

    <div
      className="
        mt-8
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-5
        text-sm
        text-gray-400
        text-center
      "
    >

      {/* LEFT */}

      <p
        className="
          leading-relaxed
        "
      >
        © 2026 Bismillah Butcher & Grocery.
        All Rights Reserved.
      </p>


      {/* CENTER */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-4
        "
      >

        <button
          className="
            hover:text-green-400
            transition
            duration-300
          "
        >
          Privacy Policy
        </button>

        <button
          className="
            hover:text-green-400
            transition
            duration-300
          "
        >
          Cookies
        </button>

      </div>


      {/* RIGHT */}

      <p
        className="
          leading-relaxed
        "
      >
        Powered by{" "}

        <a
          href="https://www.neirahtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-green-400
            font-semibold
            hover:text-green-300
            transition
            duration-300
          "
        >
          Neirahtech
        </a>

      </p>

    </div>

  </div>

</footer>

    </div>
  );
}

export default Cart;