
import React, { useState } from 'react';
import { register } from '../store/features/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const inputClasses = 'mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
const labelClasses = 'block text-sm font-medium text-zinc-700 dark:text-zinc-300';
const buttonClasses = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const credentials={username,email,password}
  

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password===confirmPassword) {
        dispatch(register(credentials));
      console.log({ username,password  });
      }
      
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-800">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md max-w-md w-full">
                <Link to={'/'} className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-4">Library Register</Link>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className={labelClasses}>Username</label>
                        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} name="username" className={inputClasses} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} name="email" className={inputClasses} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" className={inputClasses} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className={labelClasses}>Confirm Password</label>
                        <input type="password" id="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" className={inputClasses} required />
                    </div>
                    <button type="submit" className={buttonClasses}> {loading ? 'Registering in...' : 'Register'}</button>
                </form>
                {error && <div className='text-red-600'>{error}</div>}
            </div>
        </div>
    );
};

export default Register;
