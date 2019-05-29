import React from 'react'

class AddItem extends React.Component {

    state = {
        type: '',
        desc: '',
        amount: '',
    }

    getType = (e) => {
        const type = e.target.value;

        this.setState({
            type,
        })

    }

    getDesc = (e) => {
        const desc = e.target.value;

        this.setState({
            desc,
        })

    }

    getAmount = (e) => {
        const amount = e.target.value;

        this.setState({
            amount,
        })

    }

    gatherInput = () => {

        const type = this.state.type || 'inc';

        const newIncome = {
            type: type,
            desc: this.state.desc,
            amount: this.state.amount
        }

        this.props.createItem(newIncome);


    }

    render() {
        return (
            <div className="add">
                <div className="add__container">
                    <select className="add__type" onChange={this.getType}>
                        <option value="inc" defaultValue="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" onChange={this.getDesc} className="add__description" placeholder="Add description" />
                    <input type="number" onChange={this.getAmount} className="add__value" placeholder="Value" />
                    <button className="add__btn" onClick={this.gatherInput}><i className="ion-ios-checkmark-outline" ></i></button>
                </div>
            </div>
        )
    }
}

export default AddItem;