import React from 'react'

function BtnOranged(props) {
  return (
    <button className='text-orange-600 border-2 border-orange-500 px-[13px] py-[3px] rounded-[7px]'>
    {props.value}
</button>
  )
}

export default BtnOranged;