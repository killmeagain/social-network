// Action types
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Action Creators
export const ADD_POST_AC = () => ({
    type: ADD_POST
});
export const UPDATE_NEW_POST_TEXT_AC = message => ({
    type: UPDATE_NEW_POST_TEXT,
    message: message
});

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
            state.postMessage = action.message;

            return {
                ...state,
                postMessage: action.message
            }
        default:
            return state;
    }
}

export default profileReducer;