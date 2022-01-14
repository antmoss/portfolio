import React from 'react'

export default function Resume() {
    return (
        <section className="resume page-section" id="section-resume">
            <div className="container">
                <div className="resume__title">
                    <h2 className="page-section__title full-line">Resume</h2>
                </div>
                <div className="page-section__inner">
                    <div className="resume__col resume__education">
                        <h3>
                            <span>Education</span>
                        </h3>
                        <ul className="resume__list left">
                            <li className="resume__list-item" tabindex="0">
                                <div className="resume__list-item-inner">
                                    <div className="resume__details">
                                        <h4 className="job-role">
                                            <abbr title="Foundation degree of arts"></abbr>
                                            FdA Web Design
                                        </h4>
                                        <span>2018</span>
                                        <p className="location">Teesside University</p>
                                        <p className="js-hidden-text">
                                            <span className="grade">Grade attained: Distinction</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="resume__list-item" tabindex="0">
                                <div className="resume__list-item-inner">
                                    <div className="resume__details">
                                        <h4 className="job-role">
                                            IT User Skills
                                            <abbr title="IT User Skills">(ITQ)</abbr>
                                        </h4>
                                        <span>2018</span>
                                        <p className="location">Wakefield College</p>
                                        <p className="js-hidden-text">
                                            <span className="grade">Grade attained: Level 2</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="resume__list-item" tabindex="0">
                                <div className="resume__list-item-inner">
                                    <div className="resume__details">
                                        <h4 className="job-role">Art &amp; Design</h4>
                                        <span>2002</span>
                                        <p className="location">Cleveland College of Art &amp; Design</p>
                                        <p className="js-hidden-text">
                                            <span className="grade">Grade attained: BC</span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume__col  resume__experiences">
                        <h3>
                            <span>Experiences</span>
                        </h3>
                        <ul className="resume__list right">
                            <li className="resume__list-item" tabindex="0">
                                <div className="resume__list-item-inner">
                                    <div className="resume__details">
                                        <h4 className="job-role">Software Engineer II (Front End)</h4>
                                        <span>Present</span>
                                        <p className="location">
                                            <a href="https://inviqa.com/">Inviqa</a>, Sheffield
                                        </p>
                                        <p className="js-hidden-text">
                                            As part of a team – I create responsive front-end web solutions using
                                            semantic HTML, CSS & JavaScript. Progressive enhancement, accessibility,
                                            usability and search engine optimization are my priorities.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="resume__list-item" tabindex="0">
                                <div className="resume__list-item-inner">
                                    <div className="resume__details">
                                        <h4 className="job-role">Front-End Developer &amp; Designer</h4>
                                        <span>2018</span>
                                        <p className="location">
                                            <a href="https://www.hydracreative.com/">Hydra Creative</a>, Sheffield
                                        </p>
                                        <p className="js-hidden-text">
                                            My main responsibility was developing bespoke, modern and responsive
                                            websites. Turning Photoshop documents into working websites was at the core
                                            of my working day, but I also designed for social media campaigns and
                                            websites.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="resume__list-item" tabindex="0">
                                <div className="resume__list-item-inner">
                                    <div className="resume__details">
                                        <h4 className="job-role">Web Design Internship</h4>
                                        <span>2017</span>
                                        <p className="location">
                                            <a href="https://www.geniusdivision.com">Genius Division</a>, Barnsley
                                        </p>
                                        <p className="js-hidden-text">
                                            During this time I developed my technical skills while working on a variety
                                            of projects. The team at Genius Division helped me to understand the core
                                            web development languages at a deeper level.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
