import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchUsers, updateUserStatus } from "../app/api/apiClient";

export default function useMember() {
  const queryClient = useQueryClient();

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

  return { getUsers, updateUser };
}
