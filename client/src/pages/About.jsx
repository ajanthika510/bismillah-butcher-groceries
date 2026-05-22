import { motion } from "framer-motion";

import {
  FaLeaf,
  FaShieldAlt,
  FaTruck,
  FaUsers,
  FaCheckCircle,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import aboutImage from "../assets/meat.png";

function About() {

  return (

    <div
      className="
        min-h-screen
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
            via-green-950
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
            w-[300px]
            h-[300px]
            sm:w-[500px]
            sm:h-[500px]
            md:w-[700px]
            md:h-[700px]
            bg-green-500/20
            blur-[120px]
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
            About
            <span className="text-green-400">
              {" "} Us
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
            Trusted halal butcher and grocery store
            delivering fresh quality meat, vegetables,
            frozen foods and daily essentials with care.
          </motion.p>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="py-16 sm:py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              lg:gap-16
              items-center
            "
          >

            {/* IMAGE */}

            <motion.div

              initial={{
                opacity: 0,
                x: -40
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.7
              }}

              viewport={{
                once: true
              }}

              className="relative"
            >

              <div
                className="
                  absolute
                  -top-6
                  -left-6
                  w-24
                  h-24
                  sm:w-32
                  sm:h-32
                  bg-green-500/20
                  blur-3xl
                  rounded-full
                "
              />

              <img
                src={aboutImage}
                alt="About Bismillah Butcher"
                className="
                  relative
                  z-10
                  w-full
                  h-[300px]
                  sm:h-[450px]
                  md:h-[550px]
                  object-cover
                  rounded-[30px]
                  shadow-[0_15px_50px_rgba(0,0,0,0.15)]
                "
              />

            </motion.div>


            {/* CONTENT */}

            <motion.div

              initial={{
                opacity: 0,
                x: 40
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.7
              }}

              viewport={{
                once: true
              }}
            >

              <p
                className="
                  text-green-600
                  uppercase
                  tracking-[4px]
                  font-semibold
                  text-sm
                "
              >
                Who We Are
              </p>

              <h2
                className="
                  mt-5
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-black
                  text-black
                  leading-tight
                "
              >
                Fresh Halal
                <br />

                Quality Everyday
              </h2>

              <p
                className="
                  mt-6
                  text-gray-600
                  text-base
                  sm:text-lg
                  leading-relaxed
                "
              >
                Bismillah Butcher & Grocery is committed
                to providing premium halal meat, fresh
                vegetables, frozen foods, groceries and
                daily essentials with trusted quality and
                hygienic preparation.
              </p>

              <p
                className="
                  mt-5
                  text-gray-600
                  text-base
                  sm:text-lg
                  leading-relaxed
                "
              >
                We focus on freshness, customer
                satisfaction and premium service to
                deliver the best halal shopping
                experience for every family.
              </p>


              {/* FEATURES */}

              <div className="mt-10 space-y-5">

                {[
                  "100% Halal Certified Products",
                  "Fresh Daily Meat Preparation",
                  "Premium Grocery Collections",
                  "Trusted Quality & Hygiene"
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      sm:items-center
                      gap-4
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-green-500
                        flex
                        items-center
                        justify-center
                        text-white
                        shrink-0
                      "
                    >
                      <FaCheckCircle />
                    </div>

                    <p
                      className="
                        text-gray-700
                        text-base
                        sm:text-lg
                        font-medium
                        leading-relaxed
                      "
                    >
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

            {/* WHY CHOOSE US */}

      <section
        className="
          py-16
          sm:py-20
          md:py-28
          bg-[#f8f5f0]
          relative
          overflow-hidden
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[350px]
            h-[350px]
            sm:w-[500px]
            sm:h-[500px]
            md:w-[600px]
            md:h-[600px]
            bg-green-400/10
            blur-[120px]
            rounded-full
          "
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* TITLE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.7
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
                text-sm
              "
            >
              Why Choose Us
            </p>

            <h2
              className="
                mt-5
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                text-black
              "
            >
              Premium Halal Experience
            </h2>

          </motion.div>


          {/* CARDS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
              md:gap-8
              mt-14
              md:mt-16
            "
          >

            {[
              {
                icon: <FaLeaf />,
                title: "Fresh Products",
                desc: "Fresh halal meats and groceries prepared daily.",
                color: "from-green-400 to-emerald-600"
              },

              {
                icon: <FaShieldAlt />,
                title: "Trusted Halal",
                desc: "100% halal-certified premium quality products.",
                color: "from-lime-400 to-green-700"
              },

              {
                icon: <FaTruck />,
                title: "Fast Service",
                desc: "Quick customer service with premium care.",
                color: "from-emerald-400 to-cyan-600"
              },

              {
                icon: <FaUsers />,
                title: "Customer Care",
                desc: "Friendly service focused on customer satisfaction.",
                color: "from-green-500 to-teal-600"
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
                  y: -10,
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
                  p-6
                  md:p-8
                  text-center
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
                    w-16
                    h-16
                    sm:w-20
                    sm:h-20
                    mx-auto
                    rounded-3xl
                    bg-gradient-to-br
                    ${item.color}
                    flex
                    items-center
                    justify-center
                    text-white
                    text-3xl
                    sm:text-4xl
                    shadow-2xl
                  `}
                >
                  {item.icon}
                </div>

                {/* CONTENT */}

                <div className="relative z-10">

                  <h3
                    className="
                      mt-6
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-black
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-gray-600
                      leading-relaxed
                      text-sm
                      sm:text-base
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


      {/* CTA SECTION */}

      <section
        className="
          relative
          py-20
          sm:py-24
          md:py-32
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

        {/* GLOW */}

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
            w-[350px]
            h-[350px]
            sm:w-[500px]
            sm:h-[500px]
            md:w-[700px]
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
            px-4
            sm:px-6
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
              sm:text-5xl
              md:text-6xl
              font-black
              leading-tight
            "
          >
            Trusted Freshness
            <br />

            <span className="text-green-400">
              Everyday For Your Family
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
              text-sm
              sm:text-lg
              md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Premium halal meat, frozen foods,
            grocery essentials and fresh products
            delivered with trust and quality.
          </motion.p>

          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            className="
              mt-10
              bg-green-500
              hover:bg-green-400
              transition
              duration-300
              px-8
              sm:px-12
              py-4
              sm:py-5
              rounded-2xl
              text-white
              font-semibold
              tracking-wide
              shadow-[0_0_40px_rgba(34,197,94,0.5)]
              text-base
              sm:text-lg
            "
          >
            Visit Our Store
          </motion.button>

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

export default About;