import React,{useState} from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  const [list, setList] = useState("hidden")

  const [menu, setmenu] = useState("block");

  const [out, setout] = useState("hidden");
  const [out1, setout1] = useState("hidden");
  const [out2, setout2] = useState("block");

  const showList = () => {

    setList("block");
    setmenu("hidden");
    setout("block")
  }

  const hideList = () => {
    setList("hidden");
    setmenu("block");
  }
    return (
        <>
            <div className="Navbar flex items-center justify-around bg-[#242582] text-[#f5f0f0] py-6">

                <button onClick={showList} className={`${menu} text-xl md:hidden transition-all ease-in duration-200`}>
                    <TiThMenu />
                </button>

                <button onClick={hideList} className={`md:hidden ${list} text-2xl transition-all ease-in duration-200`}>
                    <IoClose />
                </button>

                <div className="logo cursor-pointer">
                    <Link to="/"><img src="planMain.png" className="w-28 md:w-48 rounded" alt="" /></Link>
                </div>

                <div className="navs hidden md:flex md:gap-14">
                    <Link to="/" className="hover:underline underline-offset-8 text-lg font-medium cursor-pointer">Home</Link>

                    {
                        isAuthenticated && 
                        <Link to="/loggedin" className="hover:underline underline-offset-8 text-lg font-medium cursor-pointer">Schedule Post</Link>
                    }

                    {
                        !isAuthenticated && 
                        <button onClick={() => loginWithRedirect()} className="hover:underline underline-offset-8 text-lg font-medium cursor-pointer">Schedule Post</button>
                    }

                    <Link to="/about" className="hover:underline underline-offset-8 text-lg font-medium cursor-pointer">About</Link>
                    
                </div>

                <div className={`bg-[#2F2FA2] flex flex-col md:hidden absolute ${list} transition-all ease-out duration-200 left-0 top-[80px] px-4 py-4`}>
                    <Link to="/" className="text-xl mb-2 cursor-pointer">Home</Link>
                    {
                        isAuthenticated &&
                        <Link to="/loggedin" className="text-xl mb-2 cursor-pointer">Schedule Post</Link>
                    }
                    {
                        !isAuthenticated &&
                        <button onClick={() => loginWithRedirect()} className="text-xl mb-2 cursor-pointer">Schedule Post</button>
                    }
                    <Link to="/about" className="text-xl mb-2 cursor-pointer">About</Link>
                    {
                    isAuthenticated && 
                    <>
                    <button className={`${out} hover:bg-[#fd5b7e] bg-[#F64C72] py-1 px-2 md:py-2 md:px-4 text-xl border-black rounded md:text-xl`} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    </>
                    }   
                </div>

                <div className="userinfo">
 

                </div>

                <div className="log flex gap-4 items-center justify-center">
                    {isAuthenticated &&
                        <>
                            <div className=" md:flex md:gap-2">
                                <h1 className="text-sm md:text-xl">Welcome,</h1>
                                <p className="underline underline-offset-8 text-sm md:text-xl">{user.name}</p>
                            </div>
                        </>}
                    {
                        isAuthenticated ? <button className={` ${out1} md:${out2} bg-[#F64C72] py-1 px-2 md:py-2 md:px-4 text-sm border-black  hover:bg-[#fd5b7e] rounded md:text-xl`} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                            :
                        <button onClick={() => loginWithRedirect()} className={`bg-[#F64C72] py-1 px-2 md:py-2 md:px-4 border-black hover:bg-[#fd5b7e] rounded md:font-medium text-md md:text-lg`}>Log In</button>
                    }


                </div>
            </div>
        </>
    )
}

export default Navbar
