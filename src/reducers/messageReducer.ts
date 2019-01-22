import { FETCH_MESSAGES, NEW_MESSAGE, UPDATE_MESSAGE, REMOVE_MESSAGE } from '../actions/types';
import IMessage from '../models/message.model';

const initialState = {
    items: [] as IMessage[],
    item: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_MESSAGES:
        return {
            ...state
        };
        case NEW_MESSAGE:
        const newMessage: IMessage = action.payload;
        return {
            ...state,
            items: [...state.items, newMessage]
        };
        case UPDATE_MESSAGE:
        return {
            ...state
        };
        case REMOVE_MESSAGE:
        const messageId: number = action.payload;
        const items: IMessage[] = state.items.filter((message: IMessage) => message.id !== messageId);
        return {
            ...state,
            items
        };
        default:
        return state;
    }
};