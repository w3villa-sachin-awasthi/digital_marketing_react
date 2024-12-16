import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Section3 from './Section3'
function Home() {
    return (
        <div className='m-0 p-0 bg-slate-100 h-screen md:px-[50px] px-[50px] lg:px[70px] xl:px-[100px] w-screen font-sans'>
            <Header></Header>
            <HeroSection />
            <Section3/>
        </div>
    )
}

export default Home