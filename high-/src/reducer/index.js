import {
  USER_LOGING_IN,
  USER_LOGING_IN_SUCCESS,
  USER_LOGING_IN_FAILURE
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

    default:
      return state;
  }
};

export default reducer;
