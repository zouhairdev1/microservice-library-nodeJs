import axios from "axios";

export const LOGIN_REQUEST = "loginRequest";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "logout";

export const LOGIN_FAILURE = "error";
// src/features/auth/authActions.js

export const register = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post("/api/register", credentials);

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMessage = error.response.data.message;
    dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
  }
};
export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post("/api/login", credentials);
    if (response.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    }

   
  } catch (error) {
    
    const errorMessage = error.response.data.message
        
    dispatch({ type: LOGIN_FAILURE, payload: errorMessage });
  }
};
