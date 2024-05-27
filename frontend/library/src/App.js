import logo from './logo.svg';
import './App.css';
   import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
const NAVBAR_CLASS = "bg-white dark:bg-zinc-800 p-4 shadow-md";
const BUTTON_CLASS = "border border-zinc-600 dark:border-zinc-300 text-zinc-600 dark:text-zinc-300 px-4 py-2 rounded-full";
function App() {
  return (
    <div className="dark:bg-zinc-800">
<RouterProvider  router={routes} />


    </div>
  );
}

export default App;
