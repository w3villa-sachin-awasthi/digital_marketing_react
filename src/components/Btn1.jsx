import React from 'react'

function Btn1(props) {
  return (
    <button className='text-white border-2 border-slate-50 px-[15px] py-[5px] rounded-[7px] '>
        {props.value}
    </button>
  )
}

export default Btn1