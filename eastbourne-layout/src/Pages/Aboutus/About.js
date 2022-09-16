import React from 'react'
import Badges from '../../Component/Badges/Badges';
import './About.scss';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Cards from '../../Component/Cards/Cards';
import { image } from '../../Config/Image';


const About = () => {
    return (
        <div>
            <Header />
            <section className='aboutus'>
                <div className='container'>
                    <div className='experties-aboutus'>
                        <span className='experties-span'>
                            {<Badges badges={'experties'} />}
                        </span>
                        <h3 className='experties-head'>
                            Expertise across<br /> markets, industries and the globe.
                        </h3>
                    </div>
                    <div className='aboutus-menu'>
                        <ul className='about-menu'>
                            <li className='menu-style'>
                                <a href='/' className='about-menu-list-bold'>
                                    All
                                </a>
                            </li>
                            <li className='menu-style'>
                                <a href='/' className='about-menu-list'>
                                    Debt
                                </a>
                            </li>
                            <li className='menu-style'>
                                <a href='/' className='about-menu-list'>
                                    Private Equity
                                </a>
                            </li>
                            <li className='menu-style'>
                                <a href='/' className='about-menu-list'>
                                    Current Holdings
                                </a>
                            </li>
                            <li className='menu-style'>
                                <a href='/' className='about-menu-list'>
                                    Historic Holdings
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='aboutus-card'>
                        <div className="aboutus-card-brands">
                            <Cards
                                cardbadges="DEBT"
                                cardname="Akido"
                                cardcity="(USA)"
                                cardcontent="kido enables leading health institutions and innovators to use information to drive transformational change..."
                                cardimg={image.akido}
                            />
                            <Cards
                                cardbadges="PRIVATE EQUITY"
                                cardname="Brick Eagle"
                                cardcity="(India)"
                                cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                                cardimg={image.brickeagle}
                            />
                            <Cards
                                cardbadges="CURRENT HOLDINGS"
                                cardname="Step One Financial"
                                cardcity="(UK)"
                                cardcontent="Step One Financial delivers a range of creative consumer loan products based on traditional values that offer..."
                                cardimg={image.imed}
                            />
                            <Cards
                                cardbadges="PRIVATE EQUITY"
                                cardname="Brick Eagle"
                                cardcity="(India)"
                                cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                                cardimg={image.brickeagle}
                            />
                            <Cards
                                cardbadges="CURRENT HOLDINGS"
                                cardname="Step One Financial"
                                cardcity="(UK)"
                                cardcontent="Step One Financial delivers a range of creative consumer loan products based on traditional values that offer..."
                                cardimg={image.imed}
                            />
                            <Cards
                                cardbadges="DEBT"
                                cardname="Akido"
                                cardcity="(USA)"
                                cardcontent="kido enables leading health institutions and innovators to use information to drive transformational change..."
                                cardimg={image.akido}
                            />
                            <Cards
                                cardbadges="HISTORIC HOlDINGS"
                                cardname="I-Med"
                                cardcity="(Australia)"
                                cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                                cardimg={image.stepone}
                            />
                            <Cards
                                cardbadges="DEBT"
                                cardname="Akido"
                                cardcity="(USA)"
                                cardcontent="kido enables leading health institutions and innovators to use information to drive transformational change..."
                                cardimg={image.akido}
                            />
                            <Cards
                                cardbadges="PRIVATE EQUITY"
                                cardname="Brick Eagle"
                                cardcity="(India)"
                                cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                                cardimg={image.brickeagle}
                            />
                            <Cards
                                cardbadges="PRIVATE EQUITY"
                                cardname="Brick Eagle"
                                cardcity="(India)"
                                cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                                cardimg={image.brickeagle}
                            />
                            <Cards
                                cardbadges="CURRENT HOLDINGS"
                                cardname="Step One Financial"
                                cardcity="(UK)"
                                cardcontent="Step One Financial delivers a range of creative consumer loan products based on traditional values that offer..."
                                cardimg={image.imed}
                            />
                            <Cards
                                cardbadges="DEBT"
                                cardname="Akido"
                                cardcity="(USA)"
                                cardcontent="kido enables leading health institutions and innovators to use information to drive transformational change..."
                                cardimg={image.akido}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default About;
