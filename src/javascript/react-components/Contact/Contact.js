import React from 'react'

export default function Contact() {
    return (
        <section className="contact page-section" id="section-contact">
            <div className="container">
                <div className="page-section__inner">
                    <div className="contact__col contact__details">
                        <h2 className="page-section__title">Contact</h2>
                        <p>Get in touch if you have any questions</p>
                        <p>
                            Sheffield
                            <br />
                            South Yorkshire
                            <br />
                            UK
                        </p>
                        <ul className="contact__social">
                            <li className="contact__social-item">
                                <a
                                    href="https://www.linkedin.com/in/antony-moss/"
                                    target="_blank"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="contact__social-item">
                                <a href="https://twitter.com/antonymoss_web" target="_blank" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="contact__social-item">
                                <a href="mailto:antonymoss.web@gmail.com" target="_blank" aria-label="Email">
                                    <i className="fas fa-at"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form action="POST" className="contact__col contact__form" data-netlify="true">
                        <div className="contact__form-field">
                            <label className="form-control-label" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="form-control form-control--required"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                type="text"
                            />
                        </div>

                        <div className="contact__form-field">
                            <label className="form-control-label" htmlFor="email">
                                Email address
                            </label>
                            <input
                                className="form-control form-control--required"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                type="email"
                            />
                        </div>

                        <div className="contact__form-field">
                            <label className="form-control-label" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="form-control form-control--required"
                                id="message"
                                name="message"
                                placeholder="Enter Message"
                            ></textarea>
                        </div>

                        <div className="contact__form-field">
                            <div data-netlify-recaptcha="true"></div>
                        </div>

                        <div className="contact__form-field">
                            <button className="btn icon icon--send" type="submit">
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
