import React from 'react'

export default function Banner() {
    return (
        <section className="cover">
            <div className="container">
                <div className="cover__inner animated">
                    <h1 className="cover__title">
                        Hello, I'm
                        <span>Antony Moss.</span>
                        <div>A Creative Front-End Developer</div>
                    </h1>
                    <a className="main-nav__link" href="#section-about">
                        <div className="btn icon icon--arrow-right">
                            <span>Find out more</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
