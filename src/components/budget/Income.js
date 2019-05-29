import React from 'react'

const Income = (props) => {
    return (
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
                <div className="budget__income--value">+ {props.inc}</div>
                <div className="budget__income--percentage">&nbsp;</div>
            </div>
        </div>
    )
}

export default Income;