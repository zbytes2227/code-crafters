import React from 'react'

function Navbar() {
  return (
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col items-center">
    <nav class="flex flex-wrap items-center text-base md:m-auto">
      <a href='/admin/dashboard/' class="mr-5 hover:text-gray-900">Home</a>

    </nav>
  </div>
</header>
  )
}

export default Navbar