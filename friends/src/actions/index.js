import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const REMOVE_FRIEND = 'REMOVE_FRIEND'

export const getFriends = () => {
  const getPromise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: getPromise
  };
};

export const addFriends = (addFriend) => {
  const addPromise = axios.post('http://localhost:5000/new-friend'
  , {
    name: addFriend.name,
    age: addFriend.age,
    email: addFriend.email
  })
  return {
    type: ADD_FRIENDS,
    payload: addPromise
  };
};

export const removeFriend = (removeFriend) => {
  const removePromise = axios.delete('http://localhost:5000/delete-friend')
  // , {
  //   name: removeFriend.name,
  //   age: removeFriend.age,
  //   email: removeFriend.email
  // })
  return {
    type: REMOVE_FRIEND,
    payload: removePromise
  };
};