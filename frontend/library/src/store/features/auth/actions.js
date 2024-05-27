import axios from "axios";

export const LOGIN_REQUEST='loginRequest'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGOUT='logout'


export const LOGIN_FAILURE='error'
// src/features/auth/authActions.js


export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post('/api/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMessage = error.response && error.response.data ? error.response.data : error.message;
    dispatch({ type: LOGIN_FAILURE, payload:errorMessage });
  }
};

export const logout = () => async (dispatch) => {
  await axios.post('/api/logout');
  dispatch({ type: LOGOUT });
};
