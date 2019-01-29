import {
  FETCH_MESSAGES,
  NEW_MESSAGE,
  UPDATE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/actionTypes';
import IMessage from '../models/message.model';

export const fetchMessages = () => (dispatch: Function) => {
  fetch('http://localhost:3000/messages')
    .then(res => res.json())
    .then(messages =>
      dispatch({
        type: FETCH_MESSAGES,
        payload: messages
      })
    )
    .catch(err => console.error(err));
};

export const newMessage = (message: IMessage) => (dispatch: Function) => {
  fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(message)
  })
    .then(res => res.json())
    .then(message =>
      dispatch({
        payload: message,
        type: NEW_MESSAGE
      })
    )
    .catch(err => console.error(err));
};

export const updateMessage = (message: IMessage) => (dispatch: Function) => {
  fetch(`http://localhost:3000/messages/${message.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(message)
  })
    .then(res => {
      dispatch({
        payload: message,
        type: UPDATE_MESSAGE
      });
    })
    .catch(err => console.error(err));
};

export const removeMessage = (id: number) => (dispatch: Function) => {
  fetch(`http://localhost:3000/messages/${id}`, {
    method: 'DELETE'
  })
    .then(res =>
      dispatch({
        payload: id,
        type: REMOVE_MESSAGE
      })
    )
    .catch(err => console.error(err));
};
