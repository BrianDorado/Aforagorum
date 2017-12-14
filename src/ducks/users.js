import axios from 'axios'

const initialState = {
    userData:{

    }
}
const GET_USER ='GET_USER'
const GET_ALL_POST = 'GET_ALL_POST'

export function getUser(id){
    return {
        type: GET_USER,
        payload: axios.get('/user/'+ id)
        .then ( res => res.data )
    }
}

export default function reducer( state = initialState, action){
    switch(action.type){
        case GET_USER + '_FULFILLED':
        console.log('fulfilled', action.payload)
        return Object.assign({}, state, {userData: action.payload })
        default:
            return state
    }
}

export function getAllPost(){
    return{
        type: GET_ALL_POST,
        payload: axios.get('post')
        .then( res => res.data)
    } 
}