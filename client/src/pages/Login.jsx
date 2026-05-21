import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({

    email: "",
    password: ""
  });


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      login(res.data);

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Invalid credentials");
    }
  };


  return (

    <div
      className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        p-6
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
          bg-zinc-900
          p-10
          rounded-2xl
          shadow-2xl
          w-full
          max-w-md
          border
          border-green-500
        "
      >

        <h1
          className="
            text-4xl
            font-extrabold
            text-center
            text-green-400
            mb-8
          "
        >
          Login
        </h1>


        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-xl
            mb-4
            bg-black
            text-white
            border
            border-zinc-700
          "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-xl
            mb-6
            bg-black
            text-white
            border
            border-zinc-700
          "
        />


        <button
          className="
            w-full
            bg-green-500
            hover:bg-green-600
            transition
            duration-300
            text-white
            py-4
            rounded-xl
            font-bold
          "
        >
          Login
        </button>


        <p
          className="
            text-gray-400
            text-center
            mt-6
          "
        >
          Don't have an account?

          <Link
            to="/register"
            className="
              text-green-400
              ml-2
            "
          >
            Register
          </Link>

        </p>

      </form>

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

export default Login;