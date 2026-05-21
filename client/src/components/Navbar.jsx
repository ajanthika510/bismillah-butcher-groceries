import { Link, useLocation } from "react-router-dom";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUserShield
} from "react-icons/fa";

import {
  useEffect,
  useState,
  useContext
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import logo from "../assets/logo.png";


function Navbar() {

  const { cartItems } = useCart();

  const { user, logout } =
    useContext(AuthContext);

  const location = useLocation();

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {

        setScrolled(true);

      } else {

        setScrolled(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);


  const navLinks = [

    {
      name: "Home",
      path: "/"
    },

    {
      name: "Products",
      path: "/products"
    },

    {
      name: "Offers",
      path: "/offers"
    },

    {
      name: "Contact",
      path: "/contact"
    },

    {
      name: "About Us",
      path: "/about"
    }

  ];


  return (

    <motion.nav

      initial={{
        y: -100,
        opacity: 0
      }}

      animate={{
        y: 0,
        opacity: 1
      }}

      transition={{
        duration: 0.8
      }}

      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        backdrop-blur-xl

        ${
          scrolled
            ? `
              bg-black/90
              border-b
              border-white/10
              shadow-2xl
              py-2
            `
            : `
              bg-gradient-to-b
              from-black/90
              to-transparent
              py-3
            `
        }
      `}
    >

      {/* TOP GLOW */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[2px]
          bg-green-500
          shadow-[0_0_20px_#22c55e]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          lg:px-6
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
            min-w-0
          "
        >

          <img
            src={logo}
            alt="Logo"
            className="
              w-14
              h-14
              sm:w-16
              sm:h-16
              object-contain
              drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]
            "
          />

          <div className="leading-tight">

            <h1
              className="
                text-base
                sm:text-xl
                lg:text-2xl
                font-black
                text-white
                tracking-wide
              "
              style={{
                fontFamily:
                  "Playfair Display, serif"
              }}
            >
              Bismillah Butcher
            </h1>

            <h2
              className="
                text-sm
                sm:text-lg
                lg:text-xl
                font-black
                text-green-500
                -mt-1
              "
              style={{
                fontFamily:
                  "Playfair Display, serif"
              }}
            >
              & Grocery
            </h2>

          </div>

        </Link>


        {/* DESKTOP MENU */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-7
          "
        >

          {navLinks.map((link, index) => (

            <Link
              key={index}
              to={link.path}
              className={`
                relative
                text-[16px]
                font-medium
                transition
                duration-300

                ${
                  location.pathname === link.path
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }
              `}
            >

              {link.name}

              {location.pathname === link.path && (

                <motion.div

                  layoutId="activeNav"

                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-[2px]
                    bg-green-400
                  "
                />

              )}

            </Link>

          ))}


          {/* ADMIN BUTTON */}

          {
            user?.role === "admin" && (

              <Link to="/admin">

                <button
                  className="
                    bg-green-500
                    hover:bg-green-600
                    transition
                    duration-300
                    px-5
                    py-2.5
                    rounded-xl
                    text-white
                    font-semibold
                    flex
                    items-center
                    gap-2
                    shadow-lg
                  "
                >
                  <FaUserShield />

                  Admin
                </button>

              </Link>
            )
          }


          {/* CART */}

          <Link
            to="/cart"
            className="
              relative
              text-white
              hover:text-green-400
              transition
            "
          >

            <FaShoppingCart className="text-2xl" />

            <span
              className="
                absolute
                -top-2
                -right-3
                bg-green-500
                text-white
                text-xs
                px-2
                py-1
                rounded-full
              "
            >
              {
                cartItems.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )
              }
            </span>

          </Link>


          {/* AUTH */}

          {user ? (

            <>

              <span
                className="
                  text-green-400
                  font-semibold
                "
              >
                {user.name}
              </span>

              <button
                onClick={logout}
                className="
                  bg-green-500
                  hover:bg-green-600
                  transition
                  duration-300
                  px-5
                  py-2.5
                  rounded-xl
                  text-white
                  font-semibold
                "
              >
                Logout
              </button>

            </>

          ) : (

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <Link
                to="/login"
                className="
                  text-white
                  hover:text-green-400
                  transition
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                  bg-green-500
                  hover:bg-green-600
                  transition
                  duration-300
                  px-5
                  py-2.5
                  rounded-xl
                  text-white
                  font-semibold
                "
              >
                Register
              </Link>

            </div>

          )}

        </div>


        {/* MOBILE RIGHT */}

        <div
          className="
            flex
            items-center
            gap-5
            lg:hidden
          "
        >

          {/* MOBILE CART */}

          <Link
            to="/cart"
            className="
              relative
              text-white
            "
          >

            <FaShoppingCart className="text-2xl" />

            <span
              className="
                absolute
                -top-2
                -right-3
                bg-green-500
                text-white
                text-[10px]
                px-2
                py-[2px]
                rounded-full
              "
            >
              {
                cartItems.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )
              }
            </span>

          </Link>

          {/* MENU BUTTON */}

          <button
            className="
              text-white
              text-2xl
            "
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {
              menuOpen
                ? <FaTimes />
                : <FaBars />
            }
          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: -20
            }}

            transition={{
              duration: 0.3
            }}

            className="
              lg:hidden
              bg-black/95
              backdrop-blur-2xl
              border-t
              border-white/10
              px-6
              py-8
            "
          >

            <div
              className="
                flex
                flex-col
                gap-6
              "
            >

              {navLinks.map((link, index) => (

                <Link
                  key={index}
                  to={link.path}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className={`
                    text-lg
                    font-semibold
                    transition

                    ${
                      location.pathname === link.path
                        ? "text-green-400"
                        : "text-white"
                    }
                  `}
                >
                  {link.name}
                </Link>

              ))}


              {/* MOBILE ADMIN */}

              {
                user?.role === "admin" && (

                  <Link
                    to="/admin"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >

                    <button
                      className="
                        w-full
                        bg-green-500
                        hover:bg-green-600
                        transition
                        duration-300
                        py-3
                        rounded-2xl
                        text-white
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-3
                      "
                    >
                      <FaUserShield />

                      Admin Dashboard
                    </button>

                  </Link>
                )
              }


              {/* MOBILE AUTH */}

              {user ? (

                <>

                  <span
                    className="
                      text-green-400
                      font-semibold
                    "
                  >
                    {user.name}
                  </span>

                  <button
                    onClick={logout}
                    className="
                      w-full
                      bg-green-500
                      hover:bg-green-600
                      transition
                      duration-300
                      py-3
                      rounded-2xl
                      text-white
                      font-semibold
                    "
                  >
                    Logout
                  </button>

                </>

              ) : (

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                  "
                >

                  <Link
                    to="/login"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >

                    <button
                      className="
                        w-full
                        border
                        border-white/20
                        py-3
                        rounded-2xl
                        text-white
                        font-semibold
                      "
                    >
                      Login
                    </button>

                  </Link>

                  <Link
                    to="/register"
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >

                    <button
                      className="
                        w-full
                        bg-green-500
                        hover:bg-green-600
                        transition
                        duration-300
                        py-3
                        rounded-2xl
                        text-white
                        font-semibold
                      "
                    >
                      Register
                    </button>

                  </Link>

                </div>

              )}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;