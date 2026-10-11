require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGO_URI = process.env.MONGO_URI;

// =========================
// PRODUCTS
// =========================

const products = [
  // =========================
  // SHAKES
  // =========================

  {
    name: "Banana Shake",
    description: "Creamy and delicious fresh banana shake",
    price: 250,
    category: "Shake",
    image: "banana-shake.jpg",
    available: true,
  },

  {
    name: "Oreo Shake",
    description: "Rich and creamy Oreo shake",
    price: 300,
    category: "Shake",
    image: "oreo-shake.jpg",
    available: true,
  },

  {
    name: "Chocolate Shake",
    description: "Smooth and delicious chocolate shake",
    price: 300,
    category: "Shake",
    image: "chocolate-shake.jpg",
    available: true,
  },

  {
    name: "Pineapple Shake",
    description: "Fresh and refreshing pineapple shake",
    price: 280,
    category: "Shake",
    image: "pineapple-shake.jpg",
    available: true,
  },

  // =========================
  // JUICES
  // =========================

  {
    name: "Mousambi Juice",
    description: "Fresh and refreshing mousambi juice",
    price: 200,
    category: "Juice",
    image: "mousambi.jpg",
    available: true,
  },

  {
    name: "Peach Juice",
    description: "Sweet and refreshing peach juice",
    price: 250,
    category: "Juice",
    image: "peach.jpg",
    available: true,
  },

  {
    name: "Pineapple Juice",
    description: "Fresh tropical pineapple juice",
    price: 220,
    category: "Juice",
    image: "pineapple.jpg",
    available: true,
  },

  {
    name: "Mint Margarita",
    description: "Refreshing mint margarita",
    price: 220,
    category: "Juice",
    image: "mint-margarita.jpg",
    available: true,
  },

  // =========================
  // CHAI
  // =========================

  {
    name: "Chai",
    description: "Freshly prepared traditional hot chai",
    price: 100,
    category: "Chai",
    image: "chai.jpg",
    available: true,
  },

  // =========================
  // COFFEE
  // =========================

  {
    name: "Cold Coffee",
    description: "Cold, creamy and refreshing coffee",
    price: 250,
    category: "Coffee",
    image: "cold-coffee.jpg",
    available: true,
  },
];

// =========================
// SEED DATABASE
// =========================

async function seedDatabase() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    console.log("Connecting to MongoDB...");

    await mongoose.connect(MONGO_URI, {
      family: 4,
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
    });

    console.log("MongoDB connected!");

    // Delete existing products
    console.log("Deleting old products...");

    await Product.deleteMany({});

    // Insert new products
    console.log("Adding products...");

    await Product.insertMany(products);

    console.log("--------------------------------");
    console.log("SEED SUCCESS!");
    console.log(`${products.length} products added.`);
    console.log("--------------------------------");

    await mongoose.disconnect();

    console.log("MongoDB disconnected.");
  } catch (error) {
    console.error("--------------------------------");
    console.error("SEED ERROR:");
    console.error(error);
    console.error("--------------------------------");

    await mongoose.disconnect().catch(() => {});

    process.exit(1);
  }
}

seedDatabase();
