import React from 'react'
import Box3 from './Box3'
import { FaSearch } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaComputer } from "react-icons/fa6";
import { GiRobotAntennas } from "react-icons/gi";
function Section3() {
    let arr = [
        {
            title: "Seo/Sem",color:"bg-yellow-500",icons: <FaSearch/> , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio expedita numquam assumenda quos, molestias eaque nam'
        },
        {
            title: "Marketing",color:"bg-green-500",icons: <HiOutlineSpeakerphone/>, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio exdolor consectetur assumenda quos, molestias  '
        },
        {
            title: "Viral Compaign",color:"bg-purple-700", icons:<FaComputer/>, description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. dolor consectetur assumenda quos, molestias eaque '
        },
        {
            title: "others", color:"bg-red-600",icons:<GiRobotAntennas/> ,description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. consectetur assumenda quos, molestias eaque nam beatae sequi '
        }
    ]
    return (
        <div className='flex  mt-[140px] flex-col  items-center  w-[100%]  bg-slate-50 '>
            <div className=' text-[29px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-center'>We Provide The Best Servives</div>
            <div className=' xl:text-[20px] lg:text-[18px] md-[14px]  text-slate-600 lg:w-[35%] md:w-[50%] w-[75%] text-center'>let us unleash the full potential of bussiness with our data-driven strategy
            </div>
            <div className="flex justify-center md:justify-center lg:justify-center xl:justify-between w-full flex-wrap items-center ">
                {
                    arr.map((val,ind)=>
                        <Box3 key={ind} value={val}></Box3>
                    )
                }
            </div>
        </div>
    )
}

export default Section3