import React from 'react'

function Box3(props) {
  return (
    <div className='min-w-[200px] max-w-[200px] lg:min-w-[240px] lg:max-w-[240px] h-[240px] shadow-lg shadow-slate-400 p-0 m-4 '>
     <div className={`w-[50%] h-[60px] rounded-br-[55%] ${props.value.color} text-white flex items-center justify-center text-[27px]`}>{props.value.icons}</div>
       <div className='text-[24px]  px-4'> {props.value.title}</div>
       <div className='text-[14px] px-4 overflow-hidden '>{props.value.description}</div>
    </div>
  )
}

export default Box3