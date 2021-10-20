import {reports} from "./reports-data";

const INITIAL_STATE = {
    reports: [...reports],
    reportsLoading: false,
    reportsError: null
};

const reportReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectReports = state => state.reports;

export default reportReducer;
