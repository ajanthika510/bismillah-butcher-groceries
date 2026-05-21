import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {

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
            w-[260px]
            h-[260px]
            sm:w-[450px]
            sm:h-[450px]
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
            Contact

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
              text-sm
              sm:text-lg
              md:text-xl
              text-gray-300
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Contact Bismillah Butcher & Grocery
            for fresh halal meats, groceries,
            frozen foods and premium daily essentials.
          </motion.p>

        </div>

      </section>


      {/* CONTACT SECTION */}

      <section className="py-14 sm:py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              lg:gap-16
            "
          >

            {/* LEFT SIDE */}

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
                Get In Touch
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
                We’re Here
                <br />

                For You
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
                Reach out to us for product inquiries,
                orders, grocery availability and fresh
                halal meat collections.
              </p>


              {/* CONTACT CARDS */}

              <div className="mt-10 space-y-6">

                {/* PHONE */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    gap-5
                    bg-white
                    p-5
                    sm:p-6
                    rounded-3xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    border
                    border-zinc-200
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xl
                      shrink-0
                    "
                  >
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-black
                      "
                    >
                      Phone
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      +44 7404 943400
                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    gap-5
                    bg-white
                    p-5
                    sm:p-6
                    rounded-3xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    border
                    border-zinc-200
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xl
                      shrink-0
                    "
                  >
                    <FaEnvelope />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-black
                      "
                    >
                      Email
                    </h3>

                    <p
                      className="
                        mt-2
                        text-gray-600
                        break-all
                        text-sm
                        sm:text-base
                      "
                    >
                      butcherhalal4@gmail.com
                    </p>

                  </div>

                </div>


                {/* LOCATION */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    gap-5
                    bg-white
                    p-5
                    sm:p-6
                    rounded-3xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    border
                    border-zinc-200
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xl
                      shrink-0
                    "
                  >
                    <FaMapMarkerAlt />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-black
                      "
                    >
                      Location
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      31 Diamond Road,
                      Slough SL1 1RT
                    </p>

                  </div>

                </div>


                {/* HOURS */}

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    items-start
                    sm:items-center
                    gap-5
                    bg-white
                    p-5
                    sm:p-6
                    rounded-3xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    border
                    border-zinc-200
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xl
                      shrink-0
                    "
                  >
                    <FaClock />
                  </div>

                  <div>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-black
                      "
                    >
                      Opening Hours
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      Monday - Sunday
                    </p>

                    <p
                      className="
                        text-green-600
                        font-semibold
                        text-sm
                        sm:text-base
                      "
                    >
                      8.00 AM - 10.00 PM
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* RIGHT SIDE FORM */}

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

              className="
                bg-white
                rounded-[30px]
                sm:rounded-[35px]
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                border
                border-zinc-200
                p-5
                sm:p-8
                md:p-10
              "
            >

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-black
                  text-black
                "
              >
                Send Message
              </h2>

              <p
                className="
                  mt-4
                  text-gray-600
                  text-sm
                  sm:text-base
                "
              >
                We’ll get back to you as soon as possible.
              </p>


              <form className="mt-10 space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    border
                    border-zinc-300
                    rounded-2xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-green-500
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    border
                    border-zinc-300
                    rounded-2xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-green-500
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full
                    border
                    border-zinc-300
                    rounded-2xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    focus:border-green-500
                  "
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="
                    w-full
                    border
                    border-zinc-300
                    rounded-2xl
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-sm
                    sm:text-base
                    outline-none
                    resize-none
                    focus:border-green-500
                  "
                />

                <button
                  type="submit"
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
                    shadow-[0_0_30px_rgba(34,197,94,0.35)]
                  "
                >
                  Send Message
                </button>

              </form>


              {/* SOCIALS */}

              <div className="mt-10">

                <p
                  className="
                    text-gray-500
                    font-medium
                    text-sm
                    sm:text-base
                  "
                >
                  Follow Us
                </p>

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
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
                      justify-center
                      gap-3
                      w-full
                      sm:w-auto
                      bg-black
                      hover:bg-blue-600
                      transition
                      duration-300
                      text-white
                      px-5
                      py-4
                      rounded-2xl
                      shadow-lg
                    "
                  >

                    <FaFacebookF className="text-xl" />

                  </a>


                  {/* INSTAGRAM */}

                  <a
                    href="https://instagram.com/bismillahbutchers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      w-full
                      sm:w-auto
                      bg-black
                      hover:bg-pink-600
                      transition
                      duration-300
                      text-white
                      px-5
                      py-4
                      rounded-2xl
                      shadow-lg
                    "
                  >

                    <FaInstagram className="text-xl" />

                  </a>


                  {/* WHATSAPP */}

                  <a
                    href="https://wa.me/447404943400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      w-full
                      sm:w-auto
                      bg-black
                      hover:bg-green-600
                      transition
                      duration-300
                      text-white
                      px-5
                      py-4
                      rounded-2xl
                      shadow-lg
                    "
                  >

                    <FaWhatsapp className="text-xl" />

                    <span className="font-semibold">
                      WhatsApp Us
                    </span>

                  </a>

                </div>

              </div>

            </motion.div>

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

export default Contact;