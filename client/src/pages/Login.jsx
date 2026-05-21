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

export default Login;