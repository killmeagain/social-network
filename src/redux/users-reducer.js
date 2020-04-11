// Action types
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PAGINATION_COUNTER_INCREMENT = 'SET-PAGINATION-INCREMENT';
const SET_PAGINATION_COUNTER_DECREMENT = 'SET-PAGINATION-DECREMENT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

// Action Creators
export const FOLLOW_AC = userId => ({type: FOLLOW, userId});
export const UNFOLLOW_AC = userId => ({type: UNFOLLOW, userId});
export const SET_USERS_AC = users => ({type: SET_USERS, users});
export const SET_USERS_COUNT_AC = usersCount => ({type: SET_USERS_COUNT, usersCount});
export const SET_CURRENT_PAGE_AC = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const SET_PAGINATION_COUNTER_INCREMENT_AC = () => ({type: SET_PAGINATION_COUNTER_INCREMENT});
export const SET_PAGINATION_COUNTER_DECREMENTT_AC = () => ({type: SET_PAGINATION_COUNTER_DECREMENT});
export const SET_IS_FETCHING_AC = isFetching => ({type: SET_IS_FETCHING, isFetching});

// Инициализационный стэйт
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    paginationCounter: 0,
    isFetching: false
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
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_PAGINATION_COUNTER_INCREMENT:
            return {
                ...state,
                paginationCounter: state.paginationCounter + 4
            }
        case SET_PAGINATION_COUNTER_DECREMENT:
            return {
                ...state,
                paginationCounter: state.paginationCounter - 4
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export default usersReducer;