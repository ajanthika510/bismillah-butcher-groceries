import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WhatsAppButton from "./components/WhatsAppButton";
import Cart from "./pages/Cart";
import AdminMessages from "./pages/AdminMessages";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  return (

    <BrowserRouter>

      <WhatsAppButton />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/offers"
          element={<Offers />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/messages"
          element={<AdminMessages />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;