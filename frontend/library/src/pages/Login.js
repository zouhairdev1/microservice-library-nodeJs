import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { login } from '../store/features/auth/actions';


const inputClasses = "mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

const buttonClasses = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const credentials={email,password}
  // Async thunk for user login

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(credentials));
     
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-800">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md max-w-md w-full">
                <Link to={'/'} className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-4">Library Login</Link>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Username or Email</label>
                        <input   type="email" value={email}onChange={(e) => setEmail(e.target.value)} id="email" name="email" className={inputClasses} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
                        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" className={inputClasses} required />
                    </div>
                    <button type="submit" className={buttonClasses} disabled={loading} >  {loading ? 'Logging in...' : 'Login'}</button>
                </form>
                {error && <div className='text-red-600'>{error}</div>}
            </div>
        </div>
    );
};

export default Login;
