import React from 'react';
import { connect } from 'react-redux';
import '../styles/budget.scss';
import Available from '../components/budget/Available';
import Income from '../components/budget/Income';
import Expense from '../components/budget/Expense';
import AddItem from '../components/budget/AddItem';
import NewIncome from '../components/budget/NewIncome';
import NewExpense from '../components/budget/NewExpense';

class Budget extends React.Component {

    componentDidUpdate() {
        const totalAmounts = (stateKey) => {

            const amounts = this.props[stateKey].map(item => {
                return parseInt(item.item.amount)
            })

            let total = 0;

            for (let i in amounts) {
                total += amounts[i]
            }

            return parseInt(total);

        }

        this.props.getTotal({
            inc: totalAmounts('incItem'),
            exp: totalAmounts('expItem')
        });
    }

    render() {
        let budgetAppStyles;

        if (!this.props.activeMenu) {
            budgetAppStyles = {
                zIndex: 999,
                position: 'relative',
            }
        }


        return (
            <div className="budget-app" style={budgetAppStyles}>
                <div className="top">
                    <div className="budget">

                        <Available total={this.props.total} />
                        <Income inc={this.props.inc} />
                        <Expense
                            exp={this.props.exp}
                            inc={this.props.inc}
                            total={this.props.total} />
                    </div>
                </div>
                <div className="bottom">
                    <AddItem createItem={this.props.createItem} />
                    <div className="budget__items">
                        <div className="income">
                            <h2 className="icome__title">Income</h2>

                            {Object.keys(this.props.incItem).map((item, index) => (

                                <NewIncome
                                    key={index}
                                    index={index}
                                    amount={this.props.incItem[item].item.amount}
                                    desc={this.props.incItem[item].item.desc}
                                    type={this.props.incItem[item].item.type}
                                    removeItem={this.props.removeItem} />

                            ))}

                        </div>

                        <div className="expenses">
                            <h2 className="expenses__title">Expenses</h2>

                            {Object.keys(this.props.expItem).map((item, index) => (

                                <NewExpense
                                    key={index}
                                    index={index}
                                    amount={this.props.expItem[item].item.amount}
                                    desc={this.props.expItem[item].item.desc}
                                    type={this.props.expItem[item].item.type}
                                    removeItem={this.props.removeItem}
                                    total={this.props.total}
                                />

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        incItem: state.incItem,
        expItem: state.expItem,
        inc: state.inc,
        exp: state.exp,
        total: state.total,
        activeMenu: state.activeMenu,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT', val: 10 }),
        createItem: (item) => dispatch({ type: 'CREATE_ITEM', item, }),
        getTotal: (total) => dispatch({ type: 'GET_TOTAL', total, }),
        removeItem: (index, budgetType) => dispatch({ type: 'REMOVE_ITEM', index, budgetType })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
