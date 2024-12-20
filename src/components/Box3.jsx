import React from 'react'

function Box3(props) {
  return (
    <div className="w-full 2xl:w-[22%] min-w-[200px] 2xl:max-w-[20%] max-w-[240px] h-[240px] shadow-lg shadow-slate-300 p-0 m-4 flex flex-col">
      <div
        className={`w-[50%] h-[60px] rounded-br-[55%] ${props.value.color} text-white flex items-center justify-center text-[28px]`}
      >
        {props.value.icons}
      </div>
      <div className="text-[clamp(1rem, 1.5vw, 1.5rem)] font-semibold px-4">
        {props.value.title}
      </div>
      <div className="text-[clamp(0.8rem, 1.2vw, 1rem)] px-4 overflow-hidden">
        {props.value.description}
      </div>
    </div>
  )
}

export default Box3