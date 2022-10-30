import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [click, setClick] = useState(false);

    const [navColor, setNavColor] = useState(false);

    const handleClick = () => setClick(!click);

    const changeNavBg = () => {
        if (window.scrollY >= 100) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    };

    window.addEventListener('scroll', changeNavBg)

    return (
        <div className={navColor ? 'navbar--container navbar--bg' : 'navbar--container'}>
            <Link to='/'><h3>MIDEG Solutions</h3></Link>
            <ul className={click ? 'nav--menu active' : 'nav--menu'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Servicios</Link></li>
                <li><Link to='/contact'>Contacto</Link></li>
            </ul>
            <div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
            </div>
        </div>
    )
}

export default Navbar