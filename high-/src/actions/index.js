import axiosWithAuth from "../utils/authWithAxios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const USER_SIGNING = "USER_SIGNING";
export const USER_SIGNING_SUCCESS = "USER_SIGNING_SUCCESS";
export const USER_SIGNING_FAILURE = "USER_SIGNING_FAILURE";

export const signUp = signUpData => dispatch => {
  dispatch({ type: USER_SIGNING });

  axiosWithAuth()
    .post(`api/user/register`, signUpData)
    .then(response =>
      dispatch(
        { type: USER_SIGNING_SUCCESS, payload: response.data.user },
        localStorage.setItem("token", response.data.token)
        // history.push('/login')
      )
    )
    .catch(err =>
      dispatch({ type: USER_SIGNING_FAILURE, payload: err.response })
    );
};

export const USER_LOGING_IN = "USER_LOGING_IN";
export const USER_LOGING_IN_SUCCESS = "USER_LOGING_IN_SUCCESS";
export const USER_LOGING_IN_FAILURE = "USER_LOGING_IN_FAILURE";

export const login = loginData => dispatch => {
  dispatch({ type: USER_LOGING_IN });

  axiosWithAuth()
    .post(`/api/user/login`, loginData)
    .then(response =>
      dispatch(
        { type: USER_LOGING_IN_SUCCESS, payload: response.data.user },
        localStorage.setItem("token", response.data.token),
        history.push("/")
      )
    )
    .catch(err =>
      dispatch({ type: USER_LOGING_IN_FAILURE, payload: err.response })
    );
};

export const START_FETCHING_DATA = "START_FETCHING_DATA";
export const FETCH_SUCCESS_DATA = "FETCH_SUCCESS_DATA";
export const FETCH_FAILURE_DATA = "FETCH_FAILURE_DATA";

export const fetchingUserData = () => dispatch => {
  dispatch({type: START_FETCHING_DATA})
  axiosWithAuth()
  .get(`api/users/profile`)
  .then(response => dispatch({ type: FETCH_SUCCESS_DATA, payload: response.data }))
  .catch(err => dispatch({type: FETCH_FAILURE_DATA, payload: err.response}))
}
