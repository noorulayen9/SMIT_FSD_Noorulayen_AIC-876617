import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
// api=api+route
// api=http://localhost:5000/api/auth/register

export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
};

export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};

export const createProduct = (productData) => {
  return api.post("/products", productData);
};

export const getProducts = () => {
  return api.get("/products");
};

export const updateProduct = (productId, productData) => {
  return api.put(`/products/${productId}`, productData);
};

export const deleteProduct = (productId) => {
  return api.delete(`/products/${productId}`);
};

export default api;
