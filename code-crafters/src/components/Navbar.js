import React from 'react'

function Navbar() {
  return (
<header class="text-gray-600 body-font">
<h6 className='text-center bg-gray-200'>BASE TRIAL VERSION 2.11 - UnderDev - ZBYTES 😁</h6>
  <div class="container mx-auto flex flex-wrap p-5 flex-col items-center">
    <nav class="flex flex-wrap items-center text-base md:m-auto">
      <a href='/' class="mr-5 hover:text-gray-900">Home</a>
      <a href='/dashboard' class="mr-5 hover:text-gray-900">Dashboard</a>
      <a href='/contact' class="mr-5 hover:text-gray-900">Contact</a>
    </nav>
  </div>
</header>
  )
}

export default Navbar