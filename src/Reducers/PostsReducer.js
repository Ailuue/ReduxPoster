import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../Actions';
import _ from 'lodash';

export default function(state = {}, action) {
    return action.type === FETCH_POSTS ? 
    _.mapKeys(action.payload.data, 'id') :
    action.type === FETCH_POST ?
    { ...state, [action.payload.data.id]: action.payload.data} :
    action.type === DELETE_POST ? 
    _.omit(state, action.payload) :
    state;
}