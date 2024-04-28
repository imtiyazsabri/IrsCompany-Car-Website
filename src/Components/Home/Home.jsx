import React from 'react'

function Home() {
    return (
        <div>
            <div className='flex'>
                <div>
                    <div>
                        <img className='h-80' src="src\Images\car1.png" alt="" />
                    </div>
                    <div>
                        <img className='pl-6 h-80' src="src\Images\car2.png" alt="" />
                    </div>
                </div>

                <div className='mt-60'>
                    <div className=' ml-60 items-center'>
                        <h1 className='text-5xl font-serif font-extrabold' >Download Services</h1>
                        <p className='mt-6 mb-6 font-semibold font-sans' >Find Out What Drives The Company That Drives India</p>
                        <button className='mt-4 bg-gray-400 p-4 rounded-full font-bold' >Download Now</button>
                    </div>
                </div>
            </div>

            <div className='m-6'>
                <h1 className='text-3xl text-center font-bold'>DISCOVER OUR</h1>
                <p className='text-8xl text-center font-semibold'>RANGE</p>
            </div>

            <div className='flex'>
                <div>
                    <img src="src\Images\car group 1.webp" alt="" />
                </div>
                <div>
                    <img src="src\Images\car group 2.webp" alt="" />
                </div>
                <div>
                    <img src="src\Images\car group 3.webp" alt="" />
                </div>
                <div>
                    <img src="src\Images\car group 4.webp" alt="" />
                </div>
            </div>

            <div className='flex mb-4'>
                <div>
                    <img src="src\Images\car group 5.webp" alt="" />
                </div>
                <div>
                    <img src="src\Images\car group 6.webp" alt="" />
                </div>
                <div>
                    <img src="src\Images\car group 7.webp" alt="" />
                </div>
                <div>
                    <img src="src\Images\car group 8.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home