import { FETCH_USERS, SET_USER, GET_USER } from '../actions/actionTypes';
import IUser from '../models/user.model';

export const fetchUsers = () => (dispatch: Function) => {
  fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    )
    .catch(err => console.log(err));
};

export const getUser = () => (dispatch: Function) => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser'));
  dispatch({
    payload: activeUser,
    type: GET_USER
  });
};

export const setUser = (user: IUser) => (dispatch: Function) => {
  localStorage.setItem('activeUser', JSON.stringify(user));
  dispatch({
    payload: user,
    type: SET_USER
  });
};
