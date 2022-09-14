import React from 'react'
import Btn from '../Component/Button/Btn'
import Badges from '../Component/Badges/Badges'
import { image } from '../Config/Image'
import './Lookforward.scss'

const Lookforward = () => {
    return (
        <section className='lookforward'>
            <div className='container'>
                <div className='look-forward-main'>
                    <div className='look-forward-content'>
                        {<Badges badges={'WHAT WE DO'} />}
                        <h3 className='look-forward-head'>
                            We look forward<br />
                            to sharing our perspective.
                        </h3>
                        <div className='lookforward-btn'>
                            <Btn mainbutton={'LEARN MORE'} />
                        </div>
                    </div>
                    <div className='look-img'> <img src={image.labimg} className="lab-image" alt="labimage" /></div>
                </div>
                <div className='look-forward-details'>
                    <div className='laptop-img'> <img src={image.laptop} className="laptop-image" alt="labimage" /></div>
                    <div className='look-forward-description'>
                        {<Badges badges={'CONTACT US'} />}
                        <h3 className='look-forward-head'>
                            Let's build something<br />
                            amazing together.
                        </h3>
                        <p className='look-forward-para'>
                            EastBourne is a private investment firm focused on Private Equity and Special Situations. We invest strategically where our commitment and knowledge can most effectively create value for our business partners.
                        </p>
                        <div className='lookforward-btn'>
                            <Btn mainbutton={'CONTACT US'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lookforward;
