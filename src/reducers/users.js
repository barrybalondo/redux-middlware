import {
  FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_USERS:
      debugger;
      return [ ...state, ...action.payload ]  // spread operator -> existing set of users, along with new set of users
  }

  return state;
}