import React from 'react'

function Features() {
    return (
        <>
            <div className="moto relative">
                <img className="hidden md:block " src="Clock.png" alt="" />
                <img className="block md:hidden" src="Mobmoto.png" alt="" />
                <h1 className="absolute text-white w-[300px] top-6 font-medium right-10 text-lg md:text-7xl md:font-bold md:w-[720px] md:right-52 md:top-20">One place for socials and all socials in one.</h1>

                <p className="absolute text-sm left-4 font-medium bottom-52 w-[190px] md:text-xl md:left-8 md:top-64 md:w-96">Introducing Planit, <br />your all-in one solution for effortless social media schedule. Whether you're a business owner, marketer, influencer, or content creator, Planit revolutionizes the way you engage with your audience across various platforms.</p>

                <div className="features font-medium text-sm left-5 bottom-16 gap-[30px] flex absolute md:gap-8 md:left-20 md:bottom-10 ">
                    <div className="left flex flex-col gap-3 md:text-xl">
                        <li>Consistency</li>
                        <li>Streamline work</li>
                        <li>Anytime Access</li>
                        <li>Multi-platform</li>
                    </div>
                    <div className="right flex flex-col gap-3 md:text-xl">
                        <li>Efficiency</li>
                        <li>Streamline work</li>
                        <li>Auto-publishing</li>
                        <li>Post preview</li>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Features
