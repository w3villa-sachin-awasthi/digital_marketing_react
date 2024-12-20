import React from 'react'

function Section4part(props) {
  return (
    <div className='flex m-1 my-3'>
        <div className='bg-orange-600 min-h-[47px] max-h-[47px]  min-w-[47px] max-w-[47px] flex justify-center items-center rounded-[50%] text-[22px]  text-white mr-3'>{props.value.ind}</div>
        <div className=''>
            <div className="text-[20px]">{props.value.title}</div>
            <div className="text-[15px]">{props.value.desc}</div>
        </div>
    </div>
  )
}

export default Section4part