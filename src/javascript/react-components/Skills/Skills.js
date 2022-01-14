import React from 'react'

export default function Skills() {
    return (
        <section className="skills page-section page-section--reverse" id="section-skills">
            <div className="container">
                <div className="page-section__inner">
                    <div className="inner-content-first">
                        <h2 className="page-section__title">My skills</h2>
                        <div className="page-section__content">
                            <p>
                                I have been able to develop a range of skills that allows me to deliver high quality,
                                professional and unique web solutions.
                            </p>
                            <p className="skills__specialties">
                                Specialties: WordPress | Spryker | Semantic markup | Accessibility | Usability | SEO |
                                Image manipulation | Adobe Creative Cloud | Sketch
                            </p>
                        </div>
                    </div>
                    <div className="inner-content-last">
                        <ul className="skills__list">
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>HTML</span>
                                    <div className="bar__inner" data-percent="95%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>css</span>
                                    <div className="bar__inner" data-percent="95%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>Javascript</span>
                                    <div className="bar__inner" data-percent="65%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>React</span>
                                    <div className="bar__inner" data-percent="50%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>UI design</span>
                                    <div className="bar__inner" data-percent="70%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>sketch</span>
                                    <div className="bar__inner" data-percent="70%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>Photoshop</span>
                                    <div className="bar__inner" data-percent="80%"></div>
                                </div>
                            </li>
                            <li className="skills__list-item">
                                <div className="bar">
                                    <span>Illustrator</span>
                                    <div className="bar__inner" data-percent="90%"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
