import axios from "axios";
import { Product, ProductInput } from "../../libs/types/product";
import apiClient from "../api/apiClient";
import { Member, MemberUpdateInput } from "../../libs/types/member";

class AdminService {
  constructor() {}

  public async getUsers(): Promise<Member[]> {
    try {
      const url = "/admin/user/all";
      const result = await apiClient.get(url);
      console.log("getUsers", result);

      return result.data.users;
    } catch (error) {
      console.log("Error: getUsers", error);
      throw error;
    }
  }

  public async getProducts(): Promise<Product[]> {
    try {
      const url = "/admin/product/all";
      const result = await apiClient.get(url);
      console.log("getProducts", result);

      return result.data.products;
    } catch (error) {
      console.log("Error: getProducts", error);
      throw error;
    }
  }

  public async createProduct(input: ProductInput): Promise<Product> {
    try {
      const formData = new FormData();
      formData.append("productName", input.productName);
      formData.append("productPrice", input.productPrice);
      formData.append("productLeftCount", input.productLeftCount);
      formData.append("productCollection", input.productCollection);
      formData.append("productSize", input.productSize);
      formData.append("productColor", input.productColor);
      formData.append("productDesc", input.productDesc);
      for (let i = 0; i < input.productImages.length; i++) {
        formData.append("productImages", input.productImages[i]);
      }

      const response = await axios(
        `${process.env.REACT_APP_URL}/admin/product/create`,
        {
          method: "POST",
          data: formData,
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error: updateUserStatus", error);
      throw error;
    }
  }

  public async updateUserStatus(input: MemberUpdateInput): Promise<Member> {
    try {
      const url = "/admin/user/edit";
      const result = await apiClient.post(url, input);
      return result.data;
    } catch (error) {
      console.log("Error: updateUserStatus", error);
      throw error;
    }
  }
}
export default AdminService;
