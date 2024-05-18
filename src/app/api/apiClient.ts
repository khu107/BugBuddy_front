import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_URL as string,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 사용자 상태를 업데이트하는 함수
// export const updateUserStatus = async (
//   _id: string,
//   memberStatus: string
// ): Promise<void> => {
//   await apiClient.post("/admin/user/edit", { _id, memberStatus });
// };

export const fetchProducts = async (): Promise<any[]> => {
  const response = await apiClient.get("/admin/product/all");
  return response.data.products;
};

export default apiClient;
