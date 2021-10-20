import {contacts} from "./contacts-data";

const INITIAL_STATE = {
    contacts: [...contacts],
    contactsLoading: false,
    contactsError: null
};

const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectContacts = state => state.contacts;

export default contactReducer;
