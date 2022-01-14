import React from 'react';

export default function About() {
    return (
        <section className="about page-section" id="section-about">
            <div className="container">
                <div className="page-section__inner">
                    <div className="inner-content-first">
                        <div className="about__img">
                            <div className="about__img-clip">
                                <img
                                    alt="Photo of Antony Moss drinking a cup of tea"
                                    src="static/profile@1x.jpg"
                                    srcSet="static/profile.jpg 2x"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="inner-content-last">
                        <h2 className="page-section__title">ABOUT ME</h2>
                        <div className="page-section__content">
                            <p>
                                I'm a Web Designer and Developer living and working in Sheffield. I have a degree in Web
                                Design and have been working professionally as a Front-end Developer for over 4 years.
                            </p>
                            <p>
                                As you’d expect an
                                <abbr title="Front end">FE</abbr>
                                <abbr title="Developer">Dev</abbr>
                                to be, I'm experienced with
                                <abbr title="Hypertext Markup Language">HTML</abbr>,
                                <abbr title="Cascading Style Sheet">CSS</abbr> (using Sass) and JavaScript, including
                                React and Typescript. They make up my core skillset, but I'm also comfortable with
                                version control such as Git.
                            </p>
                        </div>
                        <div className="social">
                            <ul className="social__list">
                                <li className="social__list-item">
                                    <a
                                        className="btn icon icon--social icon--twitter"
                                        href="https://twitter.com/antonymoss_web"
                                        target="_blank"
                                        title="Twitter"
                                    >
                                        <span>Twitter</span>
                                    </a>
                                </li>
                                <li className="social__list-item">
                                    <a
                                        className="btn icon icon--social icon--linkedin"
                                        href="https://www.linkedin.com/in/antony-moss/"
                                        target="_blank"
                                        title="Twitter"
                                    >
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                                <li className="social__list-item">
                                    <a
                                        className="btn icon icon--social icon--contact"
                                        href="mailto:antonymoss.web@gmail.com"
                                        title="Contact me"
                                    >
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
