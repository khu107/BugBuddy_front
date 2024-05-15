import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_URL as string,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// login
export const login = async (input: {
  memberEmail: string;
  memberPassword: string;
}): Promise<any> => {
  const result = await apiClient.post("/member/login", input);
  const member = result.data.member;
  localStorage.setItem("memberData", JSON.stringify(member));
  return member;
};

// 사용자 목록을 가져오는 함수
export const fetchUsers = async (): Promise<any[]> => {
  const response = await apiClient.get("/user/all");
  return response.data.users;
};

// 사용자 상태를 업데이트하는 함수
export const updateUserStatus = async (
  _id: string,
  memberStatus: string
): Promise<void> => {
  await apiClient.post("/user/edit", { _id, memberStatus });
};

export const fetchProducts = async (): Promise<any[]> => {
  const response = await apiClient.get("/product/all");
  return response.data.products;
};

export default apiClient;
