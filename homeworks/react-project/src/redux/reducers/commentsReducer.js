import {SET_COMMENTS, SET_COMMENTS_LOADING, SET_POSTS_LOADED} from "../actionTypes";


const initialState = {
    comments: [],
    isLoading: false
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        }
        case SET_COMMENTS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_POSTS_LOADED: {
            return {
                ...state,
                isLoading: false
            }
        }

        default:
            return state;
    }
}


