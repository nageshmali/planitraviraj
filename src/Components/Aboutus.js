import React from 'react'
import { Link } from 'react-router-dom'


function Aboutus() {
  return (
    <>
        <div className="aboutUs md:relative">
            <img src="Aboutus.png" alt="" className='md:h-[600px] mt-6 md:mt-0 md:w-auto'/>
            <h1 className='md:absolute text-xl ml-10 md:ml-0 mt-5 underline underline-offset-4 md:text-3xl md:font-semibold md:top-10 md:left-[46%]'>About Us</h1>
            <div className="para w-[300px] ml-10 md:w-[500px] text-sm mt-5 md:mt-0 md:absolute md:top-36 md:right-36 md:text-base md:font-semibold">
                <p>A single tool for all social media tasks: for everyone, whatever your skills, knowledge, and resources. Because we believe that all people, businesses, and companies, no matter their size or budget, deserve to have a prominent place in the digital world in order to connect with their audiences and make their goals a reality.</p>

                <p className='mt-2'>Your all-in one solution for effortless social media schedule. Whether you're a business owner, marketer, influencer, or content creator, Planit revolutionizes the way you engage with your audience across various platforms.
                </p>

                <div className="btn mt-8">
                    <Link to="/" className="py-2 px-3 md:py-3 md:px-4 rounded hover:bg-[#f04a6eda] bg-[#F64C72] text-white">Return to Home</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutus
