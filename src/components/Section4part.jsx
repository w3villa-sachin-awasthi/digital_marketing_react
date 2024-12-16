import React from 'react'

function Section4part(props) {
  return (
    <div className='flex m-1 my-3'>
        <div className='bg-orange-600 px-[17px] py-[5px]  rounded-[50%] text-[22px]  text-white'>{props.value.ind}</div>
        <div className=''>
            <div className="text-[20px]">{props.value.title}</div>
            <div className="text-[15px]">{props.value.desc}</div>
        </div>
    </div>
  )
}

export default Section4part