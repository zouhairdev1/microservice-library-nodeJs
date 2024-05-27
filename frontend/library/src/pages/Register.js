
import React from 'react';

const inputClasses = 'mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
const labelClasses = 'block text-sm font-medium text-zinc-700 dark:text-zinc-300';
const buttonClasses = 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-800">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-200 mb-4">Library Register</h2>
                <form className="w-full">
                    <div className="mb-4">
                        <label htmlFor="username" className={labelClasses}>Username</label>
                        <input type="text" id="username" name="username" className={inputClasses} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input type="email" id="email" name="email" className={inputClasses} required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input type="password" id="password" name="password" className={inputClasses} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className={labelClasses}>Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" className={inputClasses} required />
                    </div>
                    <button type="submit" className={buttonClasses}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
