'use client'
import { useState } from 'react';
import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
import {AiOutlineMenu, AiOutlineClose , AiOutlineInstagram , AiOutlineFacebook , AiOutlineTwitter} from 'react-icons/ai'

const Navbar1 = () => {
    const { user, error, isLoading } = useUser();
    const [show , setShow] = useState(false);

    const handleNav = () => {
      setShow(!show)
    }

  return (
    <nav>
    {/* <div>
    

      <div className="hidden lg:block">

      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
      <a className="font-bold text-2xl lg:text-4xl" href="#">
      Med+
      </a>
      
     
          
        
        
        <ul className="inline-flex">

        <li>
          <a
            type="button"
            href="/ai-chatbot"
            className="m-2"
            >
              Trainer
            </a>
          </li>
         
          <li>
            <a
            type="button" 
            href="/goals"
            className="m-2"
            >
              Goals
            </a>
          </li>
          
          <li>
          <a
            type="button"
            href="/api/auth/logout"
            className="black_btn m-2"
            
            >
                        Log Out
            </a>
          </li>
        </ul>
        </div>
      </div> */}
 {/* Mobile Menu */}

 {/* <div onClick={handleNav}className='md:hidden cursor-pointer pl-24'>
        <AiOutlineMenu size={25}/>
      </div>
      <div className={
        show?"fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        :"fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
      <div className='flex w-full items-center justify-end'>
      <div onClick={handleNav}className=' md:hidden cursor-pointer pl-24'>
        <AiOutlineClose size={25}/>
      </div>
      </div>
      <div className='flex-col py-4'>
      <ul className="">
          <li>
          <a
            type="button"
            href="/profile"
            className="py-4 cursor-pointer"
            >
              Profile
            </a>
          </li>
          <li>
          <a
            type="button"
            href="/ai-chatbot"
            className="py-4 cursor-pointer"
            >
              Trainer
            </a>
          </li>
          <li>
          <a
            type="button"
            href="/goals"
            className="py-4 cursor-pointer"
            >
              Goals
            </a>
          </li>
          <li>
          <a
            type="button"
            href="/api/auth/logout"
            className="py-4 cursor-pointer"
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    

     <div className='flex flex-row justify-around pt-10 items-center'>
      <AiOutlineInstagram size={25} className="cursor-point" />
      <AiOutlineFacebook size={25} className="cursor-point" />
      <AiOutlineTwitter size={25} className="cursor-point" />
     </div>
    </div>
  </div> */}


    <div className="fixed z-50 w-11/12 h-16 max-w-md -translate-x-1/2  border border-gray-200 rounded-full bg-black bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <a
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          href='/'
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span   className="sr-only">Home</span>
        </a>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          data-tooltip-target="tooltip-wallet"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          href='/leaderboard'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>

          <span className="sr-only">Leaderboard</span>
        </a>
        <div
          id="tooltip-wallet"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Leaderboard
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="flex items-center justify-center">
          <a
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg rounded-full bg-red-500 hover:bg-red-100 focus:outline-none dark:focus:ring-blue-800"
            href='/goals'
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
            <span className="sr-only">Goals</span>
          </a>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Goals
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          data-tooltip-target="tooltip-settings"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          href='https://statuscode0chatbot.streamlit.app/'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
          </svg>

          <span className="sr-only">AI</span>
        </a>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          AI
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          data-tooltip-target="tooltip-profile"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          href='/profile'
          
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <span className="sr-only">Profile</span>
        </a>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>

    {/* </div> */}

  </nav>
  
  )
}

export default Navbar1