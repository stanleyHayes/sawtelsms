import {combineReducers} from "redux";
import uiReducer from "./ui/ui-reducer";
import reportReducer from "./reports/report-reducer";
import contactReducer from "./contacts/contact-reducer";
import packageReducer from "./packages/package-reducer";
import authReducer from "./authentication/auth-reducer";
import transactionReducer from "./transactions/transaction-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    reports: reportReducer,
    contacts: contactReducer,
    packages: packageReducer,
    auth: authReducer,
    transactions: transactionReducer
});

export default rootReducer;
