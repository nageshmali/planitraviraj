import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './Navbar';
import Features from './Features';
import Flow from './Flow';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Heropage() {
    const {loginWithRedirect,isAuthenticated} = useAuth0();
  return (
    <>  
        <Navbar/>
        <div className="homePage">
        <img className="hidden md:block" src="Home.png" alt="" />
        <img className="block md:hidden" src="MobHome.png" alt="" />
        <div className="data flex absolute md:bottom-20 text-white md:font-medium w-60 text-sm md:text-base bottom-40 left-5 md:left-80 md:w-96">
          <p>A single tool for all social media tasks: for everyone, whatever your skills, knowledge, and resources. Because we believe that all people, businesses, and companies, no matter their size or budget, deserve to have a prominent place in the digital world in order to connect with their audiences and make their goals a reality.</p>

          
        </div>
        <div className="cta flex absolute right-28 bottom-24 md:bottom-44 rounded items-center justify-center md:right-64">
            {
              !isAuthenticated &&
              <button onClick={()=> loginWithRedirect()} className="flex font-medium rounded-full text-sm py-3 px-4 items-center bg-[#E12F6D] justify-center hover:bg-[#3638a1] md:bg-[#242582] text-white gap-2 md:text-xl md:py-4 md:px-7">Create your free account <FaArrowRight /></button>

            }
            {
              isAuthenticated &&
              <Link to="/loggedin" className="flex font-medium rounded-full text-sm py-3 px-4 items-center bg-[#E12F6D] justify-center hover:bg-[#3638a1] md:bg-[#242582] text-white gap-2 md:text-xl md:py-4 md:px-7">Link your Socials & Post<FaArrowRight /></Link>
            }
            

          </div>

        </div>
        <Features/>
        <Flow/>
        <Footer/>


    </>
  )
}

export default Heropage
