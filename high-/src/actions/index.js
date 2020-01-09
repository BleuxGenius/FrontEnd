import axiosWithAuth from "../utils/authWithAxios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const USER_SIGNING = "USER_SIGNING";
export const USER_SIGNING_SUCCESS = "USER_SIGNING_SUCCESS";
export const USER_SIGNING_FAILURE = "USER_SIGNING_FAILURE";

export const signUp = signUpData => dispatch => {
  dispatch({ type: USER_SIGNING });

  axiosWithAuth()
    .post(`/api/user/register`, signUpData)
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
    .catch(err => {
      dispatch({ type: USER_LOGING_IN_FAILURE, payload: err.response });
    });
};

export const POST_STRAINS_START = "POST_STRAINS_START";
export const POST_STRAINS_SUCCESS = "POST_STRAINS_SUCCESS";
export const POST_STRAINS_FAILURE = "POST_STRAINS_FAILURE";

export const postStrainData = newStrain => dispatch => {
  dispatch({ type: POST_STRAINS_START });

  axiosWithAuth()
    .post(`/api/strain`, newStrain)

    .then(res => {
      dispatch({ type: POST_STRAINS_SUCCESS, payload: res.data });
    })

    .catch(err => {
      dispatch({
        type: POST_STRAINS_FAILURE,

        payload: `${err.response.status}: ${err.response.statusText}`
      });
    });
};

//DELETE

export const DELETE_STRAINS_START = "DELETE_STRAINS_START";

export const DELETE_STRAINS_SUCCESS = "DELETE_STRAINS_SUCCESS";

export const DELETE_STRAINS_FAILURE = "DELETE_STRAINS_FAILURE";

export const deleteStrain = id => dispatch => {
  dispatch({ type: DELETE_STRAINS_START });

  axiosWithAuth()
    .delete(`/api/strain/${id}`)

    .then(res => {
      dispatch({ type: DELETE_STRAINS_SUCCESS, payload: res.data });
    })

    .catch(err => {
      dispatch({
        type: DELETE_STRAINS_FAILURE,

        payload: `${err.response.status}: ${err.response.statusText}`
      });
    });
};
