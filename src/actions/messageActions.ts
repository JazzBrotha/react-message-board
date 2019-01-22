import { FETCH_MESSAGES, NEW_MESSAGE, UPDATE_MESSAGE, REMOVE_MESSAGE } from './types';
import IMessage from '../models/messsage.model';

export const fetchMessags = () => (dispatch: Function)  => {
    dispatch({
        type: FETCH_MESSAGES
    });
};

export const createMessage = (message: IMessage) => (dispatch: Function) =>{
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
}