import { IPost } from "../shared/post.model";
import CUser from "../shared/user.model";

export enum UserActionType {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGOUT = "LOGOUT",
  ADD_POST = "ADD_POST",
}

type UserActionLogin = {
  type: UserActionType.LOGIN_START;
  payload: null;
};

type UserActionSuccess = {
  type: UserActionType.LOGIN_SUCCESS;
  payload: CUser;
};

type UserActionError = {
  type: UserActionType.LOGIN_ERROR;
  payload: null;
};

type UserActionLogout = {
  type: UserActionType.LOGOUT;
  payload: null;
};

type UserActionAddPost = {
  type: UserActionType.ADD_POST;
  payload: IPost;
};

export type UserAction =
  | UserActionLogin
  | UserActionSuccess
  | UserActionError
  | UserActionLogout
  | UserActionAddPost;
