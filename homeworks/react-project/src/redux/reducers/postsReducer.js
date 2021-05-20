import {SET_POSTS, SET_POSTS_LOADED, SET_POSTS_LOADING} from "../actionTypes";


const initialState = {
    posts: [],
    isLoading: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        }
        case SET_POSTS_LOADING: {
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


