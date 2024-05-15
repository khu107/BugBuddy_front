import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchProducts } from "../app/api/apiClient";

export default function useProducts() {
  const queryClient = useQueryClient();

  const getProducts = useQuery<any[]>("products", fetchProducts, {
    staleTime: 1000 * 60,
  });

  return { getProducts };
}
