import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT, logout } from '../store/features/auth/actions';


const NAVBAR_CLASS = "bg-white dark:bg-zinc-800 p-4 shadow-md";
const BUTTON_CLASSES = 'px-4 py-2 rounded-full hover:bg-yellow-600 transition'
const sharedClasses = {
    button: 'bg-transparent text-yellow-400 border border-yellow-400 rounded-full px-4 py-2 transition-all duration-300 ease-in-out',
    input: 'absolute top-0 left-0 right-0 bottom-0 w-0 opacity-0 border border-yellow-400 rounded-full px-4 py-2 transition-all duration-300 ease-in-out '
}
const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch=useDispatch();
    const handleClickLogout=()=>dispatch({ type: LOGOUT })

    const handleSearchClick = () => {
      console.log(localStorage);
      setIsExpanded(!isExpanded);
    };
  return (
    <nav className={NAVBAR_CLASS}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="images/logo.png" alt="Bookmark Logo" className="mr-2 w-7 h-7" />
          <span className="text-yellow-600 dark:text-yellow-400 font-bold text-xl">Books</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-zinc-600 dark:text-zinc-300 hover:text-yellow-600 dark:hover:text-yellow-400">Home</Link>
          <Link to="/Explore" className="text-zinc-600 dark:text-zinc-300 hover:text-yellow-600 dark:hover:text-yellow-400">Explore</Link>
          <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-yellow-600 dark:hover:text-yellow-400">Library</a>
          <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-yellow-600 dark:hover:text-yellow-400">Shelves</a>
        </div>
        <div className="flex space-x-4">
        <div className="flex items-center justify-center  bg-zinc-800">
      <div className="relative">
        <button
          className={`${sharedClasses.button}`}
          onClick={handleSearchClick}
        >
          Search for Books
        </button>
        <input
          type="text"
          placeholder="Search..."
          className={`${sharedClasses.input} ${isExpanded ? 'w-full opacity-100' : ''}`}
          autoFocus={isExpanded}
        />
      </div>
    </div>
    { isAuthenticated?<button type='button' onClick={handleClickLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700">Logout</button>
    : <Link  to={'/Login'} className={`${BUTTON_CLASSES} bg-yellow-600 text-white`}>Login</Link>


    }
          
        </div>
      </div>
    </nav>
  
  );
};

export default Navbar;






