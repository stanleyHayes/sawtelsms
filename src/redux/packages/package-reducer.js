import {packages} from "./packages-data";

const INITIAL_STATE = {
    packages: [...packages],
    packagesLoading: false,
    packagesError: null
};

const packageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const selectPackages = state => state.packages;

export default packageReducer;
