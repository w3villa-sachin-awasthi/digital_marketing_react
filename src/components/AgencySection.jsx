import React from 'react'
import img from '../images/photo4.jpg'
function AgencySection() {
    return (
        <div className="w-[100%] flex flex-col lg:flex-row  mt-[140px] max-w-[1600px] mx-auto justify-center items-center lg:items-start   py-[65px] px-[20px] ">
            {/* Right Section: Content */}
            <div
                className="
        w-[80%]
          md:w-[50%] 
          mx-auto 
          lg:w-1/2 
          flex flex-col 
          space-y-4 
          lg:space-y-6 
          px-4 
          lg:px-0 
        "
            >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:pt-[120px]">
                    Our <span className="text-orange-600">Agency's</span>
                </div>
                <div className="text-slate-900  sm:text-base lg:text-lg leading-relaxed w-3/4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium error nihil vero nam nostrum  <br /> <br /> corrupti quisquam accusamus consequatur voluptate. Voluptatibus dolorem sit aperiam. Vitae, nulla unde. Magni inventore molestias officia eveniet? Quas in hic recusandae a dolorum adipisci, nulla ea!
                </div>


                <button className='mr-auto border-0 bg-orange-600 px-[28px] py-[8px] rounded-md text-white'>Read more</button>


            </div>
            {/* Left Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 ">
                <img
                    src={img}
                    alt="Simple Solutions"
                    className="w-full max-w-[350px] sm:max-w-[70%] md:max-w-[60%] mx-auto lg:max-w-full max-h-[470px]"
                />
            </div>


        </div>
    )
}

export default AgencySection