import { AppDispatch } from "./../../index";
import { IUser } from "./../../../models/User";
import {
  AuthActionEnum,
  SetUserAction,
  SetAuthAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";
import axios from "axios";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: isAuth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));

        setTimeout(async () => {
          const response = await axios.get<IUser[]>("./users.json");
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );

          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(AuthActionCreators.setError("Error in user name or pass"));
          }
          dispatch(AuthActionCreators.setIsLoading(false));
        }, 2000);
      } catch (e) {
        dispatch(AuthActionCreators.setError("Something error"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");

    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
