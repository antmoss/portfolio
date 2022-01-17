import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);
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

    function handleClick() {
        setOpen(!open);
        console.log(open);
        const listItems = Array.from(document.querySelectorAll('[data-list-item]'));
        console.log(listItems);

        if (!open) {
            listItems.forEach(listItem => {
                console.log(listItem);
                listItem.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
            });
        }
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
                        {menuItems.map(({ path, name }) => (
                            <li key={name} data-list-item>
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
