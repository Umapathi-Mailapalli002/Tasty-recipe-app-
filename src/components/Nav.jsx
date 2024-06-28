import React from 'react'
import LOGO from "../images/logo.png";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const show = () => {
   setShowMenu(showMenu => !showMenu)
  };
  return (
    <>
          <div className="absolute w-full h-full bg-black opacity-60"></div>
    <div className='sticky top-0'>
        
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 sm:p-4 lg:p-4 p-2">
            <a href="/" className="flex items-center rtl:space-x-reverse">
              <img src={LOGO} className="absolute size-20" alt="Tasty Logo" />
              <span className="self-center ml-14 text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tasty
              </span>
            </a>
            <button
             onClick={show}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
           {isSmallScreen && showMenu && (
            <div className=" w-full z-10  md:block md:w-auto " id="navbar-default">
            <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row sm:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/"
                  
                  className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/#recipes" onClick={() => setShowMenu(false)}
                  
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Explore
                </a>
              </li>
              <li>
                <a href="/Favorite"
                  
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Favorite
                </a>
              </li>
            </ul>
          </div>
           )}

        {!isSmallScreen &&   (<div className="w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/"
              className="block py-2 px-3 md:hover:text-blue-500 text-white rounded md:bg-transparent md:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#recipes"
             
              className="block py-2 px-3  active:bg-blue-700 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  active:md:text-blue-700 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Explore 
            </a>
          </li>
          <li>
            <a href="/favorite"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Favorite
            </a>
          </li>
        </ul>
      </div>)
        }
          </div>
        </nav>
    </div>
    </>
  )
}

export default Nav
