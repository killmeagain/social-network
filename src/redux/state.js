import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postMessage: '',
            posts: [
                { id: 1, post: "Привет!" },
                { id: 2, post: "Как дела?" },
            ],
        },
    
        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('state changed');
    },
    subcribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this.rerenderEntireTree();
    }
}

export default store;