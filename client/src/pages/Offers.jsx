import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import API from "../services/api";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Offers() {

  const { addToCart } = useCart();

  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {

    try {

      const res = await API.get("/products/offers");

      setOffers(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div
      className="
        min-h-screen
        bg-gradient-to-b
        from-[#f8f5f0]
        via-white
        to-[#f3f4f6]
      "
    >

      {/* HERO */}

      <section
        className="
          relative
          py-20
          sm:py-24
          md:py-32
          overflow-hidden
          bg-black
        "
      >

        {/* BACKGROUND */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-red-950
            to-black
          "
        />

        {/* GLOW */}

        <motion.div

          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}

          transition={{
            duration: 4,
            repeat: Infinity
          }}

          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[280px]
            h-[280px]
            sm:w-[450px]
            sm:h-[450px]
            md:w-[700px]
            md:h-[700px]
            bg-red-500/20
            blur-[150px]
            rounded-full
          "
        />

        <div
          className="
            relative
            z-10
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            text-center
          "
        >

          <motion.h1

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}

            className="
              text-3xl
              sm:text-5xl
              md:text-7xl
              font-black
              text-white
              leading-tight
            "
          >
            🔥 Weekly

            <span className="text-yellow-400">
              {" "} Special Offers
            </span>

          </motion.h1>

          <motion.p

            initial={{
              opacity: 0,
              y: 30
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: 0.2,
              duration: 0.8
            }}

            className="
              mt-6
              text-sm
              sm:text-lg
              md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Fresh halal chicken, beef and premium
            meat offers available while stocks last.
          </motion.p>

        </div>

      </section>


      {/* OFFER GRID */}

      <section className="py-14 sm:py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {offers.length === 0 ? (

            <div className="text-center py-20">

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-gray-700
                "
              >
                No Offers Available
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-gray-500
                "
              >
                Admin has not added any offers yet.
              </p>

            </div>

          ) : (

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-6
                md:gap-10
              "
            >

              {offers.map((offer, index) => (

                <motion.div

                  key={offer.id}

                  initial={{
                    opacity: 0,
                    y: 40
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}

                  viewport={{
                    once: true
                  }}

                  whileHover={{
                    y: -12
                  }}

                  className="
                    bg-white
                    rounded-[30px]
                    overflow-hidden
                    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                    border
                    border-zinc-200
                    group
                  "
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="
                        w-full
                        h-56
                        sm:h-64
                        md:h-72
                        object-cover
                        group-hover:scale-110
                        transition
                        duration-700
                      "
                    />

                    {/* OFFER BADGE */}

                    <div
                      className="
                        absolute
                        top-4
                        right-4
                        bg-red-500
                        text-white
                        px-3
                        sm:px-5
                        py-1.5
                        sm:py-2
                        rounded-full
                        font-bold
                        text-xs
                        sm:text-sm
                        shadow-2xl
                      "
                    >
                      OFFER
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-5 md:p-8">

                    {/* TITLE */}

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        font-black
                        text-black
                        leading-tight
                      "
                    >
                      {offer.name}
                    </h3>

                    {/* CATEGORY */}

                    <p
                      className="
                        mt-3
                        text-sm
                        sm:text-lg
                        text-gray-500
                      "
                    >
                      {offer.category}
                    </p>


                    {/* PRICE + PORTION */}

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div>

                        {offer.portion && (

                          <p
                            className="
                              text-xs
                              sm:text-sm
                              font-semibold
                              text-gray-500
                            "
                          >
                            Portion: {offer.portion}
                          </p>

                        )}

                        <p
                          className="
                            mt-2
                            text-2xl
                            sm:text-3xl
                            md:text-5xl
                            font-black
                            text-red-500
                          "
                        >
                          £{offer.price}
                        </p>

                      </div>

                    </div>


                    {/* BUTTONS */}

                    <div className="mt-8 space-y-4">

                      <button

                        onClick={() => addToCart(offer)}

                        className="
                          w-full
                          bg-green-700
                          hover:bg-green-600
                          transition
                          duration-300
                          py-3
                          sm:py-4
                          rounded-2xl
                          text-white
                          font-semibold
                          tracking-wide
                          shadow-lg
                          text-sm
                          sm:text-base
                        "
                      >
                        Add To Cart
                      </button>

                      <Link to="/products">

                        <button
                          className="
                            w-full
                            bg-black
                            hover:bg-zinc-800
                            transition
                            duration-300
                            py-3
                            sm:py-4
                            rounded-2xl
                            text-white
                            font-semibold
                            tracking-wide
                            text-sm
                            sm:text-base
                          "
                        >
                          View Products
                        </button>

                      </Link>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          )}

        </div>

      </section>

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
              © 2026 Bismillah Butcher & Grocery.
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

export default Offers;