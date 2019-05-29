import React from 'react'

const NewIcome = (props) => {

    return (

        <div className="income__list">

            <div className="item clearfix">
                <div className="item__description">{props.desc}</div>
                <div className="right clearfix">
                    <div className="item__value">+ {props.amount}</div>
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => props.removeItem(props.index, props.type)}>
                            <i className="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewIcome;