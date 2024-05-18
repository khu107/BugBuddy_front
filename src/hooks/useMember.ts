import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../redux/authSlice";
import { useGlobals } from "./useGlobals";
import { T } from "../libs/types/common";
import MemberService from "../app/services/MemberService";
import { LoginInput, MemberUpdateInput } from "../libs/types/member";

const member = new MemberService();

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

  const getUsers = useQuery("getUsers", member.getUsers, {
    staleTime: 1000 * 60,
  });

  const updateUser = useMutation(
    (input: MemberUpdateInput) => member.updateUserStatus(input),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getUsers");
      },
      onError: (error: T) => {
        console.log(error);
      },
    }
  );

  return { getUsers, updateUser, loginMember, logoutMember };
}
