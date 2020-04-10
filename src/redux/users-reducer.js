// Action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

// Action Creators
export const FOLLOW_AC = userId => ({type: FOLLOW, userId});
export const UNFOLLOW_AC = userId => ({type: UNFOLLOW, userId});
export const SET_USERS_AC = users => ({type: SET_USERS, users});

// Инициализационный стэйт
let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) return {...user, followed: true};
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) return {...user, followed: false};
                    return user;
                })
            };
        case SET_USERS: 
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
}

export default usersReducer;