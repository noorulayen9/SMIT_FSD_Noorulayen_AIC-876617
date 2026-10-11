import { useEffect, useState } from "react";
import { getProducts } from "./api";

function Menu({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();

      const requiredProducts = [
        "Oreo Shake",
        "Banana Shake",
        "Chocolate Shake",
        "Pineapple Shake",
        "Mousami Juice",
        "Pineapple Juice",
        "Mint Margarita",
        "Lemon Soda",
        "Chai",
        "Cold Coffee",
        "Chocolate Cold Coffee",
      ];

      const menuProducts = data.filter((product) =>
        requiredProducts.some(
          (name) =>
            product.name?.toLowerCase() === name.toLowerCase()
        )
      );

      setProducts(menuProducts);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // ADD TO CART
  // ==============================
  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item._id === product._id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // ==============================
  // IMAGE
  // ==============================
  const getImage = (product) => {
    const name = product.name?.toLowerCase() || "";

    if (name === "oreo shake") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5NOslcqOuaKBnuxM5Poz71qh6vZQZMBPysFFyTu3cg&s=10";
    }

    if (name === "banana shake") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzr40PdZV3VjV7onh7hTgIvMaftToL9lewEThEvrvHA&s=10";
    }

    if (name === "chocolate shake") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQssczaDpWjx19LSlxdGCOqA6kp9GIrU4mhdKQGMWCPw&s=10";
    }

    if (name === "pineapple shake") {
     return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvlUAIV2wlD5ELljDWp_JOiRbSI3z14W2KhAI2EqbsQ&s=10";
    }

    if (name === "mousami juice") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIapD6WkjLOcX3bINa7BiyZhMo3OKxHrgX7lVyi7WAQ&s=10";
    }

    if (name === "pineapple juice") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzAwfVrGF-CLVukZFm4paJh4bOs5kEvlcz1jUlU4gdw&s=10";
    }

    if (name === "mint margarita") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4ncufFJW4xhdsAv9BqY0Jouw74XDToxdD1ztahHLbQ&s=10";
    }

    if (name === "lemon soda") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEaaTSlz-xtNhvtIu8_alib1BYmHah-lhzYfibQW6eg&s=10";
    }

    if (name === "chai") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4xsthL9iDJF6GHOxXufq5SduQaQMEXZAJZuoZxRt0g&s=10";
    }

    if (name === "cold coffee") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7IcvbmS7jQ1DC-v-_Iiw6v-CQ0VbD9DJNxG7_ojTVQ&s=10";
    }

    if (name === "chocolate cold coffee") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc-yuwNa3X0Nb4XI65IA2l9JMcxoszPYJ3yz8QAETww&s=10";
    }

    return null;
  };

  // ==============================
  // CATEGORY
  // ==============================
  const shakes = products.filter(
    (product) =>
      product.category?.toLowerCase() === "shake"
  );

  const juices = products.filter(
    (product) =>
      product.category?.toLowerCase() === "juice"
  );

  const chai = products.filter(
    (product) =>
      product.category?.toLowerCase() === "chai"
  );

  const coffee = products.filter(
    (product) =>
      product.category?.toLowerCase() === "coffee"
  );

  // ==============================
  // PRODUCT CARD
  // ==============================
  const ProductCard = ({ product }) => {
    const cartItem = cart.find(
      (item) => item._id === product._id
    );

    const image = getImage(product);

    return (
      <div className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* IMAGE */}
        <div className="h-48 overflow-hidden bg-orange-50">

          {image ? (
            <img
              src={image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-6xl">
              🥤
            </div>
          )}

        </div>

        {/* CARD CONTENT */}
        <div className="p-5">

          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              <h3 className="text-lg font-bold text-gray-800">
                {product.name}
              </h3>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-orange-500">
                {product.category}
              </p>

            </div>

            <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-sm font-bold text-orange-600">
              Rs. {product.price}
            </span>

          </div>

          {product.description && (
            <p className="mt-3 min-h-[40px] text-sm leading-5 text-gray-500">
              {product.description}
            </p>
          )}

          <button
            type="button"
            onClick={() => addToCart(product)}
            className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-200 ${
              cartItem
                ? "bg-green-600 hover:bg-green-700"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {cartItem
              ? `Added to Cart • ${cartItem.quantity}`
              : "Add to Cart"}
          </button>

        </div>
      </div>
    );
  };

  // ==============================
  // SECTION
  // ==============================
  const Section = ({ title, subtitle, items }) => {
    if (items.length === 0) return null;

    return (
      <section className="mb-14">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

      </section>
    );
  };

  // ==============================
  // LOADING
  // ==============================
  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7f3] px-5 py-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <div className="mx-auto h-4 w-40 animate-pulse rounded bg-orange-100" />

            <div className="mx-auto mt-3 h-10 w-56 animate-pulse rounded bg-gray-200" />

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >

                <div className="h-48 animate-pulse bg-orange-50" />

                <div className="space-y-3 p-5">

                  <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

                  <div className="h-3 w-20 animate-pulse rounded bg-orange-100" />

                  <div className="h-4 w-full animate-pulse rounded bg-gray-100" />

                  <div className="h-11 animate-pulse rounded-xl bg-orange-100" />

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    );
  }

  // ==============================
  // MAIN MENU
  // ==============================
  return (
    <div className="min-h-screen bg-[#faf7f3] px-5 py-10">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Chaudhary Brothers
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
            Our Menu
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
            Fresh drinks, delicious taste and quality ingredients.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-400" />

        </div>

        {/* SHAKES */}
        <Section
          title="Shakes"
          subtitle="Creamy, rich and delicious"
          items={shakes}
        />

        {/* JUICES */}
        <Section
          title="Fresh Juices"
          subtitle="Freshly prepared and refreshing"
          items={juices}
        />

        {/* CHAI */}
        <Section
          title="Chai"
          subtitle="Freshly prepared and served hot"
          items={chai}
        />

        {/* COFFEE */}
        <Section
          title="Coffee"
          subtitle="Cold, creamy and refreshing"
          items={coffee}
        />

      </div>

    </div>
  );
}

export default Menu;
