import React from 'react'

function Header() {
    return (

        <div class="relative h-screen overflow-hidden bg-indigo-900">
            <img alt='s' src="https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1600" class="absolute object-cover w-full h-full" />
            <div class="absolute inset-0 bg-black opacity-25">
            </div>
            <header class="absolute top-0 left-0 right-0 z-20">
                <nav class="container px-6 py-4 mx-auto md:px-12">
                    <div class="items-center justify-center md:flex">
                        <div class="flex items-center justify-between">
                            {/* <div class="hidden">
              <button class="text-white focus:outline-none">
                <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </svg>
              </button>
            </div> */}
                        </div>
                        <div class="items-center text-center md:flex">
                            <a href="/" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Home
                            </a>
                            <a href="/" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Info
                            </a>
                            <a href="/admin/login" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Admin
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div class="relative z-10 flex flex-col items-center w-full">
                    <h1 class="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
                        Code Crafters
                    </h1>
                    <p className='text-center mt-3 text-white text-xl sm:text-xl'>
                        We are Crafting the code in new way...!!
                    </p>
                    <a href="/dashboard" class="block px-4 rounded-xl py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900">
                        Dashboard
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header