import React from 'react'

const Expense = (props) => {

    let finalPercent = 0;
    if (props.inc > 0) {
        const percent = Math.round((props.exp / props.inc) * 100);
        if (!isNaN(percent)) {
            finalPercent = percent;
        }
    }


    return (
        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
                <div className="budget__expenses--value">- {props.exp}</div>
                <div className="budget__expenses--percentage">{finalPercent}%</div>
            </div>
        </div>
    )
}

export default Expense;