import { useState, useEffect } from "react";

import API from "../services/api";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  FaSearch,
  FaShoppingBasket
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Products() {

  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
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

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

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
     FILTER
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

      {/* HERO */}

      <section
        className="
          relative
          py-20 md:py-28
          overflow-hidden
          bg-black
        "
      >

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

        <div
          className="
            relative
            z-10
            max-w-6xl
            mx-auto
            px-6
            text-center
          "
        >

          <h1
            className="
              text-4xl sm:text-5xl md:text-7xl
              font-black
              text-white
            "
          >
            Premium
            <span className="text-green-400">
              {" "} Products
            </span>
          </h1>

          <p
            className="
              mt-8
              text-base sm:text-lg md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
            "
          >
            Explore premium halal meats,
            frozen foods, groceries,
            vegetables and more.
          </p>

        </div>

      </section>


      {/* SEARCH */}

      <section className="py-10 md:py-14">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              relative
              max-w-2xl
              mx-auto
            "
          >

            <FaSearch
              className="
                absolute
                top-1/2
                left-5
                -translate-y-1/2
                text-gray-400
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
                py-4
                text-base md:text-lg
                rounded-2xl
                border
                border-zinc-300
                outline-none
                shadow-lg
              "
            />

          </div>

        </div>

      </section>


      {/* CATEGORY FILTER */}

      <section className="pb-10">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >

            {categories.map((category, index) => (

              <button

                key={index}

                onClick={() =>
                  setSelectedCategory(category.name)
                }

                className={`
                  px-4 sm:px-6
                  py-3 sm:py-4
                  gap-2
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  transition
                  duration-300
                  shadow-lg

                  ${
                    selectedCategory === category.name

                      ? `
                        bg-green-500
                        text-white
                      `

                      : `
                        bg-white
                        text-black
                        hover:bg-green-100
                      `
                  }
                `}
              >

                <span className="text-xl">
                  {category.emoji}
                </span>

                {category.name}

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-10
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

                whileHover={{
                  y: -10
                }}

                className="
                  bg-white
                  rounded-[30px]
                  overflow-hidden
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  border
                  border-zinc-200
                "
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-56 sm:h-64 md:h-72
                      object-cover
                      hover:scale-110
                      transition
                      duration-700
                    "
                  />

                </div>


                {/* CONTENT */}

                <div className="p-5 sm:p-7">

                  <p
                    className="
                      text-green-600
                      font-semibold
                      uppercase
                      tracking-[2px]
                    "
                  >
                    {product.category}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl md:text-3xl
                      font-black
                      text-black
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-3xl md:text-4xl
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
                       text-sm sm:text-base
                        w-full
                        bg-green-500
                        hover:bg-green-600
                        transition
                        duration-300
                        py-3 md:py-4
                        rounded-2xl
                        text-white
                        font-semibold
                        tracking-wide
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
                          py-4
                          rounded-2xl
                          text-white
                          font-semibold
                          tracking-wide
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

        </div>

      </section>

    </div>

  );
}

export default Products;