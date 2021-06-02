import React from 'react'
import './HeroSection5.css'
import add from '../../../images/add.png'
import scooter from '../../../images/scooter.png'
import form from '../../../images/form.png'
const HeroSection5 = () => {
    return (
        <div className="hero5">
            <div className="top-wrap">
                <div className="top1"></div>
                <div className="top2"></div>
            </div>
            <div className="hero-container5">
                <h3>How it works?</h3>
                <h1>Very easy!</h1>
                <div className="help-wrap">
                    <div className="hero5-help hero5-help1">
                        <div className="help-img help-img1">
                            <img src={add} alt="" />
                        </div>
                        <h2>Choose your food.</h2>
                        <h3>Take a look to our reach menu.</h3>
                    </div>
                    <div className="hero5-help hero5-help2">
                        <div className="help-img help-img2">
                            <img src={form} alt="" />
                        </div>
                        <h2>Fill the form.</h2>
                        <h3>Email, Phone, Location.</h3>
                    </div>
                    <div className="hero5-help hero5-help3">
                        <div className="help-img help-img3">
                            <img src={scooter} alt="" />
                        </div>
                        <h2>Pay and get you food.</h2>
                        <h3>Pay cash or online with Creditcard, Paypal.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection5
