import React from 'react'

function About() {
    return (
        <div>
            <div>
                <p className='text-center text-3xl font-bold m-4' >OUR</p>
                <p className='text-center text-8xl font-bold m-4' >VALUES</p>
            </div>

            <div className='flex justify-center m-4'>
                <div className='m-4'>
                    <img width={180} src="src\Images\About 1.webp" alt="" />
                </div>
                <div className='m-4'>
                    <img width={180} src="src\Images\About 2.webp" alt="" />
                </div>
                <div className='m-4'>
                    <img width={180} src="src\Images\About 3.webp" alt="" />
                </div>
                <div className='m-4'>
                    <img width={180} src="src\Images\About 4.webp" alt="" />
                </div>
                <div className='m-4'>
                    <img width={180} src="src\Images\About 5.webp" alt="" />
                </div>
            </div>

            <div className='flex justify-center m-20'>
                <div className='mr-20 bg-gray-400 p-4 font-bold rounded-full'>
                    <button>WORK WITH US</button>
                </div>
                <div className='mr-20 bg-gray-400 p-4 font-bold rounded-full'>
                    <button>TRAIN WITH US</button>
                </div>
            </div>

            <div className='flex justify-evenly'>
                <div className='m-8 bg-gray-400 p-4'>
                    <p className='text-4xl font-bold font-mono'>27999972</p>
                    <p className='text-xl font-semibold font-mono'>HAPPY CUSTOMERS AND COUNTING</p>
                </div>
                <div className='m-8 bg-gray-400 p-4'>
                    <p className='text-4xl font-bold font-mono'>14.75L</p>
                    <p className='text-xl font-semibold font-mono'>CARS SERVICED EVERY MONTH</p>
                </div>
                <div className='m-8 bg-gray-400 p-4'>
                    <p className='text-4xl font-bold font-mono'>3.5K</p>
                    <p className='text-xl font-semibold font-mono'>EXCLUSIVE SHOWROOMS</p>
                </div>
            </div>
        </div>
    )
}

export default About