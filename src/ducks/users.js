import axios from 'axios';

const initialState = {
  userData: {}
};
const GET_USER = 'GET_USER';
const GET_ALL_POST = 'GET_ALL_POST';
const UPDATE_INFO = 'UPDATE_INFO';

export function getUser(id) {
  return {
    type: GET_USER,
    payload: axios.get('/auth/me')
    // .then ( res => res.data
  };
}
export function updateInfo(host, value) {
  return {
    type: UPDATE_INFO,
    payload: value,
    host: host
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER + '_FULFILLED':
      // console.log('something', action.payload)
      return Object.assign({}, state, { userData: action.payload.data });
    case UPDATE_INFO:
      return Object.assign({}, state, { userData: { [action.host]: action.payload } });
    default:
      return state;
  }
}
