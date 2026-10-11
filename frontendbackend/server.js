const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================================
// Middleware
// ================================
app.use(cors());
app.use(express.json());

// ================================
// Order Model
// ================================
const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    pickupTime: {
      type: String,
      required: true,
      trim: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

// ================================
// Product Model
// ================================
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

// ================================
// Health Check
// ================================
app.get("/", (req, res) => {
  res.json({
    message: "Backend server is running",
    mongodb:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// ================================
// GET ALL PRODUCTS
// ================================
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

// ================================
// ADD PRODUCT
// ================================
app.post("/api/products", async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
    } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        message:
          "Name, price and category are required",
      });
    }

    const product = new Product({
      name,
      description,
      price,
      category,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);

    res.status(500).json({
      message: "Failed to add product",
    });
  }
});

// ================================
// UPDATE PRODUCT
// ================================
app.patch("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error);

    res.status(500).json({
      message: "Failed to update product",
    });
  }
});

// ================================
// DELETE PRODUCT
// ================================
app.delete("/api/products/:id", async (req, res) => {
  try {
    const product =
      await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);

    res.status(500).json({
      message: "Failed to delete product",
    });
  }
});

// ================================
// CREATE ORDER
// ================================
app.post("/api/orders", async (req, res) => {
  try {
    const {
      customerName,
      pickupTime,
      items,
      total,
    } = req.body;

    // Validation
    if (!customerName || !customerName.trim()) {
      return res.status(400).json({
        message: "Customer name is required",
      });
    }

    if (!pickupTime) {
      return res.status(400).json({
        message: "Pickup time is required",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Order must contain at least one item",
      });
    }

    if (total === undefined || total < 0) {
      return res.status(400).json({
        message: "Valid total is required",
      });
    }

    const order = new Order({
      customerName: customerName.trim(),
      pickupTime,
      items,
      total,
    });

    const savedOrder = await order.save();

    console.log(
      `🛍️ New order received from ${savedOrder.customerName}`
    );

    res.status(201).json({
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);

    res.status(500).json({
      message: "Failed to place order",
    });
  }
});

// ================================
// GET ALL ORDERS
// ================================
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);

    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

// ================================
// UPDATE ORDER STATUS
// ================================
app.patch("/api/orders/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Preparing",
      "Ready",
      "Completed",
      "Cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid order status",
      });
    }

    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    console.error(
      "Error updating order status:",
      error
    );

    res.status(500).json({
      message: "Failed to update order status",
    });
  }
});

// ================================
// MongoDB Connection
// ================================
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error(
    "❌ MONGODB_URI is missing from .env file"
  );
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log(
        "✅ MongoDB connected successfully"
      );
    })
    .catch((error) => {
      console.error(
        "❌ MongoDB connection failed:"
      );
      console.error(error.message);
    });
}

// ================================
// Server
// ================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});
