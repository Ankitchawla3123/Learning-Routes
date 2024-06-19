import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
      <div className='bg-white border-y'>
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <div className='flex justify-between'>
            <div className="flex">
              <div className=' self-center'>
              Logo here
              </div>
      
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
              <div>
                <h2 className='mb-4  text-sm font-semibold text-gray-900 uppercase'>Resources</h2>
                <ul className='text-gray-500 font-medium'>
                  <li>
                    <div className='hover:underline cursor-pointer'>Home</div>
                  </li>
                  
                  <li>
                    <div className='hover:underline cursor-pointer'>About us</div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase'>Follow us</h2>
                <ul className='text-gray-500 font-medium'>
                  <li>
                    <div className='hover:underline cursor-pointer'>GithHub</div>

                  </li>
                  <li>
                    <div className='hover:underline cursor-pointer'>Discord</div>

                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase'>Follow us</h2>
                <ul className='text-gray-500 font-medium'>
                  <li>
                    <div className='hover:underline cursor-pointer'>GithHub</div>

                  </li>
                  <li>
                    <div className='hover:underline cursor-pointer'>Discord</div>

                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer