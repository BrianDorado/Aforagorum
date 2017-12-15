import axios from 'axios'

const initialState = {
    userData:{

    }
}
const GET_USER ='GET_USER'
const GET_ALL_POST = 'GET_ALL_POST'
const UPDATE_INFO = 'UPDATE_IINFO'

export function getUser(id){
    return {
        type: GET_USER,
        payload: axios.get('/user/'+ id)
        .then ( res => res.data )
    }
}
export function updateInfo(host, value){
            return {
                type: UPDATE_INFO,
                payload: value,
                host: host
            }
        }

export default function reducer( state = initialState, action){
    switch(action.type){
        case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {userData: action.payload })
        case UPDATE_INFO:
        return Object.assign({},state,{userData: {[action.host]:action.payload}})
        default:
            return state
    }
}

//index.js:2177 Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components