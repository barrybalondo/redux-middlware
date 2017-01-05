import axios from 'axios';
import { 
  FETCH_USERS 
} from './types';

// hardcoding the data for now
export function fetchUsers() {

  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request
  };
}