import { createContext, useContext } from "react";

interface GlobalInterface {
  authMember: any | null;
  setAuthMember: (member: any | null) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined
);

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobals withit Provider");
  return context;
};
