import axios from "axios";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = process.env.REACT_APP_URL as string;
  }

  public async getUsers(): Promise<[]> {
    const url = this.path + "user/all";
    const result = await axios.get(url);
    console.log("getUsers", result);

    return result.data;
  }
}
export default MemberService;
