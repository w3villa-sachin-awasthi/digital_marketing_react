import React from 'react'
import img from '../images/photo3.png'
import Section4part from './Section4part'
import Btn from './Btn'
import Btn1 from './Btn1'
import BtnOranged from './BtnOranged'
function Section4() {
    let arr = [
        { ind: 1, title: 'Contact us', desc: "Contact us to boost your brand valuation" },
        { ind: 2, title: 'Consult', desc: "Always available for answer to every questions" },
        { ind: 3, title: 'Place order', desc: "Buy our process today to proceeds" },
        { ind: 4, title: 'Payment', desc: "contact us to booost brand visibility" },

    ]
    return (
        <div className='w-full flex lg:flex-row flex-col bg-orange-200  mt-[50px] justify-start lg:items-center items-center lg:justify-center pt-[20px]  md:px-[50px] px-[50px] lg:px[70px] xl:px-[100px] w-screen'>
            <div className='w-[100%] lg:w-[45%]  flex justify-center'>
                <img src={img} alt="" className='' />
            </div>
            <div className='md:w-[65%] w-[75%] lg:w-[55%] lg:pl-0 md:pl-[40px] pl-[20px]'>
                <div className='w-full lg:text-[50px] md:text-[40px] sm-[30px]'>Simple <span className='text-orange-600'> Solutions</span> </div>
                <div className='lg:w-[55%] md:w-[55%] w-[75%] text-slate-600 lg:text-[21px] md:text-[18px] text-[16px] mb-[10px]' >We understand that no wo business are alike. That's why we take the time to understand</div>
                <div className=''>
                    {
                        arr.map((val, index) => {
                            return <Section4part value={val} key={index} >

                            </Section4part>
                        })
                    }
                </div>
                <div className='flex justify-between w-[60%]'>
                    <Btn value="Get Started"></Btn>
                   <BtnOranged value="Read More"></BtnOranged>
                </div>
            </div>
        </div>
    )
}

export default Section4