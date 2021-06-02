import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import Button from '../controls/Button';
const Navbar = () => {

    const [click, setClick] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => { setClick(!click) }
    const closeMobileMenu = () => { setClick(false) }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                console.log("scrolling up");
                if (window.scrollY < 50) {
                    setScrollDown(false)
                } else {
                    setScrollDown(true)
                }
                document.querySelector("#navbar").style.marginTop = '0'
            } else if (y < window.scrollY) {
                console.log("scrolling down");
                setScrollDown(true)
                document.querySelector("#navbar").style.marginTop = '-100%'
            }
            setY(window.scrollY);
        }, [y]
    );
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation])

    return (
        <nav id='navbar' className={click ? 'navbar active' : `${scrollDown ? 'navbarScrolled' : 'navbar'}`
        }>
            <div className="navbar-container">

                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <RestaurantMenuIcon /> Restaurant
                </Link>

                <div className="menu-icon" onClick={handleClick} >
                    {click ? <CloseIcon /> : <MenuIcon />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' >
                        <Link to="/" className='nav-links' onClick={closeMobileMenu} >
                            Home
                            </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu} >
                            Services
                            </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to="/products" className='nav-links' onClick={closeMobileMenu} >
                            Products
                            </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to="/sign-in" className='nav-links-mobile' onClick={closeMobileMenu} >
                            Sign In
                            </Link>
                    </li>
                </ul>
                {button && <Link to='/login'> <Button buttonStyle='btn--outline' >Sign In</Button> </Link>}
            </div>
        </nav >
    )
}

export default Navbar
