import React from 'react'

function Footer() {
    return (
        <footer>
          <nav className='bg-gray-600 p-2'>
          <hr />
          <br />
            <div className='flex justify-between'>
    
              <div>
                <img
                  className='h-10 rounded-md'
                  src="src\Images\IRS logo.png" alt="Logo"
                />
              </div>
    
              <div className='flex'>
    
                <div className='ml-12 mr-2 text-white'>
                  <h2 className='text-xl font-bold'>RESOURCES</h2>
                  <ul>
                    <li className='pt-1 pb-1'><a href="#">Home</a></li>
                    <li className='pt-1 pb-1'><a href="#">About</a></li>
                  </ul>
                </div>
    
                <div className='ml-12 mr-2 text-white'>
                  <h2 className='text-xl font-bold'>FOLLOW US</h2>
                  <ul>
                    <li className='pt-1 pb-1'><a href="#">Github</a></li>
                    <li className='pt-1 pb-1'><a href="#">Discord</a></li>
                  </ul>
                </div>
    
                <div className='ml-12 mr-2 text-white'>
                  <h2 className='text-xl font-bold'>LEGAL</h2>
                  <ul>
                    <li className='pt-1 pb-1'><a href="#">Privacy Policy</a></li>
                    <li className='pt-1 pb-12'><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
    
              </div>
    
            </div>
    
            <br />
            <hr />
            <br />
    
            <div>
              <div className='text-white'>
                © 2023imtiyazali. All Right Reserved.
              </div>
            </div>
    
            <br />
          </nav>
        </footer>
      )
}

export default Footer