import { FETCH_USERS, SET_USER, GET_USER } from '../actions/actionTypes';
import IUser from '../models/user.model';

const initialState = {
  items: [] as IUser[],
  item: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        items: action.payload
      };
    case SET_USER:
      return {
        ...state,
        item: action.payload
      };
    case GET_USER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
