import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
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

      await API.post(
        "/auth/register",
        formData
      );

      alert("Registration successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Registration failed");
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
          Register
        </h1>


        <input
          type="text"
          name="name"
          placeholder="Full Name"
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
          Register
        </button>


        <p
          className="
            text-gray-400
            text-center
            mt-6
          "
        >
          Already have an account?

          <Link
            to="/login"
            className="
              text-green-400
              ml-2
            "
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Register;