import React from 'react'
import './Contactus.scss'
import Badges from '../../Component/Badges/Badges';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header'
import Hero from '../../Component/Hero/Hero';
import Btn from '../../Component/Button/Btn';


const Contactus = () => {
    return (
        <div>
            <Header />
            <Hero />
            <section className='contactus-section'>
                <div className='container'>
                    <div className='input-bar-main'>
                        <div className='input-bar-contant'>
                            <span className='input-span'>
                                {<Badges badges={'CONTACT US'} />}
                            </span>
                            <h3 className='input-head'>
                                We look forward<br />
                                to sharing our perspective.
                            </h3>
                            <p className='input-para'>
                                Thank you for your interest in eastbourne. If you would like more information on our firm or its portfolio companies, or you have a specific question, please use this form. A eastbourne will respond to all inquiries. Thank you.
                            </p>
                        </div>
                        <div className='inputbar'>
                            <input type="text" className="detail css" name="Name" placeholder="Name" /><br />
                            <input type="text" className="detail css" name="Subject" placeholder="Subject" /><br />
                            <input type="text" className="detail css" name="Email" placeholder="Email" /><br />
                            <input type="text" className="detail message" name="Message" placeholder="Message" /><br />
                            <div className='input-btn'><Btn mainbutton={'Submit'} /></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contactus;
