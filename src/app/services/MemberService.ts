import apiClient from "../api/apiClient";
import { LoginInput, Member, MemberUpdateInput } from "../../libs/types/member";

class MemberService {
  constructor() {}

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = "/member/login";
      const result = await apiClient.post(url, input);
      console.log("getUsers", result);
      const member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("Error: login", error);
      throw error;
    }
  }

  public async logout(): Promise<void> {
    try {
      const result = await apiClient.post("/member/logout", {});
      localStorage.removeItem("memberData");
    } catch (error) {
      console.log("Error: logout", error);
      throw error;
    }
  }

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
export default MemberService;
