import { useState } from "react";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart";
import Order from "./Order";
import Reviews from "./Reviews";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-orange-50">

      {/* ================================
          NAVBAR
      ================================= */}

      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-5 shadow-md">

        {/* Logo */}
        <button
          onClick={() => setPage("home")}
          className="text-2xl font-bold text-orange-600 transition hover:text-orange-700"
        >
          🍹 Chaudhary Brothers
        </button>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-2">

          {/* Home */}
          <button
            onClick={() => setPage("home")}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              page === "home"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            Home
          </button>

          {/* Menu */}
          <button
            onClick={() => setPage("menu")}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              page === "menu"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            Menu
          </button>

          {/* Cart */}
          <button
            onClick={() => setPage("cart")}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              page === "cart"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            Cart 🛒 ({cart.length})
          </button>

          {/* Order */}
          <button
            onClick={() => setPage("order")}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              page === "order"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            Order
          </button>

          {/* Reviews */}
          <button
            onClick={() => setPage("reviews")}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              page === "reviews"
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-100"
            }`}
          >
            Reviews
          </button>

        </div>
      </nav>

      {/* ================================
          PAGES
      ================================= */}

      {/* HOME */}
      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {/* MENU */}
      {page === "menu" && (
        <Menu
          cart={cart}
          setCart={setCart}
        />
      )}

      {/* CART */}
      {page === "cart" && (
        <Cart
          cart={cart}
          setCart={setCart}
          setPage={setPage}
        />
      )}

      {/* ORDER */}
      {page === "order" && (
        <Order
          cart={cart}
          setCart={setCart}
          setPage={setPage}
        />
      )}

      {/* REVIEWS */}
      {page === "reviews" && (
        <Reviews />
      )}

    </div>
  );
}

export default App;
