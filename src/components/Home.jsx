import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Section3 from './Section3'
import Section4 from './Section4'
import SectionCourausal from './SectionCourausal'
import Footer from './Footer'
function Home() {
    return (
        <div className='m-0 p-0 bg-slate-100 h-screen  font-sans'>
            <Header></Header>
            <HeroSection />
            <Section3/>
            <Section4/>
            <SectionCourausal/>
            <Footer/>
        </div>
    )
}

export default Home;