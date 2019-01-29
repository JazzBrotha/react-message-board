import { FETCH_USERS, SET_USER, GET_USER } from '../actions/actionTypes';
import IUser from '../models/user.model';

const initialState = {
  items: [] as IUser[],
  item: {} as IUser
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS:
      const users: IUser[] = action.payload;
      return {
        ...state,
        items: users
      };
    case SET_USER:
      const newUser: IUser = action.payload;
      return {
        ...state,
        item: newUser
      };
    case GET_USER:
      const user: IUser = action.payload;
      return {
        ...state,
        item: user
      };
    default:
      return state;
  }
};
