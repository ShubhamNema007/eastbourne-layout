import React from 'react'
import { image } from '../../Config/Image'
import Badges from '../Badges/Badges'
import Cards from '../Cards/Cards'
import Btn from "../Button/Btn"
import './Experties.scss'

const Experties = () => {
    return (
        <section className='experties-section'>
            <div className='container'>
                <div className='experties'>
                    <span className='experties-span'>
                        {<Badges badges={'experties'} />}
                    </span>
                    <h3 className='experties-head'>
                        Expertise across<br /> markets, industries and the globe.
                    </h3>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <Cards
                            cardbadges="DEBT"
                            cardname="Akido"
                            cardcity="(USA)"
                            cardcontent="kido enables leading health institutions and innovators to use information to drive transformational change..."
                            cardimg={image.akido}
                        />
                    </div>
                    <div className='col-md'>
                        <Cards
                            cardbadges="PRIVATE EQUITY"
                            cardname="Brick Eagle"
                            cardcity="(India)"
                            cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                            cardimg={image.brickeagle}
                        />
                    </div>
                    <div className='col-md'>
                        <Cards
                            cardbadges="CURRENT HOLDINGS"
                            cardname="Step One Financial"
                            cardcity="(UK)"
                            cardcontent="Step One Financial delivers a range of creative consumer loan products based on traditional values that offer..."
                            cardimg={image.imed}
                        />
                    </div>
                    <div className='col-md'>
                        <Cards
                            cardbadges="HISTORIC HOlDINGS"
                            cardname="I-Med"
                            cardcity="(Australia)"
                            cardcontent="Brick Eagle is a financial services platform for affordable housing that offers the essentials needed..."
                            cardimg={image.stepone}
                        />
                    </div>
                    <div className='col-md-xl'>
                        <div className="experties-image">
                            <img src={image.cardsectionimage} className="card-section-image" alt="card-section" />
                            <div className="experties-content">
                                <h3 className="card-head">
                                    Innovative strategies.
                                    Engaged investing.
                                </h3>
                                <div className="card-btn">
                                    <Btn mainbutton={'VIEW ALL EXPERTISE'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </section >
    )
}

export default Experties;
