import { useState } from "react";

function Order({ cart, setCart, setPage }) {
  const [customerName, setCustomerName] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    if (!customerName.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!pickupTime) {
      setMessage("Please select your pickup time.");
      return;
    }

    setLoading(true);
    setMessage("");

    const orderData = {
      customerName,
      pickupTime,
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Order failed");
      }

      setMessage("Order placed successfully! 🍹");

      setCart([]);

      setCustomerName("");
      setPickupTime("");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <h1 className="mb-8 text-center text-4xl font-bold text-orange-600">
          Pickup Order 🛍️
        </h1>

        {/* Order Summary */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between border-b py-3"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span className="font-semibold">
                  Rs. {item.price * item.quantity}
                </span>
              </div>
            ))
          )}

          <div className="mt-5 flex justify-between text-xl font-bold">
            <span>Total</span>

            <span className="text-orange-600">
              Rs. {total}
            </span>
          </div>

        </div>

        {/* Customer Form */}
        <form
          onSubmit={placeOrder}
          className="rounded-2xl bg-white p-6 shadow"
        >

          <h2 className="mb-5 text-2xl font-bold">
            Pickup Information
          </h2>

          {/* Name */}
          <label className="mb-2 block font-semibold text-gray-700">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            className="mb-5 w-full rounded-lg border p-3 outline-none focus:border-orange-500"
          />

          {/* Pickup Time */}
          <label className="mb-2 block font-semibold text-gray-700">
            Pickup Time
          </label>

          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
            className="mb-5 w-full rounded-lg border p-3 outline-none focus:border-orange-500"
          />

          <p className="mb-5 text-sm text-gray-500">
            🛍️ Please select the time when you will pick up your order.
          </p>

          {/* Place Order */}
          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="w-full rounded-lg bg-orange-500 py-3 font-bold text-white transition hover:bg-orange-600 disabled:bg-gray-400"
          >
            {loading
              ? "Placing Order..."
              : "Place  Order 🛍️"}
          </button>

          {message && (
            <p className="mt-4 text-center font-semibold text-orange-600">
              {message}
            </p>
          )}

        </form>

      </div>
    </div>
  );
}

export default Order;
