import React, { createContext, useReducer } from "react";
import CUser from "../shared/user.model";
import userReducer from "./UserReducer";

export enum UserActionType {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
}

export type UserActionLogin = {
  type: UserActionType.LOGIN_START;
  payload: null;
};

export type UserActionSuccess = {
  type: UserActionType.LOGIN_SUCCESS;
  payload: CUser;
};

export type UserActionError = {
  type: UserActionType.LOGIN_ERROR;
  payload: null;
};

export type UserAction = UserActionLogin | UserActionSuccess | UserActionError;

export type UserState = {
  user: CUser | null;
  loading: boolean;
  error: null | boolean;
};

const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
};

type UserContextType = {
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
