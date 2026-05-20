import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

function Offers() {

  const { addToCart } = useCart();

  const offers = [

    {
      id: 1,
      name: "Chicken Niblets",
      weight: "3KG",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id: 2,
      name: "Chicken Thigh",
      weight: "3KG",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id: 3,
      name: "Chicken Boneless",
      weight: "5KG",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id: 4,
      name: "Chicken Leg",
      weight: "1 BOX",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1529692236671-f1de50a1c95d?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id: 5,
      name: "Beef With Bone",
      weight: "5KG",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1200&auto=format&fit=crop"
    },

    {
      id: 6,
      name: "Beef Boneless",
      weight: "5KG",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
    }

  ];

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
          py-24 md:py-32
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
            via-red-950
            to-black
          "
        />

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
            px-6
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
              text-4xl sm:text-5xl md:text-7xl
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
              mt-6 text-base sm:text-lg md:text-xl
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

      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6 md:gap-10
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
                  rounded-[32px]
                  overflow-hidden
                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                  border
                  border-zinc-200
                "
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="
                      w-full
                      h-56 sm:h-64 md:h-72
                      object-cover
                      hover:scale-110
                      transition
                      duration-700
                    "
                  />

                  {/* OFFER BADGE */}

                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      bg-red-500
                      text-white
                      px-5
                      py-2
                      rounded-full
                      font-bold
                      shadow-2xl
                    "
                  >
                    OFFER
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-5 md:p-8">

                  <h3
                    className="
                      text-2xl md:text-3xl
                      font-black
                      text-black
                    "
                  >
                    {offer.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-lg
                      text-gray-500
                    "
                  >
                    {offer.weight}
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <p
                      className="
                        text-3xl md:text-5xl
                        font-black
                        text-red-500
                      "
                    >
                      £{offer.price}
                    </p>

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
                        py-3 md:py-4
                        rounded-2xl
                        text-white
                        font-semibold
                        tracking-wide
                        shadow-lg
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
                          py-4
                          rounded-2xl
                          text-white
                          font-semibold
                          tracking-wide
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

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section
        className="
          relative
          py-20 md:py-28
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
              text-3xl sm:text-4xl md:text-6xl
              font-black
              leading-tight
            "
          >
            Visit Our Store
            <br />

            <span className="text-green-400">
              Fresh Halal Quality
            </span>

          </h2>

          <p
            className="
              mt-6 text-base sm:text-lg md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
            "
          >
            Premium halal meat and grocery
            selections available every day.
          </p>

          <Link to="/products">

            <button
              className="
                mt-10
                bg-green-500
                hover:bg-green-400
                transition
                duration-300
                px-8 md:px-12 py-4 md:py-5
                rounded-2xl
                text-white
                font-semibold
                tracking-wide
                shadow-[0_0_40px_rgba(34,197,94,0.5)]
                text-lg
              "
            >
              Explore Products
            </button>

          </Link>

        </div>

      </section>

    </div>

  );
}

export default Offers;