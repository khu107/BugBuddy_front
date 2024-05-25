import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_URL as string,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async (): Promise<any[]> => {
  const response = await apiClient.get("/admin/product/all");
  return response.data.products;
};

export default apiClient;
