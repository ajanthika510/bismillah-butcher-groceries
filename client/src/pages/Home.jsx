import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useSearchParams } from "react-router-dom";

import {
  FaTruck,
  FaLeaf,
  FaShieldAlt,
  FaArrowRight,
  FaSnowflake,
  FaAppleAlt,
  FaGlassCheers,
  FaCandyCane,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import heroMeat from "../assets/meat.png";


function Home() {

  return (

    <div
      className="
        bg-gradient-to-b
        from-[#f8f5f0]
        via-white
        to-[#f3f4f6]
        overflow-hidden
      "
    >

      {/* HERO SECTION */}

      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          overflow-hidden
          pt-24 md:pt-28
        "
      >

        {/* BACKGROUND IMAGE */}

        <motion.img
          src={heroMeat}
          alt="Premium Halal Meat"

          initial={{
            scale: 1
          }}

          animate={{
            scale: 1.08
          }}

          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}

          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* HEADER GLOW */}

        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-32
            bg-gradient-to-b
            from-white/20
            via-green-400/10
            to-transparent
            backdrop-blur-sm
            z-10
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/60
            to-green-950/50
          "
        />

        {/* GREEN GLOW */}

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
            top-0
            right-0
            w-[400px]
            md:w-[600px]
            h-[400px]
            md:h-[600px]
            bg-green-500/20
            blur-[140px]
            rounded-full
            z-10
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-16
            sm:py-24
            md:py-32
            w-full
          "
        >

          <motion.div

            initial={{
              opacity: 0,
              y: 50
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 1
            }}

            className="
              max-w-3xl
              text-center
              md:text-left
            "
          >

            {/* PREMIUM BADGE */}

            <motion.div

              initial={{
                opacity: 0,
                x: -40
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              transition={{
                delay: 0.3
              }}

              className="
                inline-flex
                items-center
                gap-4
                px-5
                py-3
                rounded-full
                border
                border-green-400/30
                bg-white/5
                backdrop-blur-md
                mb-8
              "
            >

              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-400
                "
              />

              <p
                className="
                  text-green-300
                  uppercase
                  tracking-[2px]
                  sm:tracking-[4px]
                  text-xs
                  sm:text-sm
                  font-semibold
                "
              >
                Premium Halal Store
              </p>

            </motion.div>

            {/* TITLE */}

            <h1
              className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-tight
                text-white
              "
            >
              Bismillah Butcher

              <span className="text-green-400">
                {" "} & Groceries
              </span>

            </h1>

            {/* DESCRIPTION */}

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
                delay: 0.7
              }}

              className="
                mt-6
                md:mt-8
                text-base
                sm:text-lg
                md:text-xl
                text-gray-200
                leading-relaxed
                max-w-2xl
              "
            >
              Premium halal meat, groceries,
              fresh vegetables, frozen foods
              and daily essentials with trusted
              quality and freshness.
            </motion.p>

            {/* BUTTON */}

            <motion.div

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: 0.9
              }}

              className="
                flex
                flex-wrap
                justify-center
                md:justify-start
                gap-5
                mt-10
                md:mt-12
              "
            >

              <Link to="/products">

                <motion.button

                  whileHover={{
                    scale: 1.05
                  }}

                  whileTap={{
                    scale: 0.95
                  }}

                  className="
                    bg-green-500
                    hover:bg-green-400
                    transition
                    duration-300
                    px-6
                    py-4
                    sm:px-8
                    md:px-10
                    rounded-2xl
                    text-white
                    font-semibold
                    tracking-wide
                    flex
                    items-center
                    gap-3
                    text-base
                    sm:text-lg
                  "
                >
                  Shop Now
                  <FaArrowRight />
                </motion.button>

              </Link>

            </motion.div>

          </motion.div>

        </div>

      </section>

            {/* MOVING PREMIUM BAR */}

      <section
        className="
          relative
          py-8 md:py-10
          overflow-hidden
          bg-black
          border-y
          border-green-500/20
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-green-500/10
            via-transparent
            to-green-500/10
          "
        />

        <motion.div

          animate={{
            x: ["0%", "-50%"]
          }}

          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}

          className="
            flex
            gap-6
            sm:gap-10
            whitespace-nowrap
            relative
            z-10
            px-4
          "
        >

          {[
            "🥩 Premium Halal Meat",
            "🥬 Fresh Vegetables",
            "🍎 Fresh Fruits",
            "🧊 Frozen Fish",
            "🥤 Soft Drinks",
            "🍫 Halal Sweets",
            "🛒 Daily Groceries",
            "🍗 Fresh Chicken",
            "🐑 Premium Mutton",
            "❄️ Frozen Vegetables",
            "🌶️ Premium Spices",
            "🍚 Rice & Grains",

            "🥩 Premium Halal Meat",
            "🥬 Fresh Vegetables",
            "🍎 Fresh Fruits",
            "🧊 Frozen Fish",
            "🥤 Soft Drinks",
            "🍫 Halal Sweets",
            "🛒 Daily Groceries",
            "🍗 Fresh Chicken",
            "🐑 Premium Mutton",
            "❄️ Frozen Vegetables",
            "🌶️ Premium Spices",
            "🍚 Rice & Grains"
          ].map((item, index) => (

            <div

              key={index}

              className="
                px-4
                py-3
                sm:px-6
                sm:py-4
                md:px-8
                text-xs
                sm:text-sm
                md:text-lg
                rounded-full
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                text-white
                font-semibold
                tracking-wide
              "
            >
              {item}
            </div>

          ))}

        </motion.div>

      </section>


      {/* WHY CHOOSE US */}

      <section
        className="
          py-16 md:py-24
          bg-[#f8f5f0]
          relative
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[500px]
            bg-green-400/10
            blur-[120px]
            rounded-full
          "
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* TITLE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}

            viewport={{
              once: true
            }}

            className="text-center"
          >

            <p
              className="
                text-green-600
                uppercase
                tracking-[4px]
                font-semibold
              "
            >
              Why Choose Us
            </p>

            <h2
              className="
                text-2xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                mt-5
                text-black
              "
            >
              Premium Experience
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                text-base
                md:text-lg
                max-w-2xl
                mx-auto
              "
            >
              Trusted halal quality with fresh products,
              premium standards and hygienic preparation.
            </p>

          </motion.div>


          {/* CARDS */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
              mt-20
            "
          >

            {[
              {
                icon: <FaLeaf />,
                title: "Fresh Daily",
                desc: "Prepared fresh every day with premium hygiene standards.",
                color: "from-green-400 to-emerald-600"
              },

              {
                icon: <FaShieldAlt />,
                title: "100% Halal",
                desc: "Trusted halal-certified meats and grocery essentials.",
                color: "from-lime-400 to-green-700"
              },

              {
                icon: <FaTruck />,
                title: "Premium Quality",
                desc: "Carefully selected products with freshness and hygiene.",
                color: "from-emerald-400 to-cyan-600"
              }

            ].map((item, index) => (

              <motion.div

  key={index}

  initial={{
    opacity: 0,
    y: 30
  }}

  whileInView={{
    opacity: 1,
    y: 0
  }}

  transition={{
    duration: 0.5,
    delay: index * 0.2
  }}

  viewport={{
    once: true
  }}

  whileHover={{
    y: -12,
    scale: 1.02
  }}

  className="
    relative
    overflow-hidden
    rounded-[30px]
    bg-white/90
    backdrop-blur-xl
    border
    border-white/40
    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
    p-7 md:p-10
    group
  "
>

  {/* HOVER GLOW */}

  <div
    className={`
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition
      duration-500
      bg-gradient-to-br
      ${item.color}
      blur-3xl
    `}
  />

  {/* ICON */}

  <div
    className={`
      relative
      z-10
      w-20
      h-20
      rounded-3xl
      bg-gradient-to-br
      ${item.color}
      flex
      items-center
      justify-center
      text-white
      text-4xl
      shadow-2xl
    `}
  >
    {item.icon}
  </div>

  {/* CONTENT */}

  <div className="relative z-10">

    <h3
      className="
        text-2xl
        md:text-3xl
        font-bold
        text-black
        mt-8
      "
    >
      {item.title}
    </h3>

    <p
      className="
        mt-5
        text-gray-600
        leading-relaxed
        text-base
        md:text-lg
      "
    >
      {item.desc}
    </p>

  </div>

</motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* TRUST SECTION */}

      <section
        className="
          relative
          py-20 md:py-32
          overflow-hidden
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

        <motion.div

          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}

          transition={{
            duration: 5,
            repeat: Infinity
          }}

          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            md:w-[700px]
            h-[500px]
            md:h-[700px]
            bg-green-500/20
            blur-[150px]
            rounded-full
          "
        />

        <div
          className="
            relative
            z-10
            max-w-5xl
            mx-auto
            px-6
            text-center
            text-white
          "
        >

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-tight
            "
          >
            Fresh Halal Meat

            <br />

            <span className="text-green-400">
              Delivered With Trust
            </span>

          </h2>

          <p
            className="
              mt-8
              text-base
              md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Premium halal meat, frozen foods,
            vegetables, grocery essentials,
            sweets and beverages available
            fresh daily with trusted quality.
          </p>

          <Link to="/products">

            <button
              className="
                mt-12
                bg-green-500
                hover:bg-green-400
                transition
                duration-300
                px-8
                md:px-12
                py-4
                md:py-5
                rounded-2xl
                text-white
                font-semibold
                tracking-wide
                text-base
                md:text-lg
              "
            >
              Explore Products
            </button>

          </Link>

        </div>

      </section>

            {/* PREMIUM CATEGORY SHOWCASE */}

      <section
        className="
          py-20 md:py-28
          bg-gradient-to-b
          from-[#f8f5f0]
          to-white
          relative
          overflow-hidden
        "
      >

        {/* BACKGROUND GLOW */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[500px]
            md:w-[700px]
            h-[500px]
            md:h-[700px]
            bg-green-400/10
            blur-[140px]
            rounded-full
          "
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* TITLE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <p
              className="
                text-green-600
                uppercase
                tracking-[4px]
                md:tracking-[5px]
                font-semibold
              "
            >
              What We Offer
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                text-black
                mt-5
              "
            >
              Fresh • Premium • Halal
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                text-base
                md:text-lg
                max-w-3xl
                mx-auto
                leading-relaxed
              "
            >
              Premium halal meats, fresh vegetables,
              frozen foods, grocery essentials,
              sweets, snacks and beverages —
              all in one trusted halal marketplace.
            </p>

          </motion.div>


          {/* CATEGORY GRID */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              gap-8
              mt-20
            "
          >

            {[
              {
                icon: <FaShieldAlt />,
                title: "Premium Halal Meats",
                desc: "Fresh chicken, beef, mutton and premium halal cuts daily.",
                image:
                  "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop"
              },

              {
                icon: <FaAppleAlt />,
                title: "Fresh Fruits & Vegetables",
                desc: "Farm fresh vegetables and seasonal fruits every day.",
                image:
                  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
              },

              {
                icon: <FaLeaf />,
                title: "All Grocery Essentials",
                desc: "Rice, spices, grains and complete grocery collections.",
                image:
                  "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop"
              },

              {
                icon: <FaGlassCheers />,
                title: "Soft Drinks",
                desc: "All types of refreshing beverages and soft drinks available.",
                image:
                  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop"
              },

              {
                icon: <FaCandyCane />,
                title: "Halal Sweets & Snacks",
                desc: "Premium halal chocolates, sweets and snack collections.",
                image:
                  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop"
              },

              {
                icon: <FaSnowflake />,
                title: "Frozen Foods & Fish",
                desc: "Frozen vegetables, seafood and ready-to-cook essentials.",
                image:
                  "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1200&auto=format&fit=crop"
              }

            ].map((item, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: 0.6,
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
                  rounded-[32px]
                  overflow-hidden
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  border
                  border-zinc-200
                  group
                "
              >

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-52
                    sm:h-60
                    md:h-64
                    overflow-hidden
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* ICON */}

                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      w-14
                      h-14
                      rounded-2xl
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      text-white
                      text-2xl
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      absolute
                      bottom-6
                      left-6
                      right-6
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-white
                      leading-tight
                    "
                  >
                    {item.title}
                  </h3>

                </div>


                {/* CONTENT */}

                <div className="p-6 md:p-8">

                  <p
                    className="
                      text-gray-600
                      text-base
                      md:text-lg
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>

                 <Link to={`/products?category=${encodeURIComponent("Fresh Vegetables")}`}>

                  <button
                    className="
                      mt-8
                      w-full
                      bg-black
                      hover:bg-green-600
                      transition
                      duration-300
                      py-4
                      rounded-2xl
                      text-white
                      font-semibold
                      tracking-wide
                    "
                  >
                    Explore Category
                  </button>

                 </Link> 

                </div>

              </motion.div>

            ))}

          </div>

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

export default Home;