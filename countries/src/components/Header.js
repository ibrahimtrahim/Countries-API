import React from 'react';
import Switcher from './Switcher';

const Header = () => {
  return (
    <header>
        <nav class="border-gray-200 shadow bg-gray-50 dark:bg-gray-700 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center sm:text-sm md:text-2xl font-semibold whitespace-nowrap dark:text-white">Where in the world?</span>
                <div className='flex items-center justify-between'>
                  <div className='mr-2'><Switcher /></div><span class="sm:text-xs lg:text-base whitespace-nowrap dark:text-white">Dark Mode</span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header