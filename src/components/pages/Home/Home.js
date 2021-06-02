import React from 'react'
import HeroSection from './HeroSection'
import '../../../App.css'
import AboutUs from './AboutUs'
import Blog from './Blog'
import ExclusiveCards from './ExclusiveCards'
import HeroSection5 from './HeroSection5'
import HeroSection6 from './HeroSection6'
const Home = () => {
    return (
        <div className='home'>
            <HeroSection />
            <AboutUs />
            <Blog />
            <ExclusiveCards />
            <HeroSection5 />
            <HeroSection6 />
        </div>
    )
}

export default Home
