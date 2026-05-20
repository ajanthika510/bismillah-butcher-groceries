import { Link } from "react-router-dom";

import { motion } from "framer-motion";

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

  const featuredProducts = [

    {
      name: "Premium Beef",
      category: "Beef",
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Fresh Chicken",
      category: "Chicken",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1200&auto=format&fit=crop"
    },

    {
      name: "Mutton Chops",
      category: "Mutton",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    }
  ];


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
          pt-28
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

        {/* LIGHT HEADER EFFECT */}

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
            border-b
            border-white/20
            shadow-[0_8px_40px_rgba(255,255,255,0.15)]
          "
        />

        {/* OVERLAY */}

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
            w-[600px]
            h-[600px]
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
          py-20
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
                px-6
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
                  shadow-[0_0_20px_rgba(34,197,94,1)]
                "
              />

              <p
                className="
                  text-green-300
                  uppercase
                  tracking-[4px]
                  text-sm
                  font-semibold
                "
              >
                Premium Halal Store
              </p>

            </motion.div>

            {/* TITLE */}

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-tight
                text-white
                drop-shadow-[0_5px_25px_rgba(0,0,0,0.8)]
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
                    sm:py-4
                    md:px-10
                    md:py-5
                    rounded-2xl
                    text-white
                    font-semibold
                    tracking-wide
                    shadow-[0_0_40px_rgba(34,197,94,0.5)]
                    flex
                    items-center
                    gap-3
                    text-lg
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
          py-10
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
            gap-10
            whitespace-nowrap
            relative
            z-10
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
                md:py-4
                text-sm
                sm:text-base
                md:text-lg
                rounded-full
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                text-white
                font-semibold
                tracking-wide
                shadow-[0_0_20px_rgba(34,197,94,0.15)]
                hover:bg-green-500/20
                transition
                duration-300
              "
            >
              {item}
            </div>

          ))}

        </motion.div>

      </section>

      {/* WHY CHOOSE US SECTION */}

<section className="py-24 bg-[#f8f5f0] relative overflow-hidden">

  {/* BACKGROUND GLOW */}

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
          font-semibold
        "
      >
        Why Choose Us
      </p>

      <h2
        className="
          text-3xl
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
          text-lg
          max-w-2xl
          mx-auto
        "
      >
        Trusted halal quality with fresh products,
        premium standards and hygienic preparation.
      </p>

    </motion.div>


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
            p-10
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
                text-3xl
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
                text-lg
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

<section className="relative py-32 overflow-hidden">

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
      duration: 5,
      repeat: Infinity
    }}

    className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[700px]
      h-[700px]
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

    <motion.h2

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

    </motion.h2>

    <motion.p

      initial={{
        opacity: 0,
        y: 30
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.8,
        delay: 0.2
      }}

      viewport={{
        once: true
      }}

      className="
        mt-8
        text-xl
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
    </motion.p>

    <Link to="/products">

      <motion.button

        whileHover={{
          scale: 1.05
        }}

        whileTap={{
          scale: 0.95
        }}

        className="
          mt-12
          bg-green-500
          hover:bg-green-400
          transition
          duration-300
          px-12
          py-5
          rounded-2xl
          text-white
          font-semibold
          tracking-wide
          shadow-[0_0_40px_rgba(34,197,94,0.5)]
          text-lg
        "
      >
        Explore Products
      </motion.button>

    </Link>

  </div>

</section>




      {/* PREMIUM CATEGORY SHOWCASE */}

<section
  className="
    py-28
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
      w-[700px]
      h-[700px]
      bg-green-400/10
      blur-[140px]
      rounded-full
    "
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

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
          tracking-[5px]
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
          text-lg
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

            {/* DARK OVERLAY */}

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
                shadow-2xl
                backdrop-blur-xl
              "
            >
              {item.icon}
            </div>

            {/* TITLE OVER IMAGE */}

            <h3
              className="
                absolute
                bottom-6
                left-6
                right-6
                text-3xl
                font-bold
                text-white
                leading-tight
              "
            >
              {item.title}
            </h3>

          </div>


          {/* CONTENT */}

          <div className="p-8">

            <p
              className="
                text-gray-600
                text-lg
                leading-relaxed
              "
            >
              {item.desc}
            </p>

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

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

    {/* FOOTER */}

      <footer
        className="
          relative
          overflow-hidden
          bg-[#0b0b0b]
          text-white
          pt-24
          pb-12
        "
      >

        {/* TOP GLOW */}

        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-green-400
            to-transparent
          "
        />

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-12
              pb-16
              border-b
              border-white/10
            "
          >

            {/* BRAND */}

            <div className="md:col-span-2">

              <h2
                className="
                  text-4xl
                  font-black
                  leading-tight
                "
              >
                Bismillah Butcher

                <span className="text-green-400">
                  {" "} & Grocery
                </span>

              </h2>

              <p
                className="
                  mt-6
                  text-gray-400
                  text-lg
                  leading-relaxed
                  max-w-xl
                "
              >
                Premium halal meat, frozen foods,
                vegetables, sweets, snacks and
                grocery essentials with trusted
                quality and fresh daily preparation.
              </p>

            </div>


            {/* CONTACT */}

            <div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Contact
              </h3>

              <div className="mt-6 space-y-3 text-gray-400">

                <p>
                  31 Diamond Road,
                  Slough SL1 1RT
                </p>

                <p>
                  +44 7404 943400
                </p>

                <p>
                  butcherhalal4@gmail.com
                </p>

              </div>

            </div>
             {/* SOCIALS */}

<div className="mt-10">

  <p
    className="
      text-gray-500
      font-medium
    "
  >
    Follow Us
  </p>

  <div
  className="
    flex
    flex-row
    flex-wrap
    gap-4
    mt-5
  "
>
    {/* FACEBOOK */}

    <a
      href="https://facebook.com/bismillahbutchers"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-3
        bg-[#1877F2]
        hover:scale-105
        transition
        duration-300
        px-5
        py-4
        rounded-2xl
        text-white
        shadow-lg
      "
    >

      <FaFacebookF className="text-xl" />

      <div>

        <p className="font-semibold">
        </p>

        <p className="text-sm opacity-80">
        </p>

      </div>

    </a>


    {/* INSTAGRAM */}

    <a
      href="https://instagram.com/bismillahbutchers"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-3
        bg-gradient-to-r
        from-pink-500
        via-red-500
        to-yellow-500
        hover:scale-105
        transition
        duration-300
        px-5
        py-4
        rounded-2xl
        text-white
        shadow-lg
      "
    >

      <FaInstagram className="text-xl" />

      <div>

        <p className="font-semibold">
        </p>

        <p className="text-sm opacity-80">
        </p>

      </div>

    </a>


    {/* WHATSAPP */}

    <a
      href="https://wa.me/447404943400"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-3
        bg-[#25D366]
        hover:scale-105
        transition
        duration-300
        px-5
        py-4
        rounded-2xl
        text-white
        shadow-lg
      "
    >

      <FaWhatsapp className="text-xl" />

      <div>

        <p className="font-semibold">
        </p>

        <p className="text-sm opacity-90">
        </p>

      </div>

    </a>

  </div>

</div>

            {/* HOURS */}

            <div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Opening Hours
              </h3>

              <div className="mt-6 space-y-3 text-gray-400">

                <p>
                  Monday - Sunday
                </p>

                <p>
                  8.00 AM - 10.00 PM
                </p>

                <p className="text-green-400">
                  Open Daily
                </p>

              </div>

            </div>

          </div>


          {/* BOTTOM */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-6
              pt-10
            "
          >

            <p className="text-gray-500 text-sm">
              © 2026 Halal Butcher & Grocery.
              All Rights Reserved.
            </p>

            <div
              className="
                flex
                items-center
                gap-6
                text-sm
                text-gray-400
              "
            >

              <p className="hover:text-green-400 transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="hover:text-green-400 transition cursor-pointer">
                Terms & Conditions
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;