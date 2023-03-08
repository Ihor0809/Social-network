import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 14 },
                { id: 2, message: "It's my first post!", likesCount: 88 },
                { id: 3, message: 'done! Well', likesCount: 35 },
                { id: 4, message: 'Well done!', likesCount: 158 },
                { id: 5, message: '!enod lleW', likesCount: 6 },
                { id: 6, message: 'Ihor', likesCount: 812 }
            ],
            newPostText: 'Your post'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi.' },
                { id: 2, message: 'Where are you from?' },
                { id: 3, message: 'Well done!' },
                { id: 4, message: 'Well done!' },
                { id: 5, message: 'Well done!' },
                { id: 6, message: 'Well done!' }
            ],
            dialogs: [
                { id: 1, name: 'Ihor' },
                { id: 2, name: 'Ihor2' },
                { id: 3, name: 'Ihor3' },
                { id: 4, name: 'Ihor4' },
                { id: 5, name: 'Ihor5' },
                { id: 6, name: 'Ihor6' }
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;