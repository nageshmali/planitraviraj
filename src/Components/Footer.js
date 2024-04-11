import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {

    const gotoTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="footer relative md:flex md:justify-between overflow-hidden px-4 py-6  md:px-10 md:py-20 text-[#f5f0f0] bg-[#F64C72]">

                <div className="left w-36 md:ml-10 md:w-[20%]">
                    <div className="box flex flex-col md:gap-4 gap-2">
                        <img src="planMain.png" alt="" className="w-36 md:w-56 rounded cursor-pointer" />
                        <div className="socials text-2xl md:text-4xl flex gap-2 md:gap-7">
                            <div className="cursor-pointer">
                                <FaFacebook />
                            </div>
                            <div className="cursor-pointer">
                                <PiInstagramLogoFill />
                            </div>
                            <div className="cursor-pointer">
                                <FaSquareXTwitter />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="to-top flex">

                    <div className="right flex md:gap-20 mt-4 md:mt-0 gap-8 text-base md:text-lg font-medium md:mr-20">

                        <div className="col1 flex flex-col gap-6">
                            <Link onClick={()=>gotoTop()} className="hover:underline decoration-2 underline-offset-8 
                            cursor-pointer">Home</Link>
                            <h1 className="hover:underline decoration-2 underline-offset-8 cursor-pointer">Socials</h1>
                            <h1 className="hover:underline decoration-2 underline-offset-8 cursor-pointer">Company</h1>
                            <Link to="/about" className="hover:underline decoration-2 underline-offset-8
                            cursor-pointer">About</Link>
                        </div>

                        <div className="col2 flex flex-col gap-6">
                            <h1 className="hover:underline decoration-2 underline-offset-8 cursor-pointer">Integrations</h1>
                            <Link to='/loggedin' className="hover:underline decoration-2 underline-offset-8 cursor-pointer">Schedule</Link>
                            <Link to='/loggedin' className="hover:underline decoration-2 underline-offset-8 cursor-pointer">Facebook</Link>
                            <Link to='/loggedin' className="hover:underline decoration-2 underline-offset-8 cursor-pointer">Instagram</Link>
                        </div>
                    </div>

                    <button onClick={() => gotoTop()} className="md:font-medium hover:bg-[#3638a1] bg-[#242582] text-white md:gap-2 md:h-12 md:text-lg flex items-center justify-center md:mt-[135px] 
                    md:w-46 md:px-4 h-10 py-2 px-4 gap-1 ml-6 md:ml-0 mt-[150px] text-sm md:py-2 rounded">Scroll to Top <FaArrowUp/></button>

                </div>

                <img className="absolute w-36 md:w-72 top-2 md:top-0 right-[-40px] md:right-[-60px]" src="d1.png" alt="" />
                <img className="absolute w-36 md:w-72 bottom-20 md:bottom-[-60px] left-72 md:left-80" src="d2.png" alt="" />

            </div>
        </>
    )
}

export default Footer
