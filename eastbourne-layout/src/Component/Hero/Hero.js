import React from "react"
import './Hero.scss'
import { image } from "../../Config/Image"
import Badges from "../Badges/Badges"
import Btn from "../Button/Btn"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="heromain">
                    <div className="description">
                        <div className="badges">
                            <Badges badges={'about us'} />
                        </div>
                        <h2 className="hero-head">
                            Innovative strategies.
                            Engaged investing.
                        </h2>
                        <p className="hero-para">
                            EastBourne is a private investment firm focused on Private Equity and Special Situations. We invest strategically where our commitment and knowledge can most effectively create value for our business partners.
                        </p>
                        <Btn mainbutton={'CLICK HERE TO KNOW MORE'} />
                    </div>
                    <div className="heroimage">
                        <img src={image.banner} className="hero-banner"
                            alt="hero-logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
