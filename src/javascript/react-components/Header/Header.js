import React from 'react'

export default function Header() {
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
                <div className="handburger-menu">
                    <div className="handburger-menu__line"></div>
                    <div className="handburger-menu__line"></div>
                    <div className="handburger-menu__line"></div>
                </div>
                <nav className="main-nav">
                    <ul className="main-nav__links">
                        <li>
                            <a className="main-nav__link current" href="#section-home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="main-nav__link" href="#section-about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="main-nav__link" href="#section-skills">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a className="main-nav__link" href="#section-resume">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a className="main-nav__link" href="#section-contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
