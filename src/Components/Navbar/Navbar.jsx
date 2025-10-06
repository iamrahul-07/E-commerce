import React from 'react'

const Navbar = () => {
  return (
    <div>
       {/* Upper navbar */}
       <div>
        <div>
            <div>
                <a href="#">
                    <img src="" alt="Logo" />
                </a>
            </div>
            {/* Search bar and order button */}
            <div>
                <div className='group'>
                    <input type="text" placeholder='Search...' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400'/>
                </div>
            </div>
        </div>
       </div>
       {/* Lower Navbar */}
    </div>
  )
}

export default Navbar