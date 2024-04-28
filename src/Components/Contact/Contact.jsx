import React from 'react'

function Contact() {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='m-8 p-4 bg-gray-400'>
                    <div>
                        <h1 className="text-5xl font-bold text-center">Get in touch:</h1>
                        <h2 className='text-2xl text-center m-4'>Fill in the form to start a conversation</h2>
                    </div>
                    <div className='flex gap-2 m-4'>
                        <img width={25} src="src\Images\Location.png" alt="" />
                        <p>Gurgaon sector 49 Hariyana 122102</p>
                    </div>

                    <div className='flex gap-2 m-4'>
                        <img width={25} src="src\Images\call.png" alt="" />
                        <p>+1188877700</p>
                    </div>

                    <div className='flex gap-2 m-4'>
                        <img width={25} src="src\Images\mail.png" alt="" />
                        <p>info@irs.org</p>
                    </div>
                </div>

                <div className='m-8 bg-gray-400 p-4'>
                    <div className='m-4 '>
                        <input className='p-2 rounded-md' type="text" placeholder='Full Name' />
                    </div>

                    <div className='m-4'>
                        <input className='p-2 rounded-md' type="text" placeholder='Email' />
                    </div>

                    <div className='m-4'>
                        <input className='p-2 rounded-md' type="text" placeholder='Telephone Number' />
                    </div>

                    <div className='m-4'>
                        <button className='p-2 bg-gray-200 rounded-md font-bold'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact