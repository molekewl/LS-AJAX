import { combineReducers } from 'redux';
import { GET_FRIENDS } from '../actions';
import { ADD_FRIENDS } from '../actions';
import { REMOVE_FRIEND } from '../actions';

const friendReducer = (friends = [], action) => {
  switch(action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case ADD_FRIENDS:
      return action.payload.data;
    case REMOVE_FRIEND:
      return action.payload.data;
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendReducer
});

export default rootReducer;