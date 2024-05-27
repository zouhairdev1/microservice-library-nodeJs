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
          const user=action.payload;
          localStorage.setItem('user',JSON.stringify({...user,isAuthenticated:true}) )
         
          
         
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user:user ,
              };
           
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
              };
        case LOGOUT:
          localStorage.removeItem('user')
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