import React, {useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [

    ]
}

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions

    const addTransaction = (transaction) => {
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: transaction
            }
        );
    }
    const deleteTransaction = (id) => {
        dispatch(
            {
                type: 'DELETE_TRANSACTION',
                payload: id
            }
        );
    }
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, addTransaction, deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}