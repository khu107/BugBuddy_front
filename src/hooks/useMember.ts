import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../redux/authSlice";
import { useGlobals } from "./useGlobals";
import MemberService from "../app/services/MemberService";
import { LoginInput } from "../libs/types/member";
import AdminService from "../app/services/AdminService";
import { T } from "../libs/types/common";

const member = new MemberService();
const admin = new AdminService();

export default function useMember() {
  const { setAuthMember } = useGlobals();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const loginMember = useMutation((input: LoginInput) => member.login(input), {
    onSuccess: (data) => {
      setAuthMember(data);
      dispatch(closeAuthModal());
    },
    onError: (error: T) => {
      alert(error.response.data.message);
    },
  });

  const logoutMember = useMutation(() => member.logout(), {
    onSuccess: () => {
      console.log("logout");
      setAuthMember(null);
    },
  });

  return { loginMember, logoutMember };
}
