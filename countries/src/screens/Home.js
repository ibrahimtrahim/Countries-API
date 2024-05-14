import React, { useState } from 'react'
import { Card } from '../components/Card';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <main className='dark:bg-slate-800'>
    <section className='max-w-screen-xl flex flex-wrap items-center lg:justify-between mx-auto p-4'>
      <input type="text" id="search-navbar" className="block mb-8 w-full md:w-2/5 p-2 ps-10 text-sm text-gray-900 rounded-md shadow bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a country..." />
      <div>
        <button onClick={()=> setIsOpen((prev) => !prev)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="relative text-gray-700 bg-gray-50 rounded-md shadow text-sm px-5 py-2.5 text-left inline-flex items-center dark:bg-gray-700 dark:text-white dark:focus:ring-blue-800" type="button">Filter by Region
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

        {!isOpen && <div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
    </div>
        }
        </div>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-between flex-wrap'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
    </>
  )
}

export default Home