import React from 'react'

const Available = (props) => {
    return (
        <div>
            <div className="budget__title">
                Total Available
            </div>
            <div className="budget__value">
                £{props.total}
            </div>

        </div>
    )
}

export default Available;