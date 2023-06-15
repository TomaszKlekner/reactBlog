import React, { createContext, useEffect, useReducer } from "react";
import CUser from "../shared/user.model";
import userReducer from "./UserReducer";
import { UserAction } from "./UserActions";

export type UserState = {
  user: CUser | null;
  loading: boolean;
  error: null | boolean;
};

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "{}") || null,
  loading: false,
  error: false,
};

type UserContextType = {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
