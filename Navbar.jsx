import React from 'react'

function Navbar() {
  return (
   <>
   <nav class="bg-gray-800 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      
     
      <div class="flex items-center">
        <span class="text-xl font-bold">Movies</span>
      </div>

      
      <div class="hidden md:flex space-x-4 items-center">
        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded">About</a>
        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded">Services</a>
        <a href="#" class="hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
      </div>

      
      <div class="md:hidden flex items-center">
        <button id="menu-btn" class="text-gray-300 focus:outline-none">
         
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  
  <div id="menu" class="md:hidden hidden px-2 pb-3 space-y-1">
    <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700">Home</a>
    <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700">About</a>
    <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700">Services</a>
    <a href="#" class="block px-3 py-2 rounded hover:bg-gray-700">Contact</a>
  </div>
</nav>



   </>
  )
}

export default Navbar