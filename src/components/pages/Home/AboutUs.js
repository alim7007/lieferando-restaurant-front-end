import React, { useEffect, useState } from 'react'
import './AboutUs.css'
import AboutUsImg from './AboutUsImg'
import Button from '../../controls/Button'
// import '../App.css'

const AboutUs = () => {

    return (
        <div className='about'>
            <div className='about-container2'>
                <div id="inner-container2" className="inner-container2">
                    <div className="inner2-title-container">
                        <h1>About us</h1>
                    </div>
                    <div className="inner2-wrapper">
                        <div className="inner2-story-container">
                            <h2>The story of Liferando</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum ut exercitationem qui, itaque voluptates modi et sint aperiam architecto totam aliquid repellat consequuntur perspiciatis similique excepturi fugit deserunt nobis?
                            </p>
                            <Button buttonStyle='btn--outline-dark' >
                                READ MORE
                            </Button>
                        </div>
                        <AboutUsImg />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutUs
