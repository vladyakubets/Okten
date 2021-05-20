import {
    SET_USERS,
    SET_USERS_LOADED,
    SET_USERS_LOADING
} from "../actionTypes";


const initialState = {
    users: [],
    isLoading: false
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        }
        case SET_USERS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_USERS_LOADED: {
            return {
                ...state,
                isLoading: false
            }
        }

        default:
            return state;
    }
}


