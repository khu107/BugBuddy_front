import apiClient from "../api/apiClient";
import { LoginInput, Member } from "../../libs/types/member";
import axios from "axios";

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
}
export default MemberService;
