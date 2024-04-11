import Navbar from './Navbar'
import React, { useEffect, useState } from 'react'
import axios from "axios";

import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

function Schedule() {

    const [image,setImage] =  useState(null);
    const [allImage,setAllImage] = useState(null);

    useEffect(()=>{
        getImage();
    }, []);

    

    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    };

    const submitImage = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("image",image);
    
        const result = await axios.post(
          "http://localhost:5000/upload-image",
          formData,
          {
            headers : { "Content-Type": "multipart/form-data"},
          }
        );

        window.location.reload(1);
    };

    const getImage = async () => {
        const result = await axios.get("http://localhost:5000/get-image");
        console.log(result);
        console.log(result.data);
        setAllImage(result.data.data);
        
        // window.location.reload(1);
        
    };


  return (
    <>
        <div className="schedulePost h-[100vh]">
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="Sp flex">
                <div className="linkedAccounts w-[20%]  py-10 px-6">
                    <h1 className='font-medium text-xl underline underline-offset-4'>Linked Accounts</h1>

                    <div className="accounts flex flex-col mt-4 gap-4">
                        <div className="f flex gap-2 text-2xl items-center">
                            <FaFacebook/>
                            <h1 className='font-medium text-xl'>Facebook</h1>
                        </div>
                        <div className="f flex gap-2 text-2xl items-center">
                            <PiInstagramLogoFill/>
                            <h1 className='font-medium text-xl'>Instagram</h1>
                        </div>
                        
                    </div>
                </div>

                <div className="DesignPost w-[80%] flex items-center justify-center">
                    <div className="design w-[60%] border gap-4 flex items-center justify-center flex-col">
                        <h1 className='mt-4 font-medium text-xl'>Design your post here,</h1>

                        <form onSubmit={submitImage} action="" className='flex'>
                            <input onChange={onInputChange} type="file" accept='image/' name="" id=""/>

                            <button type="submit" className='py-2 px-3 rounded font-medium bg-[#E12F6D] text-white'>Upload Image</button>
                        </form>

                        <div className="imageP border w-[500px] h-[300px]">
                            {
                                allImage == null?"":
                                allImage.map((data,i) => {
                                    return <img key={i} src={require(`../images/${data.image}`)}
                                                className='border h-[300px] w-[500px]' alt='img'/>;
                                })
                            }
                        </div>

                        <textarea name="" className='border mb-4 w-[450px] h-[100px]' placeholder='Enter caption here' id=""></textarea>

                        
                    </div>

                    <div className="ScheduleTime w-[40%] flex flex-col gap-6 items-center justify-center">

                        <h1 className='font-medium text-xl'>Schedule Day, Date and Time.</h1>

                        <input className='font-medium text-lg' type="date" name="" id="" />

                        <input type="time" className='border font-medium text-lg' name="" id="" />

                        <div className="choose flex  font-medium text-lg flex-col items-center justify-center">
                            <h1>Choose which social to post.</h1>
                            <div className="f flex text-2xl items-center gap-2">
                                
                                <input type="checkbox" name="" id="" /> <FaFacebook/>
                                <h1 className="text-lg">facebook</h1>
                            </div>
                            <div className="f flex text-2xl ml-1 items-center gap-2">
                                <input type="checkbox" name="" id="" /> <PiInstagramLogoFill/> 
                                <h1 className='text-lg'>Instagram</h1>
                            </div>
                            
                            
                        </div>
                        

                        <button className="flex  font-medium rounded text-sm py-3 px-4 items-center bg-[#E12F6D] justify-center hover:bg-[#3638a1] md:bg-[#242582] text-white gap-2 md:text-xl md:py-1 md:px-6">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Schedule
