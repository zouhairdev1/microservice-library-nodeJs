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
    const [isDarkMode,setIsDarkMode]=useState(false)
    const visibl='false'
    const notVisibl="hidden"

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
        <div className="flex items-center justify-center dark:bg-zinc-800">
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
    <button onClick={()=> {setIsDarkMode(prev=>!prev)
     const rootElement = document.documentElement;
     console.log(rootElement);
         if (isDarkMode) {
          rootElement.classList.remove('dark');
          setIsDarkMode(false)
          console.log(rootElement);
        } else {
          rootElement.classList.add('dark');
          setIsDarkMode(true)
          console.log(rootElement);
        }
    }} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10' data-state='closed'>
      <svg data-toggle-icon='moon' className= {isDarkMode?visibl+' inline-block h-3.5 w-3.5':notVisibl+' inline-block h-3.5 w-3.5'} aria-hidden='false' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox="0 0 18 20" >
        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
      </svg>
      <svg data-toggle-icon='sun' className= {!isDarkMode?visibl+' inline-block h-3.5 w-3.5':notVisibl+' inline-block h-3.5 w-3.5'}  aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox="0 0 20 20" >
        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
      </svg>
    </button>
    { isAuthenticated?<button type='button' onClick={handleClickLogout} className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700">Logout</button>
    : <Link  to={'/Login'} className={`${BUTTON_CLASSES} bg-yellow-600 text-white`}>Login</Link>


    }
    
          
        </div>
      </div>
    </nav>
  
  );
};

export default Navbar;






