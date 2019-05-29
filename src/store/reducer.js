const initialState = {
    incItem: [],
    expItem: [],
    inc: 0,
    exp: 0,
    total: 0,
    activeMenu: false,
}


const reducer = (state = initialState, action) => {




    switch (action.type) {

        case 'CREATE_ITEM':

            if (action.item.type === "inc") {

                return {
                    ...state,
                    incItem: state.incItem.concat({ id: new Date(), item: action.item })
                }
            } else {



                return {
                    ...state,
                    expItem: state.expItem.concat({ id: new Date(), item: action.item })
                }
            }

        case 'GET_TOTAL':

            const inc = action.total.inc;
            const exp = action.total.exp;

            const total = inc - exp;
            return {
                ...state,
                inc,
                exp,
                total,
            }

        case 'REMOVE_ITEM':

            const type = action.budgetType;
            const current = action.index;

            const removeItem = (arr) => {

                const newArray = [...state[arr]];
                newArray.splice(current, 1);
                return newArray;
            }

            if (type === 'inc') {

                const newArray = removeItem('incItem')

                return {
                    ...state,
                    incItem: newArray
                }

            } else {
                const newArray = removeItem('expItem')

                return {
                    ...state,
                    expItem: newArray
                }
            }

        case 'TOGGLE_MENU':

            return {
                ...state,
                activeMenu: !state.activeMenu
            }


    }
    return state;
};

export default reducer;