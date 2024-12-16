import React from 'react'

function Btn(props) {
  return (
     <button className='bg-orange-600 text-white px-[30px] py-[5px] rounded-[7px]'>
       {props.value}
     </button>
  )
}

export default Btn