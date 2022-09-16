import React from 'react'
import './Cards.scss'
const Cards = (props) => {
    return (
        <div className='card-size'>
            <div className='cards'>
                <span className="cardbadge">
                    {props.cardbadges}
                </span>
                <div className='cards-detail'>
                    <span className='card-name'>
                        {props.cardname}
                    </span>
                    <span className='card-city'>
                        {props.cardcity}
                    </span>
                </div>
                <p className='card-description'>
                    {props.cardcontent}
                </p>
            </div>
            <div className='card-image'>
                <img src={props.cardimg} className="card-img" alt='cardimage' />
            </div>
        </div>
    )
}

export default Cards;
