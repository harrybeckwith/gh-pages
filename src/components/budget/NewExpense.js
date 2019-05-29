import React from 'react'

const NewExpense = (props) => {




    return (
        <div className="expenses__list">
            <div className="item clearfix">
                <div className="item__description">{props.desc}</div>
                <div className="right clearfix">
                    <div className="item__value">- {props.amount} </div>
                    <div className="item__delete" >
                        <button onClick={() => props.removeItem(props.index, props.type)}
                            className="item__delete--btn">
                            <i className="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewExpense;