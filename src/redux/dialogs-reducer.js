// Action types
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

// Action Creators
export const ADD_MESSAGE_AC = () => ({type: ADD_MESSAGE});
export const UPDATE_NEW_MESSAGE_TEXT_AC = message => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message});

// Инициализационный стэйт
let initialState = {
    messageText: '',
    messages: [
        { message: "Привет!" },
        { message: "Как дела?" },
    ],

    dialogs: [
        { id: 1, name: "Тимофей Судаков" },
        { id: 2, name: "Дмитрий Щеглов" },
        { id: 3, name: "Дмитрий Синенков" },
        { id: 4, name: "Артемий Багин" },
        { id: 5, name: "Иван Матюшенко" },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.messageText
            }

            return {
                ...state,
                messageText: '',
                messages: [...state.messages, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.message
            };
        default:
            return state;
    }
}

export default dialogsReducer;