import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='bg-gray-600 p-4 flex justify-between items-center'>
        <div>
          <img
            className='h-8 rounded-md mr-10'
            src="src\Images\IRS logo.png" alt="Logo" />
        </div>

        <div>
          <ul className='flex gap-10 ml-10 items-center'>
            <li>
              <NavLink
                to="/"
                className={(isActive) =>
                  `text-white font-bold px-1 bg-gray-400 rounded-md ${isActive ? "text-black" : "text-white"}`
              }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
              to="/About"
              className={(isActive) => 
              `text-white font-bold px-1 bg-gray-400 rounded-md ${isActive ? "text-black" : "text-white"}`
              }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
              to="/Contanct"
              className={(isActive) => 
              `text-white font-bold px-1 bg-gray-400 rounded-md ${isActive ? "text-black" : "text-white"}`
            }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
              to="/Product"
              className={(isActive) => 
              `text-white font-bold px-1 bg-gray-400 rounded-md ${isActive ? "text-black" : "text-white"}`
              }
              >
                Product
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='gap-2 flex ml-12'>
          <button className='text-white font-bold px-1 bg-gray-400 rounded-md'>
            Log in
          </button>

          <button className='text-white font-bold px-1 bg-gray-400 rounded-md'>
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header