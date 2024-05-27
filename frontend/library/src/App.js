import logo from './logo.svg';
import './App.css';
   import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from './store/features/auth/actions';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    const isAuth=user?.isAuthenticated
    if (isAuth) {
      dispatch({ type: LOGIN_SUCCESS, payload: {token:user.token,username:user.username}})
    }
    
  },[])
  return (
    <div className="dark:bg-zinc-800">
<RouterProvider  router={routes} />


    </div>
  );
}

export default App;
