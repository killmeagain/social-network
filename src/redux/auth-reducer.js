// Action types
const SET_LOGIN = 'SET-LOGIN';

// Action Creators
export const SET_LOGIN_AC = (login, email, userId ) => ({type: SET_LOGIN, data: {login , email, userId}});

// Инициализационный стэйт
let initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;