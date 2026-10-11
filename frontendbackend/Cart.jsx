function Cart({ cart, setCart, setPage }) {
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter((item) => item._id !== id)
    );
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-orange-50 px-5 py-10">

      {/* Header */}
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Chaudhary Brothers
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-gray-800">
            Your Cart 🛒
          </h1>

          {cart.length > 0 && (
            <p className="mt-2 text-gray-500">
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          )}
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">

            <div className="mb-4 text-6xl">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add something delicious from our menu.
            </p>

            <button
              onClick={() => setPage("menu")}
              className="mt-6 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Go to Menu
            </button>

          </div>
        ) : (
          <div className="space-y-5">

            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl bg-white p-5 shadow-md"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  {/* Product Info */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-orange-600">
                      Rs. {item.price} each
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Subtotal: Rs.{" "}
                      {item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-700 transition hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="min-w-[30px] text-center text-lg font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white transition hover:bg-orange-600"
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeItem(item._id)
                    }
                    className="text-sm font-semibold text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

            {/* Total / Checkout */}
            <div className="rounded-2xl bg-white p-6 shadow-md">

              <div className="flex items-center justify-between">
                <span className="text-lg text-gray-600">
                  Total Items
                </span>

                <span className="font-semibold">
                  {totalItems}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between border-t pt-4">
                <span className="text-2xl font-bold text-gray-800">
                  Total
                </span>

                <span className="text-2xl font-extrabold text-orange-600">
                  Rs. {total}
                </span>
              </div>

              <button
                onClick={() => setPage("order")}
                className="mt-6 w-full rounded-full bg-orange-500 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
              >
                Checkout 🛍️
              </button>

              <button
                onClick={() => setPage("menu")}
                className="mt-3 w-full rounded-full border border-orange-500 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                ← Continue Shopping
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
