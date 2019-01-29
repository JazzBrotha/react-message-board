import {
  FETCH_MESSAGES,
  NEW_MESSAGE,
  UPDATE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/actionTypes';
import IMessage from '../models/message.model';

const initialState = {
  items: [] as IMessage[],
  item: {} as IMessage
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      const messages: IMessage[] = action.payload;
      return {
        ...state,
        items: messages
      };
    case NEW_MESSAGE:
      const newMessage: IMessage = action.payload;
      return {
        ...state,
        items: [...state.items, newMessage]
      };
    case UPDATE_MESSAGE:
      const updatedMessage: IMessage = action.payload;
      const updatedMessages: IMessage[] = state.items.map(
        (stateMessage: IMessage) =>
          stateMessage.id === updatedMessage.id
            ? { ...stateMessage, message: updatedMessage.message }
            : stateMessage
      );
      return {
        ...state,
        items: updatedMessages
      };
    case REMOVE_MESSAGE:
      const messageId: number = action.payload;
      const items: IMessage[] = state.items.filter(
        (message: IMessage) => message.id !== messageId
      );
      return {
        ...state,
        items
      };
    default:
      return state;
  }
};
