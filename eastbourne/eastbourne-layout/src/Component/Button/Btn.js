import React from "react";
import './Btn.scss'

const Btn = (props) => {
    return (
        <div>
            <button className="eastbournebtn">
                {props.mainbutton}
            </button>
        </div>
    )
}

export default Btn;
