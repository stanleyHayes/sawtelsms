import {transactions} from "./transactions-data";

const INITIAL_STATE = {
    transactions: [...transactions],
    transactionsLoading: false,
    transactionsError: null
};

const transactionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectTransactions = state => state.transactions;

export default transactionReducer;
