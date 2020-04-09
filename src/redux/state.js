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
        switch (action.type) {
            case "ADD-POST":
                let newPost = {
                    id: this._state.profilePage.posts.length++,
                    post: this._state.profilePage.postMessage
                }
            
                this._state.profilePage.postMessage = '';
            
                this._state.profilePage.posts.push(newPost);
            
                this.rerenderEntireTree();
                break;
            case "UPDATE-NEW-POST-TEXT":
                this._state.profilePage.postMessage = action.message;
    
                this.rerenderEntireTree();
                break;
            default:
                return;
        }
    }
}

export default store;