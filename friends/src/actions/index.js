import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
  const getPromise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: getPromise
  };
};

export const addFriends = (addFriend) => {
  const addPromise = axios.post('http://localhost:5000/new-friend', {
    name: addFriend.name,
    age: addFriend.age,
    email: addFriend.email
  })
  return {
    type: ADD_FRIENDS,
    payload: addPromise
  };
};