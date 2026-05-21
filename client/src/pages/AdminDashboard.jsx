import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTrash
} from "react-icons/fa";

import API from "../services/api";

function AdminDashboard() {

  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);

  const [editId, setEditId] = useState(null);

  const [search, setSearch] = useState("");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    isOffer: false
  });

  useEffect(() => {

    fetchProducts();

    fetchMessages();

  }, []);

  const fetchProducts = async () => {

    try {

      const res =
        await API.get("/products");

      setProducts(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const fetchMessages = async () => {

    try {

      const res =
        await API.get("/messages");

      setMessages(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked
    } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const cleanedData = {

        ...formData,

        price:
          formData.price || 0,

        stock:
          formData.stock || 0
      };

      if (editId) {

        await API.put(
          `/products/${editId}`,
          cleanedData
        );

        alert("Product Updated");

      } else {

        await API.post(
          "/products",
          cleanedData
        );

        alert("Product Created");
      }

      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: "",
        isOffer: false
      });

      setEditId(null);

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Operation Failed");
    }
  };

  const handleDelete = async (id) => {

    try {

      await API.delete(
        `/products/${id}`
      );

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");
    }
  };

  const deleteMessage = async (id) => {

    try {

      await API.delete(
        `/messages/${id}`
      );

      fetchMessages();

    } catch (error) {

      console.log(error);
    }
  };

  const handleEdit = (product) => {

    setFormData({

      name:
        product.name || "",

      description:
        product.description || "",

      category:
        product.category || "",

      price:
        product.price || "",

      stock:
        product.stock || "",

      image:
        product.image || "",

      isOffer:
        product.isOffer || false
    });

    setEditId(product.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const filteredProducts =
    products.filter((product) =>

      product.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )

      ||

      product.category
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div
      className="
        flex
        min-h-screen
        bg-zinc-100
        pt-24
        md:pt-28
      "
    >

      {/* SIDEBAR */}

      <div
        className={`
          fixed
          md:static
          z-50
          top-24
          left-0
          h-full
          w-72
          bg-black
          text-white
          p-6
          transition-all
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        <h1
          className="
            text-3xl
            font-black
            text-green-400
          "
        >
          Admin Panel
        </h1>

        <div className="mt-12 space-y-6">

          <div
            className="
              flex
              items-center
              gap-4
              text-lg
            "
          >
            <FaBoxOpen />

            Products
          </div>

          <div
            className="
              flex
              items-center
              gap-4
              text-lg
            "
          >
            <FaShoppingCart />

            Orders
          </div>

        </div>

      </div>

      {/* MAIN */}

      <div
        className="
          flex-1
          p-4
          md:p-10
        "
      >

        {/* TOP BAR */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-8
          "
        >

          <button
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
            className="
              md:hidden
              bg-black
              text-white
              p-3
              rounded-xl
            "
          >
            <FaBars />
          </button>

          <h2
            className="
              text-2xl
              md:text-4xl
              font-black
            "
          >
            Product Dashboard
          </h2>

        </div>

        {/* STATS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            mb-10
          "
        >

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            "
          >

            <p className="text-gray-500">
              Total Products
            </p>

            <h2
              className="
                text-5xl
                font-black
                mt-3
                text-green-600
              "
            >
              {products.length}
            </h2>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            "
          >

            <p className="text-gray-500">
              Categories
            </p>

            <h2
              className="
                text-5xl
                font-black
                mt-3
                text-blue-500
              "
            >
              12
            </h2>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
            "
          >

            <p className="text-gray-500">
              In Stock
            </p>

            <h2
              className="
                text-5xl
                font-black
                mt-3
                text-orange-500
              "
            >
              {
                products.reduce(
                  (total, item) =>
                    total +
                    Number(
                      item.stock || 0
                    ),
                  0
                )
              }
            </h2>

          </div>

        </div>

        {/* SEARCH */}

        <div className="relative mb-10">

          <FaSearch
            className="
              absolute
              top-1/2
              left-5
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              bg-white
              rounded-2xl
              pl-14
              pr-6
              py-5
              shadow-lg
              outline-none
            "
          />

        </div>

        {/* FORM */}

        <motion.form

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          onSubmit={handleSubmit}

          className="
            bg-white
            p-6
            rounded-3xl
            shadow-lg
            grid
            gap-5
            mb-12
          "
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="
              border
              rounded-xl
              px-4
              py-3
            "
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="
              border
              rounded-xl
              px-4
              py-3
            "
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="
              border
              rounded-xl
              px-4
              py-3
            "
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="
              border
              rounded-xl
              px-4
              py-3
            "
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="
              border
              rounded-xl
              px-4
              py-3
              resize-none
            "
          />

          <button
            type="submit"
            className="
              bg-green-500
              hover:bg-green-600
              transition
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            {
              editId
                ? "Update Product"
                : "Add Product"
            }
          </button>

        </motion.form>

        {/* PRODUCTS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {filteredProducts.map((product) => (

            <motion.div

              key={product.id}

              whileHover={{
                y: -8
              }}

              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
              "
            >

              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/400"
                }
                alt={product.name}
                className="
                  w-full
                  h-64
                  object-cover
                "
              />

              <div className="p-6">

                <h2
                  className="
                    text-2xl
                    font-black
                  "
                >
                  {product.name}
                </h2>

                <p className="mt-3 text-gray-500">
                  {product.description}
                </p>

                <p
                  className="
                    mt-4
                    text-green-600
                    font-bold
                  "
                >
                  Rs. {product.price}
                </p>

                <p className="mt-2 text-sm">
                  Stock: {product.stock}
                </p>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={() =>
                      handleEdit(product)
                    }
                    className="
                      flex-1
                      bg-blue-500
                      hover:bg-blue-600
                      transition
                      text-white
                      py-3
                      rounded-2xl
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(product.id)
                    }
                    className="
                      flex-1
                      bg-red-500
                      hover:bg-red-600
                      transition
                      text-white
                      py-3
                      rounded-2xl
                    "
                  >
                    Delete
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* CUSTOMER MESSAGES */}

        <div className="mt-20">

          <h2
            className="
              text-3xl
              font-black
              mb-8
            "
          >
            Customer Messages
          </h2>

          <div className="grid gap-6">

            {
              messages.length === 0
                ? (

                  <div
                    className="
                      bg-white
                      rounded-2xl
                      p-8
                      shadow-lg
                      text-gray-500
                    "
                  >
                    No messages yet.
                  </div>

                ) : (

                  messages.map((msg) => (

                    <div
                      key={msg.id}
                      className="
                        bg-white
                        p-6
                        rounded-3xl
                        shadow-lg
                        border
                        border-zinc-200
                      "
                    >

                      <div className="flex justify-between">

                        <div>

                          <h3
                            className="
                              text-xl
                              font-bold
                            "
                          >
                            {msg.name}
                          </h3>

                          <p className="text-gray-500">
                            {msg.email}
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            deleteMessage(msg.id)
                          }
                          className="
                            text-red-500
                            hover:text-red-700
                            transition
                          "
                        >
                          <FaTrash />
                        </button>

                      </div>

                      <h4
                        className="
                          mt-4
                          font-semibold
                        "
                      >
                        {msg.subject}
                      </h4>

                      <p
                        className="
                          mt-3
                          text-gray-700
                          leading-relaxed
                        "
                      >
                        {msg.message}
                      </p>

                    </div>

                  ))
                )
            }

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;