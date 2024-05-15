import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  fetchUsers,
  updateUserStatus,
  login,
  logout,
} from "../app/api/apiClient";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../redux/authSlice";
import { useGlobals } from "./useGlobals";

export default function useMember() {
  const { setAuthMember } = useGlobals();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const loginMember = useMutation(
    (input: { memberEmail: string; memberPassword: string }) => login(input),
    {
      onSuccess: (data) => {
        setAuthMember(data);
        dispatch(closeAuthModal());
      },
      onError: (error: any) => {
        alert(error.response.data.message);
      },
    }
  );

  const logoutMember = useMutation(() => logout(), {
    onSuccess: () => {
      console.log("logout");
      setAuthMember(null);
    },
  });

  const getUsers = useQuery<any[]>("getUsers", fetchUsers, {
    staleTime: 1000 * 60,
  });

  const updateUser = useMutation(
    async ({ _id, memberStatus }: { _id: string; memberStatus: string }) =>
      updateUserStatus(_id, memberStatus),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getUsers");
      },
    }
  );

  return { getUsers, updateUser, loginMember, logoutMember };
}
