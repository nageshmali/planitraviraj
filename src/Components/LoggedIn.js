import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

function LoggedIn() {

    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  return (
    <>
        <div className="mainPage md:flex">

            

            <div className="left md:w-[28%]">
                

                <img src="PlanIT.png" className='hidden md:block md:w-auto h-[100vh]' alt="" />
                <img src="PhoneLoggedIn.png" className='md:hidden block h-[100vh]' alt="" />
                
                
            </div>

            <div className="md:relative absolute top-5 md:top-0  right flex items-center justify-center w-[98%] md:w-[72%]">
            <Link to="/" className='absolute hidden md:block top-10 left-5 py-2 px-4 bg-[#F64C72] rounded text-white font-medium'>Go back</Link>
                <div className="mainRight flex flex-col md:items-center justify-center gap-10">
                    <div className="head flex md:flex-row flex-col gap-1 md:mt-0 mt-5 md:text-black text-[#f5f0f0] md:gap-20  md:items-center md:ml-0 ml-4 md:justify-center">
                        <img src="logoLoggedIn.png" className='w-36 md:w-56' alt="" />
                        {
                            isAuthenticated &&
                            <h1 className='text-sm md:text-lg md:font-medium'>Welcome, {user.name}</h1>
                        }
                    </div>

                    <h1 className='text-2xl md:ml-0 ml-[72px] font-semibold text-[#f5f0f0] md:text-black md:text-4xl md:font-bold'>Connect your Social Media Accounts</h1>

                    <div className="connect-socials md:ml-0 ml-[170px] w-48 md:w-[580px] flex md:flex-row gap-4 flex-col md:gap-10 ">
                        <button className="md:font-medium rounded md:rounded-full text-sm py-3 px-4 items-center justify-center hover:bg-[#3638a1] bg-[#242582] text-white md:text-xl md:py-4 md:px-7">Link Facebook Account</button>
                        
                        <button className="md:font-medium rounded md:rounded-full text-sm py-3 px-4 items-center justify-center hover:bg-[#3638a1] bg-[#242582] text-white md:text-xl md:py-4 md:px-7">Link Instagram Account</button>
                        
                    </div>


                    <div className="schedule mt-36 ml-20 md:ml-0 md:mt-20">
                        <Link to="/schedule" className="font-medium rounded text-sm py-3 px-4 items-center bg-[#F64C72] justify-center hover:bg-[#F64C72] md:bg-[#F64C72] text-white gap-2 md:text-xl md:py-4 md:px-7">Schedule Posts</Link>
                    </div>

                </div>
            </div>

        </div>
    </>
  )
}

export default LoggedIn
