import { ERROR, LOGIN, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actions";

const init = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
const authReducer = (state = init, action) => {
    switch (action.type) {
      case LOGIN_REQUEST :
        return {
            ...state,
            loading: true,
            error: null,
          };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
              };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
              };
        case LOGOUT:
        return {
            ...state,
            isAuthenticated: false,
            user: null,
          };
      default:
        return state;
    }
  };
  export default authReducer ;