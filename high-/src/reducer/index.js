import {
  USER_SIGNING,
  USER_SIGNING_SUCCESS,
  USER_SIGNING_FAILURE,
  //
  USER_LOGING_IN,
  USER_LOGING_IN_SUCCESS,
  USER_LOGING_IN_FAILURE,
  //
  POST_STRAINS_START,
  POST_STRAINS_SUCCESS,
  POST_STRAINS_FAILURE,
  //
  DELETE_STRAINS_START,
  DELETE_STRAINS_SUCCESS,
  DELETE_STRAINS_FAILURE
} from "../actions";

const initialState = {
  userData: [],
  fetchingData: false,
  error: "",
  userData: {},
  getUserData: {}
};

const reducer = (state = initialState, action) => {
  // console.log('Data from reducer', state.userData)

  switch (action.type) {
    case USER_SIGNING:
      return {
        ...state,
        fetchingData: true
      };

    case USER_SIGNING_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case USER_SIGNING_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case USER_LOGING_IN:
      return {
        ...state,
        fetchingData: true
      };

    case USER_LOGING_IN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        userData: action.payload
      };

    case USER_LOGING_IN_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case POST_STRAINS_START:
      return {
        ...state,
        isPosting: true,
        error: ""
      };

    case POST_STRAINS_SUCCESS:
      return {
        ...state,

        isPosting: false,
        error: "",
        strainsData: [...action.payload]
      };

    case POST_STRAINS_FAILURE:
      return {
        ...state,

        isPosting: false,
        error: action.payload
      };

    case DELETE_STRAINS_START:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };

    case DELETE_STRAINS_SUCCESS:
      return {
        ...state,

        strainsData: [...action.payload],
        isDeleting: false
      };

    case DELETE_STRAINS_FAILURE:
      return {
        ...state,

        error: action.payload,
        isDeleting: false
      };

    default:
      return state;
  }
};

export default reducer;
