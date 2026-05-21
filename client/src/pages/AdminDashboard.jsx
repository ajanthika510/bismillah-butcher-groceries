import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaBars
} from "react-icons/fa";

import API from "../services/api";

function AdminDashboard() {

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({

  name: "",
  description: "",
  category: "",
  portion: "",
  price: "",
  stock: "",
  image: "",
  isOffer: false
});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const res = await API.get("/products");

      setProducts(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editId) {

        await API.put(
          `/products/${editId}`,
          formData
        );

        alert("Product Updated");

      } else {

        await API.post(
          "/products",
          formData
        );

        alert("Product Created");
      }

      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: ""
      });

      setEditId(null);

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Operation failed");
    }
  };

  const handleDelete = async (id) => {

    try {

      await API.delete(`/products/${id}`);

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Delete failed");
    }
  };

  const handleEdit = (product) => {

  setFormData({
    name: product.name,
    description: product.description,
    category: product.category,
    price: product.price,
    stock: product.stock,
    image: product.image,
    isOffer: product.isOffer
  });

  setEditId(product.id);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  const filteredProducts = products.filter((product) =>

    product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    product.category
      .toLowerCase()
      .includes(search.toLowerCase())
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

          <div className="flex items-center gap-4 text-lg">
            <FaBoxOpen />
            Products
          </div>

          <div className="flex items-center gap-4 text-lg">
            <FaShoppingCart />
            Orders
          </div>

        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="flex-1 p-4 md:p-10">

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
              setSidebarOpen(!sidebarOpen)
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
                    total + Number(item.stock || 0),
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
            rounded-3xl
            p-6
            md:p-10
            shadow-xl
            mb-14
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
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
                text-2xl
              "
            >
              <FaPlus />
            </div>

            <h2
              className="
                text-3xl
                font-black
              "
            >
              {
                editId
                  ? "Update Product"
                  : "Create Product"
              }
            </h2>

          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-4 rounded-2xl"
            />

            <input
  type="text"
  name="portion"
  placeholder="Portion (Example: 5KG)"
  value={formData.portion}
  onChange={handleChange}
  className="
    w-full
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
              className="border p-4 rounded-2xl"
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="border p-4 rounded-2xl"
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              className="border p-4 rounded-2xl"
            />

          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="
              border
              p-4
              rounded-2xl
              w-full
              mt-6
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
              p-4
              rounded-2xl
              w-full
              mt-6
            "
          />

          <div className="flex items-center gap-3 mt-6">

  <input
    type="checkbox"
    name="isOffer"
    checked={formData.isOffer}
    onChange={(e) =>
      setFormData({
        ...formData,
        isOffer: e.target.checked
      })
    }
    className="w-5 h-5"
  />

  <label className="font-semibold">
    Add to Offers
  </label>

</div>

          {/* IMAGE PREVIEW */}

          {formData.image && (

            <img
              src={formData.image}
              alt="Preview"
              className="
                mt-6
                w-40
                h-40
                rounded-2xl
                object-cover
              "
            />

          )}

          <button
            className="
              mt-8
              bg-green-600
              hover:bg-green-500
              transition
              text-white
              px-10
              py-4
              rounded-2xl
              font-bold
            "
          >
            {
              editId
                ? "Update Product"
                : "Create Product"
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
                src={product.image}
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
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <FaEdit />
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
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    <FaTrash />
                    Delete
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;