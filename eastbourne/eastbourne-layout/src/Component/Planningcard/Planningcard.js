import React from 'react'
import './Planningcard.scss'
const Planningcard = (props) => {
    return (
        <div className='planningcard'>
            <div className='img'>
                <img src={props.imgplanning} className="planning-card-img"
                    alt="Planning-card" />
            </div>
            <div className='p-span'>
                <span className='planningcard-title'>
                    {props.planningtitle}
                </span>
            </div>
            <div className='p-para'>
                <p className='planningcard-para'>
                    {props.planningpara}
                </p>
            </div>
        </div>
    )
}

export default Planningcard;
