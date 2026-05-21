import { useState, useEffect } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaShoppingBasket,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Products() {

  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  /* =========================
     FETCH PRODUCTS
  ========================== */

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const res = await API.get("/products");

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  /* =========================
     CATEGORY LIST
  ========================== */

  const categories = [

    {
      name: "All",
      emoji: "🛒"
    },

    {
      name: "Premium Halal Meat",
      emoji: "🥩"
    },

    {
      name: "Fresh Vegetables",
      emoji: "🥬"
    },

    {
      name: "Fresh Fruits",
      emoji: "🍎"
    },

    {
      name: "Frozen Fish",
      emoji: "🧊"
    },

    {
      name: "Soft Drinks",
      emoji: "🥤"
    },

    {
      name: "Halal Sweets",
      emoji: "🍫"
    },

    {
      name: "Daily Groceries",
      emoji: "🛒"
    },

    {
      name: "Fresh Chicken",
      emoji: "🍗"
    },

    {
      name: "Premium Mutton",
      emoji: "🐑"
    },

    {
      name: "Frozen Vegetables",
      emoji: "❄️"
    },

    {
      name: "Premium Spices",
      emoji: "🌶️"
    },

    {
      name: "Rice & Grains",
      emoji: "🍚"
    }

  ];

  /* =========================
     FILTER PRODUCTS
  ========================== */

  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;

  });

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

      {/* HERO SECTION */}

      <section
        className="
          relative
          overflow-hidden
          bg-black
          py-20
          sm:py-24
          md:py-32
        "
      >

        {/* BACKGROUND */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-green-950
            to-black
          "
        />

        {/* GLOW EFFECT */}

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
            w-[250px]
            h-[250px]
            sm:w-[450px]
            sm:h-[450px]
            md:w-[700px]
            md:h-[700px]
            bg-green-500/20
            blur-[140px]
            rounded-full
          "
        />

        {/* CONTENT */}

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
            Premium

            <span className="text-green-400">
              {" "} Products
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
              mt-5
              sm:mt-6
              text-sm
              sm:text-lg
              md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Explore premium halal meats,
            frozen foods, groceries,
            vegetables and more.
          </motion.p>

        </div>

      </section>


      {/* SEARCH + CATEGORY */}

      <section
        className="
          py-10
          md:py-14
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

          <div
            className="
              flex
              flex-col
              lg:flex-row
              gap-4
              items-stretch
              lg:items-center
            "
          >

            {/* SEARCH */}

            <div
              className="
                relative
                flex-1
                w-full
              "
            >

              <FaSearch
                className="
                  absolute
                  top-1/2
                  left-5
                  -translate-y-1/2
                  text-gray-400
                  text-sm
                  sm:text-base
                "
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  pl-12
                  pr-4
                  py-3
                  sm:py-4
                  text-sm
                  sm:text-base
                  md:text-lg
                  rounded-2xl
                  border
                  border-zinc-300
                  outline-none
                  shadow-lg
                  focus:ring-2
                  focus:ring-green-500
                "
              />

            </div>


            {/* CATEGORY */}

            <select

              value={selectedCategory}

              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }

              className="
                w-full
                lg:w-[300px]
                px-5
                py-3
                sm:py-4
                rounded-2xl
                border
                border-zinc-300
                shadow-lg
                text-sm
                sm:text-base
                md:text-lg
                font-medium
                outline-none
                bg-white
              "
            >

              {categories.map((category, index) => (

                <option
                  key={index}
                  value={category.name}
                >
                  {category.emoji} {category.name}
                </option>

              ))}

            </select>

          </div>

        </div>

      </section>


      {/* PRODUCTS SECTION */}

      <section className="pb-20 sm:pb-24 md:pb-28">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
          "
        >

          {filteredProducts.length === 0 ? (

            <div className="text-center py-20">

              <FaShoppingBasket
                className="
                  mx-auto
                  text-5xl
                  text-gray-400
                "
              />

              <h2
                className="
                  mt-6
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-gray-700
                "
              >
                No Products Found
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-gray-500
                "
              >
                Try searching with another category.
              </p>

            </div>

          ) : (

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
                md:gap-8
                lg:gap-10
              "
            >

              {filteredProducts.map((product, index) => (

                <motion.div

                  key={product.id}

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
                    delay: index * 0.05
                  }}

                  viewport={{
                    once: true
                  }}

                  whileHover={{
                    y: -10
                  }}

                  className="
                    relative
                    bg-white
                    rounded-[28px]
                    sm:rounded-[32px]
                    overflow-hidden
                    border
                    border-zinc-200
                    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                    group
                  "
                >

                  {/* OFFER BADGE */}

                  {product.isOffer && (

                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        z-20
                        bg-red-500
                        text-white
                        px-3
                        sm:px-4
                        py-1.5
                        sm:py-2
                        rounded-full
                        font-bold
                        text-xs
                        sm:text-sm
                        shadow-lg
                      "
                    >
                      OFFER
                    </div>

                  )}


                  {/* IMAGE */}

                  <div className="overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
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

                  </div>


                  {/* CONTENT */}

                  <div
                    className="
                      p-5
                      sm:p-6
                      md:p-7
                    "
                  >

                    {/* CATEGORY */}

                    <p
                      className="
                        text-green-600
                        font-semibold
                        uppercase
                        tracking-[2px]
                        text-xs
                        sm:text-sm
                      "
                    >
                      {product.category}
                    </p>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-3
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        font-black
                        text-black
                        leading-tight
                      "
                    >
                      {product.name}
                    </h3>

                    {/* PORTION */}

                    {product.portion && (

                      <p
                        className="
                          mt-3
                          text-xs
                          sm:text-sm
                          font-semibold
                          text-gray-500
                        "
                      >
                        Portion: {product.portion}
                      </p>

                    )}

                    {/* PRICE */}

                    <p
                      className="
                        mt-5
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        font-black
                        text-green-500
                      "
                    >
                      £{product.price}
                    </p>


                    {/* BUTTONS */}

                    <div className="mt-8 space-y-4">

                      <button

                        onClick={() =>
                          addToCart(product)
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
                          font-semibold
                          tracking-wide
                          text-sm
                          sm:text-base
                        "
                      >
                        Add To Cart
                      </button>

                      <Link to="/offers">

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
                          View Offers
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

export default Products;