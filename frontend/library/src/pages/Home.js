import React from 'react';
import { Link } from 'react-router-dom';
const BUTTON_CLASSES = "px-4 py-2 mt-3 rounded-full hover:bg-yellow-600 transition";

export default function Home(){
    return(
   <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('images/covers.png')"}}>
      <div className="absolute inset-0 bg-yellow-100 bg-opacity-75 dark:bg-zinc-900 dark:bg-opacity-75"></div>
      <div className="relative z-10 text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
          Your <span className="text-yellow-600 dark:text-yellow-400">online</span> bookshelf
        </h1>
        <p className="my-4 text-lg text-zinc-700 dark:text-zinc-300">
          The preferred bookmarking app for book lovers. Create your online bookshelf and add to your library anytime, anywhere. Stay organized with shelves and never lose track of a book again!
        </p>
        <Link to={'/Register'} className={`${BUTTON_CLASSES} bg-yellow-600 text-white`}>Start Organizing</Link>
      </div>
    </div>
    )
}







