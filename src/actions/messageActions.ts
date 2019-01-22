import { FETCH_MESSAGES, NEW_MESSAGE, UPDATE_MESSAGE, REMOVE_MESSAGE } from './types';
import IMessage from '../models/message.model';

export const fetchMessages = () => (dispatch: Function)  => {
    dispatch({
        type: FETCH_MESSAGES
    });
};

export const newMessage = (message: IMessage) => (dispatch: Function) =>{
    dispatch({
        payload: message,
        type: NEW_MESSAGE
    });
};

export const updateMessage = (id: number) => (dispatch: Function)  => {
    dispatch({
        payload: id,
        type: UPDATE_MESSAGE
    });
};

export const removeMessage = (id: number) => (dispatch: Function) => {
    dispatch({
        payload: id,
        type: REMOVE_MESSAGE
    });
};