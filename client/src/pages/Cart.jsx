import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

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

    <div
      className="
        min-h-screen
        bg-zinc-100
        px-4
        sm:px-6
        md:px-10
        py-8
        md:py-10
      "
    >

      {/* TITLE */}

      <h1
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          mb-8
          md:mb-10
          text-center
          text-green-600
        "
      >
        Your Cart
      </h1>


      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <div
          className="
            text-center
            bg-white
            p-8
            sm:p-12
            md:p-16
            rounded-2xl
            shadow-lg
          "
        >

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              mb-4
            "
          >
            Cart is Empty
          </h2>

          <p
            className="
              text-sm
              sm:text-base
              text-gray-500
            "
          >
            Add fresh halal products to continue shopping.
          </p>

        </div>

      ) : (

        <div className="grid gap-5 sm:gap-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-4
                sm:p-6
                flex
                flex-col
                lg:flex-row
                justify-between
                items-center
                gap-6
              "
            >

              {/* LEFT SECTION */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  gap-5
                  w-full
                "
              >

                {/* IMAGE */}

                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/150"
                  }
                  alt={item.name}
                  className="
                    w-24
                    h-24
                    sm:w-28
                    sm:h-28
                    md:w-32
                    md:h-32
                    object-cover
                    rounded-xl
                    shrink-0
                  "
                />

                {/* INFO */}

                <div
                  className="
                    text-center
                    sm:text-left
                    flex-1
                  "
                >

                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                    "
                  >
                    {item.name}
                  </h2>

                  <p
                    className="
                      text-gray-500
                      mt-2
                      text-sm
                      sm:text-base
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


              {/* RIGHT SECTION */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-4
                  w-full
                  lg:w-auto
                "
              >

                {/* QUANTITY */}

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    sm:gap-4
                  "
                >

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
                    -
                  </button>

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
                    +
                  </button>

                </div>


                {/* REMOVE BUTTON */}

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
                    sm:px-6
                    py-2
                    rounded-xl
                    text-sm
                    sm:text-base
                    w-full
                    sm:w-auto
                  "
                >
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
              rounded-2xl
              p-5
              sm:p-8
              mt-6
              shadow-xl
            "
          >

            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                items-center
                gap-4
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


            {/* CHECKOUT BUTTON */}

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
                sm:py-4
                rounded-xl
                text-sm
                sm:text-base
                font-semibold
              "
            >
              Proceed Order
            </button>

          </div>

        </div>

      )}

      {/* =========================
         FOOTER
      ========================= */}
      
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
          "
        >
      
          {/* TOP SECTION */}
      
          <div
            className="
              flex
              flex-col
              lg:flex-row
              justify-between
              gap-10
              border-b
              border-zinc-800
              pb-10
            "
          >
      
            {/* LEFT */}
      
            <div className="max-w-xl">
      
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-black
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
                "
              >
                Premium halal meat, fresh vegetables,
                groceries and frozen foods delivered
                with quality, freshness and trust.
              </p>
      
            </div>
      
      
            {/* SOCIALS */}
      
            <div>
      
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
                  flex-wrap
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
                    rounded-2xl
                    bg-zinc-900
                    hover:bg-blue-600
                    transition
                    duration-300
                    flex
                    items-center
                    justify-center
                    text-lg
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
                    rounded-2xl
                    bg-zinc-900
                    hover:bg-pink-600
                    transition
                    duration-300
                    flex
                    items-center
                    justify-center
                    text-lg
                  "
                >
                  <FaInstagram />
                </a>
      
      
                {/* WHATSAPP */}
      
                <a
                  href="https://wa.me/447404943400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-zinc-900
                    hover:bg-green-600
                    transition
                    duration-300
                    flex
                    items-center
                    justify-center
                    text-lg
                  "
                >
                  <FaWhatsapp />
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
      
            <p>
              © 2026 Halal Butcher & Grocery.
              All Rights Reserved.
            </p>
      
      
            {/* CENTER */}
      
            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
              "
            >
      
              <button
                className="
                  hover:text-green-400
                  transition
                "
              >
                Privacy Policy
              </button>
      
              <button
                className="
                  hover:text-green-400
                  transition
                "
              >
                Cookies
              </button>
      
            </div>
      
      
            {/* RIGHT */}
      
            <p>
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