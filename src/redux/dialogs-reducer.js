const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {    
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };
        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;