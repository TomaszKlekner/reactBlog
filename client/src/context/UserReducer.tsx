import { UserAction, UserActionType, UserState } from "./UserContext";

const userReducer = (state: UserState, action: UserAction) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionType.LOGIN_START:
      return {
        ...state,
        user: null,
        loading: true,
        error: false,
      };
    case UserActionType.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: false,
      };
    case UserActionType.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
