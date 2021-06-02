import React from 'react'
import './HeroSection.css'
import Button from '../../controls/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuBookIcon from '@material-ui/icons/MenuBook';

function HeroSection() {

    return (
        <div className='hero'>
            <div className="hero-shadow"></div>
            <div className='hero-container'>
                {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}

                <h1>WELLCOME TO RESTAURANT</h1>
                <h2>Beautiful, exclusive and delicious</h2>

                <div className="hero-btns">
                    <Button heroBtns='heroBtnsSpec' buttonStyle='btn--outline' buttonSize='btn--large' >
                        MAKE ORDER<span className='icon'><MenuBookIcon /></span>
                    </Button>
                    <Button heroBtns='heroBtnsSpec' buttonStyle='btn--primary' buttonSize='btn--large' >
                        SIGN IN <span className='icon'><ExitToAppIcon /></span>
                    </Button>
                    <div onClick={() => {
                        document.getElementById("inner-container2").scrollIntoView({ block: 'center', behavior: 'smooth' })
                        // window.scrollBy(0, window.innerHeight / 1.11);
                    }} className="scroll-down"></div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection
