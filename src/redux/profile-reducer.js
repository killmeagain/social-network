// Action types
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';

// Action Creators
export const ADD_POST_AC = () => ({type: ADD_POST});
export const UPDATE_NEW_POST_TEXT_AC = message => ({type: UPDATE_NEW_POST_TEXT, message: message});
export const SET_PROFILE_AC = profile => ({type: SET_PROFILE, profile});

// Инициализационный стэйт
let initialState = {
    postMessage: '',
    posts: [{
            id: 1,
            post: "Привет!"
        },
        {
            id: 2,
            post: "Как дела?"
        },
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: state.postMessage
            }

            return {
                ...state,
                postMessage: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postMessage: action.message
            }
        case SET_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;