import {
  FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_USERS:
     
      return [ ...state, ...action.payload.data ]  // spread operator -> existing set of users, along with new set of users
  }

  return state;
}