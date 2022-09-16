import React from 'react'
import './Footer.scss'
import { image } from "../../Config/Image";

const Footer = () => {
    return (
        <footer className='eastbourne-footer'>
            <div className='container'>
                <div className='footer-main'>
                    <div className='eastbourne-main'>
                        <div className='eastborune-footer-logo'>
                            <a href="/">
                                <img src={image.headerlogo} className="footer-logo"
                                    alt="footer-logo" />
                            </a>
                        </div>
                        <div className='email-details'>
                            <div className='email'>
                                <img src={image.email} className="email-logo"
                                    alt="email-logo" />
                                <span className='contact-number'>
                                    0-111-000-XXXX
                                </span>
                            </div>
                            <div className='email'>
                                <img src={image.call} className="call-logo"
                                    alt="call-logo" />
                                <span className='contact-number'>
                                    contact@eastbourne.domain
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='quick-menu'>
                        <div className='quick'>
                            <span className='quick-links-span'>
                                Quick Links
                            </span>
                            <div className='quick-links'>
                                <ul className='footer-menu'>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            Home
                                        </a>
                                    </li>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            Our Expertise
                                        </a>
                                    </li>
                                </ul>
                                <ul className='footer-menu'>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            About Us
                                        </a>
                                    </li>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='quick'>
                            <span className='quick-links-span'>
                                Social
                            </span>
                            <div className='quick-links'>
                                <ul className='footer-menu'>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            Facebook
                                        </a>
                                    </li>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            YouTube
                                        </a>
                                    </li>
                                </ul>
                                <ul className='footer-menu'>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            Twitter
                                        </a>
                                    </li>
                                    <li className='quick-links-menu'>
                                        <a href='/' className='quick-link-a'>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-border'></div>
                <div className='copyrigth-footer'>
                    <div className='footer-copyrigth'>
                        <span className='copyrigth'>
                            Copyright © 2021 EastBourne. All right reserved.
                        </span>
                    </div>
                    <div className='terms-condition-menu'>
                        <span className='terms-condition'>
                            Terms & Condition
                        </span>
                        <span className='terms-condition'>
                            Privacy
                        </span>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;
