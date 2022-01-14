import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
    const [open, setOpen] = useState('');
    const [click, setClick] = useState(false);
    const liRef = useRef(null);
    const itemEls = useRef({});

    const menuItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '#section-about',
        },
        {
            name: 'Skills',
            path: '#section-skills',
        },
        {
            name: 'Resume',
            path: '#section-resume',
        },
        {
            name: 'Contact',
            path: '#section-contact',
        },
    ];

    if (!menuItems) {
        return null;
    }

    function animateLinks(el, index) {
        el.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
    }

    function handleClick() {
        setOpen(!open);
        console.log(itemEls);
        Object.values(itemEls).forEach((val) => {
            console.log(val);
        });
    }

    return (
        <header className="site-header" id="section-home">
            <div className="container">
                <div className="brand">
                    <a href="#">
                        <img alt="Antony Moss" className="brand__logo" src="static/logo/antony_logo_blue_white.svg" />
                    </a>
                    <a className="brand__title" href="tel:07754964133">
                        07754 964 133
                    </a>
                </div>

                <button type="button" className="handburger-menu" onClick={handleClick} open={open}>
                    <div className="handburger-menu__line"></div>
                    <div className="handburger-menu__line"></div>
                    <div className="handburger-menu__line"></div>
                </button>

                <nav className={`main-nav ${open ? 'js-nav-active' : ''}`}>
                    <ul className="main-nav__links">
                        {menuItems.map(({ path, name }, index) => (
                            <li key={name} ref={(element) => (itemEls.current[index] = element)}>
                                <a className="main-nav__link current" href={path} onClick={() => setClick(!click)}>
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
