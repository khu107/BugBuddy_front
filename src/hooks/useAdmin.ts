import { useMutation, useQuery, useQueryClient } from "react-query";
import AdminService from "../app/services/AdminService";
import { MemberUpdateInput } from "../libs/types/member";
import { T } from "../libs/types/common";
import { Product } from "../libs/types/product";

export default function useAdmin() {
  const queryClient = useQueryClient();
  const admin = new AdminService();

  const getUsers = useQuery("getUsers", admin.getUsers, {
    staleTime: 1000 * 60,
  });

  const updateUser = useMutation(
    (input: MemberUpdateInput) => admin.updateUserStatus(input),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getUsers");
      },
      onError: (error: T) => {
        console.log(error);
      },
    }
  );

  const getProducts = useQuery<Product[]>("products", admin.getProducts);

  const createProduct = useMutation(
    (input: any) => admin.createProduct(input),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
      onError: (error: T) => {
        console.log(error);
      },
    }
  );

  return { getUsers, updateUser, getProducts, createProduct };
}
