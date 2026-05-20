import { motion } from "framer-motion";

import {
  FaLeaf,
  FaShieldAlt,
  FaTruck,
  FaUsers,
  FaCheckCircle
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
          py-24
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
            w-[500px]
            h-[500px]
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
              text-4xl
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
              md:mt-8
              text-base
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

      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
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
                  w-32
                  h-32
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
                  h-[350px]
                  sm:h-[450px]
                  md:h-[550px]
                  object-cover
                  rounded-[35px]
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
                "
              >
                Who We Are
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
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
                  text-lg
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
                  text-lg
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
                      items-center
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
                        text-lg
                        font-medium
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
          py-20
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
            w-[600px]
            h-[600px]
            bg-green-400/10
            blur-[120px]
            rounded-full
          "
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          <div className="text-center">

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
                mt-5
                text-4xl
                md:text-5xl
                font-black
                text-black
              "
            >
              Premium Halal Experience
            </h2>

          </div>


          {/* CARDS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
              mt-16
            "
          >

            {[
              {
                icon: <FaLeaf />,
                title: "Fresh Products",
                desc: "Fresh halal meats and groceries prepared daily."
              },

              {
                icon: <FaShieldAlt />,
                title: "Trusted Halal",
                desc: "100% halal-certified premium quality products."
              },

              {
                icon: <FaTruck />,
                title: "Fast Service",
                desc: "Quick customer service with premium care."
              },

              {
                icon: <FaUsers />,
                title: "Customer Care",
                desc: "Friendly service focused on customer satisfaction."
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
                  y: -10
                }}

                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  border
                  border-zinc-200
                  text-center
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    mx-auto
                    rounded-3xl
                    bg-green-500
                    flex
                    items-center
                    justify-center
                    text-white
                    text-4xl
                    shadow-2xl
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
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
                  "
                >
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA SECTION */}

      <section
        className="
          relative
          py-24
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
            px-4
            sm:px-6
            text-center
            text-white
          "
        >

          <h2
            className="
              text-4xl
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

          </h2>

          <p
            className="
              mt-8
              text-base
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
          </p>

          <button
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
              text-lg
            "
          >
            Visit Our Store
          </button>

        </div>

      </section>

    </div>
  );
}

export default About;