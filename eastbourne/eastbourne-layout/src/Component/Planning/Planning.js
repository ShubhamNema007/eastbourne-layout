import React from "react";
import './Planning.scss';
import { image } from "../../Config/Image";
import Planningcard from "../Planningcard/Planningcard";
import Badges from "../Badges/Badges";
import './Planning.scss'
import Btn from "../Button/Btn";
const Planning = () => {
    return (
        <section className="planning-section">
            <div className="container">
                <div className="planning">
                    <div className="planning-details">
                        <div className="planning-scss">
                            <div className="planning-badge">
                                <Badges badges={'planning'} />
                            </div>
                            <div className="planning-head">
                                <h3>
                                    Our Planning Lorem Dummy Text
                                </h3>
                            </div>
                            <p className="planning-para">
                                EastBourne is a private investment firm focused on Private Equity and Special Situations.
                            </p>
                        </div>
                        <div className="planning-btn">
                            <Btn mainbutton={'GET IN TOUCH WITH US'} />
                        </div>
                    </div>
                    <div className="planning-cards">
                        <div className="planning-content">
                            <Planningcard
                                imgplanning={image.planningone}
                                planningtitle="Our Planning Lorem"
                                planningpara="EastBourne is a private investment firm focused on Private Equity and Special Situations."
                            />
                        </div>
                        <div className="planning-content">
                            <Planningcard
                                imgplanning={image.planningtwo}
                                planningtitle="Our Planning Ipsum"
                                planningpara="EastBourne is a private investment firm focused on Private Equity and Special Situations."
                            />
                        </div>
                        <div className="planning-content">
                            <Planningcard
                                imgplanning={image.planningthree}
                                planningtitle="Our Planning Dolor"
                                planningpara="EastBourne is a private investment firm focused on Private Equity and Special Situations."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planning
