import React from "react";
import './Badges.scss';
const Badges = (props) => {
    return (
        <div>
            <span className="badge">
                {props.badges}
            </span>
        </div>
    )
}

export default Badges;
