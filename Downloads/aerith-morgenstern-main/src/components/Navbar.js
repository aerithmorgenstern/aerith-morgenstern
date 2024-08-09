import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import customIcon from './images/logo.png';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
    <>
      <nav className = 'navbar'>
        <div className='navbar-container'>
            <Link to='/home' className='navbar-logo' onClick = {closeMobileMenu}>
                {/* <img src={customIcon} alt="Custom Icon" style={{ width: '300px' }} /> */}
                AERITH MORGENSTERN
            </Link>
            <div className ='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/stories' className='nav-links' onClick={closeMobileMenu}>
                        Stories
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                        Gallery
                    </Link>
                </li>
                <li className='nav-item'>
                    <section class='social-media-nav'>
                        <div class='social-icons-nav'>
                        <a
                        class='social-icon-link instagram'
                        href='https://www.instagram.com/aerithmorgenstern/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fab fa-instagram' />
                        </a>
                        <a
                        class='social-icon-link tumblr'
                        href='https://www.tumblr.com/aerithmorgenstern'
                        target='_blank'
                        aria-label='Tumblr'
                        >
                        <i class='fab fa-tumblr' size='2xs' />
                        </a>
                        <a
                        class='social-icon-link twitter'
                        href='https://twitter.com/aerimorgenstern'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </a>
                        <a
                        class='social-icon-link pinterest'
                        href='https://www.pinterest.com/aerithmorgenstern/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-pinterest-p' />
                        </a>
                        </div>
                    </section>
                </li>
            </ul>
            {/* {button && <Button buttonStyle = 'btn--outline'>
                Stories
                </Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
